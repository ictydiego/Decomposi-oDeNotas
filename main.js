function calcularNotasMoedas() {
    const exibir = document.querySelector('.add');
    exibir.innerHTML = "";
    const numberInput = document.querySelector('.valorInserido');
    const notas = [200, 100, 50, 20, 10, 5, 2, 1];
    const moedas = [0.50, 0.25, 0.10, 0.05, 0.01];
    const cedulas = Array(8).fill(0);
    const moedasQuantidade = Array(5).fill(0);
    const newArray = [];
    const newArray2 = [];
    let valorTotal = numberInput.value;

    if (numberInput <= 0 || valorTotal <= 0) {
        alert("Digite um numero maior que zero");
    }
    //verifico se as checkboxs estao marcadas, se sim 
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < 9; i++) {
        if (checkboxes[i].checked) {
            newArray.push(checkboxes[i].value);
        }
    }
    const checkboxes2 = document.querySelectorAll('input[id="moedas"]');
    for (let i = 0; i < 5; i++) {
        if (checkboxes2[i].checked) {
            newArray2.push(checkboxes2[i].value);
        }
    }


    //Pego o array de notas e vou verificando se o newArray tem o valor nele, se tiver eu troco o valor do index para vazio "".
    for (i = 0; i < notas.length; i++) {
        if (notas[i] == newArray[i]) {
            notas.splice(i, 1, "");
        }
    }

    for (i = 0; i < moedas.length; i++) {
        if (moedas[i] == newArray2[i]) {
            moedas.splice(i, 1, "");

        }
    }


    // separo a parte inteira da parte fracionaria
    let valorInteiro = Math.floor(numberInput.value);
    let valorFracionado = Number((numberInput.value - valorInteiro).toFixed(2));

    for (let i = 0; i < notas.length; i++) {
        while (valorInteiro >= notas[i] && notas[i] != "") {
            cedulas[i]++;
            valorInteiro -= notas[i];
        }
    }


    ///////////////////////////////////////////////FUNCIONANDO//////////////////////////////////////////////////
    if (valorInteiro <= 0) {
        for (let i = 0; i < moedas.length; i++) {
            while (valorFracionado.toFixed(2) >= moedas[i] && moedas[i] != "") {
                moedasQuantidade[i]++;
                valorFracionado = Number((valorFracionado - moedas[i]).toFixed(2));
            }
        }
    } else {
        for (let i = 0; i < moedas.length; i++) {
            while (valorTotal >= moedas[i] && moedas[i] != "") {
                moedasQuantidade[i]++;
                valorTotal -= moedas[i];
            }
        }
    }


    function createLi() {
        for (let i = 0; i < cedulas.length; i++) {
            if (cedulas[i] != "") {
                const imagens = ["nota0", "nota1", "nota2", "nota3", "nota4", "nota5", "nota6", "nota7", "nota8"];
                const li = document.createElement('li')
                li.classList.add(imagens[i]);
                const exibir = document.querySelector('.add');
                const p = document.createElement('p');
                if (i == 7) {
                    p.classList.add("moedas");
                }
                p.classList.add("notas");
                p.innerText = `${cedulas[i]}x`;
                li.appendChild(p);
                exibir.appendChild(li);
                //createButton(li);
            }
        }

        for (let i = 0; i < moedasQuantidade.length; i++) {
            if (moedasQuantidade[i] != "") {
                const imagens2 = ["moeda0", "moeda1", "moeda2", "moeda3", "moeda4"];
                const li = document.createElement('li')
                li.classList.add(imagens2[i]);
                const exibir = document.querySelector('.add');
                const p = document.createElement('p');
                p.classList.add("moedas");
                p.innerText = `${moedasQuantidade[i]}x`;
                li.appendChild(p);
                exibir.appendChild(li);
                //createButton(li);
            }
        }
    }

    createLi();
}
///////////////////////////Funcao para ocultar e mostrar a lista de checkbox
function toggleCheckboxes() {
    const notasMoedas = document.getElementById('notasMoedas');
    notasMoedas.classList.toggle('escondido');
}
toggleCheckboxes();

/*  function createButton(li) {
   const buttonApaga = document.createElement('button')
   buttonApaga.classList.add("buttonApaga")
   buttonApaga.innerHTML = 'x';
   li.appendChild(buttonApaga)
   buttonApaga.addEventListener('click', function deleteLi() {
     li.remove()
   })
*/


