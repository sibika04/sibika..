var a;

console.log(typeof(a));
var b=null;
console.log(typeof(b));

//falsey values:
// undefined
// 0
// ""
// NAN
// ""
// -0

var n=0;

if(n){
    console.log(true);
}
else{
    console.log(false);
}
var n1="";

if(n1){
    console.log(true);
}
else{
    console.log(false);
}
var n2="abc";

if(n2){
    console.log(true);
}
else{
    console.log(false);
}
var n3=10+10;
console.log(n3)

if(n3){
    console.log(true);
}
else{
    console.log(false);
}
var n4=10/"abc";

if(n4){
    console.log(true);
}
else{
    console.log(false);
}

// CALLBACK function:
// takes a function as a parameter

// object literal

var emp={
    id:100,
    name:"abc",
    salary:10000
}
console.log(emp.id);
console.log(emp.name);
console.log(emp.salary);

// template literal
// a template literal uses a backtick instead of a single quotes

console.log(`${emp.id} ${emp.name} ${emp.salary}`);

var student={
    regno:56,
    name:"sss",
    mark1:90,
    mark2:95,
    mark3:89
};


console.log(`mark1=${student.mark1}
mark2=${student.mark2}
mark3=${student.mark3}`);

console.log(`
Name=${student.name}
RegNo=${student.regno}
mark1=${student.mark1} 
mark2=${student.mark2}
mark3=${student.mark3}`);

var total=student.mark1+student.mark2+student.mark3;
console.log("Total="+total);


 var empAr=[
    {id:400, name:"stu",salary:40000},
    {id:49870, name:"tu",salary:40500},
    {id:866, name:"aaa",salary:97000}

 ]

 var empSal=empAr.filter(e=>{
    return e.salary>50000;
 });

console.log(empSal);

var studentAr=[
    {name:"abc",regno:126,mark1:87,mark2:90},
    {name:"bac",regno:178,mark1:77,mark2:85},
    {name:"cac",regno:168,mark1:96,mark2:99}
]

var ss= studentAr.filter(s=>{
    return s.mark1>70;
});
console.log(ss);

mobileAr=[
    {id:456,name:"Samsung",price:45000},
    {id:786,name:"Apple",price:98000},
    {id:4876,name:"Realme",price:30000},
    {id:358,name:"Oppo",price:58000},
];
mobileAr.forEach(n => {
    console.log(`${n.id} ${n.name} ${n.price}`);
});

var mm= mobileAr.filter(m=>{
    return m.price>40000;
});
console.log(mm);

laptopAr=[
    {id:456,name:"Lenovo",price:135000},
    {id:786,name:"HP",price:98000},
    {id:4876,name:"Dell",price:90000},
    {id:358,name:"Acer",price:43000},
    {id:7906,name:"Macbook",price:198000},
    {id:4866,name:"victus",price:75000},
];
laptopAr.forEach(a => {
    console.log(`${a.id} ${a.name} ${a.price}`);
});

var ll= laptopAr.filter(l=>{
    return l.price<100000;
});
console.log(ll);
laptopAr.map(a =>{
    return {...a,price :a.price+1000} ;
    
})
.forEach(a=>console.log(a));
laptopAr
.filter(a=>a.price<80000)
.map(a=>({...a,price:a.price+20000}))
.forEach(a=>console.log(a));

//

class Employee{

    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }


display(){
    console.log(`${this.id} ${this.name} ${this.salary}`);
}
}

var emp=new Employee(100 ,"abc" ,80000); 
emp.display();
