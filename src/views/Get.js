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



function Get() {

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
  const [imsi, setImsi]= useState(0);
  const [associationId , setAssociationId]= useState(0);
  const [publicId , setPublicId]= useState(0);
  const[ usrIdentifier , setUsrIdentifier] = useState(0);

  function getaf(){
  
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
        "<cai3:Get>"+
           "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
           "<cai3:MOId>"+
              "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
           "</cai3:MOId>"+
           "<cai3:MOAttributes>"+
              "<air:getSubscription subscriberNumber='962"+msisdn+"'>"+
                 "<!--Optional:-->"+
                 "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
                 "<!--Optional:-->"+
                 "<air:accountDetails>"+
                    "<!--Optional:-->"+
                    "<air:messageCapabilityFlag>"+
                       "<!--Optional:-->"+
                       "<air:accountActivationFlag>1</air:accountActivationFlag>"+
                    "</air:messageCapabilityFlag>"+
                 "</air:accountDetails>"+
              "</air:getSubscription>"+
           "</cai3:MOAttributes>"+
        "</cai3:Get>"+
     "</soapenv:Body>"+
     "</soapenv:Envelope>";
      alert(sr);
     xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4) {
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
 function getAccountDetailes(){
  
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
   "<cai3:Get>"+
      "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
      "<cai3:MOId>"+
         "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
      "</cai3:MOId>"+
      "<cai3:MOAttributes>"+
         "<air:getSubscription subscriberNumber='962"+msisdn+"'>"+
            "<!--Optional:-->"+
            "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
            "<!--Optional:-->"+
            "<air:accountDetails>"+
               "<!--Optional:-->"+
               "<air:messageCapabilityFlag>"+
                  "<!--Optional:-->"+
                  "<air:accountActivationFlag>1</air:accountActivationFlag>"+
               "</air:messageCapabilityFlag>"+
            "</air:accountDetails>"+
         "</air:getSubscription>"+
      "</cai3:MOAttributes>"+
   "</cai3:Get>"+
"</soapenv:Body>"+
"</soapenv:Envelope>";
// alert(sr);
     xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState == 4) {
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
              // navigator.clipboard.writeText(""+resultText);
              // navigator.clipboard.writeText("HEEEEEEEEEEELPPPPPPP");






               //To Get error
              //  var x, i, xmlDoc, txt;
               // xmlDoc = sr.responseXML;
               // console.log(xmlDoc);
               // txt = "";
               // x = xmlDoc.getElementsByTagName("sessionId");
               // for (i = 0; i < x.length; i++) {
               //   txt += x[i].childNodes[0].nodeValue;
               // }
        
               // this.setState({ sessionId: txt });
               //console.log(this.state.sessionId);
              //  txt = "";
              //  console.log("txt = ", txt);
       
                 
             }
         }
     }
     // Send the POST request
     xmlhttp.setRequestHeader('Content-Type', 'text/xml');
     xmlhttp.send(sr);
   }
   function getBalanceAndDate(){
  
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
     "<cai3:Get>"+
        "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
        "</cai3:MOId>"+
        "<cai3:MOAttributes>"+
           "<air:getSubscription subscriberNumber='962"+msisdn+"'>"+
              "<!--Optional:-->"+
              "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
              "<!--Optional:-->"+
              "<air:balanceAndDate>"+
                 "<!--Optional:-->"+
                 "<air:messageCapabilityFlag>"+
                    "<!--Optional:-->"+
                    "<air:accountActivationFlag>1</air:accountActivationFlag>"+
                 "</air:messageCapabilityFlag>"+
              "</air:balanceAndDate>"+
           "</air:getSubscription>"+
        "</cai3:MOAttributes>"+
     "</cai3:Get>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getAuc(){
  
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
"<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:ns='http://schemas.ericsson.com/pg/auc/13.5/'>"+
  "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
             "<wsse:UsernameToken>"+
                 "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                 "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
             "</wsse:UsernameToken>"+
         "</wsse:Security>"+
  "</soapenv:Header>"+
  "<soapenv:Body>"+
     "<cai3:Get>"+
        "<cai3:MOType>Subscription@http://schemas.ericsson.com/pg/auc/13.5/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<ns:imsi>"+imsi+"</ns:imsi>"+
        "</cai3:MOId>"+
     "</cai3:Get>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getCssv(){
  
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request"<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
  
    var sr =
    "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
             "<wsse:UsernameToken>"+
                 "<wsse:Username>"+sessionStorage.getItem('username')+"</wsse:Username>"+
                 "<wsse:Password>"+sessionStorage.getItem('password')+"</wsse:Password>"+
             "</wsse:UsernameToken>"+
         "</wsse:Security>"+
   "</soapenv:Header>"+
   "<soapenv:Body>"+
      "<cai3:Get>"+
         "<cai3:MOType>CSSVSUB@http://schemas.ericsson.com/ma/CA/CSSVSUB/</cai3:MOType>"+
         "<cai3:MOId>"+
           "<!--Optional:-->"+
            "<css:msisdn>962"+msisdn+"</css:msisdn>"+
         "</cai3:MOId>"+
      "</cai3:Get>"+
   "</soapenv:Body>"+
"</soapenv:Envelope>";

alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getEPS(){
  
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
     "<cai3:Get>"+
        "<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<!--You have a CHOICE of the next 2 items at this level-->"+
           "<hss:imsi>"+imsi+"</hss:imsi>"+
        "</cai3:MOId>"+
     "</cai3:Get>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";

     alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function displayHlrProfile(){
  
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
     "<cai3:Get>"+
        "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
        "<!--Optional:-->"+
        "<cai3:MOId>"+
           "<!--You have a CHOICE of the next 2 items at this level-->"+
        "<gsm:msisdn>962"+msisdn+"</gsm:msisdn>"+
        "</cai3:MOId>"+
        "<!--Optional:-->"+
        "<cai3:MOAttributes>"+
           "<gsm:getSubscription msisdn='962"+msisdn+"'>"+
           "</gsm:getSubscription>"+
        "</cai3:MOAttributes>"+
     "</cai3:Get>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";

     alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getHlrIMSI(){
  
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
      "<cai3:Get>"+
         "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
         "<!--Optional:-->"+
         "<cai3:MOId>"+
            "<!--You have a CHOICE of the next 2 items at this level-->"+
            "<gsm:imsi>"+imsi+"</gsm:imsi>"+
         "</cai3:MOId>"+
         "<!--Optional:-->"+
         "<cai3:MOAttributes>"+
            "<gsm:getSubscription imsi='"+imsi+"'>"+
            "</gsm:getSubscription>"+
         "</cai3:MOAttributes>"+
      "</cai3:Get>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";

     alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getHlrMsisdn(){
  
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
     "<cai3:Get>"+
        "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
        "<!--Optional:-->"+
        "<cai3:MOId>"+
           "<!--You have a CHOICE of the next 2 items at this level-->"+
        "<gsm:msisdn>962"+msisdn+"</gsm:msisdn>"+
        "</cai3:MOId>"+
        "<!--Optional:-->"+
        "<cai3:MOAttributes>"+
           "<gsm:getSubscription msisdn='962"+msisdn+"'>"+
           "</gsm:getSubscription>"+
        "</cai3:MOAttributes>"+
     "</cai3:Get>"+
  "</soapenv:Body>";

     alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getIncomingBaringStatus(){
  
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
     "<cai3:Get>"+
        "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
        "<!--Optional:-->"+
        "<cai3:MOId>"+
           "<!--You have a CHOICE of the next 2 items at this level-->"+
        "<gsm:msisdn>962"+msisdn+"</gsm:msisdn>"+
        "</cai3:MOId>"+
        "<!--Optional:-->"+
       "<cai3:MOAttributes>"+
           "<gsm:getSubscription msisdn='962"+msisdn+"'>"+
              "<gsm:SubscriberData>?</gsm:SubscriberData>"+ 
           "</gsm:getSubscription>"+
        "</cai3:MOAttributes>"+
     "</cai3:Get>"+
 "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getHss(){
  
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
     "<cai3:Get>"+
        "<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<!--You have a CHOICE of the next 2 items at this level-->"+
           "<hss:imsi>"+imsi+"</hss:imsi>"+
        "</cai3:MOId>"+
     "</cai3:Get>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";

alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getIms(){
  
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
     "<cai3:Get>"+
        "<cai3:MOType>IMSAssociation@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<!--You have a CHOICE of the next 3 items at this level-->"+
           "<hss:associationId>962"+associationId+"</hss:associationId>"+
        "</cai3:MOId>"+
     "</cai3:Get>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getMtas(){
  
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://"+sessionStorage.getItem('serv')+":8080/CAI3G1.2/services/CAI3G1.2", true);
    
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
      "<cai3:Get>"+
         "<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<mtas:publicId>"+publicId+"</mtas:publicId>"+
         "</cai3:MOId>"+
      "</cai3:Get>"+
   "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getPcrfAccount(){
  
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
   "<cai3:Get>"+  
     "<cai3:MOType>PCRFUser@http://schemas.ericsson.com/ma/CA/PCRF/</cai3:MOType>"+
     "<cai3:MOId>"+
        "<pcrf:usrIdentifier>"+usrIdentifier+"</pcrf:usrIdentifier>"+
     "</cai3:MOId>"+
     "<cai3:MOAttributes>"+
     "<pcrf:GetPCRFUser>"+
       "<pcrf:getSubscriber>"+
         "<pcrf:usrIdentifier>"+usrIdentifier+"</pcrf:usrIdentifier>"+
       "</pcrf:getSubscriber>"+
       "</pcrf:GetPCRFUser>"+
     "</cai3:MOAttributes>"+
   "</cai3:Get>"+
 "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
  function getPcrfWithService(){
  
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
     "<cai3:Get>"+
        "<cai3:MOType>PCRFUser@http://schemas.ericsson.com/ma/CA/PCRF/</cai3:MOType>"+
        "<cai3:MOId>"+
           "<pcrf:usrIdentifier>"+usrIdentifier+"</pcrf:usrIdentifier>"+
        "</cai3:MOId>"+
        "<cai3:MOAttributes>"+
           "<pcrf:GetPCRFUser>"+
              "<pcrf:getSubscriberAllService>"+
                 "<pcrf:usrIdentifier>"+usrIdentifier+"</pcrf:usrIdentifier>"+
              "</pcrf:getSubscriberAllService>"+
           "</pcrf:GetPCRFUser>"+
        "</cai3:MOAttributes>"+
     "</cai3:Get>"+
  "</soapenv:Body>"+
"</soapenv:Envelope>";
alert(sr);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
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
                <h5 className="title">GET AF</h5>
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
                onClick ={getaf} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">GET Account details</h5>
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
                onClick ={getAccountDetailes} >
                  Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h5 className="title">Get Balance and date</h5>
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
                onClick ={getBalanceAndDate} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">GET AUC</h5>
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
                onClick ={getAuc} >
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">GET CSSV</h5>
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
                onClick ={getCssv} >
                  Save
                </Button>
              </CardFooter>
            </Card>




            <Card>
              <CardHeader>
                <h5 className="title">GET EPS</h5>
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
                onClick ={getEPS} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Display HLR Profile</h5>
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
                onClick ={displayHlrProfile} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Get HLR IMSI</h5>
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
                onClick ={getHlrIMSI} >
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">Get HLR MSISDN</h5>
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
                onClick ={getHlrMsisdn} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Get incoming baring status</h5>
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
                onClick ={getIncomingBaringStatus} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Get HSS</h5>
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
                onClick ={getHss} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">Get IMS</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>AssociationId</label>
                        <Input
                          name="associationId"
                          value={associationId} 
                          onChange={(e) => setAssociationId(e.target.value)}
                          defaultValue=""
                          placeholder="associationId"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={getIms} >
                  Save
                </Button>
              </CardFooter>
            </Card>


            <Card>
              <CardHeader>
                <h5 className="title">Get MTAS</h5>
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
                onClick ={getMtas} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">GET PCRF ACCOUNT</h5>
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
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick ={getPcrfAccount} >
                  Save
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="title">GET PCRF WITH SERVICE</h5>
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
                onClick ={getPcrfWithService} >
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

export default Get;
