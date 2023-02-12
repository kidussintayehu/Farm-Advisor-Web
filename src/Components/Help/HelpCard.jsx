import React, {useState} from 'react'

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export default function HelpCard({help}){
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleShowAnswer = event => { 
        setShowAnswer(!showAnswer)
    }

    return (
        <div className='border-l-rose-50 rounded-lg'>
            <div className='flex justify-between mx-3 bg-white p-3'>
                <p>{help.question}</p>
                <button onClick={toggleShowAnswer}><ExpandMoreOutlinedIcon /></button>
            </div> 
            <div className='mx-3 bg-white mb-2 pt-2 px-4'>
                {
                    showAnswer&&( <p pb-3 >{help.ansower}</p>)
                }
            </div>    
        </div>
        
    )
}