let array1=[1,3,5,7,9];
let st ="";
for(let value of array1){
    st +=value;
}
console.log(st);
let ar = [{"_name":"hiji","_note":";ljhnl/o","_gender":"Male","_profile":"../assets/whitewomen.png","_salary":"331300","_department":["sales","engineer"],"_date":"2","_month":"August","_year":"2002"},{"_name":"habibi","_note":"habibi","_gender":"Male","_profile":"../assets/whitewomen.png","_salary":"379000","_department":["sales","engineer"],"_date":"9","_month":"July","_year":"2008"},{"_name":"","_note":"","_salary":"387900","_department":[],"_date":"Day","_month":"Month","_year":"Year"}]
let c = ar.length;
console.log(c);


const ages = [32, 33, 16, 40];

console.log(ages.filter(checkAdult));

function checkAdult(age) {
  return age >= 18;
}