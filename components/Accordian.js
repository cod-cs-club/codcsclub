import AccordianList from "/components/accordianList";
import AccordianData from "/data/accordianData.json";
import { useState } from "react";

function Accordion(){
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
                <AccordianList accordionData={AccordianData} handleToggle={handleToggle} toggle={toggle} />
            </div>
        )
    }
    export default Accordion;