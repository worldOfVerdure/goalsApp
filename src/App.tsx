import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoalFormData.tsx";
import { useState } from "react";

 export type CourseGoalState = {
    title: string;
    description: string;
    id: number;
  };

export default function App() {
  const [goals, setGoals] = useState<CourseGoalState[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoalState = {
        title: goal,
        description: summary,
        id: Math.random()
      }
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal (id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id)); //filter method of Array instances
  }

  const image = {src: goalsImg, alt: "A list of goals"};
  return (
    <main>
      <Header {...image} >
        Your Course Goals
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
