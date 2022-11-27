import { Header,Footer } from "./Components/Common";
import './App.css'
import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import { Shop,Login,Register, Home, OwnDesign } from "./Components/Pages";
import PrivateRoute from "./utils/PrivateRoute";
import AfterAuthRoute from "./utils/AfterAuthRoute";
import Test from "./Components/Pages/Test";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route exact path="/selfdesign" element={<OwnDesign />}/>
        <Route path="/shop" element={<Shop />}/>
      </Route>
      <Route element={<AfterAuthRoute />}>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Route>
      <Route exact path="/" element={<Navigate to={"/home"} />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/test" element={<Test />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
