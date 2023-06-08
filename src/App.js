import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./home";
import Contact from "./contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}