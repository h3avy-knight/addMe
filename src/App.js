import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./assets/manuel-cosentino-n--CMLApjfI-unsplash.jpg";
import { Carousel } from "./components/Carousel";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div>
      <Navbar />
      <div className="h-[100vh] mt-5">
        <img src={Header} alt="" className="h-[100%] w-[100%]" />
      </div>
      <div>
        <Carousel />
      </div>
      <div>{/* <Pagination /> */}</div>
    </div>
  );
}

export default App;
