function AccordionList({accordionData, handleToggle, toggle}){
  return(
    accordionData.map((value)=>{
      const {id, qn, ans} = value;
      return(
        <div className="acc" key={id}>
          <div className={(id===toggle)?"question active":"question"} onClick={()=>handleToggle(id)}>
            <b><span>{(id===toggle)?'-':'+'}</span> {qn}</b>
          </div>
          {(id===toggle) ? <div className="answer">{ans}</div> : ''}
        </div>
      )
    })
  )
}
export default AccordionList;