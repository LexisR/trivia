fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium')
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data)=>{
  console.log(data)
});















//funcion para sacar las respuestas incorrectas
let answersArray = [];
function parseAnswers(incorrect_answers) {
  for (let i = 0; i < incorrect_answers.length; i++) {
    returnArray.push(incorrect_answers[i]);
  }
  return console.log(answersArray);
}

