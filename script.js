
 
let pulsante= document.getElementById('pulsante')

pulsante.addEventListener('click', function(){

for( let i = 1; i < 101; i++){
  let div = document.createElement('div');
  div.innerHTML = i;
  div.classList.add('square')
  div.addEventListener('click', function(){
    div.classList.add('squareclick')
  })
  document.getElementById('container').appendChild(div);
  }
},{once: true})



let number = []
while(number.lenght < 16 ){
  const randomNumber= Math.floor(Math.random() * 100)+1;
  console.log(number.includes(randomNumber));
  if(!number.includes){
    number.push(randomNumber);
  }
}
console.log(number);
console.log(randomNumber)
