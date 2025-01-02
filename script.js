//console.log('Welcome to Javascript cilent side');
/*
variables and data types
variables are named variable memeory locations
varaiables are used to store data ex:a=30
variables creation done in 3ways
1.var::not used
2.let
3.const


*/
/*
let age=25;
age=30;
console.log(age)
document.write(age)
prompt(age)
alert(age)


const nname='hello';
console.log(nname)

let age=30;
if(true){
    console.log(age)
}

function solve(){
    let a=10;
    console.log(a)

}
solve()
*/
// if wedefine console.log outside it occurs error
/*
function age(){
    let a=33;
    console.log(a)

}
age()
*/

// let Blocked  element example ::inside it works
/*
{
    let a=10;
    console.log(a)
}
//console.log(a) //occures error


let a='hello';

 a=30;
 console.log(a)


 const b='hello';
 console.log(b) 


const a='hello';
//a=33;  ::error
console.log(a)

const _22='hello yaar';
console.log(_22)

*/

/*
DATA TYPES IN JAVASCRIPT

1. NUMBER
2. STRING
3. BOOLEAN
4. NULL
5. UNDEFINED
6. OBJECT
7. SYMBOL


*/

//Arthematic

//document.write('Abhishek Naik')
/*
let a=10;
let b=20;
//document.write(a-b)
document.write(a**b)

let a=10;
//document.write(++a)
document.write(a++) 

let b=100;
//document.write(--b)
document.write(a++)
*/

//Assignment Operators
/*
let a=5;
let b=10;

document.write(a=b)

let c=30;
let d=40;
c+=100;
document.write(c)
d*=10;
document.write(d)
*/

//Comparison operators
/*
let a=30;
let b=40;
document.write(a!=b);

let c=30;
let d='30';
//document.write(c===d);
//document.write(d>=c)

//document.write(c==d);  //true
document.write(c===d);   //false
*/

//Ternary operator
/*
let age=17;
let satus=(age>=18)?'eligible to vote':'Try next year';
document.write(satus)

let age=3;
let satus=(age>=17)?'yes great':'bad luck'
document.write(satus)
*/

//Logical operators
/*
let a=33;
let b=44;
//document.write(a<b && a>b); 
//document.write(a<b || a>b);
document.write(a < b && !(a > b));
*/

//Working with non booleans
/*
document.write(false||'Abhishek');
document.write(true && 'HE' ||'by'||false);
*/

//Bitwise operators
/*
let num1=20;
let num2=30;
document.write(num1&num2);
document.write(num1||num2)

document.write(2&3)

console.log( ~6)

document.write(10^10)

document.write(10>>7)

document.write(10<<2)
*/

//CONDITIONAL STATEMENTS
//IF-ELSE
//SWITCH

/*
synatx:: 
if (contion){
    ...code
}
else{
    ...code
}


let age=9;
if (age>=18)
    {
    document.write("You are eligible to vote")
}
else
{
    document.write("You are not eligible to vote")
}


let age=91;
if (age>=18)
    {
    document.write("You are eligible to vote")
}


let nname='Abhu';
let nn='Abhixs'
if (nname=='Abhi'){
    document.write("Hello Abhi");

}else if(nname=='Abhix'){
    document.write("Hello Abhix");

}else if (nname=='Abhis'){
    document.write('Hello Abhis');

}else if(nname='Abhi'){
    if (nn=='Abhixs'){
        document.write('welcome')
    }
    document.write('hello Abhu');
}else{
    document.write('bye');
}


//SWITCH CASE

SYNTAX::
switch(expression)
{
    case1:
        code to be executed if expression matches case1;
    case2:
        code to be executed if expression matches case2;
    case3:
        code to be executed if expression matches case3;
    default:
        code to be executed if expression does not match any case;
}


let num=33;
switch(num){
    case 1:
        document.write("one")
        break;
    case 2:
        document.write("two")
        break;
    case 3:
        document.write("three")
        break;
    case 33:
        document.write("Congrats")
        break;
    case 4:
        document.write("four")
        break;
    default:
        document.write("bye")
}

*/

//LOOPS AND STRINGS

