import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Dashboard  from './components/Dashboard';
import ReactQueryProvider from './utils/ReactQueryProvider';

function App() {
  return (
    <div>
      <ReactQueryProvider>
    <Router>
      <Routes>
        <Route path='/ele' element={ <Dashboard/>}/>
      </Routes>
    </Router>
    </ReactQueryProvider>
    </div>
  );
}

export default App;
