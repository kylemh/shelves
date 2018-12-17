import React, { Component } from 'react';
import { getReleasesFromUser } from './api/discogsAPI';
import Header from './components/Header/Header';
import Rack from './components/Rack/Rack';
import styles from './App.module.scss';

class App extends Component {
  state = {
    collections: [],
  };

  async componentDidMount() {
    const { pagination, releases } = await getReleasesFromUser();
    console.log('pagination:\n', pagination);
    console.log('collections:\n', releases);
    this.setState({ collection: releases });
  }

  render() {
    const { state } = this;

    return (
      <main className={styles.App}>
        <Header />
        <Rack collections={state.collections} />
      </main>
    );
  }
}

export default App;
