import React from "react"
import Statistic from "./Statistic"

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (
    <>
      <h2>Statistics</h2>
      {total === 0 ? (
        "No feedback given"
      ) : (
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={total} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive + "%"} />
          </tbody>
        </table>
      )}
    </>
  )
}

export default Statistics
