import Card from "../../../components/Card/Card";
import banner from "../../../assets/PopularProducts/offer-banner.webp";

const PopularProduct = () => {
  return (
    <div className="container mx-auto px-2 py-5">
      <h3 className="my-5 text-2xl">Popular Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <img className="w-full my-4" src={banner} alt="" />
    </div>
  );
};

export default PopularProduct;
