/* Acá va tu código */
// botones
const buttomGoLockCipher = document.getElementById('btmGo');
const buttomCipher = document.getElementById('btmCipher');
const buttomDecipher = document.getElementById('btmDecipher');
// paginas 
const landingPage = document.getElementById('landingPage');
const genealPage = document.getElementById('general');

// resultado 

const resultado = document.getElementById('result');

// interaccion cambio de paginas 
buttomGoLockCipher.addEventListener('click', ()=>{
landingPage.style.display = 'none';
generalPage.style.display = 'block';
})

buttomCipher.addEventListener('click', ()=>{
const stringText = document.getElementById('string').value;
const offsetNum = document.getElementById('offset').value;
let resultado = cipher.encode(offsetNum,stringText);
resultado.innerHTML = (offsetNum,stringText); 
})