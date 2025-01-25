




import React from 'react';   
import { useState ,useEffect} from 'react'
function History() {

const [historyOfResults, setHistoryOfResults] = useState([]);
useEffect(()=>{
    const  history = localStorage.getItem('history')
    if(history)
    setHistoryOfResults(JSON.parse(history))
else{
    setHistoryOfResults(['no data found']);
}
},[])
return(
    <div className=" text-white items-center justify-center bg-gray-800"> 
        { historyOfResults !== null ? historyOfResults.map((item,index) => (
            <p key={item} className='text-3xl'> {index+1} : {item}</p>
        ))
    
    : "no data found"}
    </div>
)
}

export default History