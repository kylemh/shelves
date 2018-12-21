import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { getReleasesFromUser } from './api/discogsAPI';
import Header from './components/Header/Header';
import DroppableCollectionList from './components/CollectionList/DroppableCollectionList';
import Shelf from './components/Shelf/Shelf';
import CreateShelfButton from './components/CreateShelfButton/CreateShelfButton';
import { didSomethingMove, move, reorderList, transformReleaseData } from './utils';
import styles from './App.module.scss';

class App extends Component {
  state = {
    collection: [],
    shelves: {},
  };

  async componentDidMount() {
    const { pagination, releases } = await getReleasesFromUser();
    const parsedCollection = releases.map(release => transformReleaseData(release));
    this.setState({ collection: parsedCollection });
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
   */
  deleteShelf = shelfId => {
    const { collection, shelves } = this.state;

    const updatedCollectionItems = [...shelves[shelfId].releases, ...collection];

    this.setState(prevState => {
      const updatedShelves = prevState.shelves;
      delete updatedShelves[shelfId];

      return {
        collection: updatedCollectionItems,
        shelves: updatedShelves,
      };
    });
  };

  onDragEnd = result => {
    const { collection, shelves } = this.state;
    const { source, destination } = result;

    if (didSomethingMove(source, destination)) {
      const initialIndex = source.index;
      const targetIndex = destination.index;
      const droppableRackID = 'initial-rack';
      const isFromRack = source.droppableId === droppableRackID;

      // Moved within same droppable
      if (destination.droppableId === source.droppableId) {
        if (isFromRack) {
          const newState = reorderList(collection, initialIndex, targetIndex);
          this.setState({ collection: newState });
          return;
        }

        const reorderedShelfItems = reorderList(
          shelves[source.droppableId].releases,
          initialIndex,
          targetIndex
        );

        this.setState(prevState => ({
          shelves: {
            ...prevState.shelves,
            [source.droppableId]: {
              ...prevState.shelves[source.droppableId],
              releases: reorderedShelfItems,
            },
          },
        }));
        return;
      }

      // Moved from the rack to a shelf
      if (isFromRack) {
        const [updatedCollectionItems, updatedShelfItems] = move(
          collection,
          shelves[destination.droppableId].releases,
          source,
          destination
        );

        this.setState(prevState => ({
          collection: updatedCollectionItems,
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
        const [updatedShelfItems, updatedCollectionItems] = move(
          shelves[source.droppableId].releases,
          collection,
          source,
          destination
        );

        this.setState(prevState => ({
          collection: updatedCollectionItems,
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
    }

    // Moved between shelves
    const [updatedSourceShelf, updatedDestinationShelf] = move(
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
          releases: updatedSourceShelf,
        },
        [destination.droppableId]: {
          ...prevState.shelves[destination.droppableId],
          releases: updatedDestinationShelf,
        },
      },
    }));
    return;
  };

  render() {
    const { state } = this;

    return (
      <main>
        <Header />

        <DragDropContext onDragEnd={this.onDragEnd}>
          <DroppableCollectionList collection={state.collection} droppableId="initial-rack" />

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
