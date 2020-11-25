//1.
var nut =function(){
    console.log('this is nut-1')
    return 'this is nut-2'
}

//（） 表示运行改函数
console.log(nut)

function myFunction(a,b){
	console.log(1);
	return a*b;
}
myFunction(4,3)
console.log(myFunction(4,3))
//2.
var lichee =function(){
    console.log('this is lichee-1')
    return 'this is lichee-2'
}()

console.log(lichee)
//3.
var watermelon =function(){
    console.log('this is watermelon-1')
    return function pear(){
        console.log('this is pear-1')
    }()
}
//watermelon()
console.log(watermelon()())
//4.
let banana =function banana(){
    console.log('this is banana-1')
    return ()=>function(){
        console.log('this is Annoymous function')
    }()
}
banana()()
//5.
let grape = function redGrape(){
     return { 
         name:"my name is red grape", 
         printMyName:()=>{ 
             return ()=>{
                  return Object.create(
                      { 
                      name:"my name is grape nut",
                       printMyGrapeNut:function(){
                            console.log("this is MyGrapNut")
                         }
                     }
                     )
                 } 
               }                
             }     
         }
grape().printMyName()().printMyGrapeNut()

//6.

//第六道题目 请说出程序的运行结果

 var redPlum = ()=>{ 
     return 100 
    }

 var bluePlum =(blue)=>{ return 200 * blue() }

 var plum = (plum2,plum1)=>{ 
         let result = plum1(plum2)

         console.log(result);
     }
     plum(redPlum,bluePlum)
     console.log(Math.floor(Math.random()*70))
//第七道题目 请 在console.log里面完善代码，并使得程序运行打印出 
//this is red apple 和 this is blue apple
     let red = function readApple(){ 
         return ()=>{ 
             return function(){
                  return ()=>{
                       return function(){ 
                           console.log("this is red apple")
                            return "this is blue apple" }
                             }
                         }
                     } 
                }
   //   console.log( )
 let apple = function redApple(){
      console.log(red()()()()())
     }()  
//8.
(function(x){
     x()
      console.log("this is yellow orange") 
      console.log(function blueOrange(){ '0'
          console.log("this is blue orange")
         }())
})
     (function(){ 
         console.log("this is orange") 
          return "this is red orange" })      
         ( function a(x){
              console.log('this is yellow orange')
         })




//函数外面包个括号什么意思 ？

//.(function a(){}) （命名函数表达式）会返回这个函数（不会执行）    

//9.
var blackOrange = ()=> function(){
    console.log("this is small orange") 
        return function(){ 
            console.log("this is big orange")
         }()
    }()

    console.log(blackOrange())
//10.
let blackberry = function (){ 
        console.log("this is blackberry") 
            return { 
                smallBlackberry: ()=>{ 
                console.log("this is smallBlackberry") 
                 return ()=>{ 
                     console.log("this is smallBlackberry nut ") 
                    return 9999 
            } 
        } 
    } 
}()    

console.log(blackberry.smallBlackberry()())

//11 请说出程序的运行结果
function bigNut(func){ 
    let smallNut = function (s){
         s() 
    console.log("this is small nut") 
    return 200
 }
    let middleNut = function(m){
         m() 
        console.log("this is middle nut") 
        return 300
     }
        return func(smallNut,middleNut) 
    }
  function redNut(x,y){ 
            function blueNut(){ 
                console.log("this is blueNut")
             }
            function yellowNut(){ 
                console.log("this is yellowNut") }
            return ()=>{ 
                console.log(x(blueNut)+y(yellowNut))
             } 
            }  
            bigNut(redNut)()    
     