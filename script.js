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

// Mostra o tipo do objeto
const obj = {} // Cria um objeto vazio
console.log (typeof obj)

// Cria um objeto com propriedades e métodos (funções)
const user = {
  email: "larissa@email.com", // Para atribuir valor dentro do objeto, usa-se dois pontos ":"
  age: 18,
  name: { // Pode ter um objeto dentro de outro, por exemplo, no caso de propriedades compostas. É a chamada Estrutura de Objeto Aninhado
    first_name: "Larissa" // Para criar nomes de variáveis em objetos, usa-se snake_case para separar, ao invés do camelCase
    surname: "Nakamura",
  }, // A vírgula separa as propriedades
  address: {
    street: "Rua X",
    number: 12,
    city: "Marília",
    postal_code: "12345-678"
  },
  message: () => { // ou function(){ }
    console.log("Olá")
  }, 
}

// Acessa propriedades e métodos por meio da notação de ponto "."
console.log(user.name)

// Acessa propriedades de objetos por meio da notação de ponto "."
console.log(user.name.first_name)

// Executa o método do objeto por meio da notação de ponto "."
user.message()

// Acessa propriedades e métodos por meio da notação de colchetes "[]"
console.log(user["email"])

// Acessa propriedades de objetos por meio da notação de colchetes "[]"
console.log(user["name"]["first_name"])

// Executa o método do objeto por meio da notação de colchetes "[]"
user["message"] ()

// Acessa propriedades dinamicamente
const user = {
  name: "Larissa",
  message: function() {
    console.log(`Olá, ${user.name}`)
  },
}

user.message() 

const user = {
  name: "Larissa",
  message: function() {
    console.log(`Olá, ${this.name}`) // O this faz referência ao próprio objeto, ou seja, user. Assim, se o nome do usuário mudar, a mensagem continuará funcionando.
  },
}

// Cria objeto
const product = {
  name: "Teclado",
  quantity: 100,
}

console.log(product.name) // Acessa a propriedade do objeto.

// Atualiza o valor de uma propriedade
product.quantity = 90

console.log(product.quantity)

// Optional Chaining
console.log(user?.address.street) // Se a propriedade não existir, retorna undefined, ao invés de dar erro.

user.message?() // Se a função existir, executa. Se não, não faz nada.

// Operador de coalescência nula
let content = null
console.log(content ?? "Conteúdo padrão") // Se content for null ou undefined, exibe o conteúdo da direita. Se tiver conteúdo, retorna o valor de content.

const user = {
  name: "Larissa",
  picture: undefined,
}

console.log(user.picture ?? "default.png") // Se tiver imagem definida, retorna a imagem. Se não, retorna a imagem padrão.

// Função construtora
function createProduct(name) {
  const product = {}

  product.name = name
  product.message = function() {
    console.log(`O nome do produto é ${this.name}`)
  }

  return product
}

const product1 = new createProduct("Teclado") // O new cria um novo objeto utilizando a estrutura da função construtora.
console.log(product1.name)
product1.details() // Com a mesma função construtora (estrutura), é possível criar objetos diferentes. Por isso são cópias, embora os objetos sejam diferentes.

// Exemplos de funções construtoras disponíveis no JavaScript
let myName = new String("Larissa") // Cria um objeto do tipo String.
console.log(myName) // String {"Larissa"}

let price = "40.6" replace(".", "") // Substitui o ponto por nada, ou seja, remove o ponto.
console.log(price) // 406

let date = new Date("2026-05-07") // Cria um objeto do tipo data.
console.log(date) // Thu May 07 2026 00:00:00 GMT-0300 (Horário Padrão de Brasília)

// Manipulação de textos

let message = "Estou estudando os fundamentos do Javascript." // Conteúdo da variável chamada "message".

console.log(message)

// Exibe o texto em maiúsculo
console.log(message.toUpperCase()) // Não muda o conteúdo, só altera a exibição.

// Exibe o texto em minúsculo
console.log(message.toLowerCase())

// Identifica o comprimento de uma string
console.log(message.length) // Conta o espaço também. 

// Valida caracteres
let password = "12345"

if (password.length < 6) {
  console.log("A senha deve ter ao menos 6 caracteres")
}

// Identifica quantos dígitos tem um número
let value = 12345

