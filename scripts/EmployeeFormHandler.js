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
        else { console.error('One or more elements not found.'); }
    }
    const profiles = [
        "../assets/blackmen.png",
        "../assets/whitewomen.png",
        "../assets/whiteman.png",
        "../assets/blackwomen.png"
    ];
    const profileIDs = ['#profile1', '#profile2', '#profile3', '#profile4'];
    profileIDs.forEach((id, index) => {
        if (editData[0]._profile === profiles[index]) {
            document.querySelector(id).checked = true;
        }
    });
}
const handleSubmitForm = (event) => {
    event.preventDefault()
    if (localStorage.getItem('EmployeeEditData')) {
        let editkey = JSON.parse(localStorage.getItem('EmployeeEditData'));
        let employeeInformation = JSON.parse(localStorage.getItem('EmployeeData'));
        const employeeInfoFromList = employeeInformation.filter(employeeObject => {
            if (employeeObject._name !== editkey[0]._name) {
                return employeeObject;
            }
        })
        let editedEmployeeData = JSON.stringify(employeeInfoFromList);
        localStorage.setItem("EmployeeData", editedEmployeeData);
        localStorage.removeItem("EmployeeEditData")
    }
    let dummy = JSON.parse(localStorage.getItem('EmployeeData'))
    let employeeData = new EmployeeDetailes();
    const profile = document.querySelectorAll('[name=profile]');
    employeeData.profile = checkSelected(profile, "profile");
    employeeData.name = document.querySelector('#name').value;
    const gender = document.querySelectorAll('[name=gender]');
    employeeData.gender = checkSelected(gender, "gender");
    const enteredDepartment = document.querySelectorAll('[name=department]');
    employeeData.department = checkSelected(enteredDepartment, "departemnt");
    employeeData.salary = document.querySelector("#salary").value;
    employeeData.date = document.querySelector("#date").value;
    employeeData.month = document.querySelector("#month").value;
    employeeData.year = document.querySelector("#year").value;
    employeeData.note = document.querySelector('#note').value;
    if (dummy === null) {
        dummy = [employeeData];
    }
    else {
        dummy.push(employeeData)
    }
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
    isChecked(profile);
    const department = document.querySelectorAll('[name=department]');
    isChecked(department);
}
function isChecked(entry){
    entry.forEach((entryCheckBox) =>
    entryCheckBox.checked = false
    );
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
            selectedValueList.push(node.value);
        }
        return selectedValueList;
    }
}