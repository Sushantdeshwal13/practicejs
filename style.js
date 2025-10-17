// let arr = [ 'a','b','sushant',3,4,56,4];

// const { json } = require("express");

// let name=[];
// let char=[];
// let number=[];


// function split(arr){
//    arr.map((x)=>{
//     if(typeof(x) === 'number'){
//         number.push(x);
//     }else if (typeof(x) === 'string'){
//         if( x.length ==1){
//             char.push(x)
//         }else{
//             name.push(x)
//         }
//     }
//    })
// }
// split(arr);
// console.log(char);
// console.log(name);
// console.log(number);


// let arr = [2,3,4,5,6];
//   let ans = arr.map((x)=>x=6)
//   console.log(ans);
  

// const student = {name: "sushant"};
// student.city = "meerut";

// console.log(undefined  + 1); Nan
// console.log(null + 1); // 1
// console.log("5" + 3); //"53"
// console.log("5" - 3);// 2
// console.log(true + false);// 1
// console.log(NaN + 1) // Nan

// console.log(typeof []);
// console.log(typeof null);
// console.log(typeof 123n);

// console.log("10" + 1);
// console.log("10" - 1);
// console.log(true + false);
// console.log(!!"Sheryians");


// function isempty(value){
//    return value===null || value === undefined || value===""
// }

// console.log(isempty(""))

// let str = "42";
// let num = +str;
// console.log(num);

 
// function game (user, computer){
//     if(user === computer) return "draw"
//     if(user === "scissor" && computer === "paper") return "user"
//     if(user === "paper" && computer === "rock") return "user"
//     if(user === "rock" && computer === "scissor") return "user"

//     return "computer"
    
// }
// console.log(game("rock", "paper"));


// let str = "sushant";
// let reverse =""

// for (let i =str.length-1; i>=0 ;i--){
//     reverse+=str[i]
// }
// console.log(reverse);


// let arr = [2,3,4,5,6,7];
// let sum = 0
// console.log(arr.length);

// for(let i=0; i<arr.length ;i++){
//     sum+=arr[i];
// }

// console.log(sum);

// let data = { name : "sushant", surname:"deshwal"}

// for(let key in data){
//     console.log(key,":", data[key]);
    
// }

// let array = [1,2,3,4,5,6];

// let evensum = 0;

// array.forEach((num)=>{
//     if(num%2==0){
//         evensum+=num;
//     }
  
// }
// )
// console.log(evensum);



// let n =5;

// for(let i=0; i<=n; i++){
//     let pattenr = " ";
//     for(let j=0; j<=i;j++){
//         pattenr+="*";
//     }
//     console.log(pattenr)
// }


// function sum(...val){
//     let total =0;
//     val.forEach((num)=>{
//         total += num;
       
//     })
//      console.log(total);
// }
// sum(2,3,4,5,6,7,8)


// function agechecker(age){
//     if(age>18) return "allowed";
//     return "not allowed"
// }

// console.log(agechecker(5))

// impure to pure fn
// let total =0;
// function addtotal(num){
//     let newtotal = total;
//     newtotal+=num;
// }

// function bmi(w, h){
//     let total = (w/(h*h))
//     console.log(total);
    
// }
// bmi(40,1.2)

//discount of the price
// function discal(value){
//     return function(price){
//         return price -price *(value/100)
//     }
// }
// let ten = discal(10);
// console.log(ten(1200));


//clouser counter function
//  function counter(){
//     let count =0
//     return function (){
//         count++;
//         return count
//     }
//  }
// let c = counter();
// console.log(c())
// console.log(c())
// console.log(c())
// console.log(c())

// let d = counter();
// console.log(d())
// console.log(d())
// console.log(d())


// function sum(...val){
//     return val.reduce((acc,val)=>acc+val, 0);
// }
// console.log(sum(1,2,3,4,5));


//function return another function
// function greetmaker(name){
//     return function(){
//         console.log(`${name}`);
        
//     }
// }
// const greet = greetmaker("susnat");
// greet()


//---------------arrays----------------
// let student = ["suahnt", "deshwal", "rashi"];

// for(let i=0;i<student.length;i++){
//     console.log(student[i]);
// }


// let arr =[2,3,4,5,6,7,8];
//  let even = arr.filter((num)=>num%2==0)
//  console.log(even);

//  let price = [100,200,300];
//    let gst = price.map((val)=>val+(val*18)/100);
//    console.log(gst);


// const salaries=[200,300,400,500];
// let payroll = salaries.reduce((acc,val)=>acc+val,0);
// console.log(payroll);


// const studentdata = [
//     { name:"sushant", grade:"a"},
//     {name:"deshwaal", grade:"b"},
//     {name:"rashi", grde:"c"}
// ]
// let finding = studentdata.find((s)=>s.grade==="b")
// console.log(finding);


// function reversearray(arr){
//     let reversed=[];
//     for(let i=arr.length-1; i>0;i--){
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }
//  console.log(reversearray([2,3,4,5,6]));


//  const ages = [12,34,23,54,23];
//  let asc = ages.sort((a,b)=>a-b);
//  console.log(ages);
 

//  const fruits = ["apple", " banana", "kiwi",'orange'];
//  const [first, second] = fruits;
//  console.log(first);
//  console.log(...fruits);

//  let a =[2,3,4,5,6];
//  let b = [...a,8];
//  console.log(a);
//  console.log(b);

//  const marks = [34,33,32,35,36];
//  let fail = marks.some((m)=>m<33)
//  console.log(fail);
 
 
//  let arra = [2,3,4,5];
//  let ar = arra.map((value)=> {
//     return 
//  })
// console.log(ar);

 
//---------objects--------
// let student = {
//     name:"sushant",
//     age:34,
//     village:"mor kalan"
// }
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// let student2 = {...student}
// console.log(student2)

// let data = {
//     name:"karan",
//     city:"karnam",
//     lang :{
//          pincode:250808,
//     }
// }
// let data2 =JSON.parse(JSON.stringify(data))
// data2.lang.country="india";
// console.log(data2);
// console.log(data);

// let key ="age";
// const user = {
//     age:26,
// }
// console.log(user[key]);

// const student = {
//     name:"sushant",
//     surname:"deshwal",
//     age:23,
// }

// console.log(Object.entries(student));

// let language = "javascript";
// const profile = {
//     name:"sushant",
//     [language]: "css" 
// }
// console.log(profile.javascript);
