import './App.css';
import images from "./assets/img/index.js";
import Background from "./components/Background/Background.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Watermark from "./components/UI/Watermark.jsx";
import TopFestival from "./components/UI/TopFestival.jsx";
import Reviews from "./components/UI/Reviews.jsx";
import BestFestivals from "./components/UI/BestFestivals.jsx";
import GetStarted from "./components/UI/GetStarted.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {

    let heroData = {header: "Easy Submitting", content: "The world's #1 way to enter film festivals", content1:"and screenplay contests"};

  return (
    <div>
      <Background name={images.hero_background}/>
        <Navbar />
        <Hero heroData={heroData} />
        <Watermark />
        <TopFestival />
        <Reviews />
        <BestFestivals />
        <GetStarted />
        <Footer />
    </div>
  )
}

export default App;
