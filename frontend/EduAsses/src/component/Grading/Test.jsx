import { useState } from 'react';

function Question(props) {
    return (
        <div>
            <h4>{props.question}</h4>
            <input type="text" name="question" />
        </div>
    )
}

export default function Test(props) {

    const [questions, setQuestions] = useState(["What is your name?", "What is your age?", "Why are you?"])

    //TODO
    /* 
        Create Questions form notes uploaded by student by using 
        Summary created by LLM
    */


    const questionList = questions.map((question, index) => {
        return <Question key={index} question={question} />
    })

    return (
        <div>

            {questionList}
        </div>
    )
}