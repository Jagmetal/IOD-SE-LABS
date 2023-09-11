import React from "react";

const Greeting = ({ name, children }) => {
    const greetingMessage = name ? `Hello ${name}` : 'Hello World';
    return (
      <div>
        <p>{greetingMessage}</p>
        {children && <div>{children}</div>}
      </div>
    );
  };

  export default Greeting;