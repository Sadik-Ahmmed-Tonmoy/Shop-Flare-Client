import Card from "../../../components/Card/Card";
import bannerTwsCollection from "../../../assets/TrendingCategoriesImg/twsCollection.png";

const LatestProduct = () => {
  return (
    <div className="container mx-auto px-2 py-5">
      <h3 className="my-5 text-2xl">Latest Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <img className="w-full my-4" src={bannerTwsCollection} alt="" />
    </div>
  );
};

export default LatestProduct;
