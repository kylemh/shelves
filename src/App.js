import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { getReleasesFromUser } from './api/discogsAPI';
import Header from './components/Header/Header';
import DroppableCollectionList from './components/CollectionList/DroppableCollectionList';
import Shelf from './components/Shelf/Shelf';
import CreateShelfButton from './components/CreateShelfButton/CreateShelfButton';
import { reorderList, move, transformReleaseData } from './utils';
import styles from './App.module.scss';

class App extends Component {
  state = {
    collection: [],
    shelves: [],
  };

  async componentDidMount() {
    const { pagination, releases } = await getReleasesFromUser();
    const parsedCollection = releases.map(release => transformReleaseData(release));
    this.setState({ collection: parsedCollection });
  }

  createShelf = () => {
    const numberOfShelves = this.state.shelves.length;

    // Randomly generated ID devoid of conflicts
    // Source: https://gist.github.com/gordonbrander/2230317
    const id =
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(2, 5);

    this.setState(prevState => ({
      shelves: [...prevState.shelves, { name: `New Shelf ${numberOfShelves + 1}`, id }],
    }));
  };

  onDragEnd = result => {
    const { collection, shelves } = this.state;
    const { destination, source, draggableId } = result;

    // Dropped outside of a droppable location
    if (!destination) {
      return;
    }

    const movedWithinSameCollectionList = destination.droppableId === source.droppableId

    // Dnd an item onto it's original location
    if (movedWithinSameCollectionList && destination.index === source.index) {
      return;
    }

    const fromRack = source.droppableId === 'initial-rack';
    // const toRack = destination.droppableId === 'initial-rack';

    if (movedWithinSameCollectionList) {
      const initialIndex = source.index;
      const targetIndex = destination.index;

      if (fromRack) {
        const newState = reorderList(collection, initialIndex, targetIndex);
        this.setState({ collection: newState });
      }
    }



  };

  render() {
    const { state } = this;

    return (
      <main>
        <Header />

        <DragDropContext onDragEnd={this.onDragEnd}>
          <DroppableCollectionList collection={state.collection} droppableId="initial-rack" />

          <div className={styles.container}>
            {state.shelves.map(({ id, name, releases }) => (
              <Shelf name={name} releases={releases} id={id} key={id} />
            ))}

            <CreateShelfButton createShelf={this.createShelf} />
          </div>
        </DragDropContext>
      </main>
    );
  }
}

export default App;
