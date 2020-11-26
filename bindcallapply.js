var pradeep = {
    firstName: 'pradee',
    myName: function(){
        console.log(this.firstName);
    }
}

var pradeep2 = function(place, state){
    console.log(this.firstName + ' ' + place + ' ' + state);
}

var check = pradeep2.bind(pradeep);
check('tiptur', 'karnataka');

pradeep2.call(pradeep, 'tiptur', 'karnataka');
pradeep2.apply(pradeep, ['tiptur', 'karnataka']);