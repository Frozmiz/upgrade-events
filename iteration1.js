//--> parte 1

function Click() {
    alert("HAS PULSADO EL BOTÓN!");
}

document.getElementById("btnToClick").addEventListener("click", Click);



//--> parte 2

const fokus$$ = document.querySelector("input[class='focus']");

fokus$$.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
});

fokus$$.addEventListener('blur', (event) => {
    event.target.style.background = '';
});


//--> parte 3

const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(event) {
  log.textContent = event.target.value;
  console.log(log);
}