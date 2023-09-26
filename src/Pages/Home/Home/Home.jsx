import { ScrollRestoration } from "react-router-dom";
import Banner from "../Banner/Banner";
import LatestProduct from "../LatestProduct/LatestProduct";
import PopularProduct from "../PopularProduct/PopularProduct";
import TrendingCategories from "../TrendingCategories/TrendingCategories";


const Home = () => {
    return (
        <div>
           <Banner/>
           <TrendingCategories/>
           <LatestProduct/>
           <PopularProduct/>
           <ScrollRestoration/>
        </div>
    );
};

export default Home;