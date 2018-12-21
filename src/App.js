import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { getReleasesFromUser } from './api/discogsAPI';
import Header from './components/Header/Header';
import DroppableReleasesList from './components/ReleasesList/DroppableReleasesList';
import Shelf from './components/Shelf/Shelf';
import CreateShelfButton from './components/CreateShelfButton/CreateShelfButton';
import { didSomethingMove, move, reorderList, transformReleaseData } from './utils';
import styles from './App.module.scss';

class App extends Component {
  state = {
    rack: [],
    shelves: {},
  };

  async componentDidMount() {
    const { pagination, releases } = await getReleasesFromUser();
    const rack = releases.map(release => transformReleaseData(release));
    this.setState({ rack });
  }

  createShelf = () => {
    const numberOfShelves = Object.keys(this.state.shelves).length;

    // Randomly generated ID devoid of conflicts
    // Source: https://gist.github.com/gordonbrander/2230317
    const id =
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(2, 5);

    this.setState(prevState => ({
      shelves: {
        ...prevState.shelves,
        [id]: {
          name: `New Shelf ${numberOfShelves + 1}`,
          releases: [],
        },
      },
    }));
  };

  /**
   * @description Remove shelf and contained release items to the beginning of the rack
   * @param {string} shelfId
   */
  deleteShelf = shelfId => {
    const { rack, shelves } = this.state;

    // prevent re-render of rack if no items on shelf
    if (shelves[shelfId].releases.length === 0) {
      this.setState(prevState => {
        const updatedShelves = prevState.shelves;
        delete updatedShelves[shelfId];

        return { shelves: updatedShelves };
      });
      return;
    }

    const updatedRack = [...shelves[shelfId].releases, ...rack];

    this.setState(prevState => {
      const updatedShelves = prevState.shelves;
      delete updatedShelves[shelfId];

      return {
        rack: updatedRack,
        shelves: updatedShelves,
      };
    });
  };

  /**
   * @description Series of conditional setStates to keep order within every draggable list
   * @param {object} result
   * @param {{ droppableId: string, index: number }} result.source
   * @param {{ droppableId: string, index: number }} result.destination
   */
  onDragEnd = result => {
    const { rack, shelves } = this.state;
    const { source, destination } = result;

    if (didSomethingMove(source, destination)) {
      const droppableRackID = 'initial-rack';
      const isFromRack = source.droppableId === droppableRackID;

      // Moved within same droppable
      if (destination.droppableId === source.droppableId) {
        if (isFromRack) {
          this.setState({ rack: reorderList(rack, source.index, destination.index) });
          return;
        }

        // isFromShelf
        this.setState(prevState => ({
          shelves: {
            ...prevState.shelves,
            [source.droppableId]: {
              ...prevState.shelves[source.droppableId],
              releases: reorderList(
                shelves[source.droppableId].releases,
                source.index,
                destination.index
              ),
            },
          },
        }));
        return;
      }

      // Moved from the rack to a shelf
      if (isFromRack) {
        const [updatedRackItems, updatedShelfItems] = move(
          rack,
          shelves[destination.droppableId].releases,
          source,
          destination
        );

        this.setState(prevState => ({
          rack: updatedRackItems,
          shelves: {
            ...prevState.shelves,
            [destination.droppableId]: {
              ...prevState.shelves[destination.droppableId],
              releases: updatedShelfItems,
            },
          },
        }));
        return;
      }

      // Moved from a shelf to the rack
      if (destination.droppableId === droppableRackID) {
        const [updatedShelfItems, updatedRackItems] = move(
          shelves[source.droppableId].releases,
          rack,
          source,
          destination
        );

        this.setState(prevState => ({
          rack: updatedRackItems,
          shelves: {
            ...prevState.shelves,
            [source.droppableId]: {
              ...prevState.shelves[source.droppableId],
              releases: updatedShelfItems,
            },
          },
        }));
        return;
      }

      // Moved between shelves
      const [updatedSourceShelfItems, updatedDestinationShelfItems] = move(
        shelves[source.droppableId].releases,
        shelves[destination.droppableId].releases,
        source,
        destination
      );

      this.setState(prevState => ({
        shelves: {
          ...prevState.shelves,
          [source.droppableId]: {
            ...prevState.shelves[source.droppableId],
            releases: updatedSourceShelfItems,
          },
          [destination.droppableId]: {
            ...prevState.shelves[destination.droppableId],
            releases: updatedDestinationShelfItems,
          },
        },
      }));
      return;
    }
  };

  render() {
    const { state } = this;

    return (
      <main>
        <Header />

        <DragDropContext onDragEnd={this.onDragEnd}>
          <DroppableReleasesList releases={state.rack} droppableId="initial-rack" />

          <div className={styles.container}>
            {Object.keys(state.shelves).map(shelfID => {
              const { name, releases } = state.shelves[shelfID];

              return (
                <Shelf
                  name={name}
                  releases={releases}
                  id={shelfID}
                  key={shelfID}
                  deleteShelf={this.deleteShelf}
                />
              );
            })}

            <CreateShelfButton createShelf={this.createShelf} />
          </div>
        </DragDropContext>
      </main>
    );
  }
}

export default App;
