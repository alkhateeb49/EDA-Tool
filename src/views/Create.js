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
import React,{ useState } from 'react';

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



function Create() {
  if(!sessionStorage.getItem('session')){
    window.location.href = '/login';}
    
  var today = new Date();
  var time = today.getTime();
  var later=sessionStorage.getItem('time')-time;
    setTimeout(function(){
    // alert("Time Out");
    sessionStorage.clear();
    window.location.href = '/'
  },later);




  const [msisdn, setMsisdn] = useState(0);
  const [SDPName, setSDPName] = useState("");
  const [serviceClass, setServiceClass] = useState(0);
  const [temporaryBlockedFlag, setTemporaryBlockedFlag] = useState(0);
  const [accountActivationFlag, setAccountActivationFlag] = useState(0);
  const [serviceOfferingID, setServiceOfferingID] = useState(0);
  const [serviceOfferingActiveFlag, setServiceOfferingActiveFlag] = useState(0);
  const [accumulatorID, setAccumulatorID] = useState("");
  const [csp, setCsp] = useState(0);
  const [rsa, setRsa] = useState(0);
  const [IMSI, setIMSI] = useState(0);
  const [epsProfileId, setEpsProfileId] = useState(0);
  const [epsZoneCodeSetId, setEpsZoneCodeSetId] = useState(0);
  const [profileId, setProfileId] = useState(0);
  const [pdpid, setPdpid] = useState(0);
  const [apnid, setApnid] = useState(0);
  const [eqosid, setEqosid] = useState(0);
  const [pdpty, setPdpty] = useState(0);
  const [fnum, setFnum] = useState(0);
  const [usrIdentifier, setUsrIdentifier] = useState(0);
  const [fafNumber, setFafNumber] = useState(0);
  const [fafIndicator, setFafIndicator] = useState(0);
  const [chargingType, setChargingType] = useState(0);
  const [chargingIndicator, setChargingIndicator] = useState(0);
  const [refillBarAction, setRefillBarAction] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [type, setType] = useState("");
  const [pincode, setPincode] = useState("");
  const [accumulatorValueAbsolute, setAccumulatorValueAbsolute] = useState("");



  function CreateAF(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:af='http://schemas.ericsson.com/ma/CS/AF/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
    "<soapenv:Body>"+
      "<cai3:Create>"+
        "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AF/</cai3:MOType>"+
        "<cai3:MOId>"+
          "<af:msisdn>"+msisdn+"</af:msisdn>"+
        "</cai3:MOId>"+
        "<cai3:MOAttributes>"+
          "<af:createSubscription msisdn='"+msisdn+"'>"+
            "<af:msisdn>"+msisdn+"</af:msisdn>"+
            "<af:ttl>300</af:ttl>"+
            "<af:sdpHostName>"+SDPName+"V.cs.</af:sdpHostName>"+
          "</af:createSubscription>"+
        "</cai3:MOAttributes>"+
      "</cai3:Create>"+
    "</soapenv:Body>"+
  "</soapenv:Envelope>";
    //  alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function InstallSubscriberPostpaid(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+

    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+

   "<soapenv:Body>"+
      "<cai3:Create>"+
         "<cai3:MOType>CSSVSUB@http://schemas.ericsson.com/ma/CA/CSSVSUB/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<css:msisdn>"+msisdn+"</css:msisdn>"+
         "</cai3:MOId>"+
         "<cai3:MOAttributes>"+
            "<css:CreateCSSVSUB>"+
               "<css:msisdn>"+msisdn+"</css:msisdn>"+
               "<css:installSubscriber>"+
                  "<css:actionId>2</css:actionId>"+
                  "<css:msisdnNai>1</css:msisdnNai>"+
                  "<css:serviceClass>"+serviceClass+"</css:serviceClass>"+
                  "<css:temporaryBlockedFlag>"+temporaryBlockedFlag+"</css:temporaryBlockedFlag>"+
                  "<css:accountActivationFlag>"+accountActivationFlag+"</css:accountActivationFlag>"+
                  "<css:serviceOfferings>"+
                     "<css:serviceOfferingID>"+serviceOfferingID+"</css:serviceOfferingID>"+
                     "<css:serviceOfferingActiveFlag>"+serviceOfferingActiveFlag+"</css:serviceOfferingActiveFlag>"+
                  "</css:serviceOfferings>"+
                  "<css:periodicAccountManagementData>"+
                     "<css:pamServiceID>1</css:pamServiceID>"+
                     "<css:pamClassID>1</css:pamClassID>"+
                     "<css:scheduleID>1</css:scheduleID>"+
                     "<css:pamServicePriority>1</css:pamServicePriority>"+
                  "</css:periodicAccountManagementData>"+
                  "<css:periodicAccountManagementData>"+
                     "<css:pamServiceID>2</css:pamServiceID>"+
                     "<css:pamClassID>2</css:pamClassID>"+
                     "<css:scheduleID>99</css:scheduleID>"+
                     "<css:pamServicePriority>2</css:pamServicePriority>"+
                  "</css:periodicAccountManagementData>"+
                  "<css:periodicAccountManagementData>"+
                     "<css:pamServiceID>3</css:pamServiceID>"+
                     "<css:pamClassID>3</css:pamClassID>"+
                     "<css:scheduleID>100</css:scheduleID>"+
                     "<css:pamServicePriority>3</css:pamServicePriority>"+
                  "</css:periodicAccountManagementData>"+
                  "<css:sdphostname>?</css:sdphostname>"+
             "<css:sdphostname>?</css:sdphostname>"+
               "</css:installSubscriber>"+
            "</css:CreateCSSVSUB>"+
         "</cai3:MOAttributes>"+
      "</cai3:Create>"+
   "</soapenv:Body>"+
"</soapenv:Envelope>"; 
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function InstallSubscriberPostpaidWithAccumelator(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+

    "<soapenv:Header>"+
       "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
                 "<wsse:UsernameToken>"+
                     "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                     "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
                 "</wsse:UsernameToken>"+
             "</wsse:Security>"+
    "</soapenv:Header>"+
   
   "<soapenv:Body>"+
   "<cai3:Create>"+
   "<cai3:MOType>CSSVSUB@http://schemas.ericsson.com/ma/CA/CSSVSUB/</cai3:MOType>"+
   "<cai3:MOId>"+
   "<css:msisdn>"+msisdn+"</css:msisdn>"+
   "</cai3:MOId>"+
   "<cai3:MOAttributes>"+
   "<css:CreateCSSVSUB>"+
   "<css:msisdn>"+msisdn+"</css:msisdn>"+
   "<css:installSubscriber>"+
   "<css:actionId>2</css:actionId>"+
   "<css:msisdnNai>1</css:msisdnNai>"+
   "<css:serviceClass>"+serviceClass+"</css:serviceClass>"+
   "<css:temporaryBlockedFlag>"+temporaryBlockedFlag+"</css:temporaryBlockedFlag>"+
   "<css:serviceOfferings>"+
   "<css:serviceOfferingID>"+serviceOfferingID+"</css:serviceOfferingID>"+
   "<css:serviceOfferingActiveFlag>"+serviceOfferingActiveFlag+"</css:serviceOfferingActiveFlag>"+
   "</css:serviceOfferings>"+
   "<css:accumulator>"+
   "<css:accumulatorID>"+accumulatorID+"</css:accumulatorID>"+
   "<css:accumulatorValueAbsolute>11</css:accumulatorValueAbsolute>"+
   "</css:accumulator>"+
   "<css:periodicAccountManagementData>"+
   "<css:pamServiceID>1</css:pamServiceID>"+
   "<css:pamClassID>1</css:pamClassID>"+
   "<css:scheduleID>1</css:scheduleID>"+
   "<css:pamServicePriority>1</css:pamServicePriority>"+
   "</css:periodicAccountManagementData>"+
   "<css:periodicAccountManagementData>"+
   "<css:pamServiceID>2</css:pamServiceID>"+
   "<css:pamClassID>2</css:pamClassID>"+
   "<css:scheduleID>99</css:scheduleID>"+
   "<css:pamServicePriority>2</css:pamServicePriority>"+
   "</css:periodicAccountManagementData>"+
   "<css:periodicAccountManagementData>"+
   "<css:pamServiceID>3</css:pamServiceID>"+
   "<css:pamClassID>3</css:pamClassID>"+
   "<css:scheduleID>100</css:scheduleID>"+
   "<css:pamServicePriority>3</css:pamServicePriority>"+
   "</css:periodicAccountManagementData>"+
   "</css:installSubscriber>"+
   "</css:CreateCSSVSUB>"+
   "</cai3:MOAttributes>"+
   "</cai3:Create>"+
   "</soapenv:Body>"+
   "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function InstallSubscriberPrepaid(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
    "<soapenv:Header>"+
       "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
                 "<wsse:UsernameToken>"+
                     "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                     "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
                 "</wsse:UsernameToken>"+
             "</wsse:Security>"+
    "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>CSSVSUB@http://schemas.ericsson.com/ma/CA/CSSVSUB/</cai3:MOType>"+
"<cai3:MOId>"+
"<css:msisdn>"+msisdn+"</css:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<css:CreateCSSVSUB>"+
"<css:msisdn>"+msisdn+"</css:msisdn>"+
"<css:installSubscriber>"+
"<css:actionId>2</css:actionId>"+
"<css:serviceClass>"+serviceClass+"</css:serviceClass>"+
"<css:temporaryBlockedFlag>"+temporaryBlockedFlag+"</css:temporaryBlockedFlag>"+
"<css:periodicAccountManagementData>"+
"<css:pamServiceID>1</css:pamServiceID>"+
"<css:pamClassID>1</css:pamClassID>"+
"<css:scheduleID>99</css:scheduleID>"+
"<css:pamServicePriority>1</css:pamServicePriority>"+
"</css:periodicAccountManagementData>"+
"<css:periodicAccountManagementData>"+
"<css:pamServiceID>2</css:pamServiceID>"+
"<css:pamClassID>2</css:pamClassID>"+
"<css:scheduleID>99</css:scheduleID>"+
"<css:pamServicePriority>2</css:pamServicePriority>"+
"</css:periodicAccountManagementData>"+
"<css:periodicAccountManagementData>"+
"<css:pamServiceID>3</css:pamServiceID>"+
"<css:pamClassID>3</css:pamClassID>"+
"<css:scheduleID>100</css:scheduleID>"+
"<css:pamServicePriority>3</css:pamServicePriority>"+
"</css:periodicAccountManagementData>"+
"</css:installSubscriber>"+
"</css:CreateCSSVSUB>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function InstallSubscriberPrepaidWithSOB(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+

"<soapenv:Header>"+
   "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
			 "<wsse:UsernameToken>"+
				 "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
				 "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
			 "</wsse:UsernameToken>"+
		 "</wsse:Security>"+
"</soapenv:Header>"+

"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>CSSVSUB@http://schemas.ericsson.com/ma/CA/CSSVSUB/</cai3:MOType>"+
"<cai3:MOId>"+
"<css:msisdn>"+msisdn+"</css:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<css:CreateCSSVSUB>"+
"<css:msisdn>"+msisdn+"</css:msisdn>"+
"<css:installSubscriber>"+
"<css:actionId>2</css:actionId>"+
"<css:serviceClass>"+serviceClass+"</css:serviceClass>"+
"<css:temporaryBlockedFlag>"+temporaryBlockedFlag+"</css:temporaryBlockedFlag>"+
"<css:serviceOfferings>"+
"<css:serviceOfferingID>"+serviceOfferingID+"</css:serviceOfferingID>"+
"<css:serviceOfferingActiveFlag>"+serviceOfferingActiveFlag+"</css:serviceOfferingActiveFlag>"+
"</css:serviceOfferings>"+
"<css:periodicAccountManagementData>"+
"<css:pamServiceID>1</css:pamServiceID>"+
"<css:pamClassID>1</css:pamClassID>"+
"<css:scheduleID>99</css:scheduleID>"+
"<css:pamServicePriority>1</css:pamServicePriority>"+
"</css:periodicAccountManagementData>"+
"<css:periodicAccountManagementData>"+
"<css:pamServiceID>2</css:pamServiceID>"+
"<css:pamClassID>2</css:pamClassID>"+
"<css:scheduleID>99</css:scheduleID>"+
"<css:pamServicePriority>2</css:pamServicePriority>"+
"</css:periodicAccountManagementData>"+
"<css:periodicAccountManagementData>"+
"<css:pamServiceID>3</css:pamServiceID>"+
"<css:pamClassID>3</css:pamClassID>"+
"<css:scheduleID>100</css:scheduleID>"+
"<css:pamServicePriority>3</css:pamServicePriority>"+
"</css:periodicAccountManagementData>"+
"</css:installSubscriber>"+
"</css:CreateCSSVSUB>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function createCSP(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr ="";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function createEPS(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "+<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:hss='http://schemas.ericsson.com/ma/HSS/'>"+

"<soapenv:Header>"+
   "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
			 "<wsse:UsernameToken>"+
				 "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
				 "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
			 "</wsse:UsernameToken>"+
		 "</wsse:Security>"+
"</soapenv:Header>"+

"+<soapenv:Body>"+
"+<cai3:Create>"+
"+<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
"+<cai3:MOId>"+
"+<hss:imsi>"+IMSI+"</hss:imsi>"+
"+</cai3:MOId>"+
"+<cai3:MOAttributes>"+
"+<hss:CreateEPSMultiSC imsi='"+IMSI+"'>"+
"+<hss:imsi>"+IMSI+"</hss:imsi>"+
"+<hss:msisdn>"+msisdn+"</hss:msisdn>"+
"+<hss:epsProfileId>"+epsProfileId+"</hss:epsProfileId>"+
"+<hss:epsZoneCodeSetId>"+epsZoneCodeSetId+"</hss:epsZoneCodeSetId>"+
"+</hss:CreateEPSMultiSC>"+
"+</cai3:MOAttributes>"+
"+</cai3:Create>"+
"+</soapenv:Body>"+
"+</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function CreateNewGPRSLine(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+

  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+

"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"<gsm:profileId>"+profileId+"</gsm:profileId>"+
"<gsm:csp>1</gsm:csp>"+
"<gsm:gprs pdpid='"+pdpid+"' apnid='"+apnid+"'>"+
"<gsm:pdpid>"+pdpid+"</gsm:pdpid>"+
"<gsm:apnid>"+apnid+"</gsm:apnid>"+
"<gsm:eqosid>"+eqosid+"</gsm:eqosid>"+
"<gsm:pdpty>IPV4</gsm:pdpty>"+
"</gsm:gprs>"+
"<gsm:baic>"+
"<gsm:provisionState>1</gsm:provisionState>"+
"<gsm:activationState>1</gsm:activationState>"+
"<gsm:ts10>"+
"<gsm:activationState>1</gsm:activationState>"+
"</gsm:ts10>"+
"</gsm:baic>  "+
"<gsm:baoc>"+
"<gsm:provisionState>1</gsm:provisionState>"+
"<gsm:activationState>1</gsm:activationState>"+
"<gsm:ts10>"+
"<gsm:activationState>1</gsm:activationState>"+
"</gsm:ts10>"+
"</gsm:baoc>"+
"</gsm:createSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function CreatePrepaidSubscriber(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+

  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+

"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<!--Optional:-->"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"</cai3:MOId>"+
"<!--Optional:-->"+
"<cai3:MOAttributes>"+
"<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"<gsm:profileId>"+profileId+"</gsm:profileId>"+
"<!--Optional:-->"+
"<gsm:csp>3</gsm:csp>      "+
"<!--Zero or more repetitions:-->"+
"<gsm:gprs pdpid='"+pdpid+"' apnid='"+apnid+"'>"+
"<!--Optional:-->"+
"<gsm:pdpid>"+pdpid+"</gsm:pdpid>"+
"<!--Optional:-->"+
"<gsm:apnid>"+apnid+"</gsm:apnid>"+
"<!--Optional:-->"+
"<gsm:eqosid>"+eqosid+"</gsm:eqosid>"+
"<!--Optional:-->"+
"<gsm:pdpty>"+pdpty+"</gsm:pdpty>"+
"</gsm:gprs>"+
"</gsm:createSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function CreateSubscriberFriendi(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<!--Optional:-->"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"</cai3:MOId>"+
"<!--Optional:-->"+
"<cai3:MOAttributes>"+
"<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"<gsm:profileId>"+profileId+"</gsm:profileId>"+
"<!--Zero or more repetitions:-->"+
"<gsm:gprs pdpid='"+pdpid+"' apnid='"+apnid+"'>"+
"<!--Optional:-->"+
"<gsm:pdpid>"+pdpid+"</gsm:pdpid>"+
"<!--Optional:-->"+
"<gsm:apnid>"+apnid+"</gsm:apnid>"+
"<!--Optional:-->"+
"<gsm:eqosid>"+eqosid+"</gsm:eqosid>"+
"<!--Optional:-->"+
"<gsm:pdpty>"+pdpty+"</gsm:pdpty>"+
"</gsm:gprs>"+
"<gsm:cfu>"+
"<!--Optional:-->"+
"<gsm:provisionState>1</gsm:provisionState>"+
"</gsm:cfu>"+
"<gsm:cfb>"+
"<!--Optional:-->"+
"<gsm:provisionState>1</gsm:provisionState>"+
"</gsm:cfb>     "+
"<gsm:cfnrc>"+
"<!--Optional:-->"+
"<gsm:provisionState>1</gsm:provisionState>"+
"</gsm:cfnrc>"+
"<gsm:cfnry>"+
"<!--Optional:-->"+
"<gsm:provisionState>1</gsm:provisionState>"+
"</gsm:cfnry>"+
"<gsm:dcf>"+
"<!--Optional:-->"+
"<gsm:provisionState>1</gsm:provisionState>"+
"<!--Optional:-->"+
"<gsm:activationState>1</gsm:activationState>"+
"<gsm:fnum>"+msisdn+"</gsm:fnum>"+
"<gsm:ts10>"+
"<!--Optional:-->"+
"<gsm:activationState>1</gsm:activationState>"+
"</gsm:ts10>"+
"</gsm:dcf>  "+
"<gsm:sosdcf>4</gsm:sosdcf>"+
"</gsm:createSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewCfCwCliSmsVms(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "<soapenv:Body>"+
  "<cai3:Create>"+
  "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
  "<cai3:MOId>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "</cai3:MOId>"+
  "<cai3:MOAttributes>"+
  "<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "<gsm:profileId>"+profileId+"</gsm:profileId>"+
  "<gsm:csp>1</gsm:csp>      "+
  "<gsm:gprs pdpid='"+pdpid+"' apnid='"+apnid+"'>"+
  "<gsm:pdpid>"+pdpid+"</gsm:pdpid>"+
  "<gsm:apnid>"+apnid+"</gsm:apnid>"+
  "<gsm:eqosid>1</gsm:eqosid>"+
  "<gsm:pdpty>"+pdpty+"</gsm:pdpty>"+
  "</gsm:gprs>"+
  "</gsm:createSubscription>"+
  "</cai3:MOAttributes>"+
  "</cai3:Create>"+
  "</soapenv:Body>"+
  "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewInternational(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "<soapenv:Body>"+
  "<cai3:Create>"+
  "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
  "<cai3:MOId>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "</cai3:MOId>"+
  "<cai3:MOAttributes>"+
  "<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "<gsm:profileId>"+profileId+"</gsm:profileId>"+
  "<gsm:csp>1</gsm:csp>"+
  "</gsm:createSubscription>"+
  "</cai3:MOAttributes>"+
  "</cai3:Create>"+
  "</soapenv:Body>"+
  "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewInternationalRoam(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "<soapenv:Body>"+
  "<cai3:Create>"+
  "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
  "<cai3:MOId>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "</cai3:MOId>"+
  "<cai3:MOAttributes>"+
  "<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "<gsm:profileId>"+profileId+"</gsm:profileId>"+
  "<gsm:csp>1</gsm:csp>"+
  "</gsm:createSubscription>"+
  "</cai3:MOAttributes>"+
  "</cai3:Create>"+
  "</soapenv:Body>"+
  "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewFRINDISubscriber(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"<gsm:profileId>"+profileId+"</gsm:profileId>"+
"<!--Zero or more repetitions:-->"+
"<gsm:gprs pdpid='3' apnid='5'>"+
"<gsm:pdpid>3</gsm:pdpid>"+
"<gsm:apnid>5</gsm:apnid>"+
"<gsm:eqosid>1</gsm:eqosid>"+
"<gsm:pdpty>IPV4</gsm:pdpty>"+
"</gsm:gprs>"+
"<gsm:dcf>"+
"<gsm:provisionState>1</gsm:provisionState>"+
"<gsm:activationState>1</gsm:activationState>"+
"<gsm:fnum>962755514142</gsm:fnum>"+
"<gsm:ts10>"+
"<gsm:activationState>1</gsm:activationState>"+
"</gsm:ts10>"+
"</gsm:dcf>"+
"<gsm:sosdcf>4</gsm:sosdcf>"+
"</gsm:createSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewFRINDISubscriberLowPriority(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"<gsm:profileId>"+profileId+"</gsm:profileId>"+
"<gsm:gprs pdpid='3' apnid='5'>"+
"<gsm:pdpid>3</gsm:pdpid>"+
"<gsm:apnid>5</gsm:apnid>"+
"<gsm:eqosid>1</gsm:eqosid>"+
"<gsm:pdpty>IPV4</gsm:pdpty>"+
"</gsm:gprs>"+
"<gsm:dcf>"+
"<gsm:provisionState>1</gsm:provisionState>"+
"<gsm:activationState>1</gsm:activationState>"+
"<gsm:fnum>"+fnum+"</gsm:fnum>"+
"<gsm:ts10>"+
"<gsm:activationState>1</gsm:activationState>"+
"</gsm:ts10>"+
"</gsm:dcf>"+
"<gsm:sosdcf>4</gsm:sosdcf>"+
"</gsm:createSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewPRIMSub(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"<gsm:profileId>"+profileId+"</gsm:profileId>"+
"</gsm:createSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewPostpaid(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "<soapenv:Body>"+
  "<cai3:Create>"+
  "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
  "<!--Optional:-->"+
  "<cai3:MOId>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "</cai3:MOId>"+
  "<!--Optional:-->"+
  "<cai3:MOAttributes>"+
  "<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "<gsm:profileId>"+profileId+"</gsm:profileId>"+
  "</gsm:createSubscription>"+
  "</cai3:MOAttributes>"+
  "</cai3:Create>"+
  "</soapenv:Body>"+
  "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewPostpaidCfCwCliSmsVms(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"<gsm:profileId>5</gsm:profileId>"+
"<gsm:csp>1</gsm:csp>"+
"<gsm:gprs pdpid='4' apnid='1'>"+
"<gsm:pdpid>4</gsm:pdpid>"+
"<gsm:apnid>1</gsm:apnid>"+
"<gsm:eqosid>1</gsm:eqosid>"+
"<gsm:pdpty>IPV4</gsm:pdpty>"+
"</gsm:gprs>"+
"</gsm:createSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewPostpaidBroadbandITrack(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "<soapenv:Body>"+
  "<cai3:Create>"+
  "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
  "<!--Optional:-->"+
  "<cai3:MOId>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "</cai3:MOId>"+
  "<!--Optional:-->"+
  "<cai3:MOAttributes>"+
  "<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "<gsm:profileId>9</gsm:profileId>"+
  "<!--Optional:-->"+
  "<gsm:csp>1</gsm:csp>      "+
  "<!--Zero or more repetitions:-->"+
  "<gsm:gprs pdpid='4' apnid='104'>"+
  "<!--Optional:-->"+
  "<gsm:pdpid>4</gsm:pdpid>"+
  "<!--Optional:-->"+
  "<gsm:apnid>104</gsm:apnid>"+
  "<!--Optional:-->"+
  "<gsm:eqosid>2</gsm:eqosid>"+
  "<!--Optional:-->"+
  "<gsm:pdpty>IPV4</gsm:pdpty>"+
  "</gsm:gprs>"+
  "</gsm:createSubscription>"+
  "</cai3:MOAttributes>"+
  "</cai3:Create>"+
  "</soapenv:Body>"+
  "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewPostpaidBroadband(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "<soapenv:Body>"+
  "<cai3:Create>"+
  "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
  "<cai3:MOId>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "</cai3:MOId>"+
  "<cai3:MOAttributes>"+
  "<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "<gsm:profileId>9</gsm:profileId>"+
  "<gsm:csp>1</gsm:csp>"+
  "<gsm:gprs pdpid='4' apnid='205'>"+
  "<gsm:pdpid>4</gsm:pdpid>"+
  "<gsm:apnid>205</gsm:apnid>"+
  "<gsm:eqosid>2</gsm:eqosid>"+
  "<gsm:pdpty>IPV4</gsm:pdpty>"+
  "</gsm:gprs>"+
  "<gsm:obp>2</gsm:obp>"+
  "</gsm:createSubscription>"+
  "</cai3:MOAttributes>"+
  "</cai3:Create>"+
  "</soapenv:Body>"+
  "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewPostpaidwithGPRSAndData(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"<gsm:profileId>8</gsm:profileId>"+
"<gsm:csp>1</gsm:csp>"+
"<gsm:gprs pdpid='4' apnid='1'>"+
"<gsm:pdpid>4</gsm:pdpid>"+
"<gsm:apnid>1</gsm:apnid>"+
"<gsm:eqosid>1</gsm:eqosid>"+
"<gsm:pdpty>IPV4</gsm:pdpty>"+
"</gsm:gprs>"+
"<gsm:baic>"+
"<gsm:provisionState>1</gsm:provisionState>"+
"<gsm:activationState>1</gsm:activationState>"+
"<gsm:ts10>"+
"<gsm:activationState>1</gsm:activationState>"+
"</gsm:ts10>"+
"</gsm:baic>  "+
"<gsm:baoc>"+
"<gsm:provisionState>1</gsm:provisionState>"+
"<gsm:activationState>1</gsm:activationState>"+
"<gsm:ts10>"+
"<gsm:activationState>1</gsm:activationState>"+
"</gsm:ts10>"+
"</gsm:baoc>"+
"</gsm:createSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewPrepaidBroadband(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"<gsm:profileId>10</gsm:profileId>"+
"<gsm:csp>3</gsm:csp>      "+
"<gsm:gprs pdpid='4' apnid='1'>"+
"<gsm:pdpid>4</gsm:pdpid>"+
"<gsm:apnid>69</gsm:apnid>"+
"<gsm:eqosid>2</gsm:eqosid>"+
"<gsm:pdpty>IPV4</gsm:pdpty>"+
"</gsm:gprs>"+
"</gsm:createSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewPrepaidSubscriber(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "+<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "+<soapenv:Body>"+
  "+<cai3:Create>"+
  "+<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
  "+<cai3:MOId>"+
  "+<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "+<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "+</cai3:MOId>"+
  "+<cai3:MOAttributes>"+
  "+<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
  "+<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "+<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "+<gsm:profileId>6</gsm:profileId>"+
  "+<gsm:csp>3</gsm:csp>"+
  "+<gsm:gprs pdpid='4' apnid='1'>"+
  "+<gsm:pdpid>4</gsm:pdpid>"+
  "+<gsm:apnid>1</gsm:apnid>"+
  "+<gsm:eqosid>1</gsm:eqosid>"+
  "+<gsm:pdpty>IPV4</gsm:pdpty>"+
  "+</gsm:gprs>"+
  "+</gsm:createSubscription>"+
  "+</cai3:MOAttributes>"+
  "+</cai3:Create>"+
  "+</soapenv:Body>"+
  "+</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewPrepaidSubscriberFriendi(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"<gsm:imsi>"+IMSI+"</gsm:imsi>"+
"<gsm:profileId>6</gsm:profileId>"+
"<gsm:csp>5</gsm:csp>"+
"<gsm:gprs pdpid='4' apnid='5'>"+
"<gsm:pdpid>4</gsm:pdpid>"+
"<gsm:apnid>5</gsm:apnid>"+
"<gsm:eqosid>1</gsm:eqosid>"+
"<gsm:pdpty>IPV4</gsm:pdpty>"+
"</gsm:gprs>"+
"</gsm:createSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function NewPrepaidSubscriberCSP17(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "<soapenv:Body>"+
  "<cai3:Create>"+
  "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
  "<!--Optional:-->"+
  "<cai3:MOId>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "</cai3:MOId>"+
  "<!--Optional:-->"+
  "<cai3:MOAttributes>"+
  "<gsm:createSubscription msisdn='"+msisdn+"' imsi='"+IMSI+"'>"+
  "<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
  "<gsm:imsi>"+IMSI+"</gsm:imsi>"+
  "<gsm:profileId>6</gsm:profileId>"+
  "<!--Optional:-->"+
  "<gsm:csp>17</gsm:csp>      "+
  "<!--Zero or more repetitions:-->"+
  "<gsm:gprs pdpid='4' apnid='1'>"+
  "<!--Optional:-->"+
  "<gsm:pdpid>4</gsm:pdpid>"+
  "<!--Optional:-->"+
  "<gsm:apnid>1</gsm:apnid>"+
  "<!--Optional:-->"+
  "<gsm:eqosid>1</gsm:eqosid>"+
  "<!--Optional:-->"+
  "<gsm:pdpty>IPV4</gsm:pdpty>"+
  "</gsm:gprs>"+
  "</gsm:createSubscription>"+
  "</cai3:MOAttributes>"+
  "</cai3:Create>"+
  "</soapenv:Body>"+
  "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function CreateHSS(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:hss='http://schemas.ericsson.com/ma/HSS/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "<soapenv:Body>"+
  "<cai3:Create>"+
  "<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
  "<cai3:MOId>"+
  "<hss:imsi>"+IMSI+"</hss:imsi>"+
  "</cai3:MOId>"+
  "<cai3:MOAttributes>"+
  "<hss:CreateEPSMultiSC imsi='"+IMSI+"'>"+
  "<hss:imsi>"+IMSI+"</hss:imsi>"+
  "<hss:msisdn>"+msisdn+"</hss:msisdn>"+
  "<hss:epsProfileId>"+epsProfileId+"</hss:epsProfileId>"+
  "<hss:epsZoneCodeSetId>"+epsZoneCodeSetId+"</hss:epsZoneCodeSetId>"+
  "</hss:CreateEPSMultiSC>"+
  "</cai3:MOAttributes>"+
  "</cai3:Create>"+
  "</soapenv:Body>"+
  "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function CreateMMTEL(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr ="";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function CREATEPCRF(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:pcrf='http://schemas.ericsson.com/ma/CA/PCRF/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Create>"+
"<cai3:MOType>PCRFUser@http://schemas.ericsson.com/ma/CA/PCRF/</cai3:MOType>"+
"<cai3:MOId>"+
"<pcrf:usrIdentifier>"+usrIdentifier+"</pcrf:usrIdentifier>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<pcrf:CreatePCRFUser>"+
"<pcrf:addSubscriber>"+
"<pcrf:usrIdentifier>"+usrIdentifier+"</pcrf:usrIdentifier>"+
"<pcrf:usrPaidType>0</pcrf:usrPaidType>"+
"</pcrf:addSubscriber>"+
"</pcrf:CreatePCRFUser>"+
"</cai3:MOAttributes>"+
"</cai3:Create>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function AddFNFLocal(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "<soapenv:Body>"+
  "<cai3:Set>"+
  "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
  "<cai3:MOId>"+
  "<air:subscriberNumber>"+msisdn+"</air:subscriberNumber>"+
  "</cai3:MOId>"+
  "<cai3:MOAttributes>"+
  "<air:setSubscription subscriberNumber='"+msisdn+"'>"+
  "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
  "<air:originOperatorID>1</air:originOperatorID>"+
  "<air:faf fafNumber='"+fafNumber+"' owner='Subscriber'>"+
  "<air:fafNumber>"+fafNumber+"</air:fafNumber>"+
  "<air:owner>Subscriber</air:owner>"+
  "<air:fafIndicator>"+fafIndicator+"</air:fafIndicator>"+
  "<air:selectedOption>2</air:selectedOption>"+
  "<air:chargingRequestInformation>"+
  "<air:chargingType>"+chargingType+"</air:chargingType>"+
  "<air:chargingIndicator>"+chargingIndicator+"</air:chargingIndicator>"+
  "</air:chargingRequestInformation>"+
  "</air:faf>"+
  "</air:setSubscription>"+
  "</cai3:MOAttributes>"+
  "</cai3:Set>"+
  "</soapenv:Body>"+
  "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function SetRefillBarring(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>CSSVSUB@http://schemas.ericsson.com/ma/CA/CSSVSUB/</cai3:MOType>"+
"<cai3:MOId>"+
"<css:msisdn>"+msisdn+"</css:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<css:SetCSSVSUB>"+
"<css:msisdn>"+msisdn+"</css:msisdn>"+
"<css:refillBarring>"+
"<css:actionId>11</css:actionId>                "+
"<css:refillBarAction>"+refillBarAction+"</css:refillBarAction>"+
"</css:refillBarring>"+
"</css:SetCSSVSUB>"+
"</cai3:MOAttributes>"+
"</cai3:Set>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function RemoveRefillBarring(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
    "<soapenv:Header>"+
    "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
    "</soapenv:Header>"+
  "<soapenv:Body>"+
  "<cai3:Set>"+
  "<cai3:MOType>CSSVSUB@http://schemas.ericsson.com/ma/CA/CSSVSUB/</cai3:MOType>"+
  "<cai3:MOId>"+
  "<css:msisdn>"+msisdn+"</css:msisdn>"+
  "</cai3:MOId>"+
  "<cai3:MOAttributes>"+
  "<css:SetCSSVSUB>"+
  "<css:msisdn>"+msisdn+"</css:msisdn>"+
  "<css:refillBarring>"+
  "<css:actionId>11</css:actionId>                "+
  "<css:refillBarAction>"+refillBarAction+"</css:refillBarAction>"+
  "</css:refillBarring>"+
  "</css:SetCSSVSUB>"+
  "</cai3:MOAttributes>"+
  "</cai3:Set>"+
  "</soapenv:Body>"+
  "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function AddShortCode(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:af='http://schemas.ericsson.com/ma/CS/AF/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Identifier@http://schemas.ericsson.com/ma/CS/AF/</cai3:MOType>"+
"<cai3:MOId>"+
"<af:msisdn>"+msisdn+"</af:msisdn>"+
"<af:identifier>"+identifier+"</af:identifier>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<af:setIdentifier msisdn='"+msisdn+"' identifier='10081.2665'>"+
"<af:type>"+type+"</af:type>"+
"</af:setIdentifier>"+
"</cai3:MOAttributes>"+
"</cai3:Set>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function ResetPIN(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>CSSVSUB@http://schemas.ericsson.com/ma/CA/CSSVSUB/</cai3:MOType>"+
"<cai3:MOId>"+
"<css:msisdn>"+msisdn+"</css:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<css:SetCSSVSUB>"+
"<css:msisdn>"+msisdn+"</css:msisdn>"+
"<css:pinReset>"+
"<css:actionId>10</css:actionId>"+
"<css:actionType>UpdateAccountDetails</css:actionType>"+
"<css:pinCode>"+pincode+"</css:pinCode>"+
"<css:pinCodeValidationFlag>0</css:pinCodeValidationFlag>"+
"</css:pinReset>"+
"</css:SetCSSVSUB>"+
"</cai3:MOAttributes>"+
"</cai3:Set>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function MoneyTransferBarring(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
  "<soapenv:Header>"+
	"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
  "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>CSSVSUB@http://schemas.ericsson.com/ma/CA/CSSVSUB/</cai3:MOType>"+
"<cai3:MOId>"+
"<css:msisdn>"+msisdn+"</css:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<css:SetCSSVSUB>"+
"<css:msisdn>"+msisdn+"</css:msisdn>"+
"<css:moneyTransferUnbarring>"+
"<css:actionId>13</css:actionId>"+
"<css:accumulator>"+
"<css:accumulatorID>"+accumulatorID+"</css:accumulatorID>"+
"<css:accumulatorValueAbsolute>"+accumulatorValueAbsolute+"</css:accumulatorValueAbsolute>"+
"</css:accumulator>"+
"</css:moneyTransferUnbarring>"+
"</css:SetCSSVSUB>"+
"</cai3:MOAttributes>"+
"</cai3:Set>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  function MoneytransferUnbarring(){
    console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
    "<soapenv:Header>"+
    "<cai3:SessionId>30cec54a38504704b3c976403e25c913</cai3:SessionId>"+
    "</soapenv:Header>"+
    "<soapenv:Body>"+
    "<cai3:Set>"+
    "<cai3:MOType>CSSVSUB@http://schemas.ericsson.com/ma/CA/CSSVSUB/</cai3:MOType>"+
    "<cai3:MOId>"+
    "<css:msisdn>"+msisdn+"</css:msisdn>"+
    "</cai3:MOId>"+
    "<cai3:MOAttributes>"+
    "<css:SetCSSVSUB>"+
    "<css:msisdn>"+msisdn+"</css:msisdn>"+
    "<css:moneyTransferUnbarring>"+
    "<css:actionId>13</css:actionId>             "+
    "<css:accumulator>"+
    "<css:accumulatorID>"+accumulatorID+"</css:accumulatorID>"+
    "<css:accumulatorValueAbsolute>0</css:accumulatorValueAbsolute>"+
    "</css:accumulator>"+
    "</css:moneyTransferUnbarring>"+
    "</css:SetCSSVSUB>"+
    "</cai3:MOAttributes>"+
    "</cai3:Set>"+
    "</soapenv:Body>"+
    "</soapenv:Envelope>";
     //alert(sr);
    xmlhttp.onreadystatechange = function () {
      //alert('first');
        if (xmlhttp.readyState == 4) {
          //alert('secound');
            if (xmlhttp.status == 200 || xmlhttp.status==500) {

              var resultText = xmlhttp.responseText;
              // console.log(resultText);
if(resultText.search("error")!=-1 || resultText.search("fault")!=-1){
                alert("Invalid Process");
                //To Get error
                var x,y, i, xmlDoc, txt,txt1;
                txt = "";
                txt1 = "";
                xmlDoc=xmlhttp.responseXML;

                x = xmlDoc.getElementsByTagName('errormessage');
                for (i = 0; i < x.length; i++) {
                  txt += x[i].childNodes[0].nodeValue;
                }
                y = xmlDoc.getElementsByTagName('errorcode');
                for (i = 0; i < y.length; i++) {
                  txt1 += y[i].childNodes[0].nodeValue;
                }
                alert("Error Message: "+txt+"\n"+"Error Code: "+txt1);
        
                }else{
                  alert("Success Process");
                }
             // alert(" working");
              //alert(sr.response);
              //To Get error
              var x, i, xmlDoc, txt;
              // xmlDoc = sr.responseXML;
              // console.log(xmlDoc);
              // txt = "";
              // x = xmlDoc.getElementsByTagName("sessionId");
              // for (i = 0; i < x.length; i++) {
              //   txt += x[i].childNodes[0].nodeValue;
              // }
       
              // this.setState({ sessionId: txt });
              //console.log(this.state.sessionId);
              txt = "";
              console.log("txt = ", txt);
      
                
            }
        }
    }
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
  }
  

window.addEventListener('click', function () {
  const searchBar = document.getElementById('myInput');
searchBar.addEventListener('keyup', (e) => {
      const searchString = e.target.value.toLowerCase();
      myFunction(searchString);
  });
});
function myFunction() {
  // console.log("Work");
  // Declare variables
  var input, filter, div, card, h5, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  div = document.getElementById("cards");
  card = div.getElementsByClassName('card');

  for (i = 0; i < card.length; i++) {
    h5 = card[i].getElementsByTagName("h5")[0];
    txtValue = h5.textContent || h5.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}




  return (
    <>
      <div className="content" id="cards">
        <input type="text" id="myInput" placeholder="Search.."/>
        <br/><br/>

        <Row>
          <Col md="8">
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
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
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
                          name="SDPName"
                          onChange={(e) => setSDPName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={CreateAF}>
                  Save
                </Button>
              </CardFooter>
            </Card>

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
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>serviceClass</label>
                        <Input
                          name="serviceClass"
                          defaultValue=""
                          placeholder="serviceClass"
                          type="text"
                          onChange={(e) => setServiceClass(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>temporary Blocked Flag</label>
                        <Input
                          name="temporaryBlockedFlag"
                          defaultValue="1"
                          placeholder="temporaryBlockedFlag"
                          type="text"
                          onChange={(e) => setTemporaryBlockedFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Account Activation Flag</label>
                        <Input
                          name="AccountActivationFlag"
                          defaultValue="1"
                          placeholder="accountActivationFlag"
                          type="text"
                          onChange={(e) => setAccountActivationFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Service Offerings</label>
                        <Input
                          name="ServiceOfferings"
                          defaultValue="1"
                          placeholder="serviceOfferings"
                          type="text"
                          onChange={(e) => setServiceOfferingID(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>service Offering Active Flag</label>
                        <Input
                          name="serviceOfferingActiveFlag"
                          defaultValue="1"
                          placeholder="serviceOfferingActiveFlag"
                          type="text"
                          onChange={(e) => setServiceOfferingActiveFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={InstallSubscriberPostpaid} >
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">Install Subscriber Postpaid with accumelator</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>serviceClass</label>
                        <Input
                          name="serviceClass"
                          defaultValue=""
                          placeholder="serviceClass"
                          type="text"
                          onChange={(e) => setServiceClass(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>temporary Blocked Flag</label>
                        <Input
                          name="temporaryBlockedFlag"
                          defaultValue="1"
                          placeholder="temporaryBlockedFlag"
                          type="text"
                          onChange={(e) => setTemporaryBlockedFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Account Activation Flag</label>
                        <Input
                          name="AccountActivationFlag"
                          defaultValue="1"
                          placeholder="accountActivationFlag"
                          type="text"
                          onChange={(e) => setAccountActivationFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Service Offerings</label>
                        <Input
                          name="Service Offerings"
                          defaultValue="1"
                          placeholder="serviceOfferings"
                          type="text"
                          onChange={(e) => setServiceOfferingID(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>service Offering Active Flag</label>
                        <Input
                          name="serviceOfferingActiveFlag"
                          defaultValue="1"
                          placeholder="serviceOfferingActiveFlag"
                          type="text"
                          onChange={(e) => setServiceOfferingActiveFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Accumulato ID</label>
                        <Input
                          name="accumulatorID"
                          defaultValue="5001"
                          placeholder="accumulatorID"
                          type="text"
                          onChange={(e) => setAccumulatorID(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" 
                onClick={InstallSubscriberPostpaidWithAccumelator}>
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">Install Subscriber Prepaid</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>serviceClass</label>
                        <Input
                          name="serviceClass"
                          defaultValue=""
                          placeholder="serviceClass"
                          type="text"
                          onChange={(e) => setServiceClass(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>temporary Blocked Flag</label>
                        <Input
                          name="temporaryBlockedFlag"
                          defaultValue="1"
                          placeholder="temporaryBlockedFlag"
                          type="text"
                          onChange={(e) => setTemporaryBlockedFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Account Activation Flag</label>
                        <Input
                          name="AccountActivationFlag"
                          defaultValue="1"
                          placeholder="accountActivationFlag"
                          type="text"
                          onChange={(e) => setAccountActivationFlag(e.target.value)}

                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Service Offerings</label>
                        <Input
                          name="Service Offerings"
                          defaultValue="1"
                          placeholder="serviceOfferings"
                          type="text"
                          onChange={(e) => setServiceOfferingID(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>service Offering Active Flag</label>
                        <Input
                          name="serviceOfferingActiveFlag"
                          defaultValue="1"
                          placeholder="serviceOfferingActiveFlag"
                          type="text"
                          onChange={(e) => setServiceOfferingActiveFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={InstallSubscriberPrepaid} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Install Subscriber Prepaid With SOB</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>serviceClass</label>
                        <Input
                          name="serviceClass"
                          defaultValue=""
                          placeholder="serviceClass"
                          type="text"
                          onChange={(e) => setServiceClass(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>temporary Blocked Flag</label>
                        <Input
                          name="temporaryBlockedFlag"
                          defaultValue="1"
                          placeholder="temporaryBlockedFlag"
                          type="text"
                          onChange={(e) => setTemporaryBlockedFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Account Activation Flag</label>
                        <Input
                          name="AccountActivationFlag"
                          defaultValue="1"
                          placeholder="accountActivationFlag"
                          type="text"
                          onChange={(e) => setAccountActivationFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Service Offerings</label>
                        <Input
                          name="Service Offerings"
                          defaultValue="1"
                          placeholder="serviceOfferings"
                          type="text"
                          onChange={(e) => setServiceOfferingID(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>service Offering Active Flag</label>
                        <Input
                          name="serviceOfferingActiveFlag"
                          defaultValue="1"
                          placeholder="serviceOfferingActiveFlag"
                          type="text"
                          onChange={(e) => setServiceOfferingActiveFlag(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={InstallSubscriberPrepaidWithSOB}>
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">create CSP</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>CSP</label>
                        <Input
                          name="csp"
                          defaultValue=""
                          placeholder="CSP"
                          type="text"
                          onChange={(e) => setCsp(e.target.value)}

                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>RSA</label>
                        <Input
                          name="rsa"
                          defaultValue="100"
                          placeholder="rsa"
                          type="text"
                          onChange={(e) => setRsa(e.target.value)}

                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={createCSP}>
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">create EPS</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Eps Profile Id</label>
                        <Input
                          name="epsProfileId"
                          defaultValue="Zain"
                          placeholder="epsProfileId"
                          type="text"
                          onChange={(e) => setEpsProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Eps Zone Code Set Id</label>
                        <Input
                          name="epsZoneCodeSetId"
                          defaultValue="10"
                          placeholder="epsZoneCodeSetId"
                          type="text"
                          onChange={(e) => setEpsZoneCodeSetId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={createEPS} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Create New GPRS Line (1/2)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Profile Id</label>
                        <Input
                          name="profileId"
                          defaultValue=""
                          placeholder="profileId"
                          type="text"
                          onChange={(e) => setProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          name="pdpid"
                          defaultValue=""
                          placeholder="pdpid"
                          type="text"
                          onChange={(e) => setPdpid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          name="apnid"
                          defaultValue=""
                          placeholder="apnid"
                          type="text"
                          onChange={(e) => setApnid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          name="eqosid"
                          defaultValue=""
                          placeholder="eqosid"
                          type="text"
                          onChange={(e) => setEqosid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          name="pdpty"
                          defaultValue=""
                          placeholder="pdpty"
                          type="text"
                          onChange={(e) => setPdpty(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={CreateNewGPRSLine} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Create Prepaid Subscriber (low)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Profile Id</label>
                        <Input
                          name="profileId"
                          defaultValue=""
                          placeholder="profileId"
                          type="text"
                          onChange={(e) => setProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          name="pdpid"
                          defaultValue=""
                          placeholder="pdpid"
                          type="text"
                          onChange={(e) => setPdpid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          name="apnid"
                          defaultValue=""
                          placeholder="apnid"
                          type="text"
                          onChange={(e) => setApnid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          name="eqosid"
                          defaultValue=""
                          placeholder="eqosid"
                          type="text"
                          onChange={(e) => setEqosid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          name="pdpty"
                          defaultValue=""
                          placeholder="pdpty"
                          type="text"
                          onChange={(e) => setPdpty(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={CreatePrepaidSubscriber} >
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">Create Subscriber (Friendi)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Profile Id</label>
                        <Input
                          name="profileId"
                          defaultValue=""
                          placeholder="profileId"
                          type="text"
                          onChange={(e) => setProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          name="pdpid"
                          defaultValue=""
                          placeholder="pdpid"
                          type="text"
                          onChange={(e) => setPdpid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          name="apnid"
                          defaultValue=""
                          placeholder="apnid"
                          type="text"
                          onChange={(e) => setApnid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          name="eqosid"
                          defaultValue=""
                          placeholder="eqosid"
                          type="text"
                          onChange={(e) => setEqosid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          name="pdpty"
                          defaultValue=""
                          placeholder="pdpty"
                          type="text"
                          onChange={(e) => setPdpty(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={CreateSubscriberFriendi} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New (CF,CW,CLI,SMS,VMS)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Profile Id</label>
                        <Input
                          name="profileId"
                          defaultValue=""
                          placeholder="profileId"
                          type="text"
                          onChange={(e) => setProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpid</label>
                        <Input
                          name="pdpid"
                          defaultValue=""
                          placeholder="pdpid"
                          type="text"
                          onChange={(e) => setPdpid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>apnid</label>
                        <Input
                          name="apnid"
                          defaultValue=""
                          placeholder="apnid"
                          type="text"
                          onChange={(e) => setApnid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eqosid</label>
                        <Input
                          name="eqosid"
                          defaultValue=""
                          placeholder="eqosid"
                          type="text"
                          onChange={(e) => setEqosid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>pdpty</label>
                        <Input
                          name="pdpty"
                          defaultValue=""
                          placeholder="pdpty"
                          type="text"
                          onChange={(e) => setPdpty(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewCfCwCliSmsVms} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New + International</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Profile Id</label>
                        <Input
                          name="profileId"
                          defaultValue=""
                          placeholder="profileId"
                          type="text"
                          onChange={(e) => setProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>csp</label>
                        <Input
                          name="csp"
                          defaultValue=""
                          placeholder="csp"
                          type="text"
                          onChange={(e) => setCsp(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewInternational} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New + International + Roam</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Profile Id</label>
                        <Input
                          name="profileId"
                          defaultValue=""
                          placeholder="profileId"
                          type="text"
                          onChange={(e) => setProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>csp</label>
                        <Input
                          name="csp"
                          defaultValue=""
                          placeholder="csp"
                          type="text"
                          onChange={(e) => setCsp(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewInternationalRoam} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New FRINDI Subscriber</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Profile Id</label>
                        <Input
                          name="profileId"
                          defaultValue=""
                          placeholder="profileId"
                          type="text"
                          onChange={(e) => setProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewFRINDISubscriber} >
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">New FRINDI Subscriber - Low Priority</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Profile Id</label>
                        <Input
                          name="profileId"
                          defaultValue=""
                          placeholder="profileId"
                          type="text"
                          onChange={(e) => setProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fnum</label>
                        <Input
                          name="fnum"
                          defaultValue=""
                          placeholder="fnum"
                          type="text"
                          onChange={(e) => setFnum(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewFRINDISubscriberLowPriority} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New PRI MSub</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Profile Id</label>
                        <Input
                          name="profileId"
                          defaultValue=""
                          placeholder="profileId"
                          type="text"
                          onChange={(e) => setProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fnum</label>
                        <Input
                          name="fnum"
                          defaultValue=""
                          placeholder="fnum"
                          type="text"
                          onChange={(e) => setFnum(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewPRIMSub} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New Postpaid</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Profile Id</label>
                        <Input
                          name="profileId"
                          defaultValue=""
                          placeholder="profileId"
                          type="text"
                          onChange={(e) => setProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>fnum</label>
                        <Input
                          name="fnum"
                          defaultValue=""
                          placeholder="fnum"
                          type="text"
                          onChange={(e) => setFnum(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewPostpaid} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New Postpaid (CF,CW,CLI,SMS,VMS)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewPostpaidCfCwCliSmsVms} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New Postpaid Broadband - ITrack</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewPostpaidBroadbandITrack} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New Postpaid Broadband</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewPostpaidBroadband} >
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">New Postpaid with GPRS and Data</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewPostpaidwithGPRSAndData} >
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">New Prepaid Broadband</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewPrepaidBroadband} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New Prepaid Subscriber</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewPrepaidSubscriber} >
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">New Prepaid Subscriber (Friendi)</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewPrepaidSubscriberFriendi} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">New Prepaid Subscriber - CSP 17</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}  
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}  
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={NewPrepaidSubscriberCSP17} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Create HSS</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}  
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}  
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>EpsProfileId</label>
                        <Input
                          name="epsProfileId"
                          defaultValue=""
                          placeholder="epsProfileId"
                          type="text"
                          onChange={(e) => setEpsProfileId(e.target.value)}  
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Eps Zone Code SetId</label>
                        <Input
                          name="epsZoneCodeSetId"
                          defaultValue=""
                          placeholder="epsZoneCodeSetId"
                          type="text"
                          onChange={(e) => setEpsZoneCodeSetId(e.target.value)}  
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={CreateHSS} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Create MMTEL</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="text"
                          onChange={(e) => setMsisdn(e.target.value)}  
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          defaultValue="41601***********"
                          placeholder="imsi"
                          type="text"
                          onChange={(e) => setIMSI(e.target.value)}  
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={CreateMMTEL} >
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">CREATE PCRF</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usrIdentifier</label>
                        <Input
                          name="usrIdentifier"
                          defaultValue="962*********"
                          placeholder="usrIdentifier"
                          type="text"
                          onChange={(e) => setUsrIdentifier(e.target.value)}  
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={CREATEPCRF} >
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
                          onChange={(e) => setMsisdn(e.target.value)}  
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
                          onChange={(e) => setFafNumber(e.target.value)}
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
                          onChange={(e) => setFafIndicator(e.target.value)}
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
                          onChange={(e) => setChargingType(e.target.value)}
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
                          onChange={(e) => setChargingIndicator(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={AddFNFLocal}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
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
                          onChange={(e) => setRefillBarAction(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={SetRefillBarring}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
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
                          onChange={(e) => setRefillBarAction(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={RemoveRefillBarring}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
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
                          onChange={(e) => setIdentifier(e.target.value)}
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
                          type="text"onChange={(e) => setType(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={AddShortCode}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
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
                          onChange={(e) => setPincode(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={ResetPIN}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
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
                          onChange={(e) => setAccumulatorID(e.target.value)}
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
                          onChange={(e) => setAccumulatorValueAbsolute(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={MoneyTransferBarring}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
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
                          onChange={(e) => setAccumulatorID(e.target.value)}
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
                          onChange={(e) => setAccumulatorValueAbsolute(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={MoneytransferUnbarring}>
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

export default Create;
