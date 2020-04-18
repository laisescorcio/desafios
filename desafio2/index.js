var colors = ["blue", "red", "green", "yellow", "purple"];

function changeColor() {
  //random: números quebrados
  //floor: "arredonda" o valor para baixo em valores inteiros
  var index = Math.floor(Math.random() * colors.length);
  // entre colchete: posição; entre parenteses: função
  document.querySelector("#background").style.backgroundColor = colors[index];
}
