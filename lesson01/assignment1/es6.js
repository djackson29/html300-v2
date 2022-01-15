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


//Dogs form
const dogForm = document.querySelector('#dogs')

dogForm.addEventListener('submit', function(event){
	event.preventDefault()

// Handle dogs input
  const userInput = document.querySelector('#dogs .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)

// Handle dogs output
  if(!isNaN(userNumber)){



}});


//Monkeys form
const monkeyForm = document.querySelector('#monkeys')

monkeyForm.addEventListener('submit', function(event){
	event.preventDefault()

// Handle monkeys input
  const userInput = document.querySelector('#monkeys .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)

// Handle monkeys output
  if(!isNaN(userNumber)){



}});




// Lions form
const lionForm = document.querySelector('#lions')

lionForm.addEventListener('submit', function(event){
	event.preventDefault()

// Handle lions input
  const userInput = document.querySelector('#lions .input').value
  const userNumber = parseInt(userInput)
  console.log(userNumber)

// Handle lions output
  if(!isNaN(userNumber)){
		const text = document.createTextNode(`${userNumber * 2} lions! Just kidding, ${userNumber} is the perfect amount!`)
		const p = document.createElement('p')
		p.appendChild(text)
		this.appendChild(p)

}});









//const text = document.createTextNode(`${userNumber * moreCats} cats? Wow!`)
//function myFunction(value, index, array) {
//  txt += value + "<br>";


//let idealCats = numbers.find(myFunction)
//document.getElementById("demo").innerHTML = "a much more ideal number of cats is " + idealCats;
//function myFunction(value){
//	return value > 18;
//}