/*
There are three types of loops in JavaScript: 
1]for loops
2] while loops.
3]do while loops.


let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit); // Prints each fruit name
}


for (let i = 0; i < 3; i++) {
    console.log("Hello!"); 
}
// Prints "Hello!" three times.


for (let i=1;i<=10;i++){
    document.write('Abhishek Naik hello');
}
document.write('The End')

for (let count=1; count<=5;count++){
    document.write(count)
}
document.write('The End')

//Reverse counting

for(let i=5;i>0;i--){
    document.write(i)
}
document.write('The End')


for (let i = 1; i <= 10; i++) {
    document.write(i)
    break;
}
document.write('The End')

for (let count=1;count<=10;count++){
    if (count==5){
        break;
    }else{
        document.write(count);
    }
}
document.write('The End')

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;                   //skips 5:::1,2,3,4,6,7,8,9,10
}else{
    document.write(i);
}
}

// Initialization
let i = 0;

// Condition (iteration)
for (; i < 5;) {
    console.log(i);

    // Increment
    i++;
}

// Initialization
let count=0

for (;count<=300;){
    console.log(count);
    count++
}

*/
//While loop 
/*
let i=1;
while(i<5){
    document.write(" hello::",i);
    i++;
}

let i=10;
while(i>1){
    document.write(' hello::',i);
    i--;
}

let i=1;
while(i<15){
    if (i==3){
        i++;
        continue;

    }else{
        document.write(' hello::',i)
    }
    i++;
}

*/

//DO-WHILE LOOP
/*
let count=1;

do{
    document.write(' Abhishek Naik::',count)
    count++;
}while(count<=19);

*/

//Strings 
/*
COLLECTION OF CHARACTERS

let nam=`ABHI
SHEK
nama`
let nam2='NAIK'
document.write(nam)
document.write(typeof(nam2))

let nam3='ABHI '
let nam4='SHEK'
document.write(nam3.concat(nam4))

let nam=new String('hwll')
document.write(nam)

let op3='marathi ';
let op4='gujarati ';
let ans=op3+op4;
document.write(ans)

let op1='telgu';
let op2='Malayalam';
let ans=`${op1} and ${op2}`

document.write(ans)

let op1='Malayalam';
document.write(op1.length)

let op1='telgu';
document.write(op1.toUpperCase())

let op2='HELLO HOW ARe you?';
document.write(op2.toLowerCase())

let op1='Hello, All welcome';
document.write(op1.substring//console.log('Welcome to Javascript cilent side');
/*
variables and data types
variables are named variable memeory locations
varaiables are used to store data ex:a=30
variables creation done in 3ways
1.var::not used
2.let
3.const


*/
/*
let age=25;
age=30;
console.log(age)
document.write(age)
prompt(age)
alert(age)


const nname='hello';
console.log(nname)

let age=30;
if(true){
    console.log(age)
}

function solve(){
    let a=10;
    console.log(a)

}
solve()
*/
// if wedefine console.log outside it occurs error
/*
function age(){
    let a=33;
    console.log(a)

}
age()
*/

// let Blocked  element example ::inside it works
/*
{
    let a=10;
    console.log(a)
}
//console.log(a) //occures error


let a='hello';

 a=30;
 console.log(a)


 const b='hello';
 console.log(b) 


const a='hello';
//a=33;  ::error
console.log(a)

const _22='hello yaar';
console.log(_22)

*/

/*
DATA TYPES IN JAVASCRIPT

1. NUMBER
2. STRING
3. BOOLEAN
4. NULL
5. UNDEFINED
6. OBJECT
7. SYMBOL


*/

//Arthematic

//document.write('Abhishek Naik')
/*
let a=10;
let b=20;
//document.write(a-b)
document.write(a**b)

let a=10;
//document.write(++a)
document.write(a++) 

let b=100;
//document.write(--b)
document.write(a++)
*/

//Assignment Operators
/*
let a=5;
let b=10;

document.write(a=b)

let c=30;
let d=40;
c+=100;
document.write(c)
d*=10;
document.write(d)
*/

//Comparison operators
/*
let a=30;
let b=40;
document.write(a!=b);

let c=30;
let d='30';
//document.write(c===d);
//document.write(d>=c)

//document.write(c==d);  //true
document.write(c===d);   //false
*/

//Ternary operator
/*
let age=17;
let satus=(age>=18)?'eligible to vote':'Try next year';
document.write(satus)

let age=3;
let satus=(age>=17)?'yes great':'bad luck'
document.write(satus)
*/

