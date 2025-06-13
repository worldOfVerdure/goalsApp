import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <main>
      {/* Goal: build header component */}
      <Header image={{src: goalsImg, alt: "A list of goals"}} >
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React + TS" description="Learn from the ground up." />
    </main>
  );
}
