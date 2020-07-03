/*@flow*/ 

// function split(str){
//     return str.split(' ')
// }
// split(11)

// 类型注释
// function add(a: number, b: number) {
//   return a + b
// }
// add('fuck', 2)
// add(2, 2)

// var arr:Array<number> = [1,2,3]
// arr.push('f')
// arr.push(4)

// void 空值
class Bar{
    x:string;
    y:string | number | void;
    z:boolean

    constructor(x: string, y: string | number | void){
        this.x = x
        this.y = y
        this.z = false
    }
}

var bar: Bar = new Bar('test')


// var obj:{a:string,b:number,c:Array<string>,d:Bar} = {
//     a:'test',
//     b:1,
//     c:['q','q'],
//     d:new Bar('test',3)
// }

//  ?[类型] 值可以为 null undefined
var foo:?string = null