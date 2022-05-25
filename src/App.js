import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddTools from './components/AddTools/AddTools';
import Dashboard from './components/Dashboard/Dashboard';
import MyTools from './components/Dashboard/MyTools';
import MyReview from './components/Dashboard/MyReview';
import Users from './components/Dashboard/Users';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RestPass from './components/Login/RestPass/RestPass';
import ToolsDeatils from './components/ToolsDeatils/ToolsDeatils';
import Order from './components/Orders/Orders';
import MyOrder from './components/Dashboard/MyOrder';
import RequireAdmin from './components/RequireAuth/RequireAdmin';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Payment from './components/Dashboard/Payment';
import MyProfile from './components/Dashboard/MyProfile';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order/:orderID" element={<Order />} />
        <Route path="dashboard" element={<RequireAuth> <Dashboard /> </RequireAuth>} >
          <Route  path="MyProfile" element={<MyProfile></MyProfile>}></Route>
          <Route index element={ <MyOrder></MyOrder>}></Route>
          <Route  path="myReview" element={<MyReview></MyReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
        </Route>
        <Route path="/addtools" element={<AddTools />} />
        <Route path="/alltools/:toolId" element={<ToolsDeatils />} />
        <Route path="/RestPass" element={<RestPass />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
