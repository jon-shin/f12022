const drivers = [["Max Verstappen", "Red Bull", 0], ["Sergio Perez", "Red Bull", 0], ["Lewis Hamilton", "Mercedes", 0], ["George Russell", "Mercedes", 0],
["Charles Leclerc", "Ferrari", 0], ["Carlos Sainz", "Ferrari", 0], ["Daniel Ricciardo", "McLaren", 0], ["Lando Norris", "McLaren", 0], 
["Fernando Alonso", "Alpine", 0], ["Esteban Ocon", "Alpine", 0], ["Pierre Gasly", "AlphaTauri", 0], ["Yuki Tsunoda", "AlphaTauri", 0], 
["Sebastian Vettel", "Aston Martin", 0], ["Lance Stroll", "Aston Martin", 0], ["Valtteri Bottas", "Alfa Romeo", 0], ["Guanyu Zhou", "Alfa Romeo", 0],
["Kevin Magnussen", "Haas", 0], ["Mick Schumacher", "Haas", 0], ["Alex Albon", "Williams", 0], ["Nicholas Latifi", "Williams", 0]];
const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
let round = 1;
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function createTable(myArray, pointArray){
    let result = "<table border = 1>";
    let count = 1;
    result += "<tr>";
    result += "<th> Position </th>";
    result += "<th> Driver </th>";
    result += "<th> Team </th>";
    result += "<th> Points </th>";
    result += "</tr>";
    for(let i = 0; i < myArray.length; i++){
        result += "<tr>";
        result += "<td>"+ count +"</td>";
        count++;
        //result += "<td>"+myArray[i]+"</td>";
        for(let j=0; j<myArray[i].length - 1; j++){
            result += "<td>"+myArray[i][j]+"</td>";
        }
        /*
        if(i % 2 == 0){
            result += "<td>"+myArray2[i/2]+"</td>";
        }
        else{
            result += "<td>"+myArray2[i - count]+"</td>";
            count++;
        }
        */
        if(i < 10){
            result+= "<td>"+pointArray[i]+"</td>";
            myArray[i][2]+=pointArray[i];
        }
        else{
            result+= "<td> 0 </td>";
        }
        result += "</tr>";

    }
    return result;
}
function sortDrivers(){
    let p = [];
    let newArray = [];
    for(let i = 0; i < drivers.length; i++){
        p[i] = drivers[i][2];
    }
    p.sort(function(a, b){return b - a});
    for(let i = 0; i< 20; i++){
        if(i > 0 && (p[i] == p [i-1])){
            continue;
        }
        for(let j = 0; j < drivers.length; j++){
            if(p[i] == drivers[j][2]){
                newArray.push(drivers[j]);
            }
        }
    }
    return newArray;
}
function wdcTable(myArray){
    let result = "<table border = 1>";
    let count = 1;
    result += "<tr>";
    result += "<th> Position </th>";
    result += "<th> Driver </th>";
    result += "<th> Team </th>";
    result += "<th> Points </th>";
    result += "</tr>";
    for(let i = 0; i < myArray.length; i++){
        result += "<tr>";
        result += "<td>"+ count +"</td>";
        count++;
        for(let j=0; j<myArray[i].length; j++){
            result += "<td>"+myArray[i][j]+"</td>";
        }
        result += "</tr>";
    }
    return result;
}
function sortTeams(){
    let result = "<table border = 1>";
    let count = 1;
    let p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //let newArray = [];
    const teams = [["Red Bull", 0], ["Mercedes", 0], ["Ferrari", 0], ["Haas", 0], ["McLaren", 0], ["Alpine", 0], ["Williams", 0], 
    ["Aston Martin", 0], ["AlphaTauri", 0], ["Alfa Romeo", 0]];
    for(let i = 0; i < teams.length; i++){
        for(let j = 0; j< drivers.length; j++){
            if(drivers[j][1] == teams[i][0]){
                teams[i][1] = teams[i][1] + drivers[j][2];
                p[i] = p[i]+ drivers[j][2];
            }
        }
    }
    p.sort(function(a, b){return b - a});
    result += "<tr>";
    result += "<th> Position </th>";
    result += "<th> Team </th>";
    result += "<th> Points </th>";
    result += "</tr>";
    for(let i = 0; i< 10; i++){
        if(i > 0 && (p[i] == p [i-1])){
            continue;
        }
        for(let j = 0; j < teams.length; j++){
            if(p[i] == teams[j][1]){
                result += "<tr>";
                result += "<td>"+ count +"</td>";
                count++;
                result += "<td>"+ teams[j][0] +"</td>";
                result += "<td>"+ teams[j][1] +"</td>";
                result += "</tr>";
            }
        }
    }
    return result;
}


function randomTable(){
    document.getElementById("round").innerHTML = "Round " + round;
    round++;
    document.getElementById("drivers").innerHTML = createTable(shuffle(drivers), points);
    document.getElementById("wdc").innerHTML = wdcTable(sortDrivers());
    document.getElementById("wcc").innerHTML = sortTeams();
}
