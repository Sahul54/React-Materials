import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import {apiUrl, filterData} from "./data"


function App() {
  // const notify = () => toast("Wow so easy!");

  return (
    <>
     <div>
        {/* <button onClick={notify}>Notify!</button> */}

        <Navbar/>

        <Filter filterData={filterData} />

        <Cards/>

        
      </div>
    </>
  )
}

export default App
