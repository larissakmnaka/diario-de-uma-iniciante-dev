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

// Executa um bloco de código enquanto a condição seja verdadeira
let execute = true
while (execute) {
  let responde = window.prompt("Deseja continuar? 1 (sim) ou 2 (não)") // Exibe uma caixa de diálogo para o usuário inserir uma resposta.

  if (responde === "2") {
    execute = false
  }
}

console.log("Fim do loop")

// Repete a condição enquanto for verdadeira, mas a verificação é feita depois da execução do código, ou seja, o código é executado pelo menos uma vez.
let value = 0
do {
  value++
  console.log(value)
} while (value < 5) // O código vai ser executado enquanto o valor for menor que 5. Mesmo quando chegar em 5, o código já terá sido executado, por isso o resultado é de 1 a 5.

console.log("Fim do loop")

// Repete a condição enquanto for verdadeira. Possui variável de controle, condição de parada e incremento ou decremento da variável de controle.
for (let i = 0; i < 5; i++) { // O código vai ser executado enquanto o valor de i for menor que 5. O i++ é o incremento, ou seja, a cada execução do código, o valor de i aumenta em 1.
  console.log(i) // O resultado é de 0 a 4, porque o código é executado antes da verificação da condição. Quando chegar em 5, a condição já não será mais verdadeira, e o loop vai parar.
}

// Exemplos de tabuada
console.log(`7x0 = ${7*0}`)
console.log(`7x1 = ${7*1}`)
console.log(`7x2 = ${7*2}`)
console.log(`7x3 = ${7*3}`)
console.log(`7x4 = ${7*4}`)
console.log(`7x5 = ${7*5}`)
console.log(`7x6 = ${7*6}`)
console.log(`7x7 = ${7*7}`)
console.log(`7x8 = ${7*8}`)
console.log(`7x9 = ${7*9}`)
console.log(`7x10 = ${7*10}`)

let number = 7
for (let i = 0; i <= 10; i++) {
  console.log(`${number}x${i} = ${number*i}`)
}

// Executa iterações a partir de um objeto e percorre as propriedades
let user = {
  name: "Larissa",
  surname: "Nakamura",
  email: "larissa@email.com",
}

for (let property in user) { 
  console.log(property) // Exibe o nome da propriedade, não o conteúdo.
  console.log(user[property]) // Exibe o conteúdo da propriedade. Para acessar o valor, é necessário usar a notação de colchetes, porque a notação de ponto não funciona com variáveis.
}

// Percorre os índices do array e exibe cada elemento pelo índice
let fruits = ["Apple", "Banana", "Orange"]

for (let index in fruits) {
  console.log(index) // Exibe o índice do elemento.
  console.log(fruits[index]) // Exibe o elemento do array correspondente ao índice.
}

// Itera sobre valores de um objeto iterável, como o array
let students = ["Maria", "João", "Pedro"]

for (let student of students) {
  console.log(student) // Exibe o valor do elemento, ou seja, o nome do estudante. Diferente do for...in, o for...of não exibe o índice, apenas o valor.
}

// Para um objeto não iterável, pode transformar em array
let user = [
  {
    name: "Larissa",
    surname: "Nakamura",
    email: "larissa@email.com",
  },
]

for (let value of user) {
  console.log(value) // Pode acessar console.log(value.name) para acessar o nome, por exemplo.
}

// Encerra a execução da repetição ou switch para seguir para a instrução seguinte
let option = 3

switch (option) {
  case 1:
    console.log("Cadastrar")
    break // Sem o break, executaria todos os cases válidos. O break é necessário para interromper a execução do switch após encontrar o case correspondente.
  case 2:
    console.log("Atualizar")
    break
  case 3:
    console.log("Remover")
    break
  default:
    console.log("Opção inválida")
    break
}

// Finaliza a repretição
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break // O loop vai parar quando i for igual a 5, ou seja, o resultado será de 0 a 4.
  }

  console.log(i)
}

// Encerra/pula a iteração atual e continua para a próxima
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue // O loop vai pular a iteração quando i for igual a 5, ou seja, o resultado será de 0 a 4 e de 6 a 9.
  }
  console.log(i)
}

// Exibe data e hora atual
console.log(new Date()) // Retorna a data e hora atual do sistema.

// Exibe a data e hora de referência (considera o fuso)
console.log(new Date(0)) // Retorna a data e hora de referência (01/01/1970 00:00:00 GMT).

// Exibe o número de milissegundos desde a data de referência
console.log(new Date().getTime()) // Retorna o número de milissegundos desde a data de referência (01/01/1970 00:00:00 GMT) até a data e hora atual do sistema.

// Define data com ano, mês (0-11), e dia
console.log(new Date(2026, 6, 12)) // Retorna a data definida (12/07/2026 00:00:00 GMT).

