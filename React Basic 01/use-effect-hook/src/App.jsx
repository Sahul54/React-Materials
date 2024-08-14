// import { useEffect, useState } from 'react'

// import './App.css'

// function App() {
//   const [text, setText] = useState("");
//   const [name, setName] = useState("");

//   // 1.Ever Render  --> is me har ek barr UI Render ho ga, isme performance issue aa sakta hai
//   // useEffect( () => {
//   //   console.log("UI Render");
//   // })

//   // 2.First Time Render 
//   // useEffect( () => {
//   //   console.log("UI Render");
//   // }, [])

//   // 3. First Time Render and name value chance(dependency change)
//   // useEffect( () => {
//   //   console.log("UI Render");
//   // }, [name])

//   // 4. To handle unmounting a componont
//   useEffect( () => {
//     console.log("Added");

//     return () => {
//       console.log("Removed");  
//     }
//   }, [text])


//   function changeHandler(event) {
//     console.log(text)
//     setText(event.target.value);
//   }

//   return (
//    <>
//     <input placeholder='Enter..' onChange={changeHandler}></input>
//    </>
//   )
// }

// export default App




import React, { useState, useEffect } from 'react';

const ResponsiveBox = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [boxStyle, setBoxStyle] = useState({
    width: '100px',
    height: '100px',
    backgroundColor: 'lightblue',
  });

  // Function to handle window resize
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // useEffect to update box style based on window size
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Change box style based on window width
    if (windowSize.width > 800) {
      setBoxStyle({
        width: '200px',
        height: '200px',
        backgroundColor: 'black',
      });
    } else {
      setBoxStyle({
        width: '100px',
        height: '100px',
        backgroundColor: 'black',
      });
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize.width]);

  return (
    <div style={{ padding: '10px' }}>
      <h4>Responsive Box</h4>
      <p>Current Window Size: {windowSize.width}px x {windowSize.height}px</p>
      <div style={boxStyle}></div>
    </div>
  );
};

export default ResponsiveBox;

