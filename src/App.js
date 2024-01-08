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

function DemoProps({property1, property2}) {
  return(
    <div>{property1} {property2}</div>
  )
}

export default App;
