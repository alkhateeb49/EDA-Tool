/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";



function UserProfile() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Install Subscriber Postpaid</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>serviceClass</label>
                        <Input
                          defaultValue="HQSDP09V.cs."
                          placeholder="serviceClass"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={()=>this.createFull()} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Create AF</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>sdpHostName</label>
                        <Input
                          defaultValue="HQSDP09V.cs."
                          placeholder="sdpHostName"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={()=>this.createFull()} >
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Add FNF Local</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fafNumber</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="fafNumber"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fafIndicator</label>
                        <Input
                          defaultValue="1"
                          placeholder="fafIndicator"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>chargingType</label>
                        <Input
                          defaultValue="2"
                          placeholder="chargingType"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>chargingIndicator</label>
                        <Input
                          defaultValue="201"
                          placeholder="chargingIndicator"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Set Refill Barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>refillBarAction</label>
                        <Input
                          defaultValue="BAR"
                          placeholder="refillBarAction"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Remove Refill Barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>refillBarAction</label>
                        <Input
                          defaultValue="CLEAR"
                          placeholder="refillBarAction"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Add Short Code</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>identifier</label>
                        <Input
                          defaultValue=""
                          placeholder="identifier"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>type</label>
                        <Input
                          defaultValue="private"
                          placeholder="type"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Reset PIN</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>PinCode</label>
                        <Input
                          defaultValue="0000"
                          placeholder="PinCode"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Money Transfer Barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>accumulatorID</label>
                        <Input
                          defaultValue=""
                          placeholder="accumulatorID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>accumulatorValueAbsolute</label>
                        <Input
                          defaultValue=""
                          placeholder="accumulatorValueAbsolute"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Money transfer Unbarring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>accumulatorID</label>
                        <Input
                          defaultValue="C"
                          placeholder="accumulatorID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>accumulatorValueAbsolute</label>
                        <Input
                          defaultValue=""
                          placeholder="accumulatorValueAbsolute"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
