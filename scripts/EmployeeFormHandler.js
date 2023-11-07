window.addEventListener('DOMContentLoaded', (event)=>{
    const name = document.querySelector('#name')
    const note = document.querySelector('#note')
    const female=document.querySelector('#female')
    const male= document.querySelector('#male')
    const profile1=document.querySelector('#profile1')
    const profile2=document.querySelector('#profile2')
    const profile3=document.querySelector('#profile3')
    const profile4=document.querySelector('#profile4')

})

const handleSubmitForm = (event) => {
    event.preventDefault()
    let employeeData = new EmployeeDetailes();
    const name = document.querySelector('#name').value;
employeeData.name = name
// const note = document.querySelector('#note').value;
// employeeData.note = note
const gender = document.querySelectorAll('[name=gender]');
 employeeData.gender = gender
const profile= document.querySelectorAll('[name=profile]');
employeeData.profile = profile

const salary =document.querySelector("#salary").value;
employeeData.salary = salary

// const hr =document.querySelector("#hr").value;
// employeeData.hr = hr
// const finance =document.querySelector("#finance").value;
// employeeData.finance = finance
// const sales =document.querySelector("#sales").value;
// employeeData.sales = sales
// const engineer =document.querySelector("#engineer").value;
// employeeData.engineer = engineer
// const other =document.querySelector("#other").value;
// employeeData.other = other

const date =document.querySelector("#date").value;
employeeData.date = date
// const month =document.querySelector("#month").value;
// employeeData.month = month
// const year =document.querySelector("#year").value;
// employeeData.year = year

console.log(employeeData, event);
// console.log(profile1);
//console.log(salary);
// console.log(date, month,year)
}

const handleResetForm = () => {
    const name = document.querySelector('#name')
    name.value= ""
    // const note = document.querySelector('#note')
    // note.value= ""
    // const female = document.querySelector('#female')
    // female.value = ""
    // const male = document.querySelector('#male')
    // male.value= ""
}