// Define data com ano, mês (0-11), dia, hora, minuto e segundo
console.log(new Date(2026, 6, 12, 15, 30, 0)) // Retorna a data e hora definida (12/07/2026 15:30:0 GMT).

// Define data e hora com string
console.log(new Date("2026-07-12T15:30:00")) // Retorna a data e hora definida (12/07/2026 15:30:0 GMT).

console.log(new Date("July 12, 2026 15:30:00")) // Retorna a data e hora definida (12/07/2026 15:30:0 GMT).

// Retorna o dia da semana de 0 a 6 (domingo é 0)
console.log(date.getDay()) 

// Retorna o dia do mês de 1 a 31
console.log(date.getDate())

// Retorna o mês de 0 a 11 (janeiro é 0)
console.log(date.getMonth() +1)

// Retorna o ano com 4 dígitos
console.log(date.getFullYear())

// Retorna a hora de 0 a 23
console.log(date.getHours())

// Retorna os minutos de 0 a 59
console.log(date.getMinutes())

// Retorna os segundos de 0 a 59
console.log(date.getSeconds())

// Modifica o ano
date.setFullYear(2025) // Modifica o ano para 2025.

// Modifica o mês (janeiro é 0)
date.setMonth(0) // Modifica o mês para janeiro.

// Modifica o dia do mês
date.setDate(15) // Modifica o dia do mês para 15.

// Modifica a hora
date.setHours(10) // Modifica a hora para 10.

// Modifica os minutos
date.setMinutes(30) // Modifica os minutos para 30.

// Modifica os segundos
date.setSeconds(45) // Modifica os segundos para 45.

// Formata o dia para sempre ter 2 dígitos
console.log(date.getDate().toString().padStart(2, "0")) // Se o dia for menor que 10, adiciona um 0 na frente. Exemplo: 05.

// Formata o mês para sempre ter 2 dígitos
console.log((date.getMonth() + 1).toString().padStart(2, "0")) // Se o mês for menor que 10, adiciona um 0 na frente. Exemplo: 05.

// Retorna somente a data
console.log(date.toDateString()) // Retorna a data no formato "Sat Jul 12 2025".

// Retorna somente a hora
console.log(date.toTimeString()) // Retorna a hora no formato "10:30:45 GMT-0300 (Horário Padrão de Brasília)".

// Exibe a data e hora no formato local
console.log(date.toLocaleString()) // Retorna a data e hora no formato local, por exemplo, "12/07/2025 10:30:45". 
console.log(date.toLocaleDateString()) // Retorna a data no formato local, por exemplo, "12/07/2025".
console.log(date.toLocaleTimeString()) // Retorna a hora no formato local, por exemplo, "10:30:45".

// Exibe a data e hora no formato escolhido
console.log(date.toLocaleDateString("en")) // Retorna a data no formato inglês, por exemplo, "07/12/2025".
console.log(date.toLocaleTimeString("en")) // Retorna a hora no formato inglês, por exemplo, "10:30:45 AM".

// Exibe a data e hora em styles diferentes
console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "short", // Exibe a data no formato curto, por exemplo, "12/07/2025".
  })
)

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "long", // Exibe a data por extenso, por exemplo, "12 de julho de 2025".
  })
)

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "medium", // Exibe a data no formato médio, por exemplo, "12 de jul de 2025".
  })
)

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "full", // Exibe a data completa, por exemplo, "sábado, 12 de julho de 2025".
  })
)

console.log(
  date.toLocaleString("pt-BR", {
    day: "2-digit", // Exibe o dia com 2 dígitos, por exemplo, "12".
    month: "2-digit", 
    hour: "2-digit", 
    minute: "2-digit", 
  })
)

// Outro exemplo de manipulação
let amount = 12.5
console.log(
  amount.toLocaleString("pt-BR", { 
    style: "currency", 
    currency: "BRL", // Retorna o valor formatado como moeda brasileira, por exemplo, "R$ 12,50".
  })) 

  // Obtém informações da localidade
  const correntLocale = Intl.DateTimeFormat().resolvedOptions() // Intl é a API de Internacionalização do ECMAScript.
  console.log(correntLocale) // Retorna informações da localidade, como idioma, país, fuso horário, etc.

  // Obtém a diferença em minutos do timezone local em relação ao UTC (Coordinated Universal Time)
  console.log(date.getTimezoneOffset()) // Retorna a diferença em minutos do timezone local em relação ao UTC. Exemplo: -180 significa que o timezone local está 3 horas atrás do UTC.

  // Obtém a diferença em horas do timezone local em relação ao UTC
  console.log(date.getTimezoneOffset() / 60) // Retorna a diferença em horas do timezone local em relação ao UTC. Exemplo: -3 significa que o timezone local está 3 horas atrás do UTC.