//Logical operators
/*
let a=33;
let b=44;
//document.write(a<b && a>b); 
//document.write(a<b || a>b);
document.write(a < b && !(a > b));
*/

//Working with non booleans
/*
document.write(false||'Abhishek');
document.write(true && 'HE' ||'by'||false);
*/

//Bitwise operators
/*
let num1=20;
let num2=30;
document.write(num1&num2);
document.write(num1||num2)

document.write(2&3)

console.log( ~6)

document.write(10^10)

document.write(10>>7)

document.write(10<<2)
*/

//CONDITIONAL STATEMENTS
//IF-ELSE
//SWITCH

/*
synatx:: 
if (contion){
    ...code
}
else{
    ...code
}


let age=9;
if (age>=18)
    {
    document.write("You are eligible to vote")
}
else
{
    document.write("You are not eligible to vote")
}


let age=91;
if (age>=18)
    {
    document.write("You are eligible to vote")
}


let nname='Abhu';
let nn='Abhixs'
if (nname=='Abhi'){
    document.write("Hello Abhi");

}else if(nname=='Abhix'){
    document.write("Hello Abhix");

}else if (nname=='Abhis'){
    document.write('Hello Abhis');

}else if(nname='Abhi'){
    if (nn=='Abhixs'){
        document.write('welcome')
    }
    document.write('hello Abhu');
}else{
    document.write('bye');
}


//SWITCH CASE

SYNTAX::
switch(expression)
{
    case1:
        code to be executed if expression matches case1;
    case2:
        code to be executed if expression matches case2;
    case3:
        code to be executed if expression matches case3;
    default:
        code to be executed if expression does not match any case;
}


let num=33;
switch(num){
    case 1:
        document.write("one")
        break;
    case 2:
        document.write("two")
        break;
    case 3:
        document.write("three")
        break;
    case 33:
        document.write("Congrats")
        break;
    case 4:
        document.write("four")
        break;
    default:
        document.write("bye")
}

*/

//LOOPS AND STRINGS

/*
There are three types of loops in JavaScript: 
1]for loops
2] while loops.
3]do while loops.


let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit); // Prints each fruit name
}


for (let i = 0; i < 3; i++) {
    console.log("Hello!"); 
}
// Prints "Hello!" three times.


for (let i=1;i<=10;i++){
    document.write('Abhishek Naik hello');
}
document.write('The End')

for (let count=1; count<=5;count++){
    document.write(count)
}
document.write('The End')

//Reverse counting

for(let i=5;i>0;i--){
    document.write(i)
}
document.write('The End')


for (let i = 1; i <= 10; i++) {
    document.write(i)
    break;
}
document.write('The End')

for (let count=1;count<=10;count++){
    if (count==5){
        break;
    }else{
        document.write(count);
    }
}
document.write('The End')

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;                   //skips 5:::1,2,3,4,6,7,8,9,10
}else{
    document.write(i);
}
}

// Initialization
let i = 0;

// Condition (iteration)
for (; i < 5;) {
    console.log(i);

    // Increment
    i++;
}

// Initialization
let count=0

for (;count<=300;){
    console.log(count);
    count++
}

*/
//While loop 
/*
let i=1;
while(i<5){
    document.write(" hello::",i);
    i++;
}

let i=10;
while(i>1){
    document.write(' hello::',i);
    i--;
}

let i=1;
while(i<15){
    if (i==3){
        i++;
        continue;

    }else{
        document.write(' hello::',i)
    }
    i++;
}

*/

//DO-WHILE LOOP
/*
let count=1;

do{
    document.write(' Abhishek Naik::',count)
    count++;
}while(count<=19);

*/

//Strings 
/*
COLLECTION OF CHARACTERS

let nam=`ABHI
SHEK
nama`
let nam2='NAIK'
document.write(nam)
document.write(typeof(nam2))

let nam3='ABHI '
let nam4='SHEK'
document.write(nam3.concat(nam4))

let nam=new String('hwll')
document.write(nam)

let op3='marathi ';
let op4='gujarati ';
let ans=op3+op4;
document.write(ans)

let op1='telgu';
let op2='Malayalam';
let ans=`${op1} and ${op2}`

document.write(ans)

let op1='Malayalam';
document.write(op1.length)

let op1='telgu';
document.write(op1.toUpperCase())

let op2='HELLO HOW ARe you?';
document.write(op2.toLowerCase())

let op1='Hello, All welcome';
document.write(op1.substring(//console.log('Welcome to Javascript cilent side');
/*
variables and data types
variables are named variable memeory locations
varaiables are used to store data ex:a=30
variables creation done in 3ways
1.var::not used
2.let
3.const

/*
let age=25;
age=30;
console.log(age)
document.write(age)
prompt(age)
alert(age)


const nname='hello';
console.log(nname)

let age=30;
if(true){
    console.log(age)
}

function solve(){
    let a=10;
    console.log(a)

}
solve()
*/

