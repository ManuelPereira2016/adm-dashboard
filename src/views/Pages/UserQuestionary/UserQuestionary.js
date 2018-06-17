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
import { RadioGroup, Radio } from "react-radio-group";

class UserQuestionary extends Component {
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
                <div className="pb-3 pt-3 pl-3 pr-3 text-center">
                  <strong className="border-bottom pb-3 lead font-weight-bold">
                    Formulario de verificacion de identidad
                  </strong>
                </div>
                <CardBody>
                  <Form action="" method="post">
                    <FormGroup>
                      <Label>
                        Vive o vivio en alguna de estas direcciones:
                      </Label>
                      <RadioGroup name="fruit" className="pl-4">
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                      </RadioGroup>
                    </FormGroup>
                    <FormGroup>
                      <Label>
                        Vive o vivio en alguna de estas direcciones:
                      </Label>
                      <RadioGroup name="fruit" className="pl-4">
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                      </RadioGroup>
                    </FormGroup>
                    <FormGroup>
                      <Label>
                        Vive o vivio en alguna de estas direcciones:
                      </Label>
                      <RadioGroup name="fruit" className="pl-4">
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                        <div>
                          <Radio value="text" className="form-check-input" />
                          <Label>Tandill, 1944 Y Dr Vivian</Label>
                        </div>
                      </RadioGroup>
                    </FormGroup>
                  </Form>
                </CardBody>
                <div className="pb-3 pr-3 pl-3 pt-3 text-center">
                  <Button type="submit" size="sm" color="primary">
                    Comprobar el formulario
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserQuestionary;
