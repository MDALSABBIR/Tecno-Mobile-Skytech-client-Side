import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Global/NotFound/NotFound";
import Header from "./Global/Header/Header";
import Footer from "./Global/Footer/Footer";
import Login from "./Global/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import Explore from "./Pages/Explore/Explore.js";
import PrivateRoute from "./Global/Login/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase.js";
import Pay from "./Pages/Pay/Pay";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Review from "./Pages/Review/Review";
import ThankYou from "./Pages/ThankYou/ThankYou";
import ContactUs from "./Pages/ContactUs/ContactUs";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import AdminRoute from "./Global/Login/AdminRoute/AdminRoute";
import AddProduct from "./Pages/AddProduct/AddProduct.js";
import ManageAllPorducts from "./Pages/ManageAllPorducts/ManageAllPorducts";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute exact path="/purchase/:purchase">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute exact path="/review">
              <Review></Review>
            </PrivateRoute>
            <AdminRoute exact path="/manageAllPorducts">
              <ManageAllPorducts></ManageAllPorducts>
            </AdminRoute>
            <AdminRoute exact path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute exact path="/addProduct">
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute exact path="/manageProducts">
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <Route exact path="/contactUs">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/thankYou">
              <ThankYou></ThankYou>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
