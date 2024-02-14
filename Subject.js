import Question from "./Question";

function Subject(props){
    return(
        <div>
            <Question
                qnum = "1"
                question = "2+9"
                option1 = "11"
                option2 = "29"
                option3 = "5"
                option4 = "33"
                alpha1='A'
                alpha2='B'
                alpha3='C'
                alpha4='D'
            />

<Question
                qnum = "2"
                question = "6+7"
                option1 = "11"
                option2 = "13"
                option3 = "67"
                option4 = "76"
                alpha1='A'
                alpha2='B'
                alpha3='C'
                alpha4='D'
            />


<Question
                qnum = "3"
                question = "9+3"
                option1 = "12"
                option2 = "11"
                option3 = "93"
                option4 = "13"
                alpha1='A'
                alpha2='B'
                alpha3='C'
                alpha4='D'
            />

<Question
                qnum = "4"
                question = "1+3"
                option1 = "4"
                option2 = "2"
                option3 = "13"
                option4 = "31"
                alpha1='A'
                alpha2='B'
                alpha3='C'
                alpha4='D'
            />
        </div>
    )
}

export default Subject;