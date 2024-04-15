import React ,{useState}from 'react'


function Useset() {
  const [num,SetNum]=useState(1);
 

  const handleSub =()=>{
    // x=x-1;
    // console.log(x);
    SetNum(num+2);
  }
  const handleAdd =()=>{
    // x=x+1;
    // console.log("x",x);
    SetNum((num) => {
      return 3
    })
  }
  return (
    <div>
      <button onClick={handleSub} >sub</button>
      <h1>{num}</h1>
      <button onClick={handleAdd}>add</button>

    </div>
  )
}

export default Useset
