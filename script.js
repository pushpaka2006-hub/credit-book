let customers = JSON.parse(localStorage.getItem("customers")) || [];

function login(){

let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){

document.getElementById("loginPage").style.display="none";

document.getElementById("dashboard").style.display="block";

showCustomers();

}else{

alert("Wrong Username or Password");

}

}

function addCustomer(){

let name=document.getElementById("name").value;

let phone=document.getElementById("phone").value;

let credit=parseFloat(document.getElementById("credit").value);

customers.push({

name,

phone,

credit

});

save();

showCustomers();

document.getElementById("name").value="";

document.getElementById("phone").value="";

document.getElementById("credit").value="";

}

function showCustomers(){

let body=document.getElementById("tableBody");

body.innerHTML="";

customers.forEach((c,index)=>{

body.innerHTML+=`

<tr>

<td>${c.name}</td>

<td>${c.phone}</td>

<td>₹${c.credit}</td>

<td>

<button class="add"

onclick="addCredit(${index})">

+ Credit

</button>

</td>

<td>

<button class="pay"

onclick="receiveMoney(${index})">

Receive

</button>

</td>

<td>

<button class="delete"

onclick="deleteCustomer(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

function addCredit(index){

let amount=prompt("Enter Credit Amount");

if(amount){

customers[index].credit += parseFloat(amount);

save();

showCustomers();

}

}

function receiveMoney(index){

let amount=prompt("Enter Received Amount");

if(amount){

customers[index].credit -= parseFloat(amount);

if(customers[index].credit<0){

customers[index].credit=0;

}

save();

showCustomers();

}

}

function deleteCustomer(index){

customers.splice(index,1);

save();

showCustomers();

}

function save(){

localStorage.setItem("customers",JSON.stringify(customers));

}