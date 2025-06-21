// export default function CourseGoal(props: {
//   title: string;
//   description: string;
//   }) {
//   return (
//     <article>
//       <div>
//         <h2>TITLE</h2>
//         <p>DESCRIPTION</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }
/** */
// export default function CourseGoal({title, description}: {
//   title: string;
//   description: string;
//   }) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

/*Both the above lines of code can become hard to read quickly. See below for a solution.*/
// import { type ReactNode } from "react";

// type CourseGoalProps = {
//   description: string;
//   title: string;
// }

/*
If children prop is passed, used the below type.
*/
// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// }

// export default function CourseGoal({title, children}: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

/* My prefered way to type annotate a component using FC, functional component: */
// import {type FC} from "react";
// type CourseGoalProps = {
//   title: string;
//   description: string;
// }
// // <CourseGoalProps> and {title, description} are connected.
// const CourseGoal: FC<CourseGoalProps> = ({title, description}) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// export default CourseGoal;

import { type FC, type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({id, title, onDelete, children}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)} type="button" >Delete</button>
    </article>
  );
}

export default CourseGoal;

/*
Challenge, learn this:
*/
// import React, { ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react'
 
// /*  Building a Polymorphic Component: A Wrapper Component that doesn't know in advance which component will wrap (which will be its child) */
 
// type ContainerProps = {
//   children: ReactNode;
//   as?: ElementType;
// } & ComponentPropsWithoutRef<ElementType>;
 
// export default function Container({ as, children, ...props }: ContainerProps) {
//   const Component = as || "div";
//   return (
//     <Component {...props}>
//       {children}
//     </Component>
//   )
// }
