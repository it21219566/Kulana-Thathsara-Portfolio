import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Undergraduate at SLIIT",
          "MERN Stack Web Development",
          "Android Studio Kotlin Development",
          "Python Streamlit Development",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
