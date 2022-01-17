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
/*eslint-disable*/
import React,{ useState } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Login() {
  if(sessionStorage.getItem('session')){
    window.location.href = '/';}



    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [sessionId, setSessionId] = useState("");


    
    // var today = new Date();
    // var time = today.getTime();
    
    var later = new Date();
    later.setMinutes(later.getMinutes() + 20);
    var time2 = later.getTime();



    // alert(time);
    // alert(time2);
    // alert(time2-time);

    function sendLogin(){
      var form = document.getElementById("login_form");
      function handleForm(event) { event.preventDefault(); } 
      form.addEventListener('submit', handleForm);


      console.log(username);
      console.log(password);
      //alert('start');
    
      var xmlhttp = new XMLHttpRequest();
       xmlhttp.open('Post', "http://10.50.0.11:8080/CAI3G1.2/services/CAI3G1.2", true);
      // xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true); //Test
      

      // build SOAP request
      var sr =
      "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/'>"+
      "<soapenv:Header/>"+
      "<soapenv:Body>"+
       "<cai3:Login>"+
        "<cai3:userId>"+username+"</cai3:userId>"+
        "<cai3:pwd>"+password+"</cai3:pwd>"+
      "</cai3:Login>"+
      "</soapenv:Body>"+
      "</soapenv:Envelope>";
        //alert(sr);
      xmlhttp.onreadystatechange = function () {
        //alert('first');
          if (xmlhttp.readyState == 4) {
            //alert('secound');
              if (xmlhttp.status == 200 || xmlhttp.status==500) {
                // alert(" working");
                //alert(sr.response);
                //To Get error
                var x, i, xmlDoc, txt;
                txt = "";

                xmlDoc=xmlhttp.responseXML;
                x = xmlDoc.getElementsByTagName('sessionId');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                console.log(txt);
                // setSessionId(txt);
                if(txt==""){
                  alert("Wrong Username or Password");
                }else{
                  sessionStorage.setItem('username', username);
                  sessionStorage.setItem('password', password);
                  sessionStorage.setItem('session', txt);
                  sessionStorage.setItem('time', time2);
                  window.location.href = '/';
                }


              }
          }
      }
      // Send the POST request
      xmlhttp.setRequestHeader('Content-Type', 'text/xml');
      // xmlhttp.setRequestHeader('Access-Control-Allow-Origin','http://127.0.0.1:3000/');

      xmlhttp.send(sr);
      // console.log(sessionId);


      // setTimeout(function(){
      //   sessionStorage.clear();
      //   window.location.href = '/login';
      // },1200000);
    }


    function sendTestLogin(){
      var form = document.getElementById("login_form");
      function handleForm(event) { event.preventDefault(); } 
      form.addEventListener('submit', handleForm);


      console.log(username);
      console.log(password);
      //alert('start');
    
      var xmlhttp = new XMLHttpRequest();
      //  xmlhttp.open('Post', "http://10.50.0.11:8080/CAI3G1.2/services/CAI3G1.2", true);
      xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true); //Test
      

      // build SOAP request
      var sr =
      "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/'>"+
      "<soapenv:Header/>"+
      "<soapenv:Body>"+
       "<cai3:Login>"+
        "<cai3:userId>"+username+"</cai3:userId>"+
        "<cai3:pwd>"+password+"</cai3:pwd>"+
      "</cai3:Login>"+
      "</soapenv:Body>"+
      "</soapenv:Envelope>";
        //alert(sr);
      xmlhttp.onreadystatechange = function () {
        //alert('first');
          if (xmlhttp.readyState == 4) {
            //alert('secound');
              if (xmlhttp.status == 200 || xmlhttp.status==500) {
                // alert(" working");
                //alert(sr.response);
                //To Get error
                var x, i, xmlDoc, txt;
                txt = "";

                xmlDoc=xmlhttp.responseXML;
                x = xmlDoc.getElementsByTagName('sessionId');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                console.log(txt);
                // setSessionId(txt);
                if(txt==""){
                  alert("Wrong Username or Password");
                }else{
                  sessionStorage.setItem('username', username);
                  sessionStorage.setItem('password', password);
                  sessionStorage.setItem('session', txt);
                  sessionStorage.setItem('time', time2);
                  window.location.href = '/';
                }


              }
          }
      }
      // Send the POST request
      xmlhttp.setRequestHeader('Content-Type', 'text/xml');
      // xmlhttp.setRequestHeader('Access-Control-Allow-Origin','http://127.0.0.1:3000/');

      xmlhttp.send(sr);
      // console.log(sessionId);


      // setTimeout(function(){
      //   setSessionId("");
      //   window.location.href = '/login';
      // },5000);
      // 1200000 

    }

    

  return (
    <div className="content">
  <Row>
    <Col md="8">
      <Card>
        <CardHeader>
          <h5 className="title">Login</h5>
        </CardHeader>
        <CardBody id="wid">
          {/* <form target="_blank" action="10.50.0.11" method="get"> */}
          <form id="login_form">
            <Row>
              <Col className="pr-md-1" md="5">
                <FormGroup>
                  <label>Username</label>
                  <Input
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <label>EDA</label><br/>
                  <select id="eda" name="eda">
                    <option value="1">A EDA</option>
                    <option value="2">A Test EDA</option>
                    <option value="3">HQ EDA</option>
                    <option value="4">HQ Test EDA</option>
                  </select> */}
                </FormGroup>
              </Col>
            </Row>
            {/* <input value="Login" class="btn-fill mb-4 ml-4 btn btn-primary" color="primary" type="submit"/> */}
            <Button className="login-btn btn-fill mb-4 ml-4" color="primary" type="submit" onClick={sendLogin}>
            Login
          </Button>


          </form>

          <Button className="btn-fill mb-4 ml-4" color="primary" type="submit" onClick={sendTestLogin}>
            Test Login
          </Button>

        </CardBody>
      </Card>
      </Col>
      </Row>
      </div>

  );
}

export default Login;

