import QuestionList from "/components/questionList";
import QuestionData from "/data/questionData.json";
import { useState } from "react";

function Question(){
    const [toggle, setToggle] = useState(null);
    let handleToggle=(id)=>{
        if(toggle===id){
            setToggle(null);
            return false
        }
       setToggle(id)
    }
        return(
            <div className="faq">
                <h2>Frequently Asked Questions</h2>
                <QuestionList questionData={QuestionData} handleToggle={handleToggle} toggle={toggle} />
            </div>
        )
    }
    export default Question;