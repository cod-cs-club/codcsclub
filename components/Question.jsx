import { useState } from "react"

// Question & answer for FAQ section.
export default function Question({ question, answer }) {
  const [open, setOpen] = useState(false)
  
  function toggleOpen() {
    if (open) setOpen(false)
    else setOpen(true)
  }

  return (
    <>
      <p className={open ? "question active" : "question"} onClick={toggleOpen}>
        <span>{open ? '-' : '+'}</span>&nbsp;{question}
      </p>
      {open && <p className="answer">{answer}</p> }
    </>
  )
}