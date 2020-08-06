import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrintGenreItem extends Component {
  clickDeleteGenre = (event) => {
    // dispatch to a saga for deleting genre from database
    this.props.dispatch({
      type: 'DELETE_PRINT_GENRE',
      payload: {
        printGenreId: this.props.item.id,
        printID: this.props.item.prints_id,
      },
    });
  };

  render() {
    const { item } = this.props;
    return (
      <li>
        {item.name} <button onClick={this.clickDeleteGenre}>Delete</button>
      </li>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default connect(mapStateToProps)(PrintGenreItem);
