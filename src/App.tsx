import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";

 export type CourseGoalState = {
    title: string;
    description: string;
    id: number;
  };

export default function App() {
  const [goals, setGoals] = useState<CourseGoalState[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoalState = {
        title: "Learn React + TS",
        description: "Learn it in depth!",
        id: Math.random()
      }
      return [...prevGoals, newGoal];
    });
  }

  const image = {src: goalsImg, alt: "A list of goals"};
  return (
    <main>
      <Header {...image} >
        Your Course Goals
      </Header>
      <button onClick={handleAddGoal} >Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}
