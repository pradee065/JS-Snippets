var employees = [
    {
      name: "Pradeep1",
      age: 29,
      salary: 20
    },
    {
      name: "Pradeep2",
      age: 32,
      salary: 35
    },
    {
      name: "Pradeep3",
      age: 35,
      salary: 40
    }
  ]
  
  function employeedetails(employees) {
    var array2 = [];
    
    var sum = 0;
    for (var emp of employees) {
        if(emp.salary > 30){
            console.log(emp.name + ' : ' + emp.salary);
            array2.push(emp.salary);
            console.log(array2);
            array2.reduce((acc, i) => {
                return sum = acc + i
            });
            console.log(sum);
        }
    }
  }
  
  console.log(employeedetails(employees));
  