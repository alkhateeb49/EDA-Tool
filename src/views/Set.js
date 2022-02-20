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
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function Set() {
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
  
  // const [ serviceClass,sessionId,errordetails,showSob,sob,status,ip,username,imsi,profileID] = useState(0);
  const [msisdn, setMsisdn] = useState(0);
  const [accumulatorID, setAccumulatorID] = useState(0);
  const [accumulatorValueAbsolute, setAccumulatorValueAbsolute] = useState(0);
  const [scheduleID, setScheduleID] = useState(0);
  const [adjustmentAmountRelative, setAdjustmentAmountRelative] = useState(0);
  const [DAID, setDaid] = useState(0);
  const [DAValue, setDavalue] = useState(0);
  const [cc1, setCc1] = useState(0);
  const [cc2, setCc2] = useState(0);
  const [cc3, setCc3] = useState(0);
  const [providerID, setProviderID] = useState(0);
  const [uc, setUc] = useState(0);
  const [ucValue, setUcValue] = useState(0);
  const [ut, setUt] = useState(0);
  const [utValue, setUtValue] = useState(0);
  const [fafNumber, setFafNumber] = useState(0);
  const [languageID, setLanguageID] = useState(0);
  const [imsi, setImsi] = useState(0);
  const [ts62, setTs62] = useState(0);
  const [bc, setBc] = useState(0);
  const [epsZoneCodeSetId, setEpsZoneCodeSetId] = useState(0);
  const [epsOdb, setEpsOdb] = useState(0);
  const [epsProfileId, setEpsProfileId] = useState(0);
  const [associationId, setAssociationId] = useState(0);
  const [chargingProfId, setChargingProfId] = useState(0);
  const [publicId, setPublicId] = useState(0);
  const [usrIdentifier, setUsrIdentifier] = useState("");
  const [srvpkgName, setSrvpkgName] = useState("");

  function bar(){
   
   console.log(msisdn);
    //alert('start');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
        "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
        "<soapenv:Header>"+
           "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
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
                       "<css:actionId>11</css:actionId>"+               
                       "<css:refillBarAction>CLEAR</css:refillBarAction>"+
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
  function moneyTransferUnbaring (){
   
    console.log(msisdn);
     //alert('start');
 
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
     
     // build SOAP request
     var sr =
     "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
     "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
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
              "<css:SetCSSVSUB>"+
                 "<css:msisdn>962"+msisdn+"</css:msisdn>"+
                 "<css:moneyTransferUnbarring>"+
                    "<css:actionId>13</css:actionId>"+           
                    "<css:accumulator>"+
                       "<css:accumulatorID>"+accumulatorID+"</css:accumulatorID>"+
                       "<css:accumulatorValueAbsolute>"+accumulatorValueAbsolute+
                       "</css:accumulatorValueAbsolute>"+
                       "</css:accumulator>"+
                       "</css:moneyTransferUnbarring>"+
                       "</css:SetCSSVSUB>"+
                       "</cai3:MOAttributes>"+
                       "</cai3:Set>"+
                       "</soapenv:Body>"+
                       "</soapenv:Envelope>"
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
   function changeBillCycle(){
   
    console.log(msisdn);
     //alert('start');
 
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
     
     // build SOAP request
     var sr =
     "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
     "<soapenv:Header>"+
        "<wsse:UsernameToken>"+
                  "<wsse:Username>mesaimi</wsse:Username>"+
                  "<wsse:Password>Zain@1234</wsse:Password>"+
              "</wsse:UsernameToken>"+
     "</soapenv:Header>"+
     "<soapenv:Body>"+
        "<cai3:Set>"+
           "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
           "<cai3:MOId>"+
              "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
           "</cai3:MOId>"+
           "<cai3:MOAttributes>"+
              "<air:setSubscription subscriberNumber=962"+msisdn+">"+
                 "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
                 "<air:periodicAccountManagementData pamServiceID='1'>"+
                    "<air:pamClassID>1</air:pamClassID>"+
                    "<air:scheduleID>"+scheduleID+"</air:scheduleID>"+
                    "<air:pamClassIDCurrent>1</air:pamClassIDCurrent>"+
                    "<air:scheduleIDCurrent>1</air:scheduleIDCurrent>"+
                 "</air:periodicAccountManagementData>"+
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
   function trcUnlock(){
   
    console.log(msisdn);
     //alert('start');
 
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
     
     // build SOAP request
     var sr =
     "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
     "<soapenv:Header>"+
          "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>mesaimi</wsse:Username>"+
                  "<wsse:Password>Zain@1234</wsse:Password>"+
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
              "<css:SetCSSVSUB>"+
                 "<css:msisdn>962"+msisdn+"</css:msisdn>"+
                         "<css:trcLockUnlock>"+
                    "<css:actionId>17</css:actionId>"+
                    "<css:temporaryBlocked>CLEAR</css:temporaryBlocked>"+
                 "</css:trcLockUnlock>"+
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
   function trcLock(){
   
    console.log(msisdn);
     //alert('start');
 
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
     
     // build SOAP request
     var sr =
     "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
     "<soapenv:Header>"+
          "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>mesaimi</wsse:Username>"+
                  "<wsse:Password>Zain@1234</wsse:Password>"+
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
              "<css:SetCSSVSUB>"+
                 "<css:msisdn>962"+msisdn+"</css:msisdn>"+
                         "<css:trcLockUnlock>"+
                    "<css:actionId>17</css:actionId>"+
                    "<css:temporaryBlocked>SET</css:temporaryBlocked>"+
                 "</css:trcLockUnlock>"+
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
   function mainAccountRecharge(){
   
    console.log(msisdn);
     //alert('start');
 
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
     
     // build SOAP request
     var sr =
     "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
   "<soapenv:Header>"+
        "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
 "<soapenv:Body>"+
      "<cai3:Set>"+
         "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
         "</cai3:MOId>"+
         "<cai3:MOAttributes>"+
            "<air:setSubscription subscriberNumber='962"+msisdn+"'>"+
               "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
               "<air:balanceAndDate>"+
                  "<air:transactionCurrency>JOD</air:transactionCurrency>"+
                  
                  "<air:adjustmentAmountRelative>"+adjustmentAmountRelative+"</air:adjustmentAmountRelative>"+

               "</air:balanceAndDate>"+
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
   function setDataDaValue(){
   
    console.log(msisdn);
     //alert('start');
 
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
     
     // build SOAP request
     var sr =
     "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
     "<soapenv:Header>"+
         "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>mesaimi</wsse:Username>"+
                  "<wsse:Password>Zain@1234</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
     "</soapenv:Header>"+
     "<soapenv:Body>"+
        "<cai3:Set>"+
           "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
           "<cai3:MOId>"+
              "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
           "</cai3:MOId>"+
           "<cai3:MOAttributes>"+
              "<air:setSubscription subscriberNumber='962"+msisdn+"'>"+
               "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
                 "<air:balanceAndDate>"+
                    "<air:transactionCurrency>JOD</air:transactionCurrency>"+
  
                    "<air:dedicatedAccountUpdateInformation>"+
                       "<air:dedicatedAccountID>"+DAID+"</air:dedicatedAccountID>"+
                       "<air:dedicatedAccountValueNew>"+DAValue+"</air:dedicatedAccountValueNew>"+
                       "<air:dedicatedAccountUnitType>6</air:dedicatedAccountUnitType>"+
                    "</air:dedicatedAccountUpdateInformation>"+
                 "</air:balanceAndDate>"+
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
   function setMinutesDaValue(){
   
    console.log(msisdn);
     //alert('start');
 
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
     
     // build SOAP request
     var sr =
     "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
     "<soapenv:Header>"+
         "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>mesaimi</wsse:Username>"+
                  "<wsse:Password>Zain@1234</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
     "</soapenv:Header>"+
     "<soapenv:Body>"+
        "<cai3:Set>"+
           "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
           "<cai3:MOId>"+
              "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
           "</cai3:MOId>"+
           "<cai3:MOAttributes>"+
              "<air:setSubscription subscriberNumber='962"+msisdn+"'>"+
               "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
                 "<air:balanceAndDate>"+
                    "<air:transactionCurrency>JOD</air:transactionCurrency>"+
  
                    "<air:dedicatedAccountUpdateInformation>"+
                       "<air:dedicatedAccountID>"+DAID+"</air:dedicatedAccountID>"+
                       "<air:dedicatedAccountValueNew>"+DAValue+"</air:dedicatedAccountValueNew>"+
                       "<air:dedicatedAccountUnitType>1</air:dedicatedAccountUnitType>"+
                    "</air:dedicatedAccountUpdateInformation>"+
                 "</air:balanceAndDate>"+
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
   function setDataDaValueRelative(){
   
    
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
     
     // build SOAP request
     var sr =
     "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
     "<soapenv:Header>"+
         "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
              "<wsse:UsernameToken>"+
                  "<wsse:Username>mesaimi</wsse:Username>"+
                  "<wsse:Password>Zain@1234</wsse:Password>"+
              "</wsse:UsernameToken>"+
          "</wsse:Security>"+
     "</soapenv:Header>"+
     "<soapenv:Body>"+
        "<cai3:Set>"+
           "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
           "<cai3:MOId>"+
              "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
           "</cai3:MOId>"+
           "<cai3:MOAttributes>"+
              "<air:setSubscription subscriberNumber='962"+msisdn+"'>"+
               "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
                 "<air:balanceAndDate>"+
                    "<air:transactionCurrency>JOD</air:transactionCurrency>"+
  
                    "<air:dedicatedAccountUpdateInformation>"+
                       "<air:dedicatedAccountID>"+DAID+"</air:dedicatedAccountID>"+
                       "<air:adjustmentAmountRelative>"+DAValue+"</air:adjustmentAmountRelative>"+
                       "<air:dedicatedAccountUnitType>6</air:dedicatedAccountUnitType>"+
                    "</air:dedicatedAccountUpdateInformation>"+
                 "</air:balanceAndDate>"+
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
   function setMinutesDaValueRelative(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
    "<soapenv:Header>"+
        "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
             "<wsse:UsernameToken>"+
                 "<wsse:Username>mesaimi</wsse:Username>"+
                 "<wsse:Password>Zain@1234</wsse:Password>"+
             "</wsse:UsernameToken>"+
         "</wsse:Security>"+
    "</soapenv:Header>"+
    "<soapenv:Body>"+
       "<cai3:Set>"+
          "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
          "<cai3:MOId>"+
             "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
          "</cai3:MOId>"+
          "<cai3:MOAttributes>"+
             "<air:setSubscription subscriberNumber='962"+msisdn+"'>"+
              "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
                "<air:balanceAndDate>"+
                   "<air:transactionCurrency>JOD</air:transactionCurrency>"+
 
                   "<air:dedicatedAccountUpdateInformation>"+
                      "<air:dedicatedAccountID>"+DAID+"</air:dedicatedAccountID>"+
                      "<air:adjustmentAmountRelative>"+DAValue+"</air:adjustmentAmountRelative>"+
                      "<air:dedicatedAccountUnitType>1</air:dedicatedAccountUnitType>"+
                   "</air:dedicatedAccountUpdateInformation>"+
                "</air:balanceAndDate>"+
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
  function setCommunityCc1(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
    "<soapenv:Header>"+
       "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
             "<wsse:UsernameToken>"+
                 "<wsse:Username>mesaimi</wsse:Username>"+
                 "<wsse:Password>Zain@1234</wsse:Password>"+
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
             "<css:SetCSSVSUB>"+
                "<css:msisdn>962"+msisdn+"</css:msisdn>"+
                "<css:updateCommunityList>"+
                   "<css:actionId>21</css:actionId>"+
                   "<css:msisdnNai>1</css:msisdnNai>"+
                   "<css:cc1>"+cc1+"</css:cc1>"+
                "</css:updateCommunityList>"+
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
  function setCommunityCc2(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
    "<soapenv:Header>"+
       "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
             "<wsse:UsernameToken>"+
                 "<wsse:Username>mesaimi</wsse:Username>"+
                 "<wsse:Password>Zain@1234</wsse:Password>"+
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
             "<css:SetCSSVSUB>"+
                "<css:msisdn>962"+msisdn+"</css:msisdn>"+
                "<css:updateCommunityList>"+
                   "<css:actionId>21</css:actionId>"+
                   "<css:msisdnNai>1</css:msisdnNai>"+
                   "<css:cc2>"+cc2+"</css:cc2>"+
                "</css:updateCommunityList>"+
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
  function setCommunityCc3(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:css='http://schemas.ericsson.com/ma/CA/CSSVSUB/'>"+
    "<soapenv:Header>"+
       "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
             "<wsse:UsernameToken>"+
                 "<wsse:Username>mesaimi</wsse:Username>"+
                 "<wsse:Password>Zain@1234</wsse:Password>"+
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
             "<css:SetCSSVSUB>"+
                "<css:msisdn>962"+msisdn+"</css:msisdn>"+
                "<css:updateCommunityList>"+
                   "<css:actionId>21</css:actionId>"+
                   "<css:msisdnNai>1</css:msisdnNai>"+
                   "<css:cc3>"+cc3+"</css:cc3>"+
                "</css:updateCommunityList>"+
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
  function addSharedOffer(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
    "<soapenv:Header>"+
        "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
    "</soapenv:Header>"+
    "<soapenv:Body>"+
        "<cai3:Set>"+
            "<cai3:MOType>Offer@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
            "<cai3:MOId>"+
                "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
                "<air:offerID>"+providerID+"</air:offerID>"+
            "</cai3:MOId>"+
            "<cai3:MOAttributes>"+
                "<air:setOffer subscriberNumber='962"+msisdn+"' offerID='"+providerID+"'>"+
                    "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
                    "<air:originOperatorID>1</air:originOperatorID>"+
                     "<air:offerRequestInformation>"+
                        "<air:offerType>3</air:offerType>"+
                        "<air:offerProviderID>"+providerID+"</air:offerProviderID>"+
                    "</air:offerRequestInformation>"+
                "</air:setOffer>"+
            "</cai3:MOAttributes>"+
        "</cai3:Set>"+
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
  function setUcMValue(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
   "<soapenv:Header>"+
      "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
   "<soapenv:Body>"+
      "<cai3:Set>"+
         "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
         "</cai3:MOId>"+
         "<cai3:MOAttributes>"+
            "<air:setSubscription subscriberNumber='962"+msisdn+"'>"+
               "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
               "<air:usageThresholdsAndCounters>"+
                  "<air:transactionCurrency>JOD</air:transactionCurrency>"+
                  "<air:usageCounterUpdateInformation>"+
                     "<air:usageCounterID>"+uc+"</air:usageCounterID>"+
                     "<air:usageCounterMonetaryValueNew>"+ucValue+"</air:usageCounterMonetaryValueNew>"+
                  "</air:usageCounterUpdateInformation>"+
               "</air:usageThresholdsAndCounters>"+
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
  function setUcNMValue(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
   "<soapenv:Header>"+
      "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
   "<soapenv:Body>"+
      "<cai3:Set>"+
         "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
         "</cai3:MOId>"+
         "<cai3:MOAttributes>"+
            "<air:setSubscription subscriberNumber='962"+msisdn+"'>"+
               "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
               "<air:usageThresholdsAndCounters>"+
                  "<air:transactionCurrency>JOD</air:transactionCurrency>"+
                  "<air:usageCounterUpdateInformation>"+
                     "<air:usageCounterID>"+uc+"</air:usageCounterID>"+
                     "<air:usageCounterValueNew>"+ucValue+"</air:usageCounterValueNew>"+
                  "</air:usageCounterUpdateInformation>"+
               "</air:usageThresholdsAndCounters>"+
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
  function setUtValueN(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
   "<soapenv:Header>"+
       "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
   "<soapenv:Body>"+
      "<cai3:Set>"+
         "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
         "<cai3:MOId>"+
             "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
         "</cai3:MOId>"+
         "<cai3:MOAttributes>"+
            "<air:setSubscription subscriberNumber='962"+msisdn+"'>"+
               "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
               "<air:usageThresholdsAndCounters>"+
                  "<air:transactionCurrency>JOD</air:transactionCurrency>"+
                  "<air:usageThresholdUpdateInformation usageThresholdID='"+ut+"'>"+
                     "<air:usageThresholdID>"+ut+"</air:usageThresholdID>"+
                     "<air:usageThresholdMonetaryValueNew>"+utValue+"</air:usageThresholdMonetaryValueNew>"+
                  "</air:usageThresholdUpdateInformation>"+
               "</air:usageThresholdsAndCounters>"+
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
  function setFafNumberN(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
   "<soapenv:Header>"+
       "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
   "<soapenv:Body>"+
      "<cai3:Set>"+
         "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
         "</cai3:MOId>"+
         "<cai3:MOAttributes>"+
            "<air:setSubscription subscriberNumber='962"+msisdn+"'>"+
               "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+
               "<air:originOperatorID>1</air:originOperatorID>"+
               "<air:faf fafNumber='"+fafNumber+"' owner='Subscriber'>"+
                  "<air:fafNumber>"+fafNumber+"</air:fafNumber>"+
                  "<air:owner>Subscriber</air:owner>"+
                 "<air:fafIndicator>1</air:fafIndicator>"+
                  "<air:selectedOption>1</air:selectedOption>"+
                  "<air:chargingRequestInformation>"+
                     "<air:chargingType>2</air:chargingType>"+
                     "<air:chargingIndicator>200</air:chargingIndicator>"+
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
  function setLanguage(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:air='http://schemas.ericsson.com/ma/CS/AIR/'>"+
    "<soapenv:Header>"+
        "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
             "<wsse:UsernameToken>"+
                 "<wsse:Username>mesaimi</wsse:Username>"+
                 "<wsse:Password>Zain@1234</wsse:Password>"+
             "</wsse:UsernameToken>"+
         "</wsse:Security>"+
    "</soapenv:Header>"+
    "<soapenv:Body>"+
       "<cai3:Set>"+
          "<cai3:MOType>Subscription@http://schemas.ericsson.com/ma/CS/AIR/</cai3:MOType>"+
          "<cai3:MOId>"+
             "<air:subscriberNumber>962"+msisdn+"</air:subscriberNumber>"+
          "</cai3:MOId>"+
          "<cai3:MOAttributes>"+
             "<air:setSubscription subscriberNumber='962"+msisdn+"'>"+
                "<air:subscriberNumberNAI>1</air:subscriberNumberNAI>"+   
                    "<air:accountDetails>"+
                        "<air:languageIDNew>"+languageID+"</air:languageIDNew>"+
                      "</air:accountDetails>"+
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
  function removeBaringOnLTE(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:hss='http://schemas.ericsson.com/ma/HSS/'>"+
   "<soapenv:Header>"+
      "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
   "<soapenv:Body>"+
      "<cai3:Set>"+
         "<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<hss:imsi>"+imsi+"</hss:imsi>"+
         "</cai3:MOId>"+
         "<cai3:MOAttributes>"+
            "<hss:SetEPSMultiSC imsi='"+imsi+"'>"+
               "<hss:epsOdb>NONE</hss:epsOdb>"+
               "<hss:epsZoneCodeSetId>"+epsZoneCodeSetId+"</hss:epsZoneCodeSetId>"+
            "</hss:SetEPSMultiSC>"+
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
  function SetBarringOnLTE(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:hss='http://schemas.ericsson.com/ma/HSS/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
   "<soapenv:Body>"+
      "<cai3:Set>"+
         "<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<hss:imsi>"+imsi+"</hss:imsi>"+
         "</cai3:MOId>"+
         "<cai3:MOAttributes>"+
            "<hss:SetEPSMultiSC imsi='"+imsi+"'>"+
               "<hss:epsOdb>"+epsOdb+"</hss:epsOdb>"+
            "</hss:SetEPSMultiSC>"+
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
  function SetEpsProfileId(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:hss='http://schemas.ericsson.com/ma/HSS/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
   "<soapenv:Body>"+
      "<cai3:Set>"+
         "<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
         "<cai3:MOId>"+
            "<hss:imsi>"+imsi+"</hss:imsi>"+
         "</cai3:MOId>"+
         "<cai3:MOAttributes>"+
            "<hss:SetEPSMultiSC imsi='"+imsi+"'>"+
               "<hss:epsProfileId>"+epsProfileId+"</hss:epsProfileId>"+
            "</hss:SetEPSMultiSC>"+
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
  // HERE
  
  function RemoveRingBackTone(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:setSubscription msisdn='"+msisdn+"'>"+
"<gsm:prbt>0</gsm:prbt>"+
"</gsm:setSubscription>"+
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
  function RemoveSMSIncomingBaring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:setSubscription msisdn='"+msisdn+"'>"+
"<gsm:baic>"+
"<gsm:provisionState>1</gsm:provisionState>"+
"<gsm:activationState>0</gsm:activationState>"+
"<gsm:ts20>"+
"<gsm:activationState>1</gsm:activationState>"+
"</gsm:ts20>      "+
"</gsm:baic>"+
"</gsm:setSubscription>"+
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
  function RemoveSpecialRoaming(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:setSubscription msisdn='"+msisdn+"'>"+
"<gsm:obo>2</gsm:obo>"+
"<gsm:obr>1</gsm:obr>"+
"<gsm:rsa>100</gsm:rsa>"+
"</gsm:setSubscription>"+
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
  function RemoveSpecialRoamingAndkeepInternational(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:setSubscription msisdn='"+msisdn+"'>"+
"<gsm:obo>0</gsm:obo>"+
"<gsm:obr>1</gsm:obr>"+
"<gsm:rsa>100</gsm:rsa>"+
"</gsm:setSubscription>"+
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
  function RemoveZainGPRSService(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:setSubscription msisdn='"+msisdn+"'>"+
"<gsm:gprs pdpid='4' xsi:nil='true'>"+
"</gsm:gprs>"+
"</gsm:setSubscription>"+
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
  function SETOBOOBIOSBBarring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:setSubscription msisdn='"+msisdn+"'>"+
"<gsm:obi>1</gsm:obi>"+
"<gsm:obo>2</gsm:obo>"+
"<gsm:osb4>1</gsm:osb4>"+
"</gsm:setSubscription>"+
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
  function SOCLIP(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    
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
  function SOCLIR(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    
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
  function TS11(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    
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
  function TemporaryGPRSDisconnect(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:gsm='http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/GsmHlr/</cai3:MOType>"+
"<cai3:MOId>"+
"<gsm:msisdn>"+msisdn+"</gsm:msisdn>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<gsm:setSubscription msisdn='"+msisdn+"'>"+
"<gsm:gprs pdpid='1' xsi:nil='true'>"+
"</gsm:gprs>"+
"<gsm:gprs pdpid='2' xsi:nil='true'>"+
"</gsm:gprs>"+
"</gsm:setSubscription>"+
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
  function SETLTEDATABarring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:hss='http://schemas.ericsson.com/ma/HSS/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
"<cai3:MOId>"+
"<hss:imsi>"+imsi+"</hss:imsi>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<hss:SetEPSMultiSC imsi='"+imsi+"'>"+
"<hss:epsOdb>"+epsOdb+"</hss:epsOdb>"+
"<hss:epsZoneCodeSetId>"+epsZoneCodeSetId+"</hss:epsZoneCodeSetId>"+
"</hss:SetEPSMultiSC>"+
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
  function SETProfileID(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:hss='http://schemas.ericsson.com/ma/HSS/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>EPSMultiSC@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
"<cai3:MOId>"+
"<hss:imsi>"+imsi+"</hss:imsi>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<hss:SetEPSMultiSC imsi='"+imsi+"'>"+
"<hss:epsProfileId>"+epsProfileId+"</hss:epsProfileId>"+
"</hss:SetEPSMultiSC>"+
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
  function BlockWIFIandpassIN(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:hss='http://schemas.ericsson.com/ma/HSS/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>IMSAssociation@http://schemas.ericsson.com/ma/HSS/</cai3:MOType>"+
"<cai3:MOId>"+
"<hss:associationId>"+associationId+"</hss:associationId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<hss:SetIMSAssociation associationId='"+associationId+"'>"+
"<hss:chargingProfId>OnlineOffline_Charging</hss:chargingProfId>"+
"<hss:publicData publicIdValue='sip:+962797345995@ims.mnc001.mcc416.3gppnetwork.org'>"+
"<hss:wirelineAccessAllowed>ALLOWED_ONLY_IF_PANI_INCL_AUTH_LOCATION</hss:wirelineAccessAllowed>"+
"</hss:publicData>"+
"<hss:publicData publicIdValue='"+associationId+"'>"+
"<hss:wirelineAccessAllowed>ALLOWED_ONLY_IF_PANI_INCL_AUTH_LOCATION</hss:wirelineAccessAllowed>"+
"</hss:publicData>"+
"</hss:SetIMSAssociation>"+
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
  function AddCFNRC(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:communication-diversion>"+
"<mtas:cdiv-user-configuration>"+
"<mtas:active>true</mtas:active>"+
"<mtas:cdiv-ruleset>"+
"<mtas:cdiv-rule id='call-diversion-not-reachable'>"+
"<mtas:cdiv-conditions>"+
"<mtas:rule-deactivated>false</mtas:rule-deactivated>"+
"<mtas:cdiv-call-state>not-reachable</mtas:cdiv-call-state>"+
"</mtas:cdiv-conditions>"+
"<mtas:cdiv-actions>"+
"<mtas:forward-to>"+
"<mtas:target>tel:+962790001322</mtas:target>"+
"<mtas:notify-served-user>false</mtas:notify-served-user>"+
"<mtas:notify-served-user-on-outbound-call>false</mtas:notify-served-user-on-outbound-call>"+
"</mtas:forward-to>"+
"</mtas:cdiv-actions>"+
"</mtas:cdiv-rule>"+
"</mtas:cdiv-ruleset>"+
"</mtas:cdiv-user-configuration>"+
"</mtas:communication-diversion>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function AddCFU(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:communication-diversion>"+
"<mtas:cdiv-user-configuration>"+
"<mtas:active>true</mtas:active>"+
"<mtas:cdiv-ruleset>"+
"<mtas:cdiv-rule id='call-diversion-unconditional'>"+
"<mtas:cdiv-conditions>"+
"<mtas:rule-deactivated>false</mtas:rule-deactivated>"+
"</mtas:cdiv-conditions>"+
"<mtas:cdiv-actions>"+
"<mtas:forward-to>"+
"<mtas:target>tel:+962790001322</mtas:target>"+
"<mtas:notify-served-user>false</mtas:notify-served-user>"+
"<mtas:notify-served-user-on-outbound-call>false</mtas:notify-served-user-on-outbound-call>"+
"</mtas:forward-to>"+
"</mtas:cdiv-actions>"+
"</mtas:cdiv-rule>"+
"</mtas:cdiv-ruleset>"+
"</mtas:cdiv-user-configuration>"+
"</mtas:communication-diversion>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function AddCLIPlus(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:communication-diversion>"+
"<mtas:cdiv-user-configuration>"+
"<mtas:active>true</mtas:active>"+
"<mtas:cdiv-ruleset>"+
"<mtas:cdiv-rule id='call-diversion-unconditional'>"+
"<mtas:cdiv-conditions>"+
"<mtas:rule-deactivated>false</mtas:rule-deactivated>"+
"</mtas:cdiv-conditions>"+
"<mtas:cdiv-actions>"+
"<mtas:forward-to>"+
"<mtas:target>tel:+962790001322</mtas:target>"+
"<mtas:notify-served-user>false</mtas:notify-served-user>"+
"<mtas:notify-served-user-on-outbound-call>false</mtas:notify-served-user-on-outbound-call>"+
"</mtas:forward-to>"+
"</mtas:cdiv-actions>"+
"</mtas:cdiv-rule>"+
"</mtas:cdiv-ruleset>"+
"</mtas:cdiv-user-configuration>"+
"</mtas:communication-diversion>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function AddRBT(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:customized-alerting-tone>"+
"<mtas:cat-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"</mtas:cat-operator-configuration>"+
"</mtas:customized-alerting-tone>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function Addincommingcommunicationbarring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:incoming-communication-barring>"+
"<mtas:icb-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"<mtas:icb-ruleset>"+
"<mtas:icb-rule id='ICB_BAIC'>"+
"<mtas:icb-conditions>"+
"<mtas:rule-deactivated>false</mtas:rule-deactivated>"+
"</mtas:icb-conditions>"+
"</mtas:icb-rule>"+
"</mtas:icb-ruleset>"+
"</mtas:icb-operator-configuration>"+
"</mtas:incoming-communication-barring>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function AddoutgoingRoamingcommunicationbarring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:outgoing-communication-barring>"+
"<mtas:ocb-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"<mtas:ocb-ruleset>"+
"<mtas:ocb-rule id='OCB_BORO'>"+
"<mtas:ocb-conditions>"+
"<mtas:rule-deactivated>false</mtas:rule-deactivated>"+
"<mtas:roaming>true</mtas:roaming>"+
"</mtas:ocb-conditions>"+
"</mtas:ocb-rule>"+
"</mtas:ocb-ruleset>"+
"</mtas:ocb-operator-configuration>"+
"</mtas:outgoing-communication-barring>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function Addoutgoingcommunicationbarring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:outgoing-communication-barring>"+
"<mtas:ocb-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"<mtas:ocb-ruleset>"+
"<mtas:ocb-rule id='OCB_BAOC'>"+
"<mtas:ocb-conditions>"+
"<mtas:rule-deactivated>false</mtas:rule-deactivated>"+
"</mtas:ocb-conditions>"+
"</mtas:ocb-rule>"+
"</mtas:ocb-ruleset>"+
"</mtas:ocb-operator-configuration>"+
"</mtas:outgoing-communication-barring>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function Addoutgoinginterantionalcommunicationbarring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:outgoing-communication-barring>"+
"<mtas:ocb-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"<mtas:ocb-ruleset>"+
"<mtas:ocb-rule id='OCB_BOIC'>"+
"<mtas:ocb-conditions>"+
"<mtas:rule-deactivated>false</mtas:rule-deactivated>"+
"<mtas:international>true</mtas:international>"+
"</mtas:ocb-conditions>"+
"</mtas:ocb-rule>"+
"</mtas:ocb-ruleset>"+
"</mtas:ocb-operator-configuration>"+
"</mtas:outgoing-communication-barring>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function RemoveCFNRC(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:communication-diversion>"+
"<mtas:cdiv-user-configuration>"+
"<mtas:active>true</mtas:active>"+
"<mtas:cdiv-ruleset>"+
"<mtas:cdiv-rule id='call-diversion-busy'>"+
"<mtas:cdiv-conditions>"+
"<mtas:rule-deactivated>true</mtas:rule-deactivated>"+
"<mtas:cdiv-call-state>not-reachable</mtas:cdiv-call-state>"+
"</mtas:cdiv-conditions>"+
"<mtas:cdiv-actions>"+
"<mtas:forward-to>"+
"<mtas:target></mtas:target>"+
"<mtas:notify-served-user>false</mtas:notify-served-user>"+
"<mtas:notify-served-user-on-outbound-call>false</mtas:notify-served-user-on-outbound-call>"+
"</mtas:forward-to>"+
"</mtas:cdiv-actions>"+
"</mtas:cdiv-rule>"+
"</mtas:cdiv-ruleset>"+
"</mtas:cdiv-user-configuration>"+
"</mtas:communication-diversion>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function RemoveCFU(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:communication-diversion>"+
"<mtas:cdiv-user-configuration>"+
"<mtas:active>true</mtas:active>"+
"<mtas:cdiv-ruleset>"+
"<mtas:cdiv-rule id='call-diversion-unconditional'>"+
"<mtas:cdiv-conditions>"+
"<mtas:rule-deactivated>true</mtas:rule-deactivated>"+
"</mtas:cdiv-conditions>"+
"<mtas:cdiv-actions>"+
"<mtas:forward-to>"+
"<mtas:target></mtas:target>"+
"<mtas:notify-served-user>false</mtas:notify-served-user>"+
"<mtas:notify-served-user-on-outbound-call>false</mtas:notify-served-user-on-outbound-call>"+
"</mtas:forward-to>"+
"</mtas:cdiv-actions>"+
"</mtas:cdiv-rule>"+
"</mtas:cdiv-ruleset>"+
"</mtas:cdiv-user-configuration>"+
"</mtas:communication-diversion>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function RemoveCLIPlus(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
"<soapenv:Header>"+
"<cai3:SessionId>e6936a3d48034f7aa395df290f174392</cai3:SessionId>"+
"</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:communication-diversion>"+
"<mtas:cdiv-user-configuration>"+
"<mtas:active>true</mtas:active>"+
"<mtas:cdiv-ruleset>"+
"<mtas:cdiv-rule id='call-diversion-unconditional'>"+
"<mtas:cdiv-conditions>"+
"<mtas:rule-deactivated>true</mtas:rule-deactivated>"+
"</mtas:cdiv-conditions>"+
"<mtas:cdiv-actions>"+
"<mtas:forward-to>"+
"<mtas:target></mtas:target>"+
"<mtas:notify-served-user>false</mtas:notify-served-user>"+
"<mtas:notify-served-user-on-outbound-call>false</mtas:notify-served-user-on-outbound-call>"+
"</mtas:forward-to>"+
"</mtas:cdiv-actions>"+
"</mtas:cdiv-rule>"+
"</mtas:cdiv-ruleset>"+
"</mtas:cdiv-user-configuration>"+
"</mtas:communication-diversion>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function RemoveCLIR(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>sip:+962790640534@ims.mnc001.mcc416.3gppnetwork.org</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='sip:+962790640534@ims.mnc001.mcc416.3gppnetwork.org'>"+
"<mtas:services>"+
"<mtas:originating-identity-presentation-restriction>"+
"<mtas:oir-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"<mtas:mode>ad-hoc-temporary-presentation-not-restricted</mtas:mode>"+
"<mtas:restriction>only-identity</mtas:restriction>"+
"</mtas:oir-operator-configuration>"+
"<mtas:oir-user-configuration>"+
"<mtas:active>true</mtas:active>"+
"<mtas:default-behaviour>presentation-not-restricted</mtas:default-behaviour>"+
"</mtas:oir-user-configuration>"+
"</mtas:originating-identity-presentation-restriction>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function RemoveRBT(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:customized-alerting-tone>"+
"<mtas:cat-operator-configuration>"+
"<mtas:activated>false</mtas:activated>"+
"</mtas:cat-operator-configuration>"+
"</mtas:customized-alerting-tone>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function Removeincommingcommunicationbarring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId="+publicId+">"+
"<mtas:services>"+
"<mtas:incoming-communication-barring>"+
"<mtas:icb-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"<mtas:icb-ruleset>"+
"<mtas:icb-rule id='ICB_BAIC'>"+
"<mtas:icb-conditions>"+
"<mtas:rule-deactivated>true</mtas:rule-deactivated>"+
"</mtas:icb-conditions>"+
"</mtas:icb-rule>"+
"</mtas:icb-ruleset>"+
"</mtas:icb-operator-configuration>"+
"</mtas:incoming-communication-barring>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function RemoveoutgoingRoamingcommunicationbarring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId="+publicId+">"+
"<mtas:services>"+
"<mtas:outgoing-communication-barring>"+
"<mtas:ocb-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"<mtas:ocb-ruleset>"+
"<mtas:ocb-rule id='OCB_BORO'>"+
"<mtas:ocb-conditions>"+
"<mtas:rule-deactivated>true</mtas:rule-deactivated>"+
"<mtas:roaming>true</mtas:roaming>"+
"</mtas:ocb-conditions>"+
"</mtas:ocb-rule>"+
"</mtas:ocb-ruleset>"+
"</mtas:ocb-operator-configuration>"+
"</mtas:outgoing-communication-barring>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function Removeoutgoingcommunicationbarring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId='"+publicId+"'>"+
"<mtas:services>"+
"<mtas:outgoing-communication-barring>"+
"<mtas:ocb-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"<mtas:ocb-ruleset>"+
"<mtas:ocb-rule id='OCB_BAOC'>"+
"<mtas:ocb-conditions>"+
"<mtas:rule-deactivated>true</mtas:rule-deactivated>"+
"</mtas:ocb-conditions>"+
"</mtas:ocb-rule>"+
"</mtas:ocb-ruleset>"+
"</mtas:ocb-operator-configuration>"+
"</mtas:outgoing-communication-barring>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function Removeoutgoinginterantionalcommunicationbarring(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3:Set>"+
"<cai3:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3:MOType>"+
"<cai3:MOId>"+
"<mtas:publicId>"+publicId+"</mtas:publicId>"+
"</cai3:MOId>"+
"<cai3:MOAttributes>"+
"<mtas:setSubscription publicId="+publicId+">"+
"<mtas:services>"+
"<mtas:outgoing-communication-barring>"+
"<mtas:ocb-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"<mtas:ocb-ruleset>"+
"<mtas:ocb-rule id='OCB_BOIC'>"+
"<mtas:ocb-conditions>"+
"<mtas:rule-deactivated>true</mtas:rule-deactivated>"+
"<mtas:international>true</mtas:international>"+
"</mtas:ocb-conditions>"+
"</mtas:ocb-rule>"+
"</mtas:ocb-ruleset>"+
"</mtas:ocb-operator-configuration>"+
"</mtas:outgoing-communication-barring>"+
"</mtas:services>"+
"</mtas:setSubscription>"+
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
  function originatingidentitypresentation(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:mtas='http://schemas.ericsson.com/ema/UserProvisioning/MTAS/' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
            "</wsse:UsernameToken>"+
        "</wsse:Security>"+
   "</soapenv:Header>"+
"<soapenv:Body>"+
"<cai3g:Set>"+
"<cai3g:MOType>Subscription@http://schemas.ericsson.com/ema/UserProvisioning/MTAS/</cai3g:MOType>"+
"<cai3g:MOId>"+
"<mtas:setSubscription publicId>"+publicId+"</mtas:publicId>"+
"</cai3g:MOId>"+
"<cai3g:MOAttributes>"+
"<mtas:setMMTel publicId="+publicId+">"+
"<mtas:originating-identity-presentation>"+
"<mtas:oip-operator-configuration>"+
"<mtas:activated>true</mtas:activated>"+
"<mtas:restriction-override>override-active</mtas:restriction-override>"+
"</mtas:oip-operator-configuration>"+
"<mtas:oip-user-configuration>"+
"<mtas:active>true</mtas:active>"+
"</mtas:oip-user-configuration>"+
"</mtas:originating-identity-presentation>"+
"</mtas:setMMTel>"+
"</cai3g:MOAttributes>"+
"</cai3g:Set>"+
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
  function DOWNGRADEn(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:pcrf='http://schemas.ericsson.com/ma/CA/PCRF/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
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
"<pcrf:subscribeServicePackage>"+
"<pcrf:usrIdentifier>"+usrIdentifier+"</pcrf:usrIdentifier>"+
"<pcrf:srvpkgName>"+srvpkgName+"</pcrf:srvpkgName>"+
"</pcrf:subscribeServicePackage>"+
"</pcrf:SetPCRFUser>"+
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
  function UPGRADE(){
   
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('Post', "http://10.50.0.17:8080/CAI3G1.2/services/CAI3G1.2", true);
    
    // build SOAP request
    var sr =
    "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:cai3='http://schemas.ericsson.com/cai3g1.2/' xmlns:pcrf='http://schemas.ericsson.com/ma/CA/PCRF/'>"+
   "<soapenv:Header>"+
     "<wsse:Security xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>"+
            "<wsse:UsernameToken>"+
                "<wsse:Username>mesaimi</wsse:Username>"+
                "<wsse:Password>Zain@1234</wsse:Password>"+
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
                          name="msisdn"
                          value={msisdn}
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
                          name="action"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={bar}>
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
                          name="msisdn"
                          value={msisdn}
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
                          name="accumulatorId"
                          value={accumulatorID}
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
                          name="accumulatorValueAbsolute"
                          value={accumulatorValueAbsolute}
                                onChange={(e) => setAccumulatorValueAbsolute(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={moneyTransferUnbaring}>
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
                          name="msisdn"
                          value={msisdn}
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
                          name="accumulatorID"
                          value={accumulatorID}
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
                          name="accumulatorValueAbsolute"
                          value={accumulatorValueAbsolute}
                                onChange={(e) => setAccumulatorValueAbsolute(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={moneyTransferUnbaring}>
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
                          name="msisdn"
                          value={msisdn}
                                onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>schedule ID</label>
                        <Input
                          defaultValue=""
                          placeholder="schedule ID"
                          type="text"
                          name="scheduleID"
                          value={scheduleID}
                                onChange={(e) => setScheduleID(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={changeBillCycle}>
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
                          name="msisdn"
                          value={msisdn}
                                onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={trcUnlock}>
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
                          name="msisdn"
                          value={msisdn}
                                onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={trcLock}>
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
                          name="msisdn"
                          value={msisdn}
                                onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>adjustment Amount Relative</label>
                        <Input
                          defaultValue="1000"
                          placeholder="adjustment Amount Relative"
                          type="text"
                          name="adjustmentAmountRelative"
                          value={adjustmentAmountRelative}
                                onChange={(e) => setAdjustmentAmountRelative(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={mainAccountRecharge}>
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
                          name="msisdn"
                                onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicated Account ID</label>
                        <Input
                          
                          placeholder="dedicated Account ID"
                          type="text"
                          name="DAID"
                          onChange={(e) => setDaid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicated Account Value New</label>
                        <Input
                          defaultValue="0"
                          placeholder="dedicated Account Value New"
                          type="text"
                          name="DAValue"
                          onChange={(e) => setDavalue(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setDataDaValue}>
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
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicated Account ID</label>
                        <Input
                        placeholder="dedicatedAccountID"
                          type="text"
                          name="DAID"
                          onChange={(e) => setDaid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicated Account Value New</label>
                        <Input
                          placeholder="dedicated Account Value New"
                          type="text"
                          name="DAValue"
                          onChange={(e) => setDavalue(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setMinutesDaValue}>
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
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicated Account ID</label>
                        <Input
                          placeholder="dedicatedAccountID"
                          type="text"
                          name="DAID"
                          onChange={(e) => setDaid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicated Account Value New</label>
                        <Input
                          placeholder="dedicated Account Value New"
                          type="text"
                          name="DAValue"
                          onChange={(e) => setDavalue(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setDataDaValueRelative}>
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
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicated Account ID</label>
                        <Input
                          placeholder="dedicated Account ID"
                          type="text"
                          name="DAID"
                          onChange={(e) => setDaid(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>dedicated Account Value New</label>
                        <Input
                          placeholder="dedicated Account Value New"
                          type="text"
                          name="DAValue"
                          onChange={(e) => setDavalue(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setMinutesDaValueRelative}>
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
                        <label>cc1</label>
                        <Input
                          placeholder="cc1"
                          type="number"
                          name="cc1"
                          onChange={(e) => setCc1(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setCommunityCc1}>
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
                          placeholder="Msisdn"
                          type="number"
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>cc2</label>
                        <Input
                          placeholder="cc2"
                          type="number"
                          name="cc2"
                          onChange={(e) => setCc2(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setCommunityCc2}>
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
                          placeholder="Msisdn"
                          type="number"
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>cc3</label>
                        <Input
                          placeholder="cc3"
                          type="number"
                          name="cc3"
                          onChange={(e) => setCc3(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setCommunityCc3}>
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
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>transaction Amount</label>
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
                        <label>msisdn</label>
                        <Input
                          placeholder="msisdn"
                          type="number"
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>ProviderID</label>
                        <Input
                          placeholder="ProviderID"
                          type="number"
                          name="providerID"
                          onChange={(e) => setProviderID(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={addSharedOffer}>
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
                        <label>MSISDN</label>
                        <Input
                          placeholder="msisdn"
                          type="number"
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Usage Counter ID</label>
                        <Input
                          placeholder="Usage Counter ID"
                          type="number"
                          name="uc"
                          onChange={(e) => setUc(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Usage Counter Monetary Value New</label>
                        <Input
                          placeholder="Value"
                          type="number"
                          name="ucValue"
                          onChange={(e) => setUcValue(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setUcMValue}>
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
                          placeholder="msisdn"
                          type="number"
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Usage Counter ID</label>
                        <Input
                          placeholder="Usage Counter ID"
                          type="number"
                          name="uc"
                          onChange={(e) => setUc(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Usage Counter Non Monetary Value New</label>
                        <Input
                           placeholder="Value"
                           type="number"
                           name="ucValue"
                           onChange={(e) => setUcValue(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setUcNMValue}>
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
                           placeholder="msisdn"
                           type="number"
                           name="msisdn"
                           onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Usage Threshold ID</label>
                        <Input
                          placeholder="Usage Threshold ID"
                          type="number"
                          name="ut"
                           onChange={(e) => setUt(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Usage Threshold Monetary Value New</label>
                        <Input
                          placeholder="Value"
                          type="number"
                          name="utValue"
                           onChange={(e) => setUtValue(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setUtValueN}>
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
                        <label>msisdn</label>
                        <Input
                          placeholder="msisdn"
                          type="number"
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>faf Number</label>
                        <Input
                          placeholder="fafNumber"
                          type="text"
                          name="fafNumber"
                          onChange={(e) => setFafNumber(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setFafNumberN}>
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
                        <label>MSISDN</label>
                        <Input
                          placeholder="msisdn"
                          type="number"
                          name="msisdn"
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>languageIDNew</label>
                        <Input
                          placeholder="language ID"
                          type="number"
                          name="languageID"
                          onChange={(e) => setLanguageID(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={setLanguage}>
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
                        placeholder="imsi"
                          type="number"
                          name="imsi"
                          onChange={(e) => setImsi(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>epsZoneCodeSetId</label>
                        <Input
                          placeholder="eps Zone Code Set Id"
                          type="text"
                          name="epsZoneCodeSetId"
                          onChange={(e) => setEpsZoneCodeSetId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                onClick={removeBaringOnLTE}
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
                          placeholder="imsi"
                          type="number"
                          name="imsi"
                          onChange={(e) => setImsi(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>epsOdb</label>
                        <Input
                          placeholder="epsOdb"
                          type="text"
                          name="epsOdb"
                          onChange={(e) => setEpsOdb(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={SetBarringOnLTE}>
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
                          placeholder="imsi"
                          type="number"
                          name="imsi"
                          onChange={(e) => setImsi(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>eps ProfileId</label>
                        <Input
                          placeholder="eps ProfileId"
                          type="text"
                          name="epsProfileId"
                          onChange={(e) => setEpsProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit" onClick={SetEpsProfileId}>
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
                <Button className="btn-fill" color="primary" type="submit"
                >
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
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveRingBackTone} >
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
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveSMSIncomingBaring} >
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
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveSpecialRoaming}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveSpecialRoamingAndkeepInternational}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveZainGPRSService}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={SETOBOOBIOSBBarring}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
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
                <Button className="btn-fill" color="primary" type="submit"
                onClick={SOCLIP}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
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
                <Button className="btn-fill" color="primary" type="submit"
                onClick={SOCLIR}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
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
                <Button className="btn-fill" color="primary" type="submit"
                onClick={TS11}>
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
                          onChange={(e) => setMsisdn(e.target.value)}
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
                          onChange={(e) => setTs62(e.target.value)}
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
                          onChange={(e) => setBc(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={TemporaryGPRSDisconnect}>
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
                          onChange={(e) => setImsi(e.target.value)}
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
                          onChange={(e) => setEpsOdb(e.target.value)}
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
                          onChange={(e) => setEpsZoneCodeSetId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={SETLTEDATABarring}>
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
                          onChange={(e) => setImsi(e.target.value)}
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
                          onChange={(e) => setEpsProfileId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={SETProfileID}>
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
                          onChange={(e) => setAssociationId(e.target.value)}
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
                          onChange={(e) => setChargingProfId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={BlockWIFIandpassIN}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={AddCFNRC}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={AddCFU}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={AddCLIPlus}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={AddRBT}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={Addincommingcommunicationbarring}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={AddoutgoingRoamingcommunicationbarring}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={Addoutgoingcommunicationbarring}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={Addoutgoinginterantionalcommunicationbarring}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveCFNRC}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveCFU}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveCLIPlus}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveCLIR}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveRBT}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={Removeincommingcommunicationbarring}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={RemoveoutgoingRoamingcommunicationbarring}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={Removeoutgoingcommunicationbarring}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={Removeoutgoinginterantionalcommunicationbarring}>
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
                          onChange={(e) => setPublicId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={originatingidentitypresentation}>
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
                          onChange={(e) => setUsrIdentifier(e.target.value)}
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
                          onChange={(e) => setSrvpkgName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={DOWNGRADEn}>
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
                          onChange={(e) => setUsrIdentifier(e.target.value)}
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
                          onChange={(e) => setSrvpkgName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit"
                onClick={UPGRADE}>
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

export default Set;
