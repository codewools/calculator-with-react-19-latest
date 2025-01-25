import { useState } from 'react'

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
const arrOfNumbers =["AC", "%" , "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "C", "="]
const arrOfExpressions = ["/",'**', "*", "-", "+"];

const handler = (e) => {
    const value = e.target.innerText;

    if (value === "AC") {
      setNumber("");
      setResult("");
    } else if (value === "C") {
      setNumber(number.slice(0, -1));
    } else if (value === "=") {
      try {
        setResult(eval(number));
      } catch {
        setResult("Error");
      }
    } else {
      setNumber(number + value);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="border border-solid p-8 rounded shadow-xl w-110 ">
        <div className='bg-gray-100 h-40 w-full text-2xl flex shadow-xl items-center justify-end'>
          <h1 className='float-'>20x20</h1>
          <h1 className='text-3xl'>{result ? result : number}</h1>
        </div>
        <div className='flex justify-between bg-gray-200'>
          {/* numericals values */}
          <div className='w-70 bg-gray-200 h-115 p-2'>
            {arrOfNumbers.map((item) => (
              <p key={item} onClick={handler} className='float-left text-xl mr-2 mt-2 cursor-pointer rounded-full shadow-xl items-center justify-center w-20 h-20 bg-white flex'>
                {item}
              </p>
            ))}
          </div>

          {/* expressions */}

          <div className='mt-2'>
              {
                arrOfExpressions.map((item) => (
                  <p key={item} onClick={handler} className=' shadow-xl mr-2 cursor-pointer text-xl mt-2    rounded-full  items-center justify-center w-20 h-20 bg-sky-300 flex'>{item}</p> 
           
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App