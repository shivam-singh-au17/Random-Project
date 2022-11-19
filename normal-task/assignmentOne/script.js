
let array = [1, 2, 3, 4, 5];
let mainDivData = document.getElementById("mainDiv");
let funCount = 1;

function showTable() {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        let tr1 = document.createElement("tr");
        tr1.id = `tr${element}`

        let td1 = document.createElement("td");
        td1.innerText = index + 1;

        let td2 = document.createElement("td");
        td2.innerText = `First Name ${element}`;

        let td3 = document.createElement("td");
        td3.innerText = `Last Name ${element}`;

        let td4 = document.createElement("td");
        td4.innerText = `City ${element}`;

        let td5 = document.createElement("td");
        td5.innerText = `Country ${element}`;

        tr1.append(td1, td2, td3, td4, td5);

        mainDivData.append(tr1)

        funCount++;

    }
}

if (funCount <= 1) {
    showTable();
}


function bottomItem() {

    array.push(array.length + 1);
    document.getElementById("mainDiv").innerHTML = "";
    showTable();

}


function topItem() {

    array.unshift(array.length + 1);
    document.getElementById("mainDiv").innerHTML = "";
    showTable();

}