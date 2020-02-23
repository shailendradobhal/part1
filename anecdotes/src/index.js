import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Button from "./components/Button"

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [maxVotes, setMaxVotes] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const onGenerateRandomAnecdotes = () => {
    const randomAnecdotes = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAnecdotes)
  }

  const onVoteAnecdotes = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    const max = Math.max(...copy)
    setMaxVotes(max)
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <Button text="vote" onClick={onVoteAnecdotes} />
      <Button text="next anecdotes" onClick={onGenerateRandomAnecdotes} />
      <h2>Anecdote with most votes</h2>
      <div>
        {anecdotes[points.indexOf(maxVotes)]} has {maxVotes} votes
      </div>
    </>
  )
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"))
