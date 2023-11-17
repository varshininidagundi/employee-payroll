let employeeInformation;
window.addEventListener('DOMContentLoaded', (event) => {
    let storage = localStorage.getItem('EmployeeData');
    employeeInformation = JSON.parse(storage);
    let count = JSON.parse(storage).length;
    let value = document.querySelector('#countValue')
    value.textContent = count;
    let searchIcon = document.getElementById('searchIcon');
    if (searchIcon) {
        searchIcon.addEventListener('click', searchEmployee);
    }
    renderTable(employeeInformation)
    localStorage.setItem('EmployeeData', JSON.stringify(employeeInformation));
    let deleteIcon = document.getElementById('deleteIcon');
    if (deleteIcon) {
        deleteIcon.addEventListener('click', deleteEmployeeByName);
    }
    let editIcon = document.getElementById('editIcon')
    if(editIcon){
        if(editIcon.addEventListener('click',handleEditEmployee));
            // window.location.assign("../templets/employee.html"); 
        
    }
});
let departemntLabel = (departemntList) => {
    let dpLabel = '';
    for (let departemnt of departemntList) {
        dpLabel = `${dpLabel}<label class=${departemnt}>${departemnt}  </label>`
    }
    return dpLabel;
};
function renderTable(employeeInformation) {
    let entryIntoTable = document.querySelector("#employeeTableBody");
    // console.log(typeof employeeInformation);
    if (employeeInformation === null) {
        console.log('employee information is null');

    } else {
        let employeeValue = "";
        for (let employee of employeeInformation) {
            employeeValue = `${employeeValue} <div>
                <td><img src = "${employee._profile}"></td>
                <td>${employee._name}</td>
                <td>${employee._gender}</td>
                <td><div class="departmentInfo">${departemntLabel(employee._department)}</div></td>
                <td >&#8377;${employee._salary}</td>
                <td>${employee._date}${employee._month}${employee._year}</td>
                <td><div class="icon-cnt">
                <img class="icons" src="../assets/trash.png" id='deleteIcon' data-employee-name="${employee._name}" onclick="deleteEmployeeByName(event)" >
                <a href="../templets/employee.html"><img class="icons" src="../assets/pencil.png" id='editIcon' data-employee-info="${employee._name}" onclick="handleEditEmployee(event)"></a></div></td>
                </tr> </div> `
        }
        entryIntoTable.innerHTML = employeeValue;
    }
}
function handleEditEmployee(event){
    let employeeEditData = event.target.dataset.employeeInfo;
    let edit = employeeInformation.filter(employee =>employee._name === employeeEditData);
    console.log(edit);
    localStorage.setItem("EmployeeEditData",JSON.stringify(edit));
}
function searchEmployee() {
    
        let searchName = document.querySelector('#searchEmployeeName').value;
        console.log(searchName);
        if ( Array.isArray(employeeInformation)) {
            let filteredEmployees = employeeInformation.filter(employee => {
                return employee._name.toLowerCase().includes(searchName);
            });
            renderTable(filteredEmployees);
        }
        else{
            console.log('error')
        }
}
function deleteEmployeeByName(event) {
    let employeeName = event.target.dataset.employeeName;
    if (Array.isArray(employeeInformation)) {
        let filteredEmployees = employeeInformation.filter(employee => employee._name !== employeeName);
        console.log(filteredEmployees);
        localStorage.setItem('EmployeeData', JSON.stringify(filteredEmployees));
        renderTable(filteredEmployees)
    }
    else{
        console.log('error')
    }
}