import { Route, Routes } from "react-router-dom";

import Layout from "./layout/views";

import Home from "./moduls/homeModul/views";
import OurShop from "./moduls/ourShopModul/views";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout><Home /></Layout>} />
        <Route path="/our-shop/*" element={<Layout><OurShop /></Layout>} />
      </Routes>
    </>
  )
}

export default App
