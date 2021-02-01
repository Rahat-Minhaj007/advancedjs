// let result=[]
const students=[
    {id:12,name:"deepjol"},
    {id:13,name:"manna"},
    {id:14,name:"popi"},
    {id:15,name:"moyuri"},
    {id:16,name:"bobita"}

]
// for(let i=0;i<=students.length;i++){
//     let element=students[i].name;
//     result.push(element);
//     console.log(result);
// }
const result=students.map(s=>s.name);
console.log(result);
