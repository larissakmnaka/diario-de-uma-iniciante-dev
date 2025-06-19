function sayHello(){ // Cria uma função
    alert("Olá") // Cria uma caixinha
}

function toggleMode() { // Para alterar modo
  const html = document.documentElement // Document é a representação do documento em formato de objeto Js; . acessa propriedades e funcionalidades; por fim, acessa a tag html através do documentElement
  html.classList.toggle("light") // Se na lista de classe do html conter light, remove. Se não, adiciona. É o mesmo que a condicional comentada abaixo:
    // if(html.classList.contains('light')) {
    //   html.classList.remove('light')
    // } else {
    //   html.classList.add('light')
    // }

  const img = document.querySelector("#profile img") // Procura um elemento pelo seletor
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/perfil2.HEIC") // Modifica um atributo
    img.setAttribute("alt", "Foto de uma japonesa sorrindo de óculos, com a cabeça meio inclinada")
  } else {
    img.setAttribute("src", "./assets/perfil1.HEIC")
    img.setAttribute("alt", "Foto de uma japonesa sorrindo de óculos, com a cabeça reta")
  }
}