import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from './data';
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {toast} from "react-toastify";

const App = () => {

  const [Courses, setCourses] = useState(null);

  useEffect ( () => {
    const fetchData = async() =>{
        try{
          const res = await fetch(apiUrl);
          const data = await res.json();

          // save data into a variable
          // console.log(data);
          setCourses(data.data);
        }
        catch(error){
              toast.error("Something is worng");
        }
    }
    fetchData();
  })

   return(
    <>
      <Navbar/>

      <Filter 
      filterData={filterData}/>

      <Cards 
      Courses = {Courses}/>
    
    
    </>
   )
};

export default App;
