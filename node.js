var a=2;
var b='khar';
var c;
var d=null;
var n=true;
console.log(n);
console.log(typeof n)
var k={
    FristName: "Fatemeh",
    SecondName: "Sadeghi"
}
console.log(k.FristName);
console.log(k["FristName"]);
var l={
    l1:{
        l2:{
         FristName: "Fatemeh",
         SecondName: "Sadeghi"   
        }
    }
}
console.log(l.l1.l2.SecondName);
// Array
var array=[
1,2,3,4,'salam'
]
var array2=[1,2,'salam',[1,2]]
console.log(array);
console.log(array2);
console.log(array2[0]);
console.log(array2[3]);
console.log(array2[3][0]);
var array3=[
    {frist_name: 'fatemeh',
    last_name: 'sadeghi',
    age:24
},
    {frist_name: 'anmar',
    last_name: 'ghazi',
    age:30
}
]
console.log(array3);
console.log(array3[0]);
console.log(array3[0].frist_name);
var array4= new Array(
    {frist_name: 'fatemeh',
    last_name: 'sadeghi',
    age:24
},
    {frist_name: 'anmar',
    last_name: 'ghazi',
    age:30
}
);
console.log(array4);
var array5=new Array(1,2,3,"salam",{key:'value' , key1:'value1'});
console.log(array5);
// operatores
var a=3;
console.log(a+2);
console.log(a-2);
console.log(a*2);
console.log(a**2);
console.log(a/2);
console.log(a%2);
//functions
var start=function(){
    console.log("fatemeh");
};
start();
var end=function(){
    return 'hello word'
}
console.log(end());
var sum=function(){
    console.log(4+5)
}
sum();
var add=function(a,b){
    console.log(a*b);
}
add(2,3);
var summing=function(a,b){
    return a/b
}
console.log(summing(4,1));

var detail=function(teacher){
    return teacher.Name;
}
console.log(detail({Name:'fatemeh', age:27, career:'radio'}));

var pay=function(amout){
    var newamount=amout*10;
    return newamount;
}
console.log(pay(12));
var app= {
    print1: function(a,b){
        return a+b;
    },
    print2: function(teacher){
        return teacher.Name
    },
    last_name:'sadeghi'
}
console.log(app.print1(2,3));
console.log(app.print2({Name:'fatemeh', age:27, career:'radio'}))

// if & else if & else
var a=10;
var b=20;
var add=true;
var sum=false;
var subtracke=true;
if ( a == b){
    console.log('it is ok')
} else if ( b > a){
    console.log(" i understand")
} else if (add && subtracke){
    console.log( "I get it")
}
//switch
var detail="Fatemeh";
switch(detail){
    case "Fatemeh":
        console.log(" I am fatemeh")
    break;
    case "zahra":
        console.log( "I am zahra")
    break;
}
// effect of do not put break when true is frist
var age=27;
switch( age){
    case 27:
        console.log(" I am 27 years old")
    case 32:
        console.log( " I am 32 years old")
}
// effect of do not put break when false is frist
var imfo="Sadeghi";
switch(imfo){
    case "ghazi":
        console.log( " I am Ghazi")
    case "Sadeghi":
        console.log( " I am Sadeghi")
}
// default instead of else
var career="radio";
switch (career){
    case "dentist":
        console.log(" I am dentist")
    break;
    case "teacher":
        console.log(" I am teacher")
    break;
    default:
        console.log( "I work in company")
}
var obj={
    frist_name:"Fatemeh",
    last_name:"sadeghi",
    age:27
}
switch (obj.age){
    case 27:
        console.log(" I am 27 years old")
    break;
    case 32:
        console.log ( " I am 32 years old")
    break;
}
// ? :
var a=10;
var b="10";
var c= a==10 ? "it is string" : "it is not string"
console.log(c)
var d= a===b ? "it is string" : "it is not string"
console.log(d)
// for loop
for(var i=0; i<10; i=i+1  ){
    console.log("number is", i)
}
for ( var a=2 ; a<20 ; a=a*2){
    console.log(a)
}
const ar=['fati', 'anmar','zahra','ziba',2,4];
for ( var i=0; i<ar.length; i++){
    console.log(" name is", ar[i])
}
// forEach
const ar2=['fati', 'anmar','zahra','ziba'];
ar2.forEach(function(name){
    console.log("my name is", name)
})
ar2.forEach(function(name , index){
    console.log("my name is", name , index)
})
//map
ar2.map(function(name){
   console.log(name + " sadeghi") 
})
ar2.map(function(kkk){
    return kkk + " ghazi"
})
// console.log(?)

// for (  in   )
for (i in ar2){
    console.log(i)
}
for ( i in ar2){
    console.log( "I am",ar2[i])
}
// while
var count= 1;
while(count<10){
    console.log(count);
    count=count*2
}
const obj2=['fati', 'zara', 'sama', 'lia']
var s=0;
while (s<obj2.length){
    console.log('name of user is', obj2[s])
    s++
}
//bubble Sort
var originalarray=[5,3,1,4,2,6];
for(var i=0 ; i<originalarray.length; i++){
    for ( var j=0; j<originalarray.length ; j++)
    if (originalarray[i] < originalarray[j]){
        var temp=originalarray[j]
        originalarray[j]=originalarray[i]
        originalarray[i]=temp
    }
}
console.log(originalarray)

//sort
originalarray.sort(function(number1, number2){
    return number2-number1
})
console.log(originalarray)