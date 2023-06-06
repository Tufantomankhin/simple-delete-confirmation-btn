document.getElementById('bg-color').style.display = 'flex'

document.getElementById('secret-info').style.color = 'white'

document.getElementById('btn-violet').style.backgroundColor = 'violet'
document.getElementById('btn-blue').style.backgroundColor = 'blue'
document.getElementById('btn-skyblue').style.backgroundColor = 'skyblue'
document.getElementById('btn-green').style.backgroundColor = 'green'
document.getElementById('btn-yellow').style.backgroundColor = 'yellow'
document.getElementById('btn-orange').style.backgroundColor = 'orange'
document.getElementById('btn-red').style.backgroundColor = 'red'
// keyup function
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if (text === 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }
})
document.getElementById('btn-delete').addEventListener('click', function () {
    const secret = document.getElementById('secret-info');
    secret.style.display = 'none';
});
// background color change
// anonymus function
document.getElementById('btn-violet').addEventListener('click', function (){
    document.body.style.backgroundColor = 'violet';
})
document.getElementById('btn-blue').addEventListener('click', function (){
    document.body.style.backgroundColor = 'blue';
})
document.getElementById('btn-skyblue').addEventListener('click', function (){
    document.body.style.backgroundColor = 'skyblue';
})
document.getElementById('btn-green').addEventListener('click', function (){
    document.body.style.backgroundColor = 'green';
})
document.getElementById('btn-yellow').addEventListener('click', function () {
        document.body.style.backgroundColor = 'yellow'
    })
document.getElementById('btn-orange').addEventListener('click', function (){
    document.body.style.backgroundColor = 'orange';
})
// arrow function
document.getElementById('btn-red').addEventListener('click', () => {
        document.body.style.backgroundColor = 'red';
    })
// for of loop
const btns = document.querySelectorAll('.make-white')
for (const btn of btns){
    btn.style.color = 'white'
    btn.style.margin = '5px'
    btn.style.padding = '5px'
    btn.style.width = '100px'
    btn.style.borderRadius = '15px'
}

const btnDelete = document.getElementById('btn-delete')
for (const btnDelet of btnDelete ){
    btnDelet.style.backgroundColor = 'red'
}