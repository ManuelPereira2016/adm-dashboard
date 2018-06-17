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
  Row
} from "reactstrap";

class UserForm extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  onCancel = () => {
    this.props.history.push("/admin/users");
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
            <Card>
              <div className='pb-3 pt-3 pl-3 pr-3 text-center'>
                <strong className='border-bottom pb-3 lead font-weight-bold'>Ingrese sus datos</strong>
              </div>
              <CardBody>
                <Form action="" method="post">
                  <FormGroup>
                    <Label htmlFor="dni">DNI</Label>
                    <Input type="text" id="dni" name="dni" placeholder="Introduce tu DNI.." />
                    <FormText className="help-block">Por favor introduce tu DNI</FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="gender">Sexo</Label>
                    <Input
                      type="select"
                      name="gender"
                      id="gender"
                      bsSize="sm"
                    >
                      <option value="0">Sexo</option>
                      <option value="M">M</option>
                      <option value="F">F</option>
                    </Input>
                  </FormGroup>
                </Form>
              </CardBody>
              <div className='pb-3 pr-3 pl-3 pt-3 text-center'>
                <Button type="submit" size="sm" color="primary"> Ir a validacion</Button>
              </div>
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserForm;
