
window.addEventListener('DOMContentLoaded', (event) => {
    let storage = localStorage.getItem('EmployeeData');
    let count = storage.length;
    let value = document.querySelector('#countValue')
    value.textContent = count;
    let information = document.querySelector("#tableEntry");
    let entryIntoTable = document.querySelector("#employeeTableBody");
    let employeeInformation = JSON.parse(storage);
    console.log(typeof storage);
    // information.innerHTML = `<span>${JSON.stringify(employeeInformation)}</span>`;
    // create method 
    // call the method onbutton click
    // search the employee info in storage 
    // delete
    //function handleDeleteEmployee(name){cont restul = storage.filter((employeeName) => name !== employeeName;)//handlling local stoage}

    let  departemntLabel = (departemntList) => {
        let dpLabel ='';
        for(let departemnt of departemntList){
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
                <td>${employee._salary}</td>
                <td>${employee._date}${employee._month}${employee._year}</td>
                <td><div class="icon-cnt">
                <img class="icons" src="../assets/trash.png">
                <img class="icons" src="../assets/pencil.png"></div></td>
                </tr> </div> `
            // information.innerHTML = `<span>${JSON.stringify(employeeInformation)},${employee._name}</span>`;
        }
        entryIntoTable.innerHTML = employeeValue;
    }

});
