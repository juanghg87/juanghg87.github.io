// encriptado
let encryptedText = "";
let dencryptedText = "";
let regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
let regex2 = /^[a-zA-Z\u00C0-\u017F]+$/g;
let upperCase = /[A-Z]/g;
let vocals = /[ieouaIEOUA]/g;
const encrypterBtn = document.querySelector("#encrypterBtn");
const decryptorBtn = document.querySelector('#decryptorBtn');
const copy = document.querySelector ('.copiar2');
const copy2 = document.querySelector ('.copiar');

function visualAlert(titulo, mensaje, error){
 swal(titulo, mensaje, error, {
  button: 'Entendido'
 })
}

if (encrypterBtn) {
  encrypterBtn.addEventListener("click", () => {

    const textArea1 = document.querySelector("#campo1").value;

    if(textArea1.length == 0){
      visualAlert ("Vacío","No se ha escrito nada para encriptar", "warning", 'Entendido');
    } else if (upperCase.test(textArea1)){
      visualAlert ('Mayúsculas', 'No se admiten mayúsculas', 'warning', 'Entendido');
    } else if (regex2.test (textArea1)){
      visualAlert ('Acentos', 'No ingrese acentos como tildes.', 'warning', 'Entendido');
    } else if (regex.test(textArea1)){
      visualAlert ('Caracteres Especiales', 'No ingrese caracteres especiales', 'warning', 'Entendido');
    } else if (vocals.test(textArea1) == 0) { 
      visualAlert ('Sin Vocales',  'El texto no contiene vocales', 'warning', 'Entendido');
    } else if (
      textArea1.includes("a") ||
      textArea1.includes("e") ||
      textArea1.includes("i") ||
      textArea1.includes("o") ||
      textArea1.includes("u")
    ) {
      let encryptedText = textArea1.replace(/[ieoua]/g, function(match) {
        switch(match) {
          case 'i': return 'imes';
          case 'e': return 'enter';
          case 'o': return 'ober';
          case 'u': return 'ufat';
          case 'a': return 'ai';
        }
    });
      document.getElementById("resultado").innerHTML = encryptedText;
    }
  });
}

//botones de copiado

 copyText ();
 function copyText (){
  
   copy.addEventListener ('click', (e) => {
    e.preventDefault();
     let textArea1 = document.getElementById("campo1").value;
     if (textArea1.length == 0){
      visualAlert ("Vacío","No hay nada que copiar", "warning", 'Entendido')
     } else {
      textArea1.select();
      document.execCommand("copy");
     }
    })
 }

 copyText2 ();
 function copyText2 (){
   copy2.addEventListener ('click', (e) => {
    e.preventDefault();
     let textArea2 = document.getElementById("resultado").value;
     if (textArea2.length == 0){
      visualAlert ("Vacío","No hay nada que copiar", "warning", 'Entendido')
     } else {
      textArea2.select();
      document.execCommand("copy");
     }
    })
 }

 // desencriptado

decryptorBtn.addEventListener ('click', () => {

  let textArea2 = document.getElementById("resultado").value;
  let dencryptedText = textArea2
      .replace(/imes/gi, 'i')
      .replace(/enter/gi, 'e')
      .replace(/ober/gi, 'o')
      .replace(/ufat/gi, 'u')
      .replace(/ai/gi, 'a')

  if (textArea2.length == 0){
    visualAlert("Vacío","No se ha escrito nada para encriptar", "warning", 'Entendido');
  } else if(upperCase.test(textArea2)){
    visualAlert ('Mayúsculas', 'No se admiten mayúsculas', 'warning', 'Entendido');
  } else if(regex2.test (textArea2)){
    visualAlert ('Acentos', 'No ingrese acentos como tildes.', 'warning', 'Entendido');
  } else if(regex.test(textArea2)){
    visualAlert ('Caracteres Especiales', 'No ingrese caracteres especiales', 'warning', 'Entendido');
  } else if(vocals.test(textArea2) == 0){
    visualAlert ('Sin Vocales',  'El texto no contiene vocales', 'warning', 'Entendido');
  } else {
    document.getElementById("campo1").innerHTML = dencryptedText;
  }
})  