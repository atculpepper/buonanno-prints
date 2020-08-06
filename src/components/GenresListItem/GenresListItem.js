import React, { Component } from 'react';
import { connect } from 'react-redux';

class GenresListItem extends Component {
  clickRemove = (event) => {
    this.props.dispatch({
      type: 'DELETE_GENRE',
      payload: {
        genreId: this.props.item.id,
      },
    });
  };

  render() {
    const { item } = this.props;

    return (
      <li>
        {item.name} <button onClick={this.clickRemove}>X</button>
      </li>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(GenresListItem);