//Function Scope:: the [nam] can be accessed inside the function::outside it will comes error
/*

function hello(){
    let nam='Earth';
    console.log('hello:',nam)
}
hello()
//console.log(nam)::error

*/
//Block scope ::
/*
console.log(height)

{
var height=5.3;
console.log(height)
}

console.log(height)
*/

//Temporal dead zone :: means  we can't access the variable before it is declared
/*
console.log(marks);
console.log('Abhi')
console.log('hello')
let marks=200;
console.log(marks);
*/

//Classes:  it is blueprint to create object
/*
class{
class state

class behaviour/functionality

}

class human{
    age=13;    //public
    #height=22;    //private can be accessed only inside the class [private indicate with #]
    gender=30;


    walking(){
        console.log('walking',this.#height)
    }
    running(){
        console.log('Iam running')
    }
}

let abhi=new human();
console.log(abhi.age)
console.log(abhi.height)

abhi.walking();

class human{
    constructor(name,age,gender){
    this.name='Abhishek',
    this.age=25,
    this.gender='male'
    }
    walking(){
        console.log('Iam walking')
    }
    running(){
        console.log('Iam running')
    }
}

let obj= new human();
console.log(obj.name)
obj.walking()
*/

//getters and setters:;we can use getter and setter to get symantic code2]encaplusation 3]date and time
/*
ex: private variable can be accessed within the class using getters we can access outside of the class too.
ex::setters are used to modify/update the values


class human{
    age=13;    //public
    #height=22;    //private can be accessed only inside the class [private indicate with #]
    gender=30;


    walking(){
        console.log('walking',this.#height)
    }
    running(){
        console.log('Iam running')
    }
    get fetchHeight(){
        return this.#height;
    }
    set modifyHeight(val){
        this.#height=val;
    }
}

let abhi=new human();
console.log(abhi.age)
console.log(abhi.height)

abhi.walking();


//Constructor


class human{
    a;
    #ht=22
    constructor(age,height){
        this.a=age;
        this.ht=height;
    }
    walking(){
        console.log('This age boy is walking')
    }
    running(){
        console.log('This boy is running fast')
    }
    get fetchHeight(){
        return this.#ht;
    }
    set modifyHeight(val){
        this.#ht=val;
    }
}
let obj=new human(322,40)
console.log('The height::',obj.fetchHeight)
console.log('The age',obj.a)
obj.walking()


class Human {
    #ht = 22; 

    constructor(age, height) {
        this.a = age; 
        this.#ht = height; 
    }

    walking() {
        console.log(`This ${this.a}`);
    }

    running() {
        console.log(`This ${this.a}`);
    }

    get fetchHeight() {
        return this.#ht; 
    }

    set modifyHeight(val) {
        this.#ht = val; 
    }
}


let obj = new Human(32, 40);

console.log("The height:", obj.getHeight); 
console.log("The age:", obj.a); 
obj.modifyHeight = 45; 
console.log("Updated height:", obj.fetchHeight); 
*/


//DEFAULT PARAMETERS
/*

this allows to use functions with default values


function sayname(fname,lname=' Naik'){
    console.log(`Myname is::${fname} ${lname}`)
}
sayname()
sayname('Abhishek Naik')

function sayname(fname='Abhishek',lname=fname.toUpperCase()){
    console.log(`Myname is::${fname} ${lname}`)
}
sayname('Abhi','naik')
sayname()
sayname('abi')

function solve(val ={age:22,ht:178, wt:88}){
    console.log('The value is:', val);
}
solve('King')
solve()
solve(undefined)
*/

//Math
/*

console.log(Math.max(33,44,3,344,5))
console.log(Math.min(3,4,3,4,54,3,2))
console.log(Math.floor(2.3,4.55,33))
console.log(Math.sqrt(44))
*/
//Date 
/*
console.log(new Date())

let date = new Date('june 20 1998')
console.log(date)

let date1 = new Date('1998-06-20')
console.log(date1)

const currentDate = new Date();
console.log(currentDate.getFullYear());

*/

