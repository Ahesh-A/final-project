import "./home.styles.scss";
import SingleSlider from "../../components/single-slider/single-slider.component";
import UnderSlider from "../../components/under-slider/under-slider.component";
import TrendingItem from "../../components/trending-item/trending-item.component";
import ProSubscription from "../../components/pro-subscription/pro-subscription.component";
import Hot from "../../components/hot/hot.component";
import Blog from "../../components/blog/blog.component";
import Services from "../../components/services/services.component";
import NewsLetter from "../../components/newsletter/newsletter.component";
import CheckOut from "../../components/chect-out/check-out.component";
import Cart from "../cart/cart.component";

const Home = () => {
  return (
    <div>
      <SingleSlider />
      <UnderSlider />
      <TrendingItem />
      <ProSubscription />
      <Hot />
      <Blog />
      <Services />
      <NewsLetter />
      <CheckOut />
      <Cart />
      
    </div>
  );
};

export default Home;
