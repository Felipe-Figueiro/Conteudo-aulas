let nota1 =  8.5
let nota2 =  6.3
let nota3 =  5.5

let media = (nota1 + nota2 + nota3) / 3
console.log ("Notas das Avaliacoes")
console.log ("Avaliação 1 = " + nota1)
console.log ("Avaliação 2 = " + nota2)
console.log ("Avaliação 3 = " + nota3)

if (media >= 7)
 { console.log ("Condicão: Aprovado!")}
else
 { console.log ("Condicao: Reprovado!")}

console.log ("Media do bloco: " + media.toFixed(2))