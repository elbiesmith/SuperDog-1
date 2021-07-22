// setting up data

//data
let building = [3, 2, 4, 7, 6, 9];
//largest
let topHeight = 0;
//outputArray
let buildingsSeeSun = [];
//customData
let customBuildings = [];

function loopCheckArray() {
    for (let i = 0; i <= building.length; i++) {
        if (building[i] >= topHeight) {
            buildingsSeeSun.push(building[i]);
        }
    }
    displayArray();
}
// Loop through the array and find out if the number is can be seen

function displayArray() {
    let numberDisplay = document.getElementById("numberDisplay");
    let result = document.getElementById('result');
    numberDisplay.innerHTML = '';
    result.innerHTML = `${buildingsSeeSun.length} => [`;

    for (let i = 0; i <= building.length; i++) {
        numberDisplay.innerHTML += `${building[i]},`
    }
    for (let i = 0; i <= building.length; i++) {
        results.innerHTML += `${buildingsSeeSun[i]},`
    }
    result.innerHTML += ']'

}

//addValue
function addBuilding() {
    let number = parseInt(document.getElementById('newNumber').value);
    let customBuildingForm = document.getElementById('customBuilding');
    //add validation here
    customBuilding.push(number);
    customBuildingForm.innerHTML += number;
}

//resets the data
function resetData() {
    let customBuildingForm = document.getElementById('customBuilding');_
    customeBuildingForm.innerHTML =' ';
    customBuildings = [];  
}

//reset the form
function resetForm(){
    document.getElementById('arrayForm').reset();
}