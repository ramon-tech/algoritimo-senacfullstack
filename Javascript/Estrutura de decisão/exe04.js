let letra = prompt("Digite uma letra").toLowerCase();

if (letra.charCodeAt(0) >= 97 && letra.charCodeAt(0) <= 122) {
  let ehVogal = false;

  if (letra.charCodeAt(0) === 97 ||
      letra.charCodeAt(0) === 101 || 
      letra.charCodeAt(0) === 105 || 
      letra.charCodeAt(0) === 111 || 
      letra.charCodeAt(0) === 117) {
    ehVogal = true;
  }

  if (ehVogal) {
    alert("A letra é uma vogal");
  } else {
    alert("A letra é uma consoante");
  }
} else {
  alert("Não é uma letra do alfabeto");
}
