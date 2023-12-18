function validaForms() {
 const campoA = document.getElementById("campoA").value;
 const campoB = document.getElementById("campoB").value;

  function exibirmsg(valido, mensagem) {
    let mesgDiv = document.getElementById("mensagem");
    mesgDiv.innerHTML = mensagem;
  
    if (valido) {
      mesgDiv.style.color = 'green';
    } else {
      mesgDiv.style.color = "red";
    }
  }

  if (campoB > campoA) {
    exibirmsg(true, "***Formulario Válido***");
    limpaNome();
  } else {
    exibirmsg(false,  "***Formulário Inválido***");
    limpaNome();
  }

  if ((campoA == "") & (campoB == "")) {
    alert("Preencha os Dados Corretamente");
    exibirmsg(false, "Preencha os Dados Corretamente");
    limpaNome();
  }
}



function limpaNome() {
  campoA.value = "";
  campoB.value = "";
}
