import React from 'react'
import PropTypes from 'prop-types';
import styles from './Shelf.module.scss';

class Shelf extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      primaryArtist: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })),
  };

  render() {
    const { props } = this;

    return (
      <section className={styles.Shelf}>
        <h2>Shelf</h2>
        <div className={styles.itemsContainer}>
          {props.items.map(({ title, primaryArtist, year, id }) => (
              <article key={id}>
                <p>{title} by {primaryArtist} in {year}</p>
              </article>
            )
          )}
        </div>
      </section>
    );
  }
}

export default Shelf

