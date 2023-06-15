import React from 'react'

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
      <h1> {course} </h1>
      <p> {part1} {exercises1} </p>
      <p> {part2} {exercises2} </p>
      <p> {part3} {exercises3} </p>
      <p> {part4} {exercises1+exercises2+exercises3} </p>

    </div>
  )
}

export default App
