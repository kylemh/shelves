import React, { Component } from 'react';
import { getReleasesFromUser } from './api/discogsAPI';
import Header from './components/Header/Header';
import Rack from './components/Rack/Rack';
import transformReleaseData from './utils/transformReleaseData';
import styles from './App.module.scss';

class App extends Component {
  state = {
    collection: [],
  };

  async componentDidMount() {
    const { pagination, releases } = await getReleasesFromUser();
    const parsedCollection = releases.map(release => transformReleaseData(release));
    this.setState({ collection: parsedCollection });
  }

  render() {
    const { state } = this;

    return (
      <main>
        <Header />
        <Rack collection={state.collection} />
        <div className={styles.container}>
          <button style={{ width: '95vw', height: '200px' }}>Hello</button>
        </div>
      </main>
    );
  }
}

export default App;
