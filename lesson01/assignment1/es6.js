// Doubles form
const doublesForm = document.querySelector('#doubles')

doublesForm.addEventListener('submit', function(event){
	event.preventDefault()

// Handle doubles input
  const userInput = document.querySelector('#doubles .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)

// Handle doubles output
  if(!isNaN(userNumber)){
		const text = document.createTextNode(`${userNumber} * 2 = ${userNumber * 2}`)
		const p = document.createElement('p')
		p.appendChild(text)
		this.appendChild(p)

}});


//Cube root form
const cubeForm = document.querySelector('#cubeRoot')

cubeForm.addEventListener('submit', function(event){
	event.preventDefault()

// Handle cube root input
  const userInput = document.querySelector('#cubeRoot .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)

// Handle cube root output
  if(!isNaN(userNumber)){
		document.getElementById("cubeOutput").innerHTML = "The cube root of " + userNumber + " is " + Math.cbrt(userNumber);

}});


//Luck form
const luckForm = document.querySelector('#luck')

luckForm.addEventListener('submit', function(event){
	event.preventDefault()

// Handle luck input
  const userInput = document.querySelector('#luck .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)

// Handle luck output
  if(!isNaN(userNumber)){
		let luckyNumbers = [1, 3, 7, 8, 9, 13, 15, 21, 25, 31, 33, 37, 43, 49, 51, 63, 67, 69, 73, 75, 79, 87, 93, 99];
		document.getElementById("luckOutput").innerHTML = luckyNumbers.includes(userNumber);
}});


//Cats form
const catForm = document.querySelector('#cats')

catForm.addEventListener('submit', function(event){
	event.preventDefault()

// Handle cats input
  const userInput = document.querySelector('#cats .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)

// Handle cats output
  if(!isNaN(userNumber)){

		let catsArray = [4, 3, 2, 1, 17];
		let moreCats = catsArray.find(myFunction);

		document.getElementById("catOutput").innerHTML = "Wow, only " + userNumber + "? Why not " + moreCats + " more?";

		function myFunction(value, index, array) {
		  return value < 4;
		}
 }});
