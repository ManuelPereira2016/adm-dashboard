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
  InputGroupText,
  Row
} from "reactstrap";
import MDSpinner from "react-md-spinner";

class CreateUser extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    formRef: PropTypes.object.isRequired,
    services: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isProcessing: PropTypes.bool.isRequired
  };

  renderLoading() {
    if (this.props.isLoading) {
      return (
        <div className="text-center mt-2">
          <MDSpinner size={100} color="#e91e63" />
        </div>
      );
    }
  }

  renderForm() {
    return (
      <form ref={this.props.formRef}>
        <h1>Dar de alta</h1>
        <p className="text-muted">Crear nuevo usuario</p>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-user" />
            </InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="nombre" placeholder="Nombres" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-user" />
            </InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="apellidos" placeholder="Apellidos" />
        </InputGroup>
        <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="icon-user" />
          </InputGroupText>
        </InputGroupAddon>
          <Input
            type="select"
            name="id_servicio"
            id="SelectLm"
          >
            <option value="0" disabled={true} selected={true}>Servicio</option>
            {this.props.services.map((servicio, id) => {
                return (
                    <option key={`opt_${id}`} value={servicio.id_servicio}>{servicio.desc_servicio}</option>
                );
            })}
          </Input>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <Input type="phone" name="telefono" placeholder="Telefono" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="empresa" placeholder="Empresa" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="email" placeholder="Email" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-lock" />
            </InputGroupText>
          </InputGroupAddon>
          <Input type="password" name="password" placeholder="Password" />
        </InputGroup>
        <InputGroup className="mb-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-lock" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="password"
            name="password2"
            placeholder="Repeat password"
          />
        </InputGroup>
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
          Dar de alta
        </Button>
        <Button
          color="danger"
          disabled={this.props.isProcessing}
          block
          onClick={this.props.onCancel}
        >
          Cancel
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
                <CardBody className="p-4">
                    {this.renderLoading()}
                    {!this.props.isLoading ? this.renderForm() : null}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateUser;
