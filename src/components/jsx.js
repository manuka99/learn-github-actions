import React from "react";

const Hello = () => {
  // return (
  //     <div>
  //         <h1>
  //             hi from jsx
  //         </h1>
  //     </div>
  // )

    return React.createElement(
        "div",
        {id:'hello', className:'dump'},
    React.createElement("h1", null, "hello bro")
  );
};

export default Hello;
