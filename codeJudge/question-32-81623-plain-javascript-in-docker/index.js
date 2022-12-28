console.log(API_URL);

function renderDynamicContent() {
    document.getElementById('dynamic-content').innerHTML = null
}


function myAddBtn() {
    let nm1 = document.getElementById('Text1').value
    let nm2 = document.getElementById('Text2').value
    document.getElementById('txtresult').innerHTML = Number(nm1) + Number(nm2)
    document.getElementById('Text1').value = null
    document.getElementById('Text2').value = null
}

function myInput() {
    let nm1 = document.getElementById('Text1').value
    let nm2 = document.getElementById('Text2').value
    let btn = document.getElementById('myBtn')

    if (nm1.trim() === "" || nm2.trim() === "") {
        btn.disabled = true
    } else {
        btn.disabled = false
    }
}