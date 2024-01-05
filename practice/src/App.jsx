import './App.css';
import Counter from './components/useState/Counter';
import Final from './components/useState/Final';
import ObjectExample from './components/useState/ObjectExample';
import FetchData from './components/useEffect/FetchData';
import FetchUser from './components/useEffect/FetchUser';
import ShortCircuit from './components/useEffect/ShortCircuit';
function App() {
  return (
    <>
      <Counter/>
      {/* <Final/> */}
      {/* <FetchData/> */}
      {/* <FetchUser/> */}
      {/* <ObjectExample/> */}
      <ShortCircuit/>
    </>
  )
}

export default App
