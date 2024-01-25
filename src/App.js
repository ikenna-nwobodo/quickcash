import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-white text-black flex flex-col justify-center items-center pb-8 w-full overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
