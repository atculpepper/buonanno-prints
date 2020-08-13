import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

class AddImage extends Component {
  handleFinishedUpload = (info) => {
    console.log('File uploaded with filename', info.filename);
    console.log('Access it on s3 at', info.fileUrl);
    const imageUrl = info.fileUrl;
  };
  render() {
    const uploadOptions = {
      server: 'http://localhost:5000',
      signingUrlQueryParams: { uploadType: 'avatar' },
    };

    const s3Url = 'https://renaissance-prints.s3.amazonaws.com';

    return (
      <div>
        <h3>Add Image</h3>
        <DropzoneS3Uploader
          onFinish={this.handleFinishedUpload}
          s3Url={s3Url}
          maxSize={1024 * 1024 * 5}
          upload={uploadOptions}
        />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AddImage);
