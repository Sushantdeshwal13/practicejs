//getattribute, setattribute, removeattribute, append, prepend,
// style, classList.add,classList.remove, classList.toggle
//types of nodes - elementnode, text, comment
// p tag is element node-- text in this is child node
// p has children but text not // element node is tag and content in this is textnode
//getelementsbyclassname returns htmlcolection
//queryselectorall return nodelist
//Event objecte are -- targe, type. preventDefault
//click is event and jo fn chlega vo listener hai 
//that is event  and listener
//inline validation - pattern="[a-z]{3-9} required"
//value vs textcontent - value is input value and textcontent is
//data writtn inside html tags


// let input = document.querySelector("input");
// input.addEventListener("input", (e)=>{
//     if(e.data !== null)
//     console.log(e.data);  
// })


// let h1= document.querySelector("h1");
// let select = document.querySelector("select");
// select.addEventListener("click",(e)=>{
//     h1.textContent = `hello ${e.target.value}`;  
// })


// let h1 = document.querySelector("h1");
// window.addEventListener("keydown",(e)=>{
//     console.log(e); 
//     h1.textContent = e.key;
// })


//-----------card generator-------------
// let form = document.querySelector("form");
// let input = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     let card = document.createElement("div");
//            card.classList.add("card")
//     let profile=document.createElement("div")
//            profile.classList.add("profile");
//     let img = document.createElement("img")
//        img.setAttribute("src",input[0].value);

//     let h2 = document.createElement("h2")
//        h2.textContent=input[1].value;

//     let h3 = document.createElement("h3")
//        h3.textContent=input[2].value;
//     let p = document.createElement("p")
//        p.textContent=input[3].value;

// main.appendChild(card);
// card.appendChild(profile);
// profile.appendChild(img);

// card.appendChild(h2);
// card.appendChild(h3);
// card.appendChild(p);

// input.forEach((inp)=>{
//     if(inp.type!=="submit"){
//         inp.value==""
//     }
// })
// })


//-------------color changer-------
// let box = document.querySelector("div");
// box.addEventListener("mouseover",()=>{
//     box.style.backgroundColor = "yellow";
// })
// box.addEventListener("mouseout",()=>{
//     box.style.backgroundColor = "red"
// })
//------------------------------------------
// let box = document.querySelector(".box")
// window.addEventListener("mousemove",(e)=>{
//     box.style.top = e.clientY + "px";
//     box.style.left = e.clientX + "px";
// })
//-------------------------------


// let ul = document.querySelector("ul");
// ul.addEventListener("click",(e)=>{
//     e.target.classList.toggle("line");
// })


//-------------bubbling, capturing, delegation-----
//1.capture phase --pehle ye chlta hai isme hme "true" paas
//krna pdta hai isko on krne k liye(pehle sbse bahar ka parent 
// fir uske child ka , fir uske child ka)
//2.bubbling phase - parent pr listener hai vo chlega uske
//parent pr hai to vo bhi chlega uske parent pr hai to vo bhi
//chlega bottom to top.........

//-----------twitter input box---------

// let span = document.querySelector("span");
// let input = document.querySelector("input");
// input.addEventListener("input",(e)=>{
//     let left = 20-e.target.value.length;
//     if(left>0){
//         span.textContent = left;
//         span.style.color= "brown";
//     }else{
//         span.textContent=left;
//         span.style.color= "red";
//     }
// })


//-----------form validation -------------

//  let input = document.querySelector("input");
//  let form = document.querySelector("form");

//  form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if(input.value.length<5){
//        document.querySelector(".hide").style.display="initial"
//     }else{
//         document.querySelector(".hide").style.display="none"
//     }
//  })

//-------email and password validation---------

// let  form = document.querySelector("form")
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let p = document.querySelector("p")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//      if(!email.value.match(emailPattern)){
//         p.textContent="invalid email"
//         return;
//      }
//      if(password.value.length<6){
//         p.textContent="invalid passwrld"
//         return;
//      } 
//      p.textContent="login successfull"
//      p.style.color = "green"
// })

//-----------setinterval and timeout----------

// let count =10;
// let interval = setInterval(()=>{
//    if(count>0){
//     count--;
//     console.log(count);
//    }else
//    clearInterval(interval);
// },1000)

//---------------download progress--------
// let progress = document.querySelector(".progress")
// let percentage = document.querySelector(".percentage")

// let count = 0;
// let timer = setInterval(()=>{
//   if(count<99){
//     count++;
//     progress.style.width = `${count}px`;
//     percentage.textContent= `${count}%`;
//   }else{
//     clearInterval(timer);
//     document.querySelector("h2").textContent="downloaded"
//   }
// },30);
//-------------------------------------------
// function stringreverse(string){
//     let ans = string
//            .split(" ")
//            .map((word)=>word.length>=5?word.split("").reverse().join(""):word)
//            .join(" ")
//            console.log(ans)
// }

// stringreverse("this is sushant")
//---------------------------------------------
// function countbits(n){
//     return n.toString(2).split("").filter(bit=>bit==="1").length;
// }

// console.log(countbits(12345))

//--------------------------------------

// function opensenior(data){
//     return data.map(([age,handicap])=>
//     (age>=55 && handicap >7) ? "senior" : "open")
// }

// console.log(opensenior([[18,20],[45,3],[61,12]]));


//----------------------------------------

// function highandlow(numbers){
//     const arr =  numbers.split(" ").map(Number)
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     return `${max} ${min}`;
// }

// console.log(highandlow("1 2 3 4 5"));

//-----------------------------------
// function order(words){
//     if(!words)  return "";

//     return words.split(" ")
//            .sort((a,b)=> a.match(/\d/)-b.match(/\d/))
//            .join(" ")
    
// }
// console.log(order("is2 Thi1s T4est 3a")); 
//----------------------------
// function solution(str, ending){
//     return str.endsWith(ending)
// }
// console.log(solution("abc","bc"))
//------------------------------------

// function desorder(n){
//     return Number(
//         n.toString()
//         .split("")
//         .sort((a,b)=>b-a)
//         .join("")
//     )
// }
// console.log(desorder(43256))

//-----------------------------------------------
// function check(dna){
//     let pairs={A:'T', T:'A',G:'C',C:'G'}
//     return dna.split('')
//     .map((base)=>pairs[base])
//     .join("")
// }
// console.log(check("ATTGC"))

//----------------