//OBJECT CLONING
/*

dynamic nature
object cloning:: they are many ways
1. spred operator
2. JSON.parse(JSON.stringify(obj))
3. Object.assign({},obj)
4. Object.create(obj)
5. Object.keys(obj).forEach(key=>obj[key]=value
6. for...in loop
7. Object.assign({},obj)


*/
//Spread opeator
/*
let srcobj={
    name:'Abhishek',
    age:22   
}

let dest={...srcobj};
 console.log('This is copy::',dest)

srcobj.color='White';
console.log('This is original::',srcobj)
*/

//Assign 
/*
let srcobj={
    name:'Abhishek',
    age:22,
    height:5.3
    }


let destobj=Object.assign({},srcobj);
console.log(destobj)

srcobj.color='white'
console.log(srcobj)
*/

//Garbage collector
/*

the garbage collector is a process that runs in the background of a computer system, automatically freeing up memory occupied by objects

let obj = { name: "John" }; 
obj = null; 
console.log(obj)
*/

//ERROR HANDLING 
/*
they are two types of error handling in JavaScript
1.compiled type error::the error before the code is execution
2.runtime type error:: the erros that occur during the execution of the code

//Runtime error

try{
    console.log('Try block stars here')
    console.log(x)
    console.log('the try ends here')
        //a line
        //b line
}
catch(e){
    //retry logic
    //logging //custom error
    console.log('Iam in catch block')
    console.log('your error is here:',e)
}
finally{
    console.log('this is finally block')
}
throw{
    name:'error',
    message:'this is a custom error'

}


try {
    console.log('Try block starts here')
    console.log(x)
    console.log('The try ends here')
}
catch(err){
    throw new Error('Bro first declare the x:')
}
finally{
    console.log('This is finally block')
}


let er =100;
if (er==10){
    throw new Error('Get lost yaar')
}



let er = 100;

if (er === 10) {
    throw new Error("Get lost yaar");
} else {
    console.log("All is well!");
}
*/

//DOM manipulation
/*

window obj  is a global object
window.document.write('hello window ')

dom :: document object model
*/


//document.getElementById('fpara')
//document.getElementSByClassName('para)
//document.getElementsByTagName('h2')
//document.querySelector('fpara')::here we get only one class element which is first one::reamining it ignores
//document.querySelectorAll('fpara')::here we get all the elements 

/*
let ans=document.getElementsByClassName('para')
console.log(ans)

let ans2=document.getElementsByTagName('h2')
console.log(ans2)

let ans3=document.querySelector('.para')
console.log(ans3)
console.log(ans3)

let ans4=document.querySelectorAll('#fpara')
console.log(ans4)
*/

//update method
/*
1.inner html
2.outer html
3.text content
4.inner text

*/


/*
//get
let ans=btn.innerHTML
console.log(ans)

//set element
let ans2=btn.innerHTML='<p>Abhishek Naik</p>'
console.log(ans2)

//get
let ans=btn.outerHTML
console.log(ans)

//set element

let ans2=btn.outerHTML='Abhishek Naik'
console.log(ans2)


let ele=document.querySelector('#idiv')
console.log(ele)

console.log(ele.textContent)

console.log(ele.innerText)
*/

//Add element
/*
first create ::create element()
1].append child()::to add element we need to create element first then append ()
2]. insertAdjacentHtml():: to add element anywhere we want  ::a]position::beforebegin/afterbegin/beforeend/afterend b] HTMLcontent
//Append here the elements are added at the end of the parent element
let fhead=document.createElement('h1')
fhead.textContent='Boda Abhishek Naik @gamil.com'
console.log(fhead)


let bodytag=document.querySelector('body')
console.log(bodytag)

bodytag.appendChild(fhead);
console.log(bodytag)



let ele=document.querySelector('#mydiv');
console.log(ele)

//Creating the element
let newele=document.createElement('span')
newele.textContent='bye see you soon!...'
console.log(newele)

//adding the element

ele.insertAdjacentElement('beforeend', newele)
console.log(ele)

//Removal 
//1].removeChild()::to remove the element
//opposite of append child() ::to remove element parent ,child should be 



let ele=document.querySelector('#mydiv')
console.log(ele)

//remove
ele.removeChild(ele.querySelector('#ipara'))
console.log(ele)
*/

