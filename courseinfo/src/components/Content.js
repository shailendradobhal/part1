import React from "react"

const Content = ({ parts }) => {
  const content = parts.map(part => (
    <p>
      {part.name} {part.exercises}
    </p>
  ))
  return <>{content}</>
}

export default Content
