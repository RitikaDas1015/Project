 function Submit(){
    var dataEntered=retData();
    var readData=setData(dataEntered);
    insert(readData);
}
    function retData(){
 var nm=document.getElementById("n1").value;
 var em=document.getElementById("e1").value;
 var age=document.getElementById("a1").value;
 var phn=document.getElementById("p1").value;
 var adhar=document.getElementById("ac1").value;
 var address=document.getElementById("ad1").value;
 var date=document.getElementById("d1").value;
 var arr=[nm,em,age,phn,adhar,address,date];
 return arr;
}
function setData(dataEntered){
var a =localStorage.setItem("Name",dataEntered[0]);
var b =localStorage.setItem("Email Id",dataEntered[1]);
var c =localStorage.setItem("Age",dataEntered[2]);
var d =localStorage.setItem("Phone Number",dataEntered[3]);
var e =localStorage.setItem("Adhar Card Number",dataEntered[4]);
var f =localStorage.setItem("Address",dataEntered[5]);
var g =localStorage.setItem("Date",dataEntered[6]);

    var a1 =localStorage.getItem("Name",a);
    var b1 =localStorage.getItem("Email Id",b);
    var c1 =localStorage.getItem("Age",c);
    var d1 =localStorage.getItem("Phone Number",d);
    var e1 =localStorage.getItem("Adhar Card Number",e);
    var f1 =localStorage.getItem("Address",f);
    var g1 =localStorage.getItem("Date",g);
    var arr=[a1,b1,c1,d1,e1,f1,g1];
    return arr;
}
function insert(readData){
       var a=document.getElementById("table");
       var row=a.insertRow();
       row.insertCell(0).innerHTML=readData[0];
       row.insertCell(1).innerHTML=readData[1];
       row.insertCell(2).innerHTML=readData[2];
       row.insertCell(3).innerHTML=readData[3];
       row.insertCell(4).innerHTML=readData[4];
       row.insertCell(5).innerHTML=readData[5];
       row.insertCell(6).innerHTML=readData[6];
}