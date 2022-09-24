var cpf = document.querySelector("#cpf");

cpf.addEventListener("blur", function(){
   if(cpf.value) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
});

function replicar() {
  /*linha 1 */
  //interessado
  const interessado = document.querySelector("#interessado")
  const interessadov = interessado.value
  const interessado2 =document.querySelector("#interessado2")
  interessado2.value = interessadov
  //RA
  const ra = document.querySelector("#ra")
  const rav = ra.value
  const ra2 = document.querySelector("#ra2")
  if (rav == "Apenas números") {
    ra2.value = "Não é Aluno"
  } else {
    ra2.value = rav    
  }
  
  /* Linha 2 */

  //telefone
  const telefone = document.querySelector("#telefone")
  const telefonev = telefone.value
  const telefone2 = document.querySelector("#telefone2")
  telefone2.value = telefonev
  //email
  const email = document.querySelector("#email")
  const emailv = email.value
  const email2 = document.querySelector("#email2")
  email2.value = emailv
  //cpf
  const cpfv =cpf.value
  const cpf2 = document.querySelector("#cpf2")
  cpf2.value = cpfv

  // Linha 3
  //periodo
  const periodo = document.querySelector("#periodo")
  const periodov = periodo.value
  const periodo2 =document.querySelector("#periodo2")

  if (periodov == "Ano/Semestre") {
    periodo2.value = "******"
    
  } else {
    periodo2.value =periodov
  }
  

  //setor
  const setor = document.querySelector("#setor")
  const setorv = setor.value
  const setor2 = document.querySelector("#setor2")

  if (setorv == "Curso, se aluno setor se externo") {
    alert("Prencher Curso/Setor")
    
  }else{
    setor2.value = setorv
  }


  

  //turma
  const turma =document.querySelector("#turma")
  const turmav = turma.value
  const turma2 = document.querySelector("#turma2")
  if (turmav == "Turma, se aluno") {
    turma2.value = "Não é aluno"
  } else {
    turma2.value = turmav
  }
  

  /*Linha 4 */ 
  //Ano conclusão 
  const anoconclusao = document.querySelector("#anoconclusao")
  const anoconclusaov = anoconclusao.value
  const anoconclusao2 = document.querySelector("#anoconclusao2")
  if (anoconclusaov == "Se aluno") {
    anoconclusao2.value = "Não é aluno"
  } else {
    anoconclusao2.value = anoconclusaov
  }
  //orgão
  const orgao = document.querySelector("#orgao")
  const orgaov = orgao.value 
  const orgao2 =document.querySelector("#orgao2")

  orgao2.value = orgaov
  /*Linha 5 */
  // Destinatário
  const destinatario = document.querySelector("#destinatario")
  const destinatariov = destinatario.value
  const destinatario2 = document.querySelector("#destinatario2")
  destinatario2.value = destinatariov

  //assunto
  const assunto = document.querySelector("#assunto")
  const assuntov= assunto.value
  const assunto2 = document.querySelector("#assunto2")
  assunto2.value = assuntov

  /* Campo observações*/ 
  const observacoes = document.querySelector("#observacoes")
  const observacoesv = observacoes.value
  const observacoes2 = document.querySelector("#observacoes2")
  observacoes2.value = observacoesv 
  

  

  // Data nos rodapés 
  const today = new Date();
  const date =  today.toLocaleDateString();
  document.getElementById("data").innerHTML = "<p>Jandaia do Sul," + date +"</p>"
  document.getElementById("data2").innerHTML = "<p>Jandaia do Sul," + date +"</p>"
  
  
  print()


}