import './App.css';
import Random from './Components/Random';
import Tag from'./Components/Tag'

function App() {
  return (
    <div className="App w-full h-screen flex flex-col item-center background relative overflow-hidden">
       <h1 className='bg-white rounded-md text-black font-bold absolute w-11/12 text-center mt-4 ml-14 mr-5 p-2'>Random Gifs</h1>
       <div className='flex flex-col w-full items-center m-8'>
       <Random className ="items-center"/>
       <Tag/>
       </div>
    </div>
  );
}

export default App;