//Dom manipulation for syling elements

/*
we can do styling with 1] style 2] .css text
 style::we can do get/set


// we can handle single element style
let para=document.getElementById('cpara');
console.log(para)

//style applied
console.log(para.style)

para.style.background='green';
para.style.color='white';
console.log(para)

let para=document.getElementById('cpara');
console.log(para)


//style applied
para.style.cssText='color:yellow ;fontsize:3rem ; background-color:black'
console.log(para.style.cssText)


//add classes and id 
//.setAttribute()

let ele=document.querySelector('#cdiv')
console.log(ele)

//attribute set

ele.setAttribute('class','divclass')
console.log(ele)

//style change
ele.style.background='red';
ele.style.color='white';
console.log(ele)


//className

//.classlist

let ele=document.querySelector('#fpara')
console.log(ele)

fpara.classList.add('thirdclass')
console.log(ele.classList)

fpara.classList.remove('thirdclass')
console.log(ele.classList)


fpara.classList.toggle('aa')
console.log(ele.classList)

fpara.classList.toggle('aa')
console.log(ele.classList)

console.log(ele.classList.contains('ac'))
*/

//browser events
/*
event are nothing but annoncemnets  //monitorEvents(document);


event-target::is an entity event received .and we can apply event listners
the elements in html  that can receive events are called event targets


function changetext(){
    let ele=document.getElementById('fpara')
    fpara.innerText='King Bolthey'

}


let ele=document.getElementById('fpara')
fpara.addEventListener('click',changetext)

//fpara.removeEventListener('click',changetext)
*/

//phases of events
/*

Event object::event triggers ->on clicking click then it goes addEventListener(event) utilize->data

//here event[can be anyname] will execute on clicking the element 
function changetext(event){
    console.log(event)
    let ele=document.getElementById('fpara')
    fpara.innerText='King Bolthey'
}

let ele=document.getElementById('fpara')
fpara.addEventListener('click', changetext)
*/

//Default Action
/*
ex:anchor tag default  tag is link 

let ele=document.getElementById('fanchor')

ele.addEventListener('click',function(event){

    event.preventDefault()
    ele.textContent='Bye..'
});


let a=document.getElementById('fanchor');

function cng(event){
    event.preventDefault()
    a.textContent='Bye..'
}

a.addEventListener('click',cng)
*/

//Avoiding to many event listeners

/*



let paras=document.querySelectorAll('p');

for(let i=0;i<paras.length;i++){
    let para=paras[i];
    para.addEventListener('click',function(){
        
        alert('You clicked on paragraph ' + (i + 1)); 
        this.textContent='Bye..';

})

}

let paras=document.querySelectorAll('p');

function alertpara (event){
    alert('You clicked on paragraph '+ event.target.textContent);

}

for (let i=0;i<paras.length;i++){
    let para=paras[i];
    para.addEventListener('click',alertpara)
}

function alertpara(event){
    alert('You clicked on paragraph '+ event.target.textContent);
}

let di=document.getElementById('mydiv');

document.addEventListener('click',alertpara)




document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM is fully loaded, now I can safely work with it!");
});

*/

// performance improvement
/*
in js their is standard way to know that how much time does code takes to run::we use 1]performance.now()
if the number of reflow and repaint is more then it will take more time to run the code

reflow and repaint these are main concepts
reflow::it is the process of caculating position ,deminision of element::it is computantionally intense task
repaint::it is the process of displaying /element in the pixel by pixel::it is faster than reflow

document fragment::lite weight doc obj 
advantage:: when we do addition [append ]element then thier is no reflow and repaint


//Code:1
const t1=performance.now()
for(let i = 0; i <= 100; i++) {
    let para=document.createElement('p');
    para.textContent='This is a paragraph' +i;
    document.body.appendChild(para);
}
const t2=performance.now()
console.log('Time taken to run the code is: ', t2 - t1, 'milliseconds')

//Code:2
const t3=performance.now()
let mydiv=document.createElement('div');

for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent='this is paragraph'+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv)

const t4=performance.now();
console.log('::Time taken to run the code is: ', t4 - t3, 'milliseconds')


//Code::3::best use 

let frag=document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent='this is para'+i+"abc";
    //no reflow and repaint for below line
    frag.appendChild(para);
}
//now below line will have 1reflow and 2repaint
document.body.appendChild(frag);

*/

