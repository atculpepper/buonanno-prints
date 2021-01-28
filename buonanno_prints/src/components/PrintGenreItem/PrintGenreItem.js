import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui components
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
        {item.name}{' '}
        <IconButton>
          <DeleteIcon onClick={this.clickDeleteGenre} />
        </IconButton>
      </li>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default connect(mapStateToProps)(PrintGenreItem);
