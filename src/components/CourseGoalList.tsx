import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoalState } from "../App.tsx";

type CourseGoalListProps = {
  goals: CourseGoalState[];
};

export default function CourseGoalList({goals}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal, index) => {
        return (
          <li key={`${goal.title} ${goal.id} ${index}`} >
            <CourseGoal title={goal.title} >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
