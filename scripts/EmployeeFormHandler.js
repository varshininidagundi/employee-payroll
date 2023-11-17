window.addEventListener('DOMContentLoaded', (event) => {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('#output_salary');
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
    if (localStorage.getItem('EmployeeEditData')) {
        editEmployee();
    }
})
function editEmployee() {
    let editData = JSON.parse(localStorage.getItem('EmployeeEditData'));
    console.log(editData[0]._name);
    let name = document.querySelector("#name");
    name.value = editData[0]._name;
    let note = document.querySelector("#note");
    note.value = editData[0]._note;
    let date = document.querySelector("#date");
    date.value = editData[0]._date;
    let month = document.querySelector("#month");
    month.value = editData[0]._month;
    let year = document.querySelector("#year");
    year.value = editData[0]._year;
    let salary = document.querySelector("#salary");
    salary.value = editData[0]._salary;
    const output = document.querySelector('#output_salary');
    output.textContent = editData[0]._salary;
    let Female = document.querySelector("#female");
    let Male = document.querySelector('#male');
    if (editData[0]._gender === Female) { Female.checked = true }
    else { Male.checked = true }
    let department = editData[0]._department;
    let sales = document.querySelector('#sales');
    let other = document.querySelector('#other');
    let hr = document.querySelector('#hr');
    let finance = document.querySelector('#finance');
    let engineer = document.querySelector('#engineer');
    for (let departmentName of department) {
        if (departmentName == 'hr') { hr.checked = true }
        else if (departmentName == 'other') { other.checked = true }
        else if (departmentName == 'finance') { finance.checked = true }
        else if (departmentName == 'engineer') { engineer.checked = true }
        else if (departmentName == 'sales') { sales.checked = true }
        // else{ hr.checked = false, other.checked = false, finance.checked = false, engineer.checked = false, sales.checked = false ;}
        else { console.error('One or more elements not found.'); }
    }
    let id1 = document.querySelector("#profile1");
    let id2 = document.querySelector("#profile2");
    let id3 = document.querySelector("#profile3");
    let id4 = document.querySelector("#profile4");
    if (editData[0]._profile == "../assets/blackmen.png") { id1.checked = true }
    else if (editData[0]._profile == "../assets/whitewomen.png") { id2.checked = true }
    else if (editData[0]._profile == "../assets/whiteman.png") { id3.checked = true }
    else if (editData[0]._profile == "../assets/blackwomen.png") { id4.checked = true }
    let employeeInformation = localStorage.getItem('EmployeeData')
    console.log(employeeInformation)
}
const handleSubmitForm = (event) => {
    event.preventDefault()
    if (localStorage.getItem('EmployeeEditData')) {
        let editkey = JSON.parse(localStorage.getItem('EmployeeEditData'));
        let employeeInformation = JSON.parse(localStorage.getItem('EmployeeData'));
        const employeeInfoFromList = employeeInformation.filter(employeeObject => {
            console.log(editkey[0]._name,employeeObject._note);
            if (employeeObject._name !== editkey[0]._name) {
                return employeeObject;
            }
        })
        console.log(employeeInfoFromList);
        let x= JSON.stringify(employeeInfoFromList);
        localStorage.setItem("EmployeeData",x);
        localStorage.removeItem("EmployeeEditData")
    }
        let dummy = JSON.parse(localStorage.getItem('EmployeeData'))
        let employeeData = new EmployeeDetailes();
        const name = document.querySelector('#name').value;
        employeeData.name = name
        const note = document.querySelector('#note').value;
        employeeData.note = note
        const gender = document.querySelectorAll('[name=gender]');
        let resultedGender = checkSelected(gender, "gender");
        employeeData.gender = resultedGender
        const profile = document.querySelectorAll('[name=profile]');
        let empprofile = checkSelected(profile, "profile");
        employeeData.profile = empprofile;
        const salary = document.querySelector("#salary").value;
        employeeData.salary = salary;
        const enteredDepartment = document.querySelectorAll('[name=department]');
        const selectedDepartment = checkSelected(enteredDepartment, "departemnt")
        employeeData.department = selectedDepartment;
        const date = document.querySelector("#date").value;
        employeeData.date = date
        const month = document.querySelector("#month").value;
        employeeData.month = month
        const year = document.querySelector("#year").value;
        employeeData.year = year
        if (dummy === null) {
            dummy = [employeeData];
        }
        else {
            dummy.push(employeeData)
        }
        console.log(dummy);
        localStorage.setItem('EmployeeData', JSON.stringify(dummy));
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
    const month = document.querySelector('#month')
    month.value = "Month"
    const year = document.querySelector('#year')
    year.value = "Year"
    const female = document.querySelector('#female');
    female.checked = false
    const male = document.querySelector('#male');
    male.checked = false
    const profile = document.querySelectorAll('[name=profile]');
    profile.forEach((profileCheckbox) => {
        profileCheckbox.checked = false
    });
    const department = document.querySelectorAll('[name=department]');
    department.forEach((departmentCheckbox) => {
        departmentCheckbox.checked = false
    });
}
const handleCancelForm = () => {
    handleResetForm();
}
function checkSelected(nodeList, checkFor) {
    let checkedNodeList = [...nodeList].filter((ele) => ele.checked === true)
    if (checkFor == 'gender' || checkFor == 'profile') {
        return checkedNodeList[0]?.value;
    } else {
        let selectedValueList = [];
        for (let node of checkedNodeList) {
            console.log(node)
            selectedValueList.push(node.value);
        }
        return selectedValueList;
    }
}