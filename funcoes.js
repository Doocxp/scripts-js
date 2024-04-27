// let x = "";
// console.log(x);
// x = "oi";

// 1) declara a função

function imprimeTexto(texto) {
    console.log(texto);
 }
 
 // 2) executa a função (1 ou + vezes)
 
 imprimeTexto("oi");
 imprimeTexto("outro texto");
 
 function imprimeTexto(texto) {
   console.log(texto);
 }

 imprimeTexto("oi");
 imprimeTexto(soma());
 
 function soma() {
   return 2 + 2;
 }
 
 // console.log(soma())
 
 function soma(num1, num2) {
  return num1 + num2;
 }
 
 console.log(soma(5, 5))

 const usuarioLogin = (pessoa) => {
  let array = []
  for( i = 0; i < 90000; i++){
    array.push(i)
  }
  return `${pessoa} logou com sucesso no sistema!`
}

console.log(usuarioLogin("Luiz"))