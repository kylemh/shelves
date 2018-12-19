import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { getReleasesFromUser } from './api/discogsAPI';
import Header from './components/Header/Header';
import DroppableCollectionList from './components/CollectionList/DroppableCollectionList';
import Shelf from './components/Shelf/Shelf';
import CreateShelfButton from './components/CreateShelfButton/CreateShelfButton';
import { transformReleaseData } from './utils';
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
    // TODO: Re-order column
    // console.log('onDragEnd', result);
  };

  render() {
    const { state } = this;

    return (
      <main>
        <Header />

        <DragDropContext onDragEnd={this.onDragEnd}>
          <DroppableCollectionList collection={state.collection} droppableId="initial-rack" />
        </DragDropContext>

        <div className={styles.container}>
          {state.shelves.map(shelf => (
            <Shelf {...shelf} key={shelf.id} />
          ))}
          <CreateShelfButton createShelf={this.createShelf} />
        </div>
      </main>
    );
  }
}

export default App;
