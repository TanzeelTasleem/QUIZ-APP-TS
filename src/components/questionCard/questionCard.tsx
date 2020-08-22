import React, { useState, FormEvent } from "react";
import { Question } from "../../types/types";
import "./questionCard.css";
import { Quiztimer } from "../Timer/quizTimer";
import { Start } from "../quizStart/start";

export const QuestionCard: React.FC<Question> = ({ question }) => {
  const [selectedAns, setSelectedAns] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [count, setCount] = useState<number>(-1);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (selectedAns === question[count].correct_answer) {
      setScore(score + 10);
    }

    setCount(count + 1);
  };

  if(count === -1 ) {
    return(
      <div className="main">
      <Start/>
      <p>Ready to prove that you're a gennius ?</p>
      <div>
      <button className="startbtn" onClick={()=> setCount(0)}>I'm ready</button>
      </div>
      </div>
    )
  }
  if (count === 10) {
    return (
      <div className="bg">
        <h5 className="question">you score {score} marks </h5>
        { score >= 70 ? <h5 className="question" style={{color:"green"}} >passed</h5> : <h5 className="question" style={{color:"red"}}>failed</h5>}
        <button
          onClick={() => {
            setCount(0);
          }}
          className="attempt-button"
        >
          {" "}
          attempt quiz again{" "}
        </button>
      </div>
    );
  }
  return (
    <div>
      <div className="bg">
        <div className="quizForm">
            <div className="timer">
                <Quiztimer count = {count}/>
            </div>
          <h3 className="question">{question[count].question}</h3>
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            {question[count].answers.map((answers: string , index : number) => {
              return (
                <div key={index}>
                  <label className="container">
                    <input
                      className="radio-button"
                      type="radio"
                      name="options"
                      value={answers}
                      checked={selectedAns === answers}
                      onChange={(ev) => {
                        setSelectedAns(ev.target.value);
                      }}
                      required
                    />
                    &nbsp;{answers}
                  </label>
                </div>
              );
            })}
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