console.log(String(value).length) // Se usasse o typeof apenas no console.log(typeof value) , apareceria que é um number - e a propriedade lenght só existe para string. Por isso faz a conversão.
console.log(value.toString().length) // Método que converte para texto string.

// Substitui parte de um texto
console.log(message.replace("Javascript", "HTML")) // O método replace tem dois parâmetros string (o que quer substituir e pelo o quê quer substituir). Não altera o conteúdo.

// Extrai uma parte da string (start, end)
console.log(message.slice(6, 30))

// Extrai uma parte da string de trás para frente
console.log(message.slice(-11))

// Remove espaços no início e no final da string
let textWithSpace = "     Texto de exemplo    "
console.log(textWithSpace.length) // Quantidade de caracteres

console.log(textWithSpace.trim()) // Método que remove os espaços.
console.log(textWithSpace.trim().length) // Quantidade de caracteres diminuída.

// O padStart preenche a string do início
const creditCard = "1234567812341226"
const lastDigits = creditCard.slice(-4) // Pega os últimos 4 dígitos.
console.log(lastDigits) // 1226
const maskedNumber = lastDigits.padStart(creditCard.length, "X") // Preenche o restante da string com X, até atingir o comprimento total do número do cartão.
console.log(maskedNumber) // XXXXXXXXXXXX1226

// O padEnd preenche a string do final
const number = "123"
console.log(number.padEnd(10, "#")) // Preenche o restante da string com #, até atingir o comprimento total de 10 caracteres. Resultado: 123########

// Separa a string
let text = "Estudar, Aprender, Praticar"

let separate = text.split(",")
console.log(separate) // Retorna um array com os elementos separados.

// Une a string
let joined = separate.join(" - ") // Junta os elementos do array em uma string, usando " - " como separador.
console.log(joined) // Estudar - Aprender - Praticar

// Obtém a posição da palavra
let message = "Estou estudando os fundamentos do Javascript."
console.log(message.indexOf("fundamentos")) // Retorna a posição da palavra, ou seja, o número do caractere onde começa a palavra. 

// Se não encontrar, retorna -1
console.log(message.indexOf("javascript")) // -1

// Verifica se a palavra existe na string
console.log(message.includes("Javascript")) // Retorna true ou false, dependendo se a palavra existe ou não. É case sensitive, ou seja, diferencia maiúscula de minúscula.

console.log(message.toLowerCase().includes("javascript")) // Para ignorar a diferença entre maiúscula e minúscula, pode converter tudo para minúscula antes de verificar.

// Cria array com construtor
const newArray = new Array() // Cria um array vazio.

// Cria array com 10 posições vazias
const available = new Array(10)
console.log(available) // [empty × 10]

// Mostra a quantidade de itens do array
let fruits = ["Apple", "Banana", "Orange"]
console.log(fruits.length) // 3

// Acessa o item do array pelo índice (index)
console.log(fruits[0]) // Apple (o índice começa em 0).

// Obtém dinamicamente o último item do array
console.log(fruits[fruits.length - 1]) // Orange (o índice do último item é sempre a quantidade total de itens menos 1).

// Verifica se o item existe no array
console.log(fruits.includes("Banana")) // true

// Cria um array com os nomes separando pelo espaço
let fullName = "Larissa Nakamura"
console.log(fullName.split(" ")) // ["Larissa", "Nakamura"]

// Cria um array separando cada letra
console.log(Array.from(fullName)) // ["L", "a", "r", "i", "s", "s", "a", " ", "N", "a", "k", "a", "m", "u", "r", "a"]

// Adiciona um item no final do array
fruits.push("Grapes")
console.log(fruits) // ["Apple", "Banana", "Orange", "Grapes"]

// Adiciona um item no início do array
fruits.unshift("Strawberry")
console.log(fruits) // ["Strawberry", "Apple", "Banana", "Orange", "Grapes"]

// Remove o primeiro item do array
fruits.shift()
console.log(fruits) // ["Apple", "Banana", "Orange", "Grapes"]

// Remove o último item do array
fruits.pop()
console.log(fruits) // ["Apple", "Banana", "Orange"]

// Encontra e retorna o índice do elemento no array
let position = fruits.indexOf("Banana")
console.log(position) // 1

// Remove um item específico do array usando o índice
fruits.splice(position, 1) // O primeiro parâmetro é o índice onde começa a remoção, e o segundo é a quantidade de itens a remover.
console.log(fruits) // ["Apple", "Orange"]