import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Collapse,
  CardBody,
  Card,
  Form,
  FormGroup,
  Label,
  FormText
} from "reactstrap";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <div>
        <Container>
          <Row style={{ marginTop: "5rem" }}>
            <Col xs="0" sm="2" />
            <Col xs="12" sm="8">
              <Card className="mt-5">
                <CardBody>
                  <h4 className="text-center">
                    Want your ideal home and location? Find it all here...
                  </h4>
                  <Form>
                    <Row form>
                      <Col sm={12}>
                        <FormGroup>
                          <Label>Where:</Label>
                          <Input
                            type="text"
                            name="where"
                            placeholder="Search a place"
                          />
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup>
                          <Label>House Type:</Label>
                          <Input type="select" name="email">
                            <option>2-Storey</option>
                            <option>3-Storey</option>
                            <option>Bungalow</option>
                            <option>Condominium</option>
                            <option>Apartment</option>
                            <option selected="selected">Select...</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col sm={6}>
                        <FormGroup>
                          <Label>Capacity (persons):</Label>
                          <Input type="select" name="email">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option selected="selected">Select...</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            {/* <Col xs="12" sm="8">
              <h3 className="text-center mt-5">
                Want your ideal home and location? Find it all here...
              </h3>
              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <Button color="danger">Search</Button>
                </InputGroupAddon>
              </InputGroup>
              <Button
                className="btn-block mt-4 mb-2"
                color="default"
                onClick={this.toggle}
              >
                Click for more searching options
              </Button>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <Form>
                      <Row form>
                        <Col sm={12}>
                          <FormGroup>
                            <Label>House Type:</Label>
                            <Input type="select" name="email">
                              <option>2-Storey</option>
                              <option>3-Storey</option>
                              <option>Bungalow</option>
                              <option>Condominium</option>
                              <option>Apartment</option>
                              <option selected="selected">Select...</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col sm={6}>
                          <FormGroup>
                            <Label>Capacity</Label>
                            <Input type="select" name="">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option selected="selected">Select...</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col sm={6}>
                          <FormGroup>
                            <Label>Ideal Price</Label>
                            <Input type="number" name="price" />
                          </FormGroup>
                        </Col>
                        <Col sm={12}>
                          <Button color="danger">Find Now</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
            </Col> */}
            <Col xs="0" sm="2" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
