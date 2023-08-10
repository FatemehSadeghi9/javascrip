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
