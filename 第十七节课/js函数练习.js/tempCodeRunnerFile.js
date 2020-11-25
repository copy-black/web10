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