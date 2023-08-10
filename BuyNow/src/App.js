import Header from "./header.js";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import SignUp from "./components/SignUp";
// import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
// import Form from "./components/Form.js";
import Landing from "./components/Landing.js";

// ROUTES

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />

          {/* <Route path="/x" element={<x />} />
          <Route path="/y" element={<y />} />
          <Route path="/z" element={<z />} /> */}
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
