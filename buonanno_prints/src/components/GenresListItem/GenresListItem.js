import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui components
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
        {item.name}{' '}
        <IconButton>
          <DeleteIcon onClick={this.clickRemove} />
        </IconButton>
      </li>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(GenresListItem);
