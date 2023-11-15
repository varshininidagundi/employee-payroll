let employeeInformation;
let storage = localStorage.getItem('EmployeeData');
employeeInformation = JSON.parse(storage);
let count = JSON.parse(storage).length;

window.addEventListener('DOMContentLoaded', (event) => {
    let value = document.querySelector('#countValue')
    value.textContent = count;
    renderTable(employeeInformation)
    localStorage.setItem('EmployeeData', JSON.stringify(employeeInformation));
    let searchIcon = document.getElementById('searchIcon');
    let deleteIcon = document.getElementById('deleteIcon');
    if (searchIcon) {
        searchIcon.addEventListener('click', searchEmployee);
    }
    if (deleteIcon) {
        deleteIcon.addEventListener('click', deleteEmployeeByName);
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
    console.log(typeof employeeInformation);
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
                <img class="icons" src="../assets/pencil.png"></div></td>
                </tr> </div> `
        }
        entryIntoTable.innerHTML = employeeValue;
    }
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
        // updateTable();
        console.log(filteredEmployees);
        renderTable(filteredEmployees)
        //handlling local stoage
        localStorage.setItem('EmployeeData', JSON.stringify(employeeInformation));
    }
    else{
        console.log('error')
    }
}