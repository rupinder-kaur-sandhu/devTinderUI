import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body></Body>}>
            <Route path="/login" element={<Login></Login>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
