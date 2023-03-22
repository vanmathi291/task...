import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
     <div className="container">
      <div className="data">HELLO</div>
      <div className="data">WORLD</div>
      <div className="data">HOW R U</div>
     </div>
     <div className="disk">
     <Button as="a" variant="success">
    Button as link
  </Button>
  </div>
     </div>
  );
}

export default App;
