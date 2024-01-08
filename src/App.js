import './App.css';
import Counter from './components/counter/Counter';

function App() { 
  return (
    <div className="App">
      <DemoProps property1="Value1" property2="Value2"/>
      <Counter/>
    </div>
  );
}

function DemoProps(properties) {
  return(
    <div>{properties.property1} {properties.property2}</div>
  )
}

export default App;
