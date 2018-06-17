import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  UncontrolledAlert,
  CardBody,
  CardGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import MDSpinner from 'react-md-spinner';

class Login extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string.isRequired,
    isProcessing: PropTypes.bool.isRequired
  };

  state = {
      email: '',
      password: ''
  }

  onEmailChange = (e) => {
      this.setState({
          email: e.target.value
      });
  }

  onPassChange = (e) => {
      this.setState({
          password: e.target.value
      });
  }

  onSubmit = () => {
      this.props.onSubmit({ ...this.state });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card>
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Iniciar sesion</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Direccion de correo" value={this.state.email} disabled={this.props.isProcessing} onChange={this.onEmailChange}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Contrasena" disabled={this.props.isProcessing} value={this.state.password} onChange={this.onPassChange}/>
                    </InputGroup>
                    {this.props.errorMessage
                        ?
                        <UncontrolledAlert color="danger">
                        {this.props.errorMessage}
                        </UncontrolledAlert>
                        :
                        null
                    }
                    <Row>
                      <Col xs="6" className="text-left">
                        <Button color="link" className="px-0">
                          Olvidaste tu contrasena?
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="primary" className="px-4" disabled={this.props.isProcessing} onClick={this.onSubmit}>
                            {this.props.isProcessing
                                ?
                                <MDSpinner size={15} singleColor='#fff' className='mr-1'/>
                                :
                                null
                            }
                            Login
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
