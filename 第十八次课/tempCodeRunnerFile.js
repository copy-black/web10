let str ='return ' + '`我是${name}`';
//读写  Func
let func =new Function('name',str)
    console.log(func('桃子'))