function QuestionList({questionData, handleToggle, toggle}){
  return(
    questionData.map((value)=>{
      const {id, qn, ans} = value;
      return(
        <div className="que" key={id}>
          <div className={(id===toggle)?"question active":"question"} onClick={()=>handleToggle(id)}>
            <b><span>{(id===toggle)?'-':'+'}</span> {qn}</b>
          </div>
          {(id===toggle) ? <div className="answer">{ans}</div> : ''}
        </div>
      )
    })
  )
}
export default QuestionList;