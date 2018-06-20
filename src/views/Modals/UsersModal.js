import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ModalFooter,
  ModalHeader,
  Row,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  Col,
  Label,
  UncontrolledAlert,
  Input
} from "reactstrap";
import MDSpinner from "react-md-spinner";


class UsersModal extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  state = {
      hasError: '',
      isProcessing: false
  }

  onSubmit = async (e) => {
      e.preventDefault();
      e.stopPropagation();

      let formData = new FormData(e.currentTarget);

      let data = {};

      formData.forEach(function(value, key) {
        data[key] = value;
      });

      await this.setState({
          isProcessing: true,
          hasError: ''
      });

      const hasError = await this.props.onSubmit(data);

      await this.setState({
          isProcessing: false,
          hasError: hasError
      });

      if (!hasError) {
          this.props.onClose();
      }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label htmlFor="motivo">Motivo</Label>
            <Input
              type="textarea"
              style={{ resize: "none" }}
              name="motivo"
              id="motivo"
              rows="5"
              placeholder="Motivo"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="dni">DNI</Label>
            <Input
              type="text"
              name="dni"
              id="dni"
              placeholder="00000000"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="ccmonth">Sexo</Label>
            <Input type="select" name="sexo" required={true} id="sexo">
              <option value="INVALID" disabled={true} selected={true}>Sexo</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </Input>
          </FormGroup>
          {this.state.hasError
              ?
              <UncontrolledAlert color="danger">
              {this.state.hasError}
              </UncontrolledAlert>
              :
              null
          }
        <FormGroup className="text-right">
          <Button
            type="submit"
            disabled={this.state.isProcessing}
            color="primary"
            className="btn-square mr-2"
          >
          {this.state.isProcessing
              ?
              <MDSpinner size={15} singleColor='#fff' className='mr-1'/>
              :
              null
          }
            Add
          </Button>
          <Button
            color="secondary"
            disabled={this.state.isProcessing}
            className="btn-square"
            onClick={this.props.onClose}
          >
            Cancel
          </Button>
        </FormGroup>
        </form>
      </div>
    );
  }
}

export default UsersModal;
