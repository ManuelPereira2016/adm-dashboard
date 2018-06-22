import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  UncontrolledAlert,
  InputGroupText,
  Row
} from "reactstrap";
import MDSpinner from "react-md-spinner";

class PasswordReset extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formRef: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    isProcessing: PropTypes.bool.isRequired
  };

  renderForm() {
    return (
      <form ref={this.props.formRef}>
        <h3>CAMBIO DE CONTRASEÑA</h3>
        <p className="text-muted">
          Por favor introduzca 2 veces la nueva contraseña.
        </p>
        <div>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-lock" />
              </InputGroupText>
            </InputGroupAddon>
            <Input type="password" name="password" required={true} placeholder="Password" />
          </InputGroup>
          <InputGroup className="mb-4">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-lock" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="password"
              required={true}
              name="confirm"
              placeholder="Repeat password"
            />
          </InputGroup>
          {this.props.message ? (
            <UncontrolledAlert color="info">
              {this.props.message}
            </UncontrolledAlert>
          ) : null}
        </div>
        <Button
          color="primary"
          className="px-4"
          block
          disabled={this.props.isProcessing}
          onClick={this.props.onSubmit}
        >
          {this.props.isProcessing ? (
            <MDSpinner size={15} singleColor="#fff" className="mr-1" />
          ) : null}
          Cambiar contraseña
        </Button>
      </form>
    );
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">{this.renderForm()}</CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PasswordReset;
