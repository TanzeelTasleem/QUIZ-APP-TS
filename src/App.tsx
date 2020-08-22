import React, { useEffect, useState } from "react";
import { fetchQuiz } from "./services/quiz_services";
import { quiz } from "./types/types";
import { QuestionCard } from "./components/questionCard/questionCard";
import { Loading } from "./components/loading/loading";
function App() {
  const [Quiz, setQuiz] = useState<quiz[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      setQuiz(await fetchQuiz());
    };
    fetchQuestions();
  }, []);

  if (!Quiz.length) {
    return <Loading/>;
  } else {
    return (
      <div>
        <QuestionCard question = {Quiz} />
      </div>
    );
  }
}

export default App;
