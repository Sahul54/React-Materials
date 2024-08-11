import { useState } from 'react'
import './App.css'



function App() {
  
  const response = [
                    {
                      name: "Rahul",
                      date: '22 dec 2000'
                    },
                    {
                      name: "Ravi",
                      date: '22 Nov 2001'
                    },
                    {
                      name: "Raju",
                      date: '14 March 2002'
                    },
                    
                    ]
  // let data = data;

  // const name = "rahul"

  return (
    <>
      {/* <Iteam name = {response[0].name}></Iteam>
      <Date date = {response[0].date}></Date>

      <Iteam name = {response[1].name}></Iteam>
      <Date date = {response[1].date}></Date>

      <Iteam name = {response[2].name}></Iteam>
      <Date date = {response[2].date}></Date>
     <h1>Hello Ji sab thik hai</h1> */}


      {response.map((item, index) => (
        <div key={index}>
          <Iteam name={item.name} />
          <Date date={item.date} />
        </div>
      ))}
      <h1>Hello Ji sab thik hai</h1>
    </>
  )
}

export default App
