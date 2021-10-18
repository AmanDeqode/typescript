const person:{
    name:string
    age:number
} = {
    name:'Aman',
    age:23
}
console.log(person.name);

const product:{
    id:string,
    price:number,
    tags:string[],
    tuple:[number|string,string|number]
    tupleArray:[number[],string[]]
    details:{
        title:string,
        description:string
    }
} = {
    id: 'BT101',
    price:112,
    tags:['t1', 't2'],
    //tuple:[01,'admin'], worked fine
    tuple:['admin',0],
    tupleArray:[[1,2,3,4,5],['Aman','Hemant']],
    details:{
        title:'Data',
        description:'Students details'
    }
}

console.log(product);
for(let tag of product.tags) {
    console.log(tag);
}
