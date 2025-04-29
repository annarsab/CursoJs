function verificar() {
  var data = new Date();
  var ano = data.getFullYear(); //pega o ano do calendário atual
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  //verifica se minha caixa está vazia e se o valor é igual a zero || (ou) se o ano é maior que o ano atual
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    //seleciona uma das duas bolinhas do radio
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    //para puxar a foto direto pelo js - primeiro crio o elemento e depois eu crio o atributo onde posso colocar id e nome igual ao html
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    //res.innerHTML = `Idade calculada: ${idade} anos.`;
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 13) {
        //Criança
        genero = "Criança";
        img.setAttribute("src", "./img/criancamenino.png");
      } else if (idade < 26) {
        //Jovem
        genero = "Homem Jovem";
        img.setAttribute("src", "./img/homemjovem.png");
      } else if (idade < 50) {
        //Adulto
        genero = "Homem Adulto";
        img.setAttribute("src", "./img/homemadulto.png");
      } else {
        //Idoso
        genero = "Homem Idoso";
        img.setAttribute("src", "./img/homemidoso.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 13) {
        //Criança
        genero = "Criança";
        img.setAttribute("src", "./img/criancamenina.png");
      } else if (idade < 26) {
        //Jovem
        genero = "Mulher Jovem";
        img.setAttribute("src", "./img/mulherjovem.png");
      } else if (idade < 50) {
        //Adulta
        genero = "Mulher Adulta";
        img.setAttribute("src", "./img/mulheradulta.png");
      } else {
        //Idosa
        genero = "Mulher Idosa";
        img.setAttribute("src", "./img/mulheridosa.png");
      }
    }
    //para centralizar o texto da tela
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`;
    res.appendChild(img);
  }
}
