import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

import "./commonStyle/appStyle.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
