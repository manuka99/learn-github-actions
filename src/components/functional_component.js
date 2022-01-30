import React from "react";

// function Greet() {
//     return <h1> hello  </h1>
// }

//named export
// export const Greet = () => <h1> hi </h1>

// export const Greet = (props) => {
//   console.log(props);
//     return <h1> hi {props.name} and {props.age}</h1>;
// };

// export const Greet = (props) => {
//     console.log(props);
//     // props.name = "asasas"
//   return (
//     <div>
//       <h1>
//         {" "}
//         hi {props.name} and {props.age}
//         {props.children}
//       </h1>
//     </div>
//   );
// };

// destructuring

// export const Greet = ({name, age, children}) => {
//   return (
//     <div>
//       <h1>
//         {" "}
//         hi function {name} and {age}
//         {children}
//       </h1>
//     </div>
//   );
// };

export const Greet = (props) => {
  const { name, age, children } = props;
  return (
    <div>
      <h1>
        {" "}
        hi {name} and {age}
        {children}
      </h1>
    </div>
  );
};

// export default Greet
