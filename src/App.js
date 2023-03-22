import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';

function App() {
  return (
    <div className="App">
      <div>
        <h1>DASHBOARD</h1>
      </div>
     <div className="container">
      <div className="data">
        EARNINGD (MONTHLY)
        <br />
        $40,000
      </div>
      <div className="data">
       EARNINGS (MONTHLY)
       <br />
       $215,000
      </div>
      <div className="data"> 
       TASKS
        <br />
      <Form.Label>50%</Form.Label>
      <Form.Range />
        </div>
      <div className="data">
        PENDING REQUESTS
        <br />
        18
      </div>
     </div>
     <div className="disk">
      <h1>PROJECTS</h1>
       </div>
      
       <div className="project">
        SERVER MIGRATION
        <br />
        20%
        <ProgressBar variant="20%" now={20} />
       </div>
       <div className="project">
        SALES TRACKING
        <br />
        40%
        <ProgressBar variant="40%" now={40} />
       </div>
       <div className="project">
        CUSTOMER DATABASE
        <br />
        60%
        <ProgressBar variant="60%" now={60} />
       </div>
       <div className="project">
        PAYOUT DETAILS
        <br />
        80%
        <ProgressBar variant="80%" now={80} />
       </div>
       <div className="project">
        ACCOUNT SETUP
        <br />
        COMPLETE
        <ProgressBar variant="100%" now={100} />
       </div>
       <br />
       <div className="box">
        <div className="shape">
          PRIMARY
          <br/ >
          #4e73df
          </div>
          <br/>
        <div className="shape1">
          SUCCESS
          <br/ >
          #1cc88a
        </div>
        <br />
        <div className="shape2">
          INFO
          <br/ >
          #36b9cc
        </div>
        <br />
        <div className="shape3">
        WARNING
          <br/ >
          #f6c23e
        </div>
        <br />
        <div className="shape4">
          DANGER
          <br/ >
          #e74a3b
        </div>
         <br />
        <div className="shape5">
         SECONDARY
          <br/ >
          #858796
        </div>
        <br />
        <div className="shape6">
          LIGHTG
          <br/ >
          #f8f9fc
        </div>
        <br />
        <div className="shape7">
          DARK
          <br/ >
          #5a5c69
        </div>

         
        
       </div>


     </div>
  );
}

export default App;
