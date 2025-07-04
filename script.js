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