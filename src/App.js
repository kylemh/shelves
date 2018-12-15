import React, { Component } from 'react';
import { getCollectionsFromUser } from './api/discogsAPI';
import Header from './components/Header/Header';
import styles from './App.module.scss';

class App extends Component {
  state = {
    collections: [],
  };

  async componentDidMount() {
    const { pagination, releases } = await getCollectionsFromUser();
    console.log('pagination:\n', pagination);
    console.log('collections:\n', releases);
    this.setState({ collections: releases });
  }

  render() {
    return (
      <main className={styles.App}>
        <Header />
      </main>
    );
  }
}

export default App;
