import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from '@mui/icons-material';
import ReactQueryProvider from './utils/ReactQueryProvider';
function App() {
  return (
    <div className="App">
       <ReactQueryProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/maps' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
      </ReactQueryProvider>
    </div>
  );
}

export default App;
