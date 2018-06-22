import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Container,
  Input,
  InputGroup,
  FormGroup,
  Label,
  Form,
  FormText,
  InputGroupAddon,
  InputGroupText,
  Row,
  UncontrolledAlert
} from "reactstrap";
import MDSpinner from "react-md-spinner";

class UserRecovery extends Component {
  static propTypes = {
    onRecover: PropTypes.func.isRequired,
    message: PropTypes.string,
    isProcessing: PropTypes.bool.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    this.props.onRecover(e.target);
  };

  render() {
    return (
      <div className="app ">
        <div className="app-body flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <Card>
                  <Form onSubmit={this.onSubmit}>
                    <div className="pb-3 pt-3 pl-3 pr-3 text-center">
                      <strong className="pb-3 lead font-weight-bold">
                        Ingrese su direccion de correo.
                      </strong>
                    </div>
                    <CardBody className="pb-0">
                      <FormGroup className="mb-0">
                        <Row>
                        <Col xs="12" sm="1" lg="1" className="my-auto">
                          <Label className="mb-0" htmlFor="email">Email</Label>
                        </Col>
                        <Col xs="12" sm="11" lg="11">
                          <Input
                            type="email"
                            id="email"
                            required={true}
                            name="email"
                            placeholder="Introduce tu direccion de correo.."
                          />
                        </Col>
                        </Row>
                      </FormGroup>
                      {this.props.message ? (
                        <UncontrolledAlert color="info">
                          {this.props.message}
                        </UncontrolledAlert>
                      ) : null}
                    </CardBody>
                    <div className="pb-3 pr-3 pl-3 pt-3 text-center">
                    <FormText className="help-block pb-1">
                    Usted recibira un correo con instrucciones.
                    </FormText>
                      <Button className="btn-square" type="submit" size="sm" color="primary">
                        {this.props.isProcessing ? (
                          <MDSpinner
                            size={15}
                            singleColor="#fff"
                            className="mr-1"
                          />
                        ) : null}
                        RECUPERAR
                      </Button>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default UserRecovery;
