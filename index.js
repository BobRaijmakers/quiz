import got from "got";
import prompt from "prompt";

main();

async function main() {
    // Counters
    let wrongAnswerCounter = 0;
    let correctAnswerCounter = 0;

    const quizObject = await getQuizObject();

    if (quizObject.response_code === 0) {
        quizObject.results.forEach((question, index) => askQuestion(question, index));
    }
}

async function getQuizObject() {
    console.log("Getting ready for the quiz");
    const quizObject = await got("https://opentdb.com/api.php?amount=10").json();
    return quizObject;
}

async function askQuestion(question, index) {
    // Pool correct and incorrect answer(s)
    let answersObject = {
        
    }
    let answers = question.incorrect_answers;
    answers.push(question.correct_answer);

    // Ask question
    console.log(`Here comes question number ${index + 1} from the ${question.category.toLowerCase()} category`)
    console.log(question.question);

    // Show answers
    console.log("Choose from the following options")
    answers.forEach(choice => console.log(choice));

    
}