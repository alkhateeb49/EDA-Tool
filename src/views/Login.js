import React from "react";

import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
// import {
//   chartExample1,
//   chartExample2,
//   chartExample3,
//   chartExample4,
// } from "variables/charts.js";

// import Login from "layouts/Login/login.js";

function login(props) {
  // const [bigChartData, setbigChartData] = React.useState("data1");
  // const setBgChartData = (name) => {
  //   setbigChartData(name);
  // };
  return (
    <>
<div className="content">
  <Row>
    <Col md="8">
      <Card>
        <CardHeader>
          <h5 className="title">Login</h5>
        </CardHeader>
        <CardBody>
          <form>
            <Row>
              <Col className="pr-md-1" md="5">
                <FormGroup>
                  <label>Username</label>
                  <Input
                    placeholder="Username"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col className="pr-md-1" md="5">
                <FormGroup>
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                  />
                </FormGroup>
                <FormGroup>
                  <label>EDA</label><br/>
                  <select id="eda" name="eda">
                    <option value="1">A EDA</option>
                    <option value="2">A Test EDA</option>
                    <option value="3">HQ EDA</option>
                    <option value="4">HQ Test EDA</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
          </form>
        </CardBody>
        <footer>
          <Button className="btn-fill mb-4 ml-4" color="primary" type="submit">
            Login
          </Button>
        </footer>
      </Card>
      </Col>
      </Row>
      </div>
    </>
  );
}

export default login;
