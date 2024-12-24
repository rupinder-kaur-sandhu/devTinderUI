import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Connections from "./components/Connections";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body></Body>}>
              <Route path="/" element={<Feed></Feed>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/profile" element={<Profile></Profile>}></Route>
              <Route
                path="/connections"
                element={<Connections></Connections>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
