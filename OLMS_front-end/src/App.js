import './App.css';
import Home from '../src/Pages/Home';
import Login from './Pages/Login';
import LeaveApply from './Pages/LeaveApply';
import LeaveApproval from './Pages/LeaveApproval';
import LeaveBalance from './Pages/LeaveBalance';
import Report from './Pages/Report';
import Calender from './Pages/Calender';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import your Home and Login pages
// import Home from './Pages/Home';
// import Login from './Pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/LeaveApply' element={<LeaveApply />} />
          <Route path='/LeaveApproval' element={<LeaveApproval />} />
          <Route path='/LeaveBalance' element={<LeaveBalance />} />
          <Route path='/Calender' element={<Calender />} />
          <Route path='/Report' element={<Report />} />

          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/" component={Home} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
