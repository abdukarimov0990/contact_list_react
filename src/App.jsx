import React, { useState } from 'react'


const App = () => {
  const [inputName, setInputName] = useState("");
  const [inputJob, setInputJob] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [array, setArray] = useState([]);

  const addToArray = (e) => {
    e.preventDefault();
    // if number came again 
    if (array.some((item) => item.number === inputNumber)) {
      alert("Raqamga qara mol");
      // add to array
    } else if (inputName && inputJob && inputNumber) {
      setArray([...array, { name: inputName, job: inputJob, number: inputNumber }]);
      setInputJob("");
      setInputName("");
      setInputNumber("");
      
    } else {
      alert("To'ldirmading");
    }
  };

  return (  
     <>
      {/* header */}
      <header className="bg-blue-900 py-5">
        <div className="w-full max-w-[1140px] mx-auto px-5">
          <h2 className="text-white text-center text-2xl">Contact list</h2>
        </div>
      </header>
      {/* main */}
      <main className="py-6">
        <div className="w-full max-w-[1140px] mx-auto px-5 grid grid-cols-2 gap-5">
          {/* form */}
          <form className="space-y-4" onSubmit={addToArray}>
            {/* name */}
            <input
              type="text"
              value={inputName}
              placeholder="Name"
              className="w-full border-2 border-gray-500 px-4 py-1 rounded-md outline-none focus:border-blue-900"
              required
              onChange={(e) => setInputName(e.target.value.trim())}
            />
            {/* phone number */}
            <input
              type="number"
              value={inputNumber}
              placeholder="Phone Number"
              className="w-full border-2 border-gray-500 px-4 py-1 outline-none rounded-md focus:border-blue-900"
              required
              onChange={(e) => setInputNumber(e.target.value.trim())}
            />
            {/* job  */}
            <input
              type="text"
              value={inputJob}
              placeholder="Job"
              className="w-full border-2 border-gray-500 px-4 py-1 rounded-md outline-none focus:border-blue-900"
              required
              onChange={(e) => setInputJob(e.target.value.trim())}
            />
            <button className="w-full border-2 border-gray-500 px-4 py-1 rounded-md bg-blue-900 text-white">
              Submit
            </button>
          </form>
          {/* contact ul */}
          <ul className="space-y-4">
            {array.map((item, index) => (
              <li key={index} className="py-2 px-4 border-2 rounded-2xl  border-gray-500">
                <h3 className="text-blue-900 font-bold text-xl">{item.name}</h3>
                <p className="text-gray-500">Job: {item.job}</p>
                <p className="text-gray-500">Number: {item.number}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>)

}

export default App
