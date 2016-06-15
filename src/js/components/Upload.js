import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import RaisedButton from 'material-ui/RaisedButton';

import './Upload.scss';

class Upload extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    dragOver: PropTypes.func.isRequired,
    dragLeave: PropTypes.func.isRequired,
    drop: PropTypes.func.isRequired,
    upload: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    files: PropTypes.object.isRequired,
    uploadOnDrop: PropTypes.bool
  };

  static defaultProps = {
    uploadOnDrop: true
  };

  constructor (props) {
    super(props);

    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragOver (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
    this.props.dragOver(this.props.id);
  }

  handleDragLeave (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.props.dragLeave(this.props.id);
  }

  handleDrop (evt) {
    evt.stopPropagation();
    evt.preventDefault();

    const files = evt.dataTransfer.files;

    if (this.props.uploadOnDrop) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        this.props.upload(file);
      }
    }

    this.props.drop(this.props.id, files);
  }

  render () {
    const {
      isOver,
      files
    } = this.props;

    const canUseFileAPI = window.File && window.FileReader && window.FileList && window.Blob;
    const dropTargetClassnames = classnames({
      'DropTarget': true,
      'DropTargetOver': isOver
    });

    let fileList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fileList.push(<li key={file.name}>{file.name}</li>);
    }

    return (
      <form className='Upload'>
        <div
          className={dropTargetClassnames}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
          onDragLeave={this.handleDragLeave}
        >Drop your .mobileConfig file(s) here
        </div>
        <ul>
          {fileList}
        </ul>
      </form>
    );
  }

}

export default Upload;
