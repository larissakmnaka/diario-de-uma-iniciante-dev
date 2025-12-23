// Linguagem de programação que permite implementar interatividade e funcionalidade nas páginas web.

// Tudo é objeto → possui atributos (propriedades de um objeto. Ex. peso, cor) e métodos (funcionalidades de um objeto. Ex. receber e enviar)

// = → recebe/atribui

var x = " " // Declara variável e atribui valor

let y = " " // Não deixa criar mesma variável, diferente de var, que sobrescreve

const a = " " // Cria uma variável com valor fixo (não pode alterar)

// Escopo: região do código que uma determinada variável é acessível ou visível. Define o contexto da variável. Ex. cômodos da casa.
// Global: variáveis declaradas fora de qualquer função ou bloco de código. Ex. var.
// Bloco: acessíveis apenas dentro do bloco de código onde foram declaradas. Ex. let, const.
// Local (ou escopo de função): variáveis declaradas dentro de uma função.

// Global scope (escopo global): move as declarações para o topo do contexto de execução antes da execução final → Const: no. Let: no. Var: yes, ou seja, pode perder o controle de onde está disponível.
// Function scope (escopo de função) → Const: yes. Let: yes. Var: yes
// Block scope (escopo de bloco) → Const: yes. Let: yes. Var: no
// Can be reassigned (pode ser reatribuído) → Const: no. Let: yes. Var: yes

// {} → cria escopo de bloco
// Como var tem escopo global, também vai funcionar se estiver dentro das chaves
// Mas tentar ser acessado fora → fica içado. Diferente de let → respeita o escopo onde foi criado

// Existe hierarquia de escopo
// Ex. {
//  let address = "Rua X"
//  console.log (address)
// }
// Funciona = let address = "Rua X"
// {
//  console.log (address)
// }

// Hoisting: levantar ou içar. O interpretador move as declarações de variáveis e funções para o topo do escopo em que foram definidas, antes mesmo da execução do código.
  // Mesmo assim, se não forem declaradas antes, recebe uma referência indefinida (undefined). 

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

// DOM (Document Object Model): é a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web.
  // Representa o documento (document) com nós (documentos filhos ou children. Ex. <head> e <body> → element, dentro do <HTML> → root element) e objetos (estrutura de árvore) que pode ser acessado e modificado.

// Document: é uma variável especial que já é do JavaScript, já está disponível para ser acessada sem precisar criar, só chamar.

// Visualizar o conteúdo do document → faz referência aos elementos do documento
console.log (document)

// Obter o title da página
console.log (document.title)

// Acessar elemento pelo ID
const guest = document.getElementById("guest-2") // Método dentro do document que permite acessar elementos pelo ID
console.log(guest) // Assim, vai exibir o conteúdo
console.log(guest.textContent) // Assim, retorna o conteúdo como texto

const guest = document.querySelector("#guest-2") // Acessa o elemento pelo seletor ID

// Acessar o elemento pelo seletor class
const guests = document.querySelector(".guest") // Vai sempre retornar somente o primeiro encontrado

// Mostrar as propriedades do objeto
console.dir(guest)

// Alterar conteúdo
guest.textContent = "João" 

// Alterar conteúdo dentro da span
const guest = document.querySelector("#guest-1 span")
guest.textContent = "Maria" 

// Diferença entre console.log
console.log(guest.textContent) // Retorna o conteúdo visível e oculto
console.log(guest.innerText) // Retorna somente o conteúdo visível
console.log(guest.innerHTML) // Retorna o HTML como texto 

// Adicionar classe
input.classList.add("input-error")

// Remover classe
input.classList.remove("input-error")

// Se tiver, remove. Se não tiver, adiciona
input.classList.toggle("input-error")

// Modificar as propriedades CSS do elemento
button.style.backgroundColor = "red"

// Criar elementos
const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
const guestName = document.createElement("span")

guestName.textContent = "Diego"

// Adicionar após o último filho
newGuest.append(guestName)
newGuest.append(guestName, guestSurname)

// Adicionar após o último filho, mas sem ter mais de um argumento. Mais simples que o append
newGuest.appendChild(guestName)

// Adicionar antes do último filho
newGuest.prepend(guestSurname)

// Bloquear
input.setAttribute("disabled", true)

// Mudar o tipo
input.setAttribute("type", "file") // Transforma em arquivo

// Remover atributo
input.removeAttribute("id") // Tira o ID

// Eventos
window.addEventListener("load", () => {
  console.log("A página foi carregada")
})

addEventListener("click", (event) => {
  event.preventDefault () // Previne o comportamento padrão. Por exemplo: botão type submit dentro de formulário recarrega a página porque entende que quer enviar informações.

  console.log(event) // Retorna todas as informações do evento.

  console.log(event.target) // Retorna o elemento clicado.

  console.log(event.target.textContent) // Retorna o conteúdo do texto do elemento clicado.
})

// Adicionar evento em elemento específico
URL.addEventListener("scroll", () => {
  if (URL.scrollTop > 300) {
    console.log("Fim da lista")

    URL.scrollTo({
      top: 0,
      behavior: "smooth", 
    })
  }
})

const button = document.querySelector("button")
button.addEventListener("click", (event) => {
  event.preventDefault()

  console.log("clicou")
})

// Evento sem click
form.onsubmit = (event) => { // Vai entender mesmo se for pelo enter, sem precisar clicar pelo mouse. Mas, se tiver mais de um, vai funcionar só o último.
  event.preventDefault()
  console.log("Você fez submit no formulário #1")
}

form.addEventListener("submit", (event) => { // Se tiver mais de um, todos vão funcionar.
  event.preventDefault()
  console.log("Você fez submit no formulário #2")
})

// Capturar qualquer tipo de tecla pressionada
input.addEventListener("keydown", (event) => {
  console.log(event)
  console.log(event.key) // Vai mostrar só as teclas
})

// Capturar teclas do tipo caractere (letras, números, pontos, espaço, etc.)
input.addEventListener("keypress", (event) => { // Ignora ctrl, shift...
  console.log(event.key)
})

// Capturar quando mudar
input.onchange = () => {
  console.log("O input mudou")
}

// Capturar apenas letras e ignorar números com regex
input.addEventListener("input", () => {
  const value = input.value

  const regex = /\D+/g // Identifica apenas letras

  console.log(value.match(regex)) // Verifica se o valor do input confere com o padrão (regex), e se sim, retorna o que conferir.
  
  // Testar se atende o padrão
  const isValid = regex.test(value) // Mesmo que tenha número, se tiver letra vai identificar como válido
  console.log(isValid)
})

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const regex = /\D+/g // Identifica apenas letras
  const value = input.value.replace(regex, "X") // Vai procurar em todos os lugares onde o padrão é atendido e substituirá por X. Para trocar por nada, aspas sem espaço ""
  
  // Outra forma de testar
  if (!regex.test(value)) { // Vai procurar o contrário. Se tiver só números, vai aparecer a mensagem.
    alert("Padrão não encontrado") // Exibe mensagem
  }

  console.log(value)
})

form.onsubmit = (event) => {
  event.preventDefault()

  const value = input.value
  const hasNumberRegex = /\d+/g // Verifica se tem número

  if (hasNumberRegex.test(value)) {
    alert("Contém número")
  } else {
    alert("Enviado")
  }
}