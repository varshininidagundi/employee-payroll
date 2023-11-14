window.addEventListener('DOMContentLoaded', (event) => {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('#output_salary');
    salary.addEventListener('input', function(){
        output.textContent =salary.value;
    });
})
const handleSubmitForm = (event) => {
    event.preventDefault()
    let dummy = JSON.parse(localStorage.getItem('EmployeeData'))
    console.log(dummy)
    let employeeData = new EmployeeDetailes();
    const name = document.querySelector('#name').value;
    employeeData.name = name
    const note = document.querySelector('#note').value;
    employeeData.note = note
    const gender = document.querySelectorAll('[name=gender]');
    let result = checkSelected(gender, "gender");
    employeeData.gender = result
    const profile = document.querySelectorAll('[name=profile]');
    let empprofile = checkSelected(profile, "profile");
    employeeData.profile = empprofile;
    const salary = document.querySelector("#salary").value;
    employeeData.salary = salary;
    const enteredDepartment = document.querySelectorAll('[name=department]');
    const selectedDepartment =checkSelected(enteredDepartment, "departemnt") 
    employeeData.department = selectedDepartment;   
    const date = document.querySelector("#date").value;
    employeeData.date = date
    const month = document.querySelector("#month").value;
    employeeData.month = month
    const year = document.querySelector("#year").value;
    employeeData.year = year
    //console.log(employeeData, event);
    if(dummy===null){
        dummy=[employeeData];
    }
    else{
        dummy.push(employeeData)

    }
    console.log(dummy);
    localStorage.setItem('EmployeeData',JSON.stringify(dummy));
    handleResetForm();
}
const handleResetForm = () => {
    const name = document.querySelector('#name')
    name.value = ""
    const note = document.querySelector('#note')
    note.value = ""
    const salary = document.querySelector('#salary')
    salary.value = ""
    const output = document.querySelector('#output_salary');
    output.textContent = "400000"
    const date = document.querySelector('#date')
    date.value = "Day" 
    const month = document.querySelector('#date')
    month.value = "Month" 
    const year = document.querySelector('#date')
    year.value = "Year" 
    const female = document.querySelector('#female');
    female.checked = false
    const male = document.querySelector('#male');
    male.checked = false
    const profile = document.querySelectorAll('[name=profile]');
    profile.forEach((profileCheckbox)=>{
        profileCheckbox.checked=false;
    })
}
function checkSelected(nodeList, checkFor) {
    let checkedNodeList = [...nodeList].filter((ele) => ele.checked === true)
    if (checkFor == 'gender' || checkFor == 'profile') {
        return checkedNodeList[0]?.value;
    } else {
        let selectedValueList=[];
        for(let node of checkedNodeList ){
            console.log(node)
            selectedValueList.push(node.value);
        }
        return selectedValueList;
    }
}