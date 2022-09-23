import { useSelector , useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector ((state) => state.counter);
  const dispatch = useDispatch() ;
  return <div className='App'>
    <p> {counter} </p>
    <button onClick={()=> dispatch({type : "Increament" })}>Increament</button>
    </div>;
}

export default App ;
