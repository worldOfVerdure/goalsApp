import { type FormEvent } from "react";
//Typing events is important for handler functions to properly reflect the correct type of event.
export default function NewGoal() {
  //We know this will be the formEventObject. TypeScript does not know explicitly about this type.
  function handleSubmit(event: FormEvent<HTMLFormElement>) { //Specific type that is provided for by React.
    //We can remove the question mark that is automatically populated, because the code editor was
    //unsure if the event was undefined, and that preventDefault() would be called with an
    //undefined. By explicitly annotating the type, our project can be sure we are receiving a valid
    //type.
    event.preventDefault(); //Prevents an HTTP request to a server.
    //The approach below gives an error because TypeScript doesn't fully understand that the target
    //of this event will be the form element in the return statement. Because theoretically, such a
    //FormEvent does not have to come from the onSubmit prop of a form. That is why the ForEvent is
    //actually a generic type and ergo can be enriched with extra type information about a related
    //type. in this case, the related type of the FormEvent is the HTML element, or the type of HTML
    //elemnt that is responsible for this event being passed to handleSubmit. The correct type to
    //choose to add this extra information is, that this event will be coming from a form element is
    //the HTMLFormElement type. HTMLFormElement is a type built into TypeScript. The setting in
    //tsconfig.json is found in "lib": ["ES2020", "DOM", "DOM.Iterable"]; hence why we don't need
    //the import.

    // We use currentTarget over target because currentTarget is guarenteed to be the form element.
    // In most cases, they should refer to the same form element. Finally, make sure to add the name
    // prop to the input to form the key-value pairs for the FormData object.
    //new FormData(event.currentTarget);
  }
  /*Side note!
    <form onSubmit={(event) => } > Here, event is automatically inferred to be of type FormEvent.
  */
  return (
    <form onSubmit={handleSubmit} >
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
