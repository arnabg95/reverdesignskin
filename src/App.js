import { Header,Footer } from "./Components/Common";
import './App.css'
import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import { Shop,Login,Register, Home, OwnDesign } from "./Components/Pages";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Navigate to={"/home"} />}/>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/shop" element={<Shop />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/register" element={<Register />}/>
      <Route exact path="/selfdesign" element={<OwnDesign />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
