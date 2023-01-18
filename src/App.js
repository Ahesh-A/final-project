import Navbar from "./components/navbar/navbar.components";
import SingleSlider from "./components/single-slider/single-slider.component";
import UnderSlider from "./components/under-slider/under-slider.component";
import TrendingItem from "./components/trending-item/trending-item.component";
import ProSubscription from "./components/pro-subscription/pro-subscription.component";
import Hot from "./components/hot/hot.component";
import Blog from "./components/blog/blog.component";
import Services from "./components/services/services.component";
import NewsLetter from "./components/newsletter/newsletter.component";
import Footer from "./components/footer/footer.component";
const App = () => {
  return (
    <div>
      <Navbar />
      <SingleSlider/>
      <UnderSlider/>
      <TrendingItem/>
      <ProSubscription />
      <Hot/>
      <Blog/>
      <Services/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default App;
