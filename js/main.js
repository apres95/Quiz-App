var questions = [ 
	{
		question: "How many times have you hugged someone today?",
		answer: 
		// answer: function() {
		// 	var guess = document.getElementById('answer' + [i]).value
		// 	if(answer > 4) {
  //      			return questions[0].answer == guess
	 //    } else {
	 //    		return questions[0].answer !== guess
	 //    	}
		// }
	},
	{
		question: "What house was Harry Potter in?",
		answer: "gryffindor"
	},
	{
		question: "What's 10 / 5?",
		answer: 2
	},
	{
		question: "Finish this sentence: winter is ______?",
		answer: "coming"
	},
	{
		question: "Who is the youngest Lannister sibling",
		answer: "tyrion"
	},
	{
		question: "Where does Jorah Mormont's family live?",
		answer: "bear island"
	},
	{
		question: "How many dragons does Daenerys Targaryen have?",
		answer: 3
	},
	{
		question: "How many hands does Jaime Lannister have after book 3?",
		answer: 1
	},
	{
		question: "Did Tyrion commit regicide or patricide?",
		answer: "both"
	},
	{
		question: "How many Direwolves do the starks find?",
		answer: 6
	}

]
questions.b = 4;

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}








