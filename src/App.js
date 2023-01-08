import logo from './logo.svg';
import './App.css';
import { INCRIMENT,DECRIMENT } from './actions/types';
import { connect } from 'react-redux';
import { decrement, incriment } from './actions/CounterAction';
function App(props) {
  
  return (
    <div className="App">
    <div className='App-header'>
    <button onClick={()=>props.plusBtn()}>+</button>
    <p>{props.count}</p>
    <button onClick={()=>props.minusBtn()}>-</button>
</div>
    </div>
  );
}
const mapStateToProps = state =>{
  return {count : state.CounterReducer}
}

const mapDispatchToProps=dispatch=>{
  return {
    plusBtn:()=>dispatch(incriment()),
    minusBtn:()=>dispatch(decrement()),
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);