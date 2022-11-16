import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { PlaceToStay } from "./pages/PlaceToStay";
import { NFTs } from "./pages/NFTs";
import { Community } from "./pages/Community";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
