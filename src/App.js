import "./App.scss";
import MakeBag from "./MakeBag";
import Navbar from "./Navbar";
import SimpleSlider from "./SimpleSlider";
import Delivery from "./Delivery";
import Categories from "./Categories";
import Benefits from "./Benefits";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <Navbar />
        <SimpleSlider />
        <MakeBag />
        <Delivery />
        <Categories />
        <Benefits />
        <Footer />
      </div>
    </div>
  );
}

export default App;
