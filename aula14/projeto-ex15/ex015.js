function verificar() {
  var data = new Date();
  var ano = data.getFullYear(); //pega o ano do calendário atual
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  //verifica se minha caixa está vazia e se o valor é igual a zero || (ou) se o ano é maior que o ano atual
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    //seleciona uma das duas bolinhas
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    res.innerHTML = `Idade calculada: ${idade} anos.`;
  }
}
