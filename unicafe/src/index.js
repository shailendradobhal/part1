import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Button from "./components/Button"
import Statistics from "./components/Statistics"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue = ({ value, setState }) => () => setState(value + 1)

  return (
    <>
      <h1>Give feedback</h1>
      <Button
        onClick={setToValue({ value: good, setState: setGood })}
        text="Good"
      />
      <Button
        onClick={setToValue({ value: neutral, setState: setNeutral })}
        text="Neutral"
      />
      <Button
        onClick={setToValue({ value: bad, setState: setBad })}
        text="Bad"
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
