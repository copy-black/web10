let chestut =function(name,price,origin,weight){

}

function Chestnut(name,price,origin ,weight){
    this.name=name;
    this.price=price;
    this.origin=origin;
    this.weight=weight;
    this.pringName=function(){
        console.log("this is "+this.name)
    }
}
Chestnut.prototype.pringName2=function(){
    console.log("this is chestnut prototype")
}

let che1= new Chestnut("大栗子",20,"江西",12)
//对象生成了，还可以加东西
che1.printPrice =function(){
    console.log('this is price'+this.price)
}
che1.printPrice()
console.log(che1.name)

console.log(che1.__proto__)

console.log(Chestnut.prototype)

let obj1=new Object(666);
obj1.name="张三"
console.log(obj1.__proto__.__proto__.__proto__)




function Object2(){
    this.__proto2__=Object2.prototype2
}

Object2.prototype2={
    __proto2__:null
}
let obj1=new Object2()
console.log(obj1.__proto2__.__proto2__)

;(function apple(x){
    console.log('this is apple')
    console.log(x)
})(2)

function pear1(){
    return 'this is '+'pear'
}

//修改
function pear2(name){
    return 'this is '+`${name}`
}

console.log(pear('大桃子'))
console.log(a)


//????
let str ='return ' + '`我是${name}`';
//读写  Func
let func =new Function('name',str)
    console.log(func('桃子'))

    function func2(name){
        return '我是' +name
    }

