
var questions = [ 
	{
		question: "Who invented the Computer?",
		answer: "Charles Babbage",
		description: "We could argue that the first computer was the abacus or its descendant, the slide rule, invented by William Oughtred in 1622. But the first computer resembling today's modern machines was the Analytical Engine, a device conceived and designed by British mathematician Charles Babbage between 1833 and 1871."
	},
	{
		question: "When was the World Wide Web invented?",
		answer: "1990",
		description: "ARPANET adopted TCP/IP on January 1, 1983, and from there researchers began to assemble the network of networks that became the modern Internet. The online world then took on a more recognizable form in 1990, when computer scientist Tim Berners-Lee invented the World Wide Web."
	},
	{
		question: "When was the first computer invented?",
		answer: "1946",
		description: "The ENIAC was invented by J. Presper Eckert and John Mauchly at the University of Pennsylvania and began construction in 1943 and was not completed until 1946. It occupied about 1,800 square feet and used about 18,000 vacuum tubes, weighing almost 50 tons."
	},
	{
		question: "How many Google searches every second?",
		answer: "40,000",
		description: "Google now processes over 40,000 search queries every second on average, which translates to over 3.5 billion searches per day and 1.2 trillion searches per year worldwide."
	},
	{
		question: "In 2011, how much content was available to pursue on online.",
		answer: "2 zettabytes",
		description: "There is 9 times more content available to peruse online than there was 5 years ago. It is all thanks to user-generated content, such as photo shares, video uploads, tweets and articles. As of 2011, the content totaled 2 zettabytes."
	},
	{
		question: "How many hours of video are uploaded to YouTube per minute?",
		answer: "100",
		description: "YouTube is growing quickly. Now, more than 100 hours of video are uploaded to it per minute, up from nothing six years ago."
	},
	{
		question: "How many times on average does someone check their cell phone?",
		answer: 150,
		description: "The average mobile phone user reaches for his or her device 150 times per day. A good portion of the time, they're just checking the time."
	},
	{
		question: "How many people do 1st and 2nd generation Americans employ?",
		answer: "1.3 million",
		description:"Why we should all care about immigration laws: 1st and 2nd generation Americans employ 1.3 million people in the US and have founded more than half of the top 25 tech companies."
	},
	{
		question: "What was the first registed domain name?",
		answer: "symbolics.com",
		description: "The first and oldest registered domain name on the internet is symbolics.com. It is still live and exists largely as a historic site."
	},
	{
		question: "How many estimated devices will be connected to the internet by 2017?",
		answer: "7 trillion",
		description: "By 2017, 7 trillion devices will be connected to the internet. That is roughly 1,000 devices for each person alive."
	}

]

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
			questionSpot.className = 'correctQuestion'
			correct++
			d = questions[i].description	
			document.getElementById('description' + [i]).textContent = d
		} else {
			questionSpot.className = 'incorrectQuestion'
			incorrect++
			d = questions[i].description	
			document.getElementById('description' + [i]).textContent = d
		}
	}

	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}




