var pitaya ={

}
var pitaya =Object.create()

var pitaya2={
    name:"huolongguo",
    price:15,
    origin:"hainanPrivance",
    weight:1,
    nut:{
        name:"huolongguo nut"
    },
    pringName:function(){
        console.log(this.name)
    }
}
pitaya2.pringName();

pitaya2["pringName"]();



function Haw(name,price,origin){
    this.name=name;
    this.price=price;
    this.origin =origin;
    this.printName=function(){
        console.log('this is haw')
    }
}

var h1=new Haw('shanzha',2,'henan');
h1.printName()
h1.price()
console.log(h1._proto_)

h1.pringName2= function(){

}
Haw.prototype.printPrice=function(){
    console.log('prototype print price')
}

//prototype  原型

Haw.printName()
Haw.printPrice()


function apple(){
    this.name="zhangsan"
}
Haw3.name="";

console.log(Math.floor(Math.random()*10));

console.log(Math.round(Math.random()*10));