import ReactDOM from 'react-dom';
import Parent from './props/Parent';

const App = () => {
  return (
    <Parent />
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
