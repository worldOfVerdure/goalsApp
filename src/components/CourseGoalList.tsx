import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoalState } from "../App.tsx";

type CourseGoalListProps = {
  goals: CourseGoalState[];
  onDeleteGoal: (id: number) => void; //The id identifier isn't as important. The type is.
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={`${goal.id}`} >
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDelete={onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
