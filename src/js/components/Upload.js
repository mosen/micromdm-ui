import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

import './Upload.scss';

class Upload extends Component {

  static propTypes = {
    onChangeFiles: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragOver (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

  handleDrop (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.props.onChangeFiles(evt);
  }

  render () {
    const {
      onChangeFiles
    } = this.props;

    const canUseFileAPI = window.File && window.FileReader && window.FileList && window.Blob;

    return (
      <form className='Upload'>
        <input type='file' id='upload' name='uploads[]' multiple onChange={onChangeFiles} />
        <div className='DropTarget' onDragOver={this.handleDragOver} onDrop={this.handleDrop}>Drop your .mobileConfig file here</div>
      </form>
    );
  }

}

export default Upload;
