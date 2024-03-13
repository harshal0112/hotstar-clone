import "./App.css";
import Home from "./Home";
import LatestAndTrending from "./LatestAndTrending";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App font-[Inter]">
      <Navbar />
      <Home />
      <LatestAndTrending />
      <div className="w-full h-16"></div>
      <LatestAndTrending />
      <div className="w-full h-16"></div>
      <LatestAndTrending />
    </div>
  );
}

export default App;
