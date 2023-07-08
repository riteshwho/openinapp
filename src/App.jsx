import { Routes ,Route } from "react-router-dom";
import Signin from "./Components/googleSignin/Signin";
import Dashboard from "./Components/googleSignin/Dashboard";

function App() {
  return (
    <>
    <div style={{ backgroundColor: '#F5F5F5'}}>
    <Routes>
      <Route path="/" element={ <Signin />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </div>
    </>
  );
}

export default App;
