import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrintGenreItem extends Component {
  clickDeleteGenre = (event) => {
    // dispatch to a saga for deleting genre from database
    this.props.dispatch({
      type: 'DELETE_PRINT_GENRE',
      payload: {
        printGenreId: this.props.item.id,
        printId: this.props.item.print_id,
      },
    });
    console.log(this.props.item.print_id);
    console.log(this.props.item.id);
    console.log(this.props.item);
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
