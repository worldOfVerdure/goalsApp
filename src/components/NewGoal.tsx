import { type FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  //Why the errors? Out of the box, ref contains undefine as a default starting value. The ref prop
  //is internally typed as such that it does not accept such refs that contain undefine as a value.
  //The simple solution is we should add null as the initial value. This signals a different intent.
  //Undefined means that there is no value at all while null typically means we don't have a value
  //yet or that we temporarily or under certain conditions that we do not have a value yet. As is
  //the case with this project: we initially don't have a value, but do expect the user to enter
  //data to populate these refs.
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //We get an error accessing the current object property because null could be theoretically
    //null. We are not able to access a property on null. We do know that in our code, that this
    //will never be the case. We know this will never be the case because handleSubmit is used as a
    //value for the onSubmit value of the form and ergo will only be executed after the return code
    //has executed. The jsx is parsed and the ref connection is established. We know with certainty
    //that we will never receive null. This line: goal.current! tells TypeScript that everything
    //before the '!' will never be null. (If it did end up null, the app would crash.)

    //Even after all that, we are still getting an error. A different error. Property 'value' does
    //not exist on type 'never'. We know as the dev, that ref will eventually refer to an input
    //element. TS does not know this as it doesn't attempt to read our entire source code. The code
    //we wrote does not make it clear. TS understands initially, it will be null. After that, it
    //doesn't know. That is easy to fix because useref is a generic type as well! See above where
    //they are declared now with angled brackets. What is the related type of useRef? It is the type
    //of value that will eventually be used by useRef. This could be a number, string, any object or
    //array value, etc. Recall refs can be used to manage any value connected with a DOM element. In
    //this case, we are connecting to a HTMLInputElement. TS now understands that either have an
    //HTMLInputElement or null (which we ruled out).
    const eneteredGoal = goal.current!.value;
    const eneteredSummary = summary.current!.value;

    onAddGoal(eneteredGoal, eneteredSummary);
  }

return (
    <form onSubmit={handleSubmit} >
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
