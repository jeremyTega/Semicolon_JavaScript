const prompt = require('prompt-sync')()

let allEmployees = [];


function displayMenu() {
    console.log(`
    MAIN MENU
    ======================================
    Welcome to Semicolon Employee Payroll:
    ======================================

    1  -> Add Employee Payroll
    2  -> View Employee Payroll
    3  -> Update Employee Payroll
    4  -> Exit

    ======================================
    Kindly enter your choice below:
    ======================================
    `)
    user_input = Number(prompt("Choose one: "))
    return user_input
}


function addEmployee(name, hoursWorked, hourlyPay, federalTaxRate, stateTaxRate) {
    name = name.toLowerCase();


    let grossPay = hoursWorked * hourlyPay;
    let federalTax = grossPay * federalTaxRate;
    let stateTax = grossPay * stateTaxRate;
    let totalDeductions = federalTax + stateTax;
    let netPay = grossPay - totalDeductions;

    const employee = {
        name,
        hoursWorked,
        hourlyPay,
        grossPay,
        federalTax,
        stateTax,
        totalDeductions,
        netPay
    };

    allEmployees.push(employee);
    console.log(`Employee ${name} added successfully.`);
}

function viewEmployees() {
    if (allEmployees.length === 0) {
        console.log('No employees to display.');
         } else {
        allEmployees.forEach(items => {
            console.log(`
            Name: ${items.name}
            Hours Worked: ${items.hoursWorked}
            Hourly Pay: ${items.hourlyPay}
            Gross Pay: ${items.grossPay}
            Federal Tax: ${items.federalTax}
            State Tax: ${items.stateTax}
            Total Deductions: ${items.totalDeductions}
            Net Pay: ${items.netPay}
            `);
        });
        }
       }



function editEmployeeDetails(name) {

    const fideName = name.toLowerCase()


    for (let employee of allEmployees) {

        if (employee.name.toLowerCase() === fideName) {

            const hoursWorked = Number(prompt(`Enter updated hours worked for ${employee.name}:`));

            const hourlyPay = Number(prompt(`Enter updated hourly pay for ${employee.name}:`));

            const federalTaxRate = Number(prompt(`Enter updated federal tax rate for ${employee.name}:`));

            const stateTaxRate = Number(prompt(`Enter updated state tax rate for ${employee.name}:`));

            employee.hoursWorked = hoursWorked;
             employee.hourlyPay = hourlyPay;
             employee.federalTaxRate = federalTaxRate;
            employee.stateTaxRate = stateTaxRate;

            const grossPay = hoursWorked * hourlyPay;
             const federalTax = grossPay * (federalTaxRate / 100);
            const stateTax = grossPay * (stateTaxRate / 100);
            const totalDeductions = federalTax + stateTax;
             const netPay = grossPay - totalDeductions;


                    employee.grossPay = grossPay;
                    employee.federalTax = federalTax;
                      employee.stateTax = stateTax;
                     employee.totalDeductions = totalDeductions;
                    employee.netPay = netPay;

                      break;
        }
    }
}





while (true) {
    const userInput = displayMenu();

    switch (userInput) {
        case 1:
    let name = prompt("Enter employee name:");
       let hoursWorked = parseInt(prompt("Enter hours worked (<= 40):"));
    while (hoursWorked > 40) {
                hoursWorked = parseInt(prompt("Please enter hours less than or equal to 40:"));
        }
    let hourlyRate = parseFloat(prompt("Enter hourly rate (e.g., 9.67):"));
    let federalTaxRate = parseFloat(prompt("Enter federal tax rate in percentage (e.g., 20):"));
    let stateTaxRate = parseFloat(prompt("Enter state tax rate in percentage (e.g., 20):"));
    addEmployee(name, hoursWorked, hourlyRate, federalTaxRate, stateTaxRate);
            break;

        case 2:
            viewEmployees();
            break;

        case 3:
            let searchName = prompt("Enter employee name to search:").toLowerCase();
             editEmployeeDetails(searchName);
            break;

        case 4:
    console.log("Goodbye!");
            break;

        default:
  console.log("Invalid option. Please select a valid menu option.");
            break;
    }

    if (userInput === 4) break;
}
















