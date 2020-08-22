import { quiz, ques } from "../types/types";

const url: string =
  "https://opentdb.com/api.php?amount=10&category=18&type=multiple";

function shuffle(array: string[]): string[] {
  const newArray: string[] = array.sort(() => Math.random() - 0.5);
  return newArray;
}

export const fetchQuiz = async (): Promise<quiz[]> => {
  try {
    const response = await fetch(url);
    const { results } = await response.json();
    const quiz: quiz[] = results.map((quesobj: ques) => {
      return {
        question: quesobj.question,
        correct_answer: quesobj.correct_answer,
        answers: shuffle(
          quesobj.incorrect_answers.concat(quesobj.correct_answer)
        ),
      };
    });
    return quiz;
  } catch (err) {
    return err;
  }
};
