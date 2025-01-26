import { useState ,useEffect} from 'react'

function Calculatorbody() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
const arrOfNumbers =["AC", "%" , "C", "7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "="]
const arrOfExpressions = ["/",'**', "*", "-", "+"];
const [historyOfResults, setHistoryOfResults] = useState([]);
const handler = async (e) => {
    const value = e.target.innerText;

    if (value === "AC") {
      setNumber("");
      setResult("");
    } else if (value === "C") {
      setNumber(number.slice(0, -1));
    } else if (value === "=") {
      try {
  const evalResult = eval(number);  
  setResult(evalResult); 
  const newHistory = [...historyOfResults, number + "=" + evalResult];  
  setHistoryOfResults(newHistory); 
  localStorage.setItem('history', JSON.stringify(newHistory));  
}  catch {
        setResult("Error");
      }
    } else {
      setNumber(number + value);
    }
  }
  useEffect(() => {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      setHistoryOfResults(JSON.parse(storedHistory));
    }
  }, []);
  return (
    <div className="flex items-center justify-center bg-gray-700">
      <div className="border border-solid p-8 rounded-3xl shadow-xl w-110 bg-white ">
        {/* view history  */}
        <div className='bg-gray-100 text-gray-500 h-20 w-full text-2xl shadow-xl flex items-center justify-end'>
        {historyOfResults.slice(-1).map((item) => (
          <p key={item} className='text-3xl'>{item}</p>
        ))}
        </div>
        {/* result */}
        <div className='bg-gray-100 h-15 w-full text-2xl shadow-xl flex items-center justify-end'>
          <h1 className='text-3xl'>{result ? result : number}</h1>
        </div>
        <div className='flex justify-between bg-gray-200  rounded-bl-3xl'>
          {/* numericals values */}
          <div className='w-70 bg-gray-200 h-115 p-2 '>
            {arrOfNumbers.map((item) => (
              <p key={item} onClick={handler} className={` ${item === "AC" ? "bg-red-500 " : " bg-white"} float-left text-3xl mr-2 mt-2 cursor-pointer rounded-full shadow-xl items-center justify-center w-20 h-20 flex  `}>
                {item}
              </p>
            ))}
          </div>

          {/* expressions */}
          <div className='mt-2'>
              {
                arrOfExpressions.map((item) => (
                  <p key={item} onClick={handler} className=' shadow-xl mr-2 cursor-pointer text-3xl mt-2    rounded-full  items-center justify-center w-20 h-20 bg-sky-300 flex'>{item}</p> 
           
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculatorbody