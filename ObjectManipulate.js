var employees = [
    {
        name: 'Pradeep1',
        age: 29,
        salary: 20
    },
    {
        name: 'Pradeep2',
        age: 32,
        salary: 35
    },
    {
        name: 'Pradeep3',
        age: 35,
        salary: 40
    }
]
var addSalary = [];
var sum = 0;
function employeedetails(){
    for(var emp of employees){
        var salary = emp.salary;
        addSalary.push(salary);
    }
    totalSalary(addSalary)
    function totalSalary(array){
        array.reduce((a, b) => {
            return sum = a + b;
        });
        console.log(sum);
    }
}

console.log(employeedetails());
