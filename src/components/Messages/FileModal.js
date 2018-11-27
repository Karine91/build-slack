import React, { Component } from "react";
import { Modal, Input, Button, Icon } from "semantic-ui-react";

class FileModal extends Component {
  render() {
    const { modal, closeModal } = this.props;

    return <Modal basic open={modal} onClose />;
  }
}

export default FileModal;
