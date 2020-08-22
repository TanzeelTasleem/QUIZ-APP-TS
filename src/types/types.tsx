import { fetchQuiz } from "../services/quiz_services"

export type quiz = {
 question: string , 
 correct_answer: string,
 answers : string[],
}
export type ques = {
    category : string,
    correct_answer : string,
    question : string,
    incorrect_answers: string[],
    type: string,
    difficulty: string
}

export type Question=
    {
        question : quiz[]
    }
export type timerProps ={
    count: number
}