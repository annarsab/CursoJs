function carregar() {
  var msg = document.getElementById("msg");
  var foto = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  //var hora = 19;
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    //msg.innerHTML = "Bom dia!";
    foto.src = "./img/fotomanha.png";
    document.body.style.background = "#ffe082";
  } else if (hora >= 12 && hora < 18) {
    //msg.innerHTML = "Boa tarde!";
    foto.src = "./img/fototarde.png";
    document.body.style.background = "#fe5f2f";
  } else {
    //msg.innerText = "Boa noite!";
    foto.src = "./img/fotonoite.png";
    document.body.style.background = "#000099";
  }
}
