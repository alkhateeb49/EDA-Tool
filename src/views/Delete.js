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

import React,{useState} from 'react';

// reactstrap components
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



function Delete() {
  if(!sessionStorage.getItem('session')){
    window.location.href = '/login';}

  var today = new Date();
  var time = today.getTime();
  var later=sessionStorage.getItem('time')-time;


  // alert(later);
  setTimeout(function(){
    sessionStorage.clear();
  alert("Time Out");
  window.location.reload(false);
},later);




  const [msisdn, setMsisdn] = useState(0);
  const [imsi, setImsi]= useState(0);
  const [identifier , setIdentifier]= useState(0);
  const [type , setType]= useState(0);
  const [offerID , setOfferID]= useState(0);
  const [subscriberNumber , setSubscriberNumber] = useState(0);
  const [pamServiceID , setPamServiceID] = useState(0);
  const [associationId , setAssociationId] = useState(0);
  const [publicId , setPublicId] = useState (0);
  const [usrIdentifier , setUsrIdentifier] = useState(0);
  const [srvpkgName ,  setSrvpkgName] = useState(0);


  function deleteAf(){
  
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
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
     "<cai3:Delete>"+
        "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AF/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<af:msisdn>962"+msisdn+"</af:msisdn>"+
        "</cai3:MOId>"+
     "</cai3:Delete>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200 || xmlhttp.status==500) {
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


  function deleteIdentifier(){
  
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
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
     "<cai3:Delete>"+
        "<cai3:MOType>Identifier@http://schemas.ericsson.com/ma/CS/AF/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<af:msisdn>962"+msisdn+"</af:msisdn>"+
           "<af:identifier>"+identifier+"</af:identifier>"+
        "</cai3:MOId>"+
        "<cai3:MOAttributes>"+
           "<af:deleteIdentifier msisdn='962"+msisdn+"' identifier='"+identifier+"'>"+
              "<af:type>"+type+"</af:type>"+
           "</af:deleteIdentifier>"+
        "</cai3:MOAttributes>"+
     "</cai3:Delete>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200 || xmlhttp.status==500) {
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

  function deleteOffer(){
  
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
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
     "<cai3:Delete>"+
        "<cai3:MOType>Offer@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
           "<air:offerID>"+offerID+"</air:offerID>"+
        "</cai3:MOId>"+
        "<cai3:MOAttributes>"+
           "<air:deleteOffer subscriberNumber='962"+msisdn+"' offerID='"+offerID+"'>"+
             "<!--Optional:-->"+
              "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
              "<!--Optional:-->"+
              "<air:originOperatorID>1</air:originOperatorID>"+
              "<air:negotiatedCapabilities>0</air:negotiatedCapabilities>"+
           "</air:deleteOffer>"+
        "</cai3:MOAttributes>"+
     "</cai3:Delete>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200 || xmlhttp.status==500) {
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

  


 function deletePamServiceID(){
  
  //alert('start');

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
  
  // build SOAP request
 var sr =
"<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
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
         "<air:subscriberNumber>"+subscriberNumber+"</air:subscriberNumber>"+
      "</cai3:MOId>"+
      "<cai3:MOAttributes>"+
         "<air:setSubscription subscriberNumber='"+subscriberNumber+"'>"+
            "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
            "<air:periodicAccountManagementData pamServiceID='"+pamServiceID+"' xsi:nil='"+true+"'>"+
            "</air:periodicAccountManagementData>"+
         "</air:setSubscription>"+
      "</cai3:MOAttributes>"+
   "</cai3:Set>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200 || xmlhttp.status==500) {
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



function terminateAuc(){
  
  //alert('start');

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
  
  // build SOAP request
 var sr =
 "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmAuc/'>"+
"<soapenv:Header>"+
   "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
           "<wsse:UsernameToken>"+
               "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
               "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
           "</wsse:UsernameToken>"+
       "</wsse:Security>"+
"<soapenv:Body>"+
  "<cai3:Delete>"+
      "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmAuc/</cai3:MOType>"+
      "<cai3:MOId>"+
         "<imsi>"+imsi+"</imsi>"+
      "</cai3:MOId>"+
   "</cai3:Delete>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200 || xmlhttp.status==500) {
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


function deleteCssv(){
  
  //alert('start');

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
  
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
         "<css:msisdn>962"+msisdn+"</css:msisdn>"+
      "</cai3:MOId>"+
      "<cai3:MOAttributes>"+
        "<css:DeleteCSSVSUB>"+
            "<css:msisdn>962"+msisdn+"</css:msisdn>"+
            "<css:naturalDisconnection>"+
              "<css:actionId>8</css:actionId>"+
              "<css:msisdnNai>1</css:msisdnNai>"+
              "<css:originOperatorId>1234</css:originOperatorId>"+
              "<css:deleteReasonCode>0</css:deleteReasonCode>"+
              "<css:negotiatedCapabilities>0</css:negotiatedCapabilities>"+
            "</css:naturalDisconnection>"+
        "</css:DeleteCSSVSUB>"+
      "</cai3:MOAttributes>"+
   "</cai3:Set>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200 || xmlhttp.status==500) {
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


function deleteEps(){
  
  //alert('start');

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
  
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
    "<cai3:Delete>"+
       "<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
       "<cai3:MOId>"+
          "<hss:imsi>"+imsi+"</hss:imsi>"+
       "</cai3:MOId>"+
    "</cai3:Delete>"+
 "</soapenv:Body>"+
"</soapenv:Envelope> ";
alert(sr);
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200 || xmlhttp.status==500) {
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

function deleteHlr(){
  
  //alert('start');

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
  
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
    "<cai3:Delete>"+
       "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
       "<cai3:MOId>"+
          "<!--You have a CHOICE of the next 2 items at this level-->"+
          "<gsm:imsi>"+imsi+"</gsm:imsi>"+
       "</cai3:MOId>"+
       "<!--Optional:-->"+
       "<cai3:MOAttributes>"+
          "<gsm:deleteSubscription>"+
          "</gsm:deleteSubscription>"+
       "</cai3:MOAttributes>"+
    "</cai3:Delete>"+
 "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200 || xmlhttp.status==500) {
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

function deleteApn(){
  
  //alert('start');

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
  
  // build SOAP request
 var sr =
   "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
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
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
 "<!--You have a CHOICE of the next 2 items at this level-->"+
 "<gsm:msisdn>962"+msisdn+"</gsm:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
 "<gsm:setSubscription msisdn='962"+msisdn+"'>"+
  "<gsm:gprs pdpid='"+2+"' xsi:nil='"+true+"'/>"+
 "</gsm:setSubscription>"+
"</cai3:MOAttributes>"+
"</cai3:Set>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";

alert(sr);
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200 || xmlhttp.status==500) {
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
function deleteDns(){
  
     //alert('start');
 
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
     
     // build SOAP request
	  var sr =
	  	"<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:ns='http://schemas.ericsson.com/ema/UserProvisioning/IPWorks/5.0/'>"+
   "<soapenv:Header>"+
"<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
   "</soapenv:Header>"+
   "<soapenv:Body>"+
      "<cai3:Delete>"+
         "<cai3:MOType>DNSSubscription@http://schemas.ericsson.com/ema/UserProvisioning/IPWorks/5.0/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<!--You have a CHOICE of the next 2 items at this level-->"+
            "<ns:msisdn>962"+msisdn+"</ns:msisdn>"+
         "</cai3:MOId>"+
         "<cai3:MOAttributes>"+
            "<ns:deleteDNSSubscription msisdn='962"+msisdn+"'>"+
            "</ns:deleteDNSSubscription>"+
         "</cai3:MOAttributes>"+
      "</cai3:Delete>"+
   "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
     xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4) {
             if (xmlhttp.status == 200 || xmlhttp.status==500) {
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
   function deleteIms(){
  
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
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
     "<cai3:Delete>"+
        "<cai3:MOType>IMSAssociation@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<hss:associationId>962"+associationId+"</hss:associationId>"+
        "</cai3:MOId>"+
        "<!--Optional:-->"+
        "<cai3:MOAttributes>"+
           "<hss:DeleteIMSAssociation/>"+
        "</cai3:MOAttributes>"+
     "</cai3:Delete>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200 || xmlhttp.status==500) {
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

function deleteMtas(){
  
     //alert('start');
 
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
     
     // build SOAP request
	  var sr =
	  	"<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/'>"+
   "<soapenv:Header>"+
      "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                  "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
   "</soapenv:Header>"+
   "<soapenv:Body>"+
      "<cai3:Delete>"+
         "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<mtas:publicId>"+publicId+"</mtas:publicId>"+
         "</cai3:MOId>"+
      "</cai3:Delete>"+
   "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
     xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4) {
             if (xmlhttp.status == 200 || xmlhttp.status==500) {
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
   function removeIMSIFromSwitchOnly(){
  
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
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
       "<cai3:Delete>"+
          "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
          "<cai3:MOId>"+
             "<!--You have a CHOICE of the next 2 items at this level-->"+
          "<gsm:msisdn>962"+msisdn+"</gsm:msisdn>"+
          "</cai3:MOId>"+
          "<!--Optional:-->"+
          "<cai3:MOAttributes>"+
             "<gsm:deleteSubscription>"+
             "</gsm:deleteSubscription>"+
          "</cai3:MOAttributes>"+
       "</cai3:Delete>"+
    "</soapenv:Body>"+
 "</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200 || xmlhttp.status==500) {
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



   function termination(){
  
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
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
     "<cai3:Delete>"+
        "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<!--You have a CHOICE of the next 2 items at this level-->"+
        "<gsm:msisdn>962"+msisdn+"</gsm:msisdn>"+
        "</cai3:MOId>"+
        "<!--Optional:-->"+
        "<cai3:MOAttributes>"+
           "<gsm:deleteSubscription>"+
           "</gsm:deleteSubscription>"+
        "</cai3:MOAttributes>"+
     "</cai3:Delete>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200 || xmlhttp.status==500) {
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

  function deletePcrf(){
  
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
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
   "<cai3:Delete>"+
     "<cai3:MOType>PCRFUser@http://schemas.ericsson.com/ma/CA/PCRF/</cai3:MOType>"+
     "<cai3:MOId>"+
        "<pcrf:usrIdentifier>"+imsi+"</pcrf:usrIdentifier>"+
     "</cai3:MOId>"+
     "<cai3:MOAttributes>"+
     "<pcrf:DeletePCRFUser>"+
       "<pcrf:delSubscriber>"+
         "<pcrf:usrIdentifier>416011019768334</pcrf:usrIdentifier>"+
       "</pcrf:delSubscriber>"+
       "</pcrf:DeletePCRFUser>"+
     "</cai3:MOAttributes>"+
   "</cai3:Delete>"+
 "</soapenv:Body>"+
"</soapenv:Envelope>";

alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200 || xmlhttp.status==500) {
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

  

 function deletePackage(){
  
  //alert('start');

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
  
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
   "<cai3:Set>"+
      "<cai3:MOType>PCRFUser@http://schemas.ericsson.com/ma/CA/PCRF/</cai3:MOType>"+
      "<cai3:MOId>"+
        "<pcrf:usrIdentifier>"+usrIdentifier+"</pcrf:usrIdentifier>"+
      "</cai3:MOId>"+
      "<cai3:MOAttributes>"+
         "<pcrf:SetPCRFUser>"+
            "<pcrf:unSubscribeServicePackage>"+
               "<pcrf:usrIdentifier>"+usrIdentifier+"</pcrf:usrIdentifier>"+
               "<pcrf:srvpkgName>"+srvpkgName+"</pcrf:srvpkgName>"+
            "</pcrf:unSubscribeServicePackage>"+
         "</pcrf:SetPCRFUser>"+
      "</cai3:MOAttributes>"+
   "</cai3:Set>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200 || xmlhttp.status==500) {
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



function deleteHss(){
  
  //alert('start');

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
  
  // build SOAP request
 var sr =
      "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:hss='http://schemas.ericsson.com/ma/HSS/'>"+
"<soapenv:Header>"+
    "<cai3:SequenceId>?</cai3:SequenceId>"+
    "<cai3:TransactionId>?</cai3:TransactionId>"+
    "<cai3:SessionId>8f285f8969d24ac5a9297b71d0cacc64</cai3:SessionId>"+
 "</soapenv:Header>"+
 "<soapenv:Body>"+
    "<cai3:Delete>"+
       "<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
       "<cai3:MOId>"+
          "<hss:imsi>"+imsi+"</hss:imsi>"+
       "</cai3:MOId>"+
    "</cai3:Delete>"+
 "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200 || xmlhttp.status==500) {
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





window.addEventListener('load', function () {
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
                <h5 className="title">Delete AF</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          value={msisdn} 
                          onChange={(e) => setMsisdn(e.target.value)}
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={deleteAf} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Delete Identifier</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          value={msisdn} 
                          onChange={(e) => setMsisdn(e.target.value)}
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Identifier</label>
                        <Input
                          name="identifier"
                          value={identifier} 
                          onChange={(e) => setIdentifier(e.target.value)}
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
                        <label>Type</label>
                        <Input
                          name="type"
                          value={type} 
                          onChange={(e) => setType(e.target.value)}
                          defaultValue=""
                          placeholder="type"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={deleteIdentifier} >
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Delete Offer</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          value={msisdn} 
                          onChange={(e) => setMsisdn(e.target.value)}
                          defaultValue="962*********"
                          placeholder="Msisdn"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>offerID</label>
                        <Input
                          name="offerID"
                          value={offerID} 
                          onChange={(e) => setOfferID(e.target.value)}
                          defaultValue=""
                          placeholder="offerID"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={deleteOffer} >
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Delete Pam Service ID</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Subscriber Number</label>
                        <Input
                          name="subscriberNumber"
                          value={subscriberNumber} 
                          onChange={(e) => setSubscriberNumber(e.target.value)}
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
                          name="pamServiceID"
                          value={pamServiceID} 
                          onChange={(e) => setPamServiceID(e.target.value)}
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
                <Button className="btn-fill" color="primary" type="submit"
                onClick = {deletePamServiceID} >
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Terminate AUC</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          value={imsi} 
                          onChange={(e) => setImsi(e.target.value)}
                          defaultValue="41601*********"
                          placeholder="IMSI"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                OnClick = {terminateAuc} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Delete CSSV</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          value={msisdn} 
                          name = "msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={deleteCssv}>
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Delete EPS</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          value={imsi} 
                          onChange={(e) => setImsi(e.target.value)}
                          defaultValue="41601*********"
                          placeholder="imsi"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                  onClick ={deleteEps} >
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">DELETE HLR</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>imsi</label>
                        <Input
                          name="imsi"
                          value={imsi} 
                          onChange={(e) => setImsi(e.target.value)}
                          defaultValue="41601*********"
                          placeholder="imsi"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={deleteHlr}>
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Delete APN</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          defaultValue="962*********"
                          name ="msisdn"
                          value={msisdn} 
                          onChange={(e) => setMsisdn(e.target.value)}
                          placeholder="Msisdn"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={deleteApn}>
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Delete DNS</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Msisdn</label>
                        <Input
                          name="msisdn"
                          value={msisdn} 
                          onChange={(e) => setMsisdn(e.target.value)}
                          defaultValue="96279*******"
                          placeholder="msisdn"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={deleteDns}>
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Delete IMS</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>associAtionId</label>
                        <Input
                          name="associAtionId"
                          value={associationId} 
                          onChange={(e) => setAssociationId(e.target.value)}
                          defaultValue="96279*******"
                          placeholder="AssociAtionId"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={deleteIms}>
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Delete MTAS</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>publicId</label>
                        <Input
                          name="publicId"
                          value={publicId} 
                          onChange={(e) => setPublicId(e.target.value)}
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
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={deleteMtas}>
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Remove IMSI From Switch Only- not AuC</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>MSISDN</label>
                        <Input
                          name="msisdn"
                          value={msisdn} 
                          onChange={(e) => setMsisdn(e.target.value)}
                          defaultValue=""
                          placeholder="msisdn"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={removeIMSIFromSwitchOnly}>
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">Termination</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>MSISDN</label>
                        <Input
                          name="msisdn"
                          value={msisdn} 
                          onChange={(e) => setMsisdn(e.target.value)}
                          defaultValue=""
                          placeholder="msisdn"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={termination}>
                  Save
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <h5 className="title">Delete HSS</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>IMSI</label>
                        <Input
                          name="imsi"
                          value={imsi} 
                          onChange={(e) => setImsi(e.target.value)}
                          defaultValue=""
                          placeholder="imsi"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={deleteHss}>
                  Save
                </Button>
              </CardFooter>
            </Card>
            
            
            <Card>
              <CardHeader>
                <h5 className="title">Delete PCRF</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usrIdentifier</label>
                        <Input
                          name="usrIdentifier"
                          value={usrIdentifier} 
                          onChange={(e) => setUsrIdentifier(e.target.value)}
                          defaultValue=""
                          placeholder="usrIdentifier"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                  onClick ={deletePcrf}>
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Delete package</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>usrIdentifier</label>
                        <Input
                          name="usrIdentifier"
                          value={usrIdentifier} 
                          onChange={(e) => setUsrIdentifier(e.target.value)}
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
                          name="srvpkgName"
                          value={srvpkgName} 
                          onChange={(e) => setSrvpkgName(e.target.value)}
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
                <Button className="btn-fill" color="primary" type="submit"
                onClick = {deletePackage}>
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

export default Delete;
