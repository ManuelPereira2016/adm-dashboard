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
  UncontrolledAlert,
} from "reactstrap";
import { AppHeader } from "@coreui/react";
import MinimalHeader from "../../../containers/DefaultLayout/MinimalHeader";
import MDSpinner from "react-md-spinner";

class UserForm extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    message: PropTypes.string,
    isProcessing: PropTypes.bool.isRequired
  };

  onSubmit = (e) => {
      e.preventDefault();
      e.stopPropagation();

      this.props.onSubmit(e.target)
  }

  render() {
    return (
      <div className="app ">
        <AppHeader >
          <MinimalHeader onLogout={this.props.onLogout} />
        </AppHeader>
        <div className="app-body flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <Card>
                <Form onSubmit={this.onSubmit}>
                  <div className="pb-3 pt-3 pl-3 pr-3 text-center">
                    <strong className="border-bottom pb-3 lead font-weight-bold">
                      Ingrese sus datos
                    </strong>
                  </div>
                  <CardBody>
                      <FormGroup>
                        <Label htmlFor="dni">DNI</Label>
                        <Input
                          type="text"
                          id="dni"
                          required={true}
                          name="dni"
                          placeholder="Introduce tu DNI.."
                        />
                        <FormText className="help-block">
                          Ingrese su dni o cuil
                        </FormText>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="sexo">Sexo</Label>
                        <Input
                          type="select"
                          name="sexo"
                          required={true}
                          id="sexo"
                        >
                          <option value="0" selected={true} disabled={true}>Sexo</option>
                          <option value="M">M</option>
                          <option value="F">F</option>
                        </Input>
                      </FormGroup>
                      {this.props.message ? (
                        <UncontrolledAlert color="info">
                          {this.props.message}
                        </UncontrolledAlert>
                      ) : null}
                  </CardBody>
                  <div className="pb-3 pr-3 pl-3 pt-3 text-center">
                    <Button type="submit" size="sm" color="primary">
                    {this.props.isProcessing ? (
                      <MDSpinner size={15} singleColor="#fff" className="mr-1" />
                    ) : null}
                      IR A VALIDACION
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

export default UserForm;
