import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import RestaurantsDetailPage from "./routes/RestaurantsDetailPage";
import UpdatePage from "./routes/UpdatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="restaurants/:id/update" element={<UpdatePage />} />
          <Route path="restaurants/:id" element={<RestaurantsDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
