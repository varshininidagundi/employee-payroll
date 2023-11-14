
window.addEventListener('DOMContentLoaded', (event) => {
    let storage = localStorage.getItem('EmployeeData');
    let count = JSON.parse(storage).length;
    console.log(count)
    let value = document.querySelector('#countValue')
    value.textContent = count;
    // let information = document.querySelector("#tableEntry");
    let entryIntoTable = document.querySelector("#employeeTableBody");
    let employeeInformation = JSON.parse(storage);
    console.log(typeof storage);
    // information.innerHTML = `<span>${JSON.stringify(employeeInformation)}</span>`;
    // create method 
    // call the method onbutton click
    // search the employee info in storage 
    // delete
    //function handleDeleteEmployee(name){cont restul = storage.filter((employeeName) => name !== employeeName;)//handlling local stoage}
    function deleteEmployeeByName(name) {
        let filteredEmployees = employeeInformation.filter(employee => employee._name !== name);
        // updateTable();
        console.log(filteredEmployees);
        //handlling local stoage
        
        let employeeValue = "";
        for (let employee of filteredEmployees) {
            employeeValue = `<div>
            <td><img src = "${employee._profile}"></td>
            <td>${employee._name}</td>
            <td>${employee._gender}</td>
            <td>${departemntLabel(employee._department)}</td>
            <td >&#8377;${employee._salary}</td>
            <td>${employee._date}${employee._month}${employee._year}</td>
            <td ><div class="icon-cnt">
            <img class="icons" src="../assets/trash.png" onclick="deleteEmployeeByName('${employee._name}')"  id='deleteIcon'>
            <img class="icons" src="../assets/pencil.png"></div></td>
            </tr> </div> `
        }
        localStorage.setItem('EmployeeData', JSON.stringify(employeeInformation));
    }
    function searchEmployee() {
        let searchName = document.querySelector('#searchEmployeeName').value;
        console.log(searchName);
        let filteredEmployees = employeeInformation.filter(employee => {
            return employee._name.toLowerCase().includes(searchName);
        });

        let employeeValue = "";
        for (let employee of filteredEmployees) {
            employeeValue = `<div>
            <td><img src = "${employee._profile}"></td>
            <td>${employee._name}</td>
            <td>${employee._gender}</td>
            <td>${departemntLabel(employee._department)}</td>
            <td >&#8377;${employee._salary}</td>
            <td>${employee._date}${employee._month}${employee._year}</td>
            <td ><div class="icon-cnt">
            <img class="icons" src="../assets/trash.png" onclick="deleteEmployeeByName('${employee._name}')"  id='deleteIcon'>
            <img class="icons" src="../assets/pencil.png"></div></td>
            </tr> </div> `
        }

        entryIntoTable.innerHTML = employeeValue;
        console.log(employeeValue);
    }
    let departemntLabel = (departemntList) => {
        let dpLabel = '';
        for (let departemnt of departemntList) {
            dpLabel = `${dpLabel}<label class="departmentLabel">${departemnt}</label>`
        }
        return dpLabel;
    };
    console.log(typeof employeeInformation);
    if (employeeInformation === null) {
        console.log('true');

    } else {
        let employeeValue = "";
        for (let employee of employeeInformation) {
            // let employee = employeeInformation[employeeValue];
            employeeValue = `${employeeValue} <div>
                <td><img src = "${employee._profile}"></td>
                <td>${employee._name}</td>
                <td>${employee._gender}</td>
                <td>${departemntLabel(employee._department)}</td>
                <td >&#8377;${employee._salary}</td>
                <td>${employee._date}${employee._month}${employee._year}</td>
                <td><div class="icon-cnt">
                <img class="icons" src="../assets/trash.png" id='deleteIcon' data-employee-name="${employee._name}" onclick="deleteEmployeeByName(${employee._name})" >
                <img class="icons" src="../assets/pencil.png"></div></td>
                </tr> </div> `
            // information.innerHTML = `<span>${JSON.stringify(employeeInformation)},${employee._name}</span>`;
        }
        entryIntoTable.innerHTML = employeeValue;
    }
    document.getElementById('searchIcon').addEventListener('click', searchEmployee);
    document.getElementById('deleteIcon').addEventListener('click', deleteEmployeeByName);

    let deleteIcons = document.querySelectorAll('.deleteIcon');
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', function (event) {
            // Extract the employee name associated with this icon
            let employeeName =  event.currentTarget.getAttribute('data-employee-name');
            deleteEmployeeByName(JSON.stringify(employeeName));
        });
    });
});
