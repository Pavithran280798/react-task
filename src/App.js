import React from 'react'

function header({course}) {
  return(
    <h1>{course}</h1>
    )
}

// function content({part,exercise}) => {

// }

function App() {

  const course ="Half stack application development";
  const part1 ="Fundamentals of react";
  const exercises1 = 10;
  const part2 = "Using props to data";
  const exercises2 = 7;
  const part3 = "States of a component";
  const exercises3 = 14;
  const part4 = "Number of execises";

  return (
    <div>
      <header />
    </div>
  )
}

export default App