//Event loop
/*
1]sync code:: the  code runs in the same time is called syncornase code::ex::console.log('hi),console.log('bye),console.log('hello')
2]Async code::the code does not execute[run] on same time is called asyncornize code::
Ex::setTimeout(function,duration)
ex:function sayname(){
    console.log('name::')
    setTimeOUt(sayname ,5000)
}

block::console.log('start')
setTimeOut(sayname,500)  //if we wont get the call until then we will wait here. after that below line will execute
console.log('end')  //blocked here until the above line is executed

ex::eventlistenlisteners,network request,setTimeout,ajaxrequest,dbconnection

to  handle the async code we use event loop

Event loop :: basically know three things 1] call stack 2]Browser 3]callback queue[task queue]
1] call stack::after calling the function it will be pushed into the call stack and after execution it will be popped out from the call stack


console.log('start')

setTimeout(function(){
    console.log('click the button abhishek naik')
},500);

console.log('End')
*/


//PROMISE::
/*
A Promise is an object  in JavaScript is a way to handle things that take time, like fetching data from a server[async code].
It has three states:
1]. Pending: Waiting for the task to finish.
2]. Fulfilled: The task is done, and it was successful.
3]. Rejected: The task failed.

You can use .then() to handle success and .catch() for errors.

syntax:: newPromise((resolve,reject=>{
    .....
    ......codes goes here
    }));



    //Async code

let prom=new Promise((resolve, reject) => {
    console.log('Abhishek Naik')
   // resolve('bye')  //promise fullfiled // if no reslove means there it is in pending
    //reject('bye')  //promise rejected
    //reject(new Error('bye useless'))  //promise rejected
    
    function myfun(){
        console.log('my name is boda abhishek naik')
    
    }
    
    setTimeout(myfun,3000)
    resolve (1);
    

})


let prom=new Promise((resolve, reject) => {
    let success=true;
    if(success){
        resolve('bye')  //promise fullfiled
    }else{
        reject('bye')  //promise rejected
    }
});
prom.then((message)=>{
    console.log('first msg::'+message)

}).catch((error)=>{
    console.log('error::'+error)
}).finally((message)=>{
    console.log(`finally ok yaar::`)
})

let prom=new Promise((resolve, reject) => {
    setTimeout(resolve,1000,'first');
})
let prom2=new Promise((resolve, reject) => {
    setTimeout(resolve,2000,'second');
})
let prom3=new Promise((resolve, reject) => {
    setTimeout(resolve,3000,'third')
})
Promise.all([prom,prom2,prom3])

.then((message)=>{
    console.log('first msg::'+message)

})

*/

//ASYNC-AWAIT AND FETCH API 

/*

async await::the use of async await by these we can write async code appers like sync code.



async function getdata() {
    setTimeout(function(){
        console.log('Async timeout block::')
    },3000)
}
getdata()

*/

//Fetch Api::in these we have ,post,comment etc 
/*
fetch api::fetch api provides an interface resources across the network

async function data() {
    //get request -async
    let response= await fetch('https://jsonplaceholder.typicode.com/posts/');
    //para json async
    let d= await response.json();
    console.log(response);
    console.log(d);
}
data();

//scenario
// prepare url/ api endpoint=>sync code
//await// fetch data =>network call=> async  [fetch api below code wont execute and answer will be pending ]
// process data=>sync code          
//[await using these below line wont execute it will wait until the answer arrives later then below lines execute]


async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
*/


//Cloures

/*





let peru='Rc'
function outer(){
    let peru='Abhishek Naik';
    {
        let peru='RcM';
    }
    function inner(){
        let peru='boda'
        console.log(peru);
    }
    inner();
}
outer();



function outer() {
    let count = 0;
    
    function inner() {
      count++;  // The inner function can access 'count' from the outer function
      console.log(count);
    }
  
    return inner;
  }
  
  const closureFunc = outer();  // outer() has finished, but 'inner' remembers 'count'
  closureFunc();  // Outputs: 1
  closureFunc();  // Outputs: 2


function outer(){
    let Fname = 'aabbcc';

    function inner(){
        console.log(Fname)
    }
    return inner;
}
let res=outer();
res(); // Now calling res() will log 'aabbcc'
  */






































































































































































































