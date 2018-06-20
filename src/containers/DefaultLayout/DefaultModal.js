import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { closeModal } from "../../redux/modules/actionsCreators/modal";

class DefaultModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    modal: PropTypes.object.isRequired
  };

  closeModal = () => {
    this.props.dispatch(closeModal());
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Modal
          keyboard={false}
          backdrop="static"
          isOpen={this.props.isOpen}
          toggle={this.closeModal}
          className="modal-success"
        >
          <ModalHeader toggle={this.closeModal}>
            {this.props.modal.title}
          </ModalHeader>
          <ModalBody>{this.props.modal.component}</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect()(DefaultModal);
