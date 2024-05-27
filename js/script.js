let numbers = [40, 100, 1];
let points = new Array (40, 100, 1);

console.log(numbers);
console.log(points);

let good = [40];  
let bad = new Array (40);

console.log(good);
console.log(bad);

let dogs = ["golden retriever", "Lab", "Yorkie", "Jack-Russel", "Foxy","Golden-doodle"];

console.log(dogs);
console.log(dogs.length);
console.log(dogs[0]);
console.log(dogs[dogs.length-1]);
console.log(Array.isArray(dogs));
console.log(dogs.toString());
console.log(dogs.join(" * "));

dogs.pop();
console.log(dogs);

dogs.push("Golden-doodle");
console.log(dogs);

let dog = dogs.pop();
console.log(dog);
console.log(dogs);

let newDogs = dogs.slice(1,4); //does not include 4th
console.log(newDogs);

dogs.splice(1,2, "Doberman", "toi-pom", "Pitbull");
console.log(dogs);



function decreaseMars(){

if (document-getElementById('ticketsMars') .value !=0){
document.getElementById('ticketsMars') .value = parseInt(document.
getElementById('ticketsMars').value) - 1;
}else{
document-getElementById('ticketsMars').value = 0;
}
}

    function increaseMars(){
    document.getElementById('ticketsMars').value = parseInt(document.
    getElementById('ticketsMars').value) + 1;
    }

    let totalMarsCost = 0;
    let totalCost = 0;

    function total(){
    totalMarsCost = parseInt(document.
    getElementById('ticketsMars').value) = 50;
    document.getElementById('total').innerHTML = "R " + totalMarsCost;
    }


    function decreaseSaturn(){

        if (document-getElementById('ticketsSaturn') .value !=0){
        document.getElementById('ticketsSaturn') .value = parseInt(document.
        getElementById('ticketsSaturn').value) - 1;
        }else{
        document-getElementById('ticketsSaturn').value = 0;
        }
        }
        
            function increaseMars(){
            document.getElementById('ticketsSaturn').value = parseInt(document.
            getElementById('ticketsSaturn').value) + 1;
            }
        
            let totalMarsCost = 0;
            let totalSaturnCost = 0;
            let totalCost = 0;
        
            function total(){
            totalMarsCost = parseInt(document.
            getElementById('ticketsSaturn').value) = 50;
            totalSaturnCost = parseInt(document.
                getElementById('ticketsSaturn').value) = 70;
                totalCost = totalMarsCost+totalSaturnCost;
            document.getElementById('total').innerHTML = "R " + totalCost;
            }

