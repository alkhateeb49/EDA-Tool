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

function Typography() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
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
            </Card><Card>
              <CardHeader>
                <h5 className="title">Delete Short Code</h5>
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

            <Card>
              <CardHeader>
                <h5 className="title">Change Bill Cycle</h5>
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
                        <label>pamServiceID</label>
                        <Input
                          defaultValue=""
                          placeholder="pamServiceID"
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
                <h5 className="title">TRC Unlock</h5>
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
                <h5 className="title">TRC Lock</h5>
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
                <h5 className="title">Add FAF</h5>
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
                <h5 className="title">Remove FAF</h5>
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
                <h5 className="title">Main Account Recharge</h5>
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
                        <label>adjustmentAmountRelative</label>
                        <Input
                          defaultValue="1000"
                          placeholder="adjustmentAmountRelative"
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
                <h5 className="title">set dedicated account Absolute DATA</h5>
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
                        <label>dedicatedAccountID</label>
                        <Input
                          defaultValue="101"
                          placeholder="dedicatedAccountID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicatedAccountValueNew</label>
                        <Input
                          defaultValue="2147483648"
                          placeholder="dedicatedAccountValueNew"
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
                <h5 className="title">set dedicated account Absolute minutes</h5>
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
                        <label>dedicatedAccountID</label>
                        <Input
                          defaultValue="51"
                          placeholder="dedicatedAccountID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicatedAccountValueNew</label>
                        <Input
                          defaultValue="1000"
                          placeholder="dedicatedAccountValueNew"
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
                <h5 className="title">set dedicated account Absolute minutes with expiry</h5>
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
                        <label>dedicatedAccountID</label>
                        <Input
                          defaultValue="51"
                          placeholder="dedicatedAccountID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicatedAccountValueNew</label>
                        <Input
                          defaultValue="1000"
                          placeholder="dedicatedAccountValueNew"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>expiryDate</label>
                        <Input
                          defaultValue="2021-03-05T20:49:56+02:00"
                          placeholder="expiryDate"
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
                <h5 className="title">set dedicated account relative DATA</h5>
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
                        <label>dedicatedAccountID</label>
                        <Input
                          defaultValue="101"
                          placeholder="dedicatedAccountID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicatedAccountValueNew</label>
                        <Input
                          defaultValue="2147483648"
                          placeholder="dedicatedAccountValueNew"
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
                <h5 className="title">set dedicated account relative minutes</h5>
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
                        <label>dedicatedAccountID</label>
                        <Input
                          defaultValue="51"
                          placeholder="dedicatedAccountID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicatedAccountValueNew</label>
                        <Input
                          defaultValue="1000"
                          placeholder="dedicatedAccountValueNew"
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
                <h5 className="title">set dedicated account relative minutes With expiry Date</h5>
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
                        <label>dedicatedAccountID</label>
                        <Input
                          defaultValue="51"
                          placeholder="dedicatedAccountID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicatedAccountValueNew</label>
                        <Input
                          defaultValue="1000"
                          placeholder="dedicatedAccountValueNew"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>expiryDate</label>
                        <Input
                          defaultValue="2021-03-17T00:00:00+00:00"
                          placeholder="expiryDate"
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
                <h5 className="title">set Community CC1</h5>
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
                        <label>cc1</label>
                        <Input
                          defaultValue="5000"
                          placeholder="cc1"
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
                <h5 className="title">set Community CC2</h5>
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
                        <label>cc2</label>
                        <Input
                          defaultValue="999999"
                          placeholder="cc2"
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
                <h5 className="title">set Community CC3</h5>
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
                        <label>cc3</label>
                        <Input
                          defaultValue="6"
                          placeholder="cc3"
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
                <h5 className="title">set Community CC3&2&1</h5>
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
                        <label>cc1</label>
                        <Input
                          defaultValue="6"
                          placeholder="cc1"
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
                <h5 className="title">Voucher less Refill</h5>
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
                        <label>transactionAmount</label>
                        <Input
                          defaultValue="10000"
                          placeholder="transactionAmount"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>refillProfileID</label>
                        <Input
                          defaultValue="VO"
                          placeholder="refillProfileID"
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
                <h5 className="title">Change Msisdn</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Currnet Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="Currnet Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>New Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="New Msisdn"
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
                <h5 className="title">Add Shared Offer</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>subscriberNumber</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="subscriberNumber"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>offerType</label>
                        <Input
                          defaultValue="3"
                          placeholder="offerType"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>offerProviderID</label>
                        <Input
                          defaultValue=""
                          placeholder="offerProviderID"
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
                <h5 className="title">Set UC Counter Monetory</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>subscriberNumber</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="subscriberNumber"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usageCounterID</label>
                        <Input
                          defaultValue="5051"
                          placeholder="usageCounterID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usageCounterMonetaryValueNew</label>
                        <Input
                          defaultValue="2147483648"
                          placeholder="usageCounterMonetaryValueNew"
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
                <h5 className="title">Set UC Counter SET NON Monetory</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>subscriberNumber</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="subscriberNumber"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usageCounterID</label>
                        <Input
                          defaultValue="5051"
                          placeholder="usageCounterID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usageCounterMonetaryValueNew</label>
                        <Input
                          defaultValue="2147483648"
                          placeholder="usageCounterMonetaryValueNew"
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
                <h5 className="title">Update UT Monetory</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>subscriberNumber</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="subscriberNumber"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usageThresholdID</label>
                        <Input
                          defaultValue="5051"
                          placeholder="usageThresholdID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usageThresholdMonetaryValueNew</label>
                        <Input
                          defaultValue="6000"
                          placeholder="usageThresholdMonetaryValueNew"
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
                <h5 className="title">Set fnf International</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>subscriberNumber</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="subscriberNumber"
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
                          defaultValue="00962*********"
                          placeholder="fafNumber"
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
                <h5 className="title">change language</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>subscriberNumber</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="subscriberNumber"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>languageIDNew</label>
                        <Input
                          defaultValue="2*********"
                          placeholder="languageIDNew"
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
                <h5 className="title">Remove Barring on LTE</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>imsi</label>
                        <Input
                          defaultValue="416011019768333"
                          placeholder="imsi"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>epsZoneCodeSetId</label>
                        <Input
                          defaultValue="4"
                          placeholder="epsZoneCodeSetId"
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
                <h5 className="title">SET Barring on LTE</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>imsi</label>
                        <Input
                          defaultValue="416011019768333"
                          placeholder="imsi"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>epsOdb</label>
                        <Input
                          defaultValue="ODB-ALL"
                          placeholder="epsOdb"
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
                <h5 className="title">SET HSS Profile ID</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>imsi</label>
                        <Input
                          defaultValue="416011019768333"
                          placeholder="imsi"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>epsProfileId</label>
                        <Input
                          defaultValue="zainnnnnn"
                          placeholder="epsProfileId"
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
                <h5 className="title">SET HSS Profile ID</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>imsi</label>
                        <Input
                          defaultValue="416011019768333"
                          placeholder="imsi"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>epsProfileId</label>
                        <Input
                          defaultValue="zainnnnnn"
                          placeholder="epsProfileId"
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
                <h5 className="title">ADD OBO OBI OBR Barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obi</label>
                        <Input
                          defaultValue="0"
                          placeholder="obi"
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
                <h5 className="title">Activate 1322 CLI+ Defult</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fnum</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="fnum"
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
                <h5 className="title">Add  3G</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add APN</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          defaultValue="304"
                          placeholder="apnid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          defaultValue="2"
                          placeholder="eqosid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          defaultValue="IPV4"
                          placeholder="pdpty"
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
                <h5 className="title">Add APN - HSPA</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          defaultValue="304"
                          placeholder="apnid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          defaultValue="2"
                          placeholder="eqosid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          defaultValue="IPV4"
                          placeholder="pdpty"
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
                <h5 className="title">Add Baring on OSB1&OSB2</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb1</label>
                        <Input
                          defaultValue="1"
                          placeholder="osb1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb2</label>
                        <Input
                          defaultValue="1"
                          placeholder="osb2"
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
                <h5 className="title">Add Broadband</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add CLI+</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add CLI+ NEW</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add Data</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>amsisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="amsisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>amsisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="amsisdn"
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
                <h5 className="title">Add FAX</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>amsisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="amsisdn"
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
                <h5 className="title">Add GPRS Baring While Roaming</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add Incoming Barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add Incoming Voice Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add International</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add OSB 1&2&3&4</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb1</label>
                        <Input
                          defaultValue="0"
                          placeholder="osb1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb2</label>
                        <Input
                          defaultValue="0"
                          placeholder="osb2"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb3</label>
                        <Input
                          defaultValue="1"
                          placeholder="osb3"
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
                <h5 className="title">Add One Network</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obr</label>
                        <Input
                          defaultValue="0"
                          placeholder="obr"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>rsa</label>
                        <Input
                          defaultValue="1"
                          placeholder="rsa"
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
                <h5 className="title">Add Operator Call Baring Service</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>provisionState</label>
                        <Input
                          defaultValue="0"
                          placeholder="provisionState"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>provisionState</label>
                        <Input
                          defaultValue="1"
                          placeholder="provisionState"
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
                <h5 className="title">Add Out Goning Call Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add Outgoing Voice Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add Prepaid Roaming</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add Prepaid Roaming Incomming Calls (MTC)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Add Regional Roaming</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>rsa</label>
                        <Input
                          defaultValue="2"
                          placeholder="rsa"
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
                <h5 className="title">Add Ring Back Tone</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>prbt</label>
                        <Input
                          defaultValue="1"
                          placeholder="prbt"
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
                <h5 className="title">Add SMS Roaming</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obr</label>
                        <Input
                          defaultValue="1"
                          placeholder="obr"
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
                <h5 className="title">Add Special Roaming area</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obr</label>
                        <Input
                          defaultValue="1"
                          placeholder="obr"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obo</label>
                        <Input
                          defaultValue="1"
                          placeholder="obo"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>rsa</label>
                        <Input
                          defaultValue="1234"
                          placeholder="rsa"
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
                <h5 className="title">Add Zain GPRS Service</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          defaultValue="1"
                          placeholder="apnid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          defaultValue="1234"
                          placeholder="eqosid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          defaultValue="1234"
                          placeholder="pdpty"
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
                <h5 className="title">Add Zain GPRS Service - Generic APN</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          defaultValue="1"
                          placeholder="apnid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          defaultValue="1234"
                          placeholder="eqosid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          defaultValue="IPV4"
                          placeholder="pdpty"
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
                <h5 className="title">Add Zain GPRS Service - Generic APN -APN4</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          defaultValue="1"
                          placeholder="apnid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          defaultValue="1234"
                          placeholder="eqosid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          defaultValue="IPV4"
                          placeholder="pdpty"
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
                <h5 className="title">Add Zain GPRS Service - Generic APN with Static IP address</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          defaultValue="1"
                          placeholder="apnid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          defaultValue="1234"
                          placeholder="eqosid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          defaultValue="IPV4"
                          placeholder="pdpty"
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
                <h5 className="title">BAOC</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">BIAC</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Barring all Incoming & outgoing Calls And Sms</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Barring of Calls Outside Arab Countries (OSB2)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Barring of Premiums Calls</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Barring of roaming and RSA</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">CFB</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">CFD</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">CFU&ts60</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fnum</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="fnum"
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
                <h5 className="title">CHANGE IMSI</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>nimsi</label>
                        <Input
                          defaultValue=""
                          placeholder="nimsi"
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
                <h5 className="title">CFU&ts60</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fnum</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="fnum"
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
                <h5 className="title">CLI to 3222</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fnum</label>
                        <Input
                          defaultValue=""
                          placeholder="fnum"
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
                <h5 className="title">CSP and RSA</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>csp</label>
                        <Input
                          defaultValue="28"
                          placeholder="csp"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>rsa</label>
                        <Input
                          defaultValue="100"
                          placeholder="rsa"
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
                <h5 className="title">CUG</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>cugIndex</label>
                        <Input
                          defaultValue="0"
                          placeholder="cugIndex"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>nil</label>
                        <Input
                          defaultValue="true"
                          placeholder="nil"
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
                <h5 className="title">Create barring on all incoming calls and sms</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">DCF1</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>sodcf</label>
                        <Input
                          defaultValue="0"
                          placeholder="sodcf"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>sosdcf</label>
                        <Input
                          defaultValue="4"
                          placeholder="sosdcf"
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
                <h5 className="title">DCF2</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fnum</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="fnum"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>noReplyTime</label>
                        <Input
                          defaultValue="25"
                          placeholder="noReplyTime"
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
                <h5 className="title">Data Incoming Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Fast 1 Add Internet</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          defaultValue="1"
                          placeholder="apnid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          defaultValue="1"
                          placeholder="eqosid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          defaultValue="IPV4"
                          placeholder="pdpty"
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
                <h5 className="title">Freeze Reconnection</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obo</label>
                        <Input
                          defaultValue="2"
                          placeholder="obo"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb4</label>
                        <Input
                          defaultValue="0"
                          placeholder="osb4"
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
                <h5 className="title">GPRS Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obp</label>
                        <Input
                          defaultValue="1"
                          placeholder="obp"
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
                <h5 className="title">GPRS Hard Internet Reconnection</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          defaultValue="1"
                          placeholder="apnid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          defaultValue="1"
                          placeholder="eqosid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          defaultValue="IPV4"
                          placeholder="pdpty"
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
                <h5 className="title">GPRS Hard WAP Reconnection</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="1"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          defaultValue="1"
                          placeholder="apnid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          defaultValue="1"
                          placeholder="eqosid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          defaultValue="IPV4"
                          placeholder="pdpty"
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
                <h5 className="title">MADA RSA</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>rsa</label>
                        <Input
                          defaultValue="204"
                          placeholder="rsa"
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
                <h5 className="title">National Disconnection</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obo</label>
                        <Input
                          defaultValue="1"
                          placeholder="obo"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb4</label>
                        <Input
                          defaultValue="1"
                          placeholder="osb4"
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
                <h5 className="title">National Reconnection + Add International</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obo</label>
                        <Input
                          defaultValue="1"
                          placeholder="obo"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb4</label>
                        <Input
                          defaultValue="1"
                          placeholder="osb4"
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
                <h5 className="title">New CUG</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>closedUserGroup</label>
                        <Input
                          defaultValue="1"
                          placeholder="closedUserGroup"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>cugIndex</label>
                        <Input
                          defaultValue="12"
                          placeholder="cugIndex"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>interlockCode</label>
                        <Input
                          defaultValue=""
                          placeholder="interlockCode"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>ts10</label>
                        <Input
                          defaultValue="1"
                          placeholder="ts10"
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
                <h5 className="title">OBO</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obo</label>
                        <Input
                          defaultValue="4"
                          placeholder="obo"
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
                <h5 className="title">OBOPRI@OBOPRE</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obopre</label>
                        <Input
                          defaultValue="4"
                          placeholder="obopre"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obopri</label>
                        <Input
                          defaultValue="4"
                          placeholder="obopri"
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
                <h5 className="title">ONCALL2</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fnum</label>
                        <Input
                          defaultValue="4"
                          placeholder="fnum"
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
                <h5 className="title">ONCall</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fnum</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="fnum"
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
                <h5 className="title">OSB4</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb1</label>
                        <Input
                          defaultValue=""
                          placeholder="osb1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb2</label>
                        <Input
                          defaultValue=""
                          placeholder="osb2"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb3</label>
                        <Input
                          defaultValue=""
                          placeholder="osb3"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb4</label>
                        <Input
                          defaultValue=""
                          placeholder="oosb4sb1"
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
                <h5 className="title">PostPaid To Prepaid</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>csp</label>
                        <Input
                          defaultValue=""
                          placeholder="csp"
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
                <h5 className="title">REMOVE APN (APN ID)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="4"
                          placeholder="pdpid"
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
                <h5 className="title">REMOVE HSPA APN</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="4"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>nil</label>
                        <Input
                          defaultValue="true"
                          placeholder="nil"
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
                <h5 className="title">RVM</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remmove barring on roaming</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obr</label>
                        <Input
                          defaultValue="0"
                          placeholder="obr"
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
                <h5 className="title">Remove All GPRS Services</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue="4"
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          defaultValue=""
                          placeholder="pdpid"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>nil</label>
                        <Input
                          defaultValue="true"
                          placeholder="nil"
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
                <h5 className="title">Remove Baring on incoming calls & sms</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Barring of Premiums Calls</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Barring on Incoming and outgouin calls and sms</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Broadband</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>ard</label>
                        <Input
                          defaultValue="1"
                          placeholder="ard"
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
                <h5 className="title">Remove CFU</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove CLI+</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>osb1</label>
                        <Input
                          defaultValue="0"
                          placeholder="osb1"
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
                <h5 className="title">Remove Call Transfer</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>ect</label>
                        <Input
                          defaultValue="0"
                          placeholder="ect"
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
                <h5 className="title">Remove Conference</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>mpty</label>
                        <Input
                          defaultValue="0"
                          placeholder="mpty"
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
                <h5 className="title">Remove Data</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>bs26</label>
                        <Input
                          defaultValue="0"
                          placeholder="bs26"
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
                <h5 className="title">Remove Data Incoming Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Data Outgoing Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove FAX</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>amsisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="amsisdn"
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
                <h5 className="title">Remove GPRS Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obp</label>
                        <Input
                          defaultValue="0"
                          placeholder="obp"
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
                <h5 className="title">Remove Incoming Call Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obi</label>
                        <Input
                          defaultValue="0"
                          placeholder="obi"
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
                <h5 className="title">Remove Incoming Voice Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Incoming and Outgoing Baring + Add International</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Internet & MMS (Hard Disconnection)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Multi Sim</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>delall</label>
                        <Input
                          defaultValue="1"
                          placeholder="delall"
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
                <h5 className="title">Remove OBO</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>obo</label>
                        <Input
                          defaultValue="0"
                          placeholder="obo"
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
                <h5 className="title">Remove OBO OSB OBI BARRING</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove OSB 1&2&3&4</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove OSB1&OSB2</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove One Network (RSA)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Outgoing Voice Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Ring Back Tone</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove SMS Incoming Baring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Special Roaming</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Special Roaming And keep International</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">Remove Zain GPRS Service</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">SET OBO OBI OSB Barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
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
                <h5 className="title">SOCLIP</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>soclip</label>
                        <Input
                          defaultValue="0"
                          placeholder="soclip"
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
                <h5 className="title">SOCLIR</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>soclir</label>
                        <Input
                          defaultValue="1"
                          placeholder="soclir"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>clir</label>
                        <Input
                          defaultValue="01"
                          placeholder="clir"
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
                <h5 className="title">TS11</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>ts11</label>
                        <Input
                          defaultValue="1"
                          placeholder="ts11"
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
                <h5 className="title">Temporary GPRS Disconnect</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>msisdn</label>
                        <Input
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>ts62</label>
                        <Input
                          defaultValue="1"
                          placeholder="ts62"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>bc</label>
                        <Input
                          defaultValue="1"
                          placeholder="bc"
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
                <h5 className="title">SET LTE DATA Barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>imsi</label>
                        <Input
                          defaultValue=""
                          placeholder="imsi"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>epsOdb</label>
                        <Input
                          defaultValue="None"
                          placeholder="epsOdb"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>epsZoneCodeSetId</label>
                        <Input
                          defaultValue="4"
                          placeholder="epsZoneCodeSetId"
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
                <h5 className="title">SET Profile ID</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>imsi</label>
                        <Input
                          defaultValue=""
                          placeholder="imsi"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>epsProfileId</label>
                        <Input
                          defaultValue="testnewocs"
                          placeholder="epsProfileId"
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
                <h5 className="title">Block WIFI and pass IN</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>associationId</label>
                        <Input
                          defaultValue="962*********"
                          placeholder="associationId"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>chargingProfId</label>
                        <Input
                          defaultValue="testnewocs"
                          placeholder="chargingProfId"
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
                <h5 className="title">Add CFNRC</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Add CFU</h5>
              </CardHeader>
              <CardBody>
                <Form>
                <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Add CLI+</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Add RBT</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Add incomming-communication-barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Add outgoing-Roaming-communication-barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Add outgoing-communication-barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Add outgoing-interantional-communication-barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Remove CFNRC</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Remove CFU</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Remove CLI+</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Remove CLIR</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Remove RBT</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Remove incomming-communication-barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Remove outgoing-Roaming-communication-barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Remove outgoing-communication-barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">Remove outgoing-interantional-communication-barring</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">originating-identity-presentation</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          defaultValue=""
                          placeholder="publicId"
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
                <h5 className="title">DOWNGRADEn</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usrIdentifier</label>
                        <Input
                          defaultValue=""
                          placeholder="usrIdentifier"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>srvpkgName</label>
                        <Input
                          defaultValue=""
                          placeholder="srvpkgName"
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
                <h5 className="title">UPGRADE</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usrIdentifier</label>
                        <Input
                          defaultValue=""
                          placeholder="usrIdentifier"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>srvpkgName</label>
                        <Input
                          defaultValue=""
                          placeholder="srvpkgName"
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

export default Typography;
