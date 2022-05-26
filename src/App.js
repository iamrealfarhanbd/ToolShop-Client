import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddTools from './components/AddTools/AddTools';
import Dashboard from './components/Dashboard/Dashboard';
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
import NotFound from './Shared/NotFound/NotFound';
import AddReview from './components/Dashboard/AddReview';
import AllOrders from './components/Dashboard/AllOrders';
import ManageTools from './components/Dashboard/ManageTools';
import Portfolio from './components/Porfolio/Portfolio';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order/:orderID" element={<Order />} />

        <Route path="dashboard" element={<RequireAuth> <Dashboard /> </RequireAuth>} >

          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myorder" element={ <RequireAuth><MyOrder></MyOrder></RequireAuth>}></Route>
          <Route path="addreview" element={<RequireAuth><AddReview></AddReview></ RequireAuth>}></Route>
          <Route path="payment/:id" element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>

          <Route path="AllOrders" element={ <RequireAdmin><AllOrders></AllOrders></RequireAdmin>}></Route>
          <Route path="ManageTools" element={ <RequireAdmin><ManageTools></ManageTools></RequireAdmin>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addtools" element={<RequireAdmin><AddTools /></RequireAdmin>} />

        </Route>

        <Route path="/alltools/:toolId" element={<ToolsDeatils />} />
        <Route path="/RestPass" element={<RestPass />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
