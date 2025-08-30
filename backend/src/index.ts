let sales:number = 10;  // 123_123_123 is also a valid number (123123123)
let course:string = "TypeScript";
let is_published:boolean = true;
let level; // any type
// level = 1; --> gives the error

let arr: number[] = []; // array
let tup: [number,String,Boolean,Number] = [1,"a",true,1]; // tuple

enum Size {Small,Medium,Large}; // labeling in the enum [default 0,1,2,...]


function render(document:number) {
    console.log(document);
}
render(sales);
