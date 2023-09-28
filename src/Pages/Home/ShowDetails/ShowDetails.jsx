import { Breadcrumb, Rate } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});
  console.log(product);
  const {
    name,
    brand,
    category,
    details,
    main_features,
    price,
    rating,
    release_year,
    return_policies,
    storage_options,
    sub_details,
  } = product;
  useEffect(() => {
    axios.get(`http://localhost:5000/showDetails/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);
  return (
    <div className="container mx-auto relative">
      <div>
        <div className="flex gap-8">
          <div className="w-6/12 sticky top-36 h-full">
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>
                <Link to={"/"}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={"/"}>{category}</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{name}</Breadcrumb.Item>
            </Breadcrumb>
            <img
              src="https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280"
              alt=""
            />
          </div>
          <div className="w-6/12 my-10">
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="text-sm mt-1 mb-5">Brand: {brand}</p>
            <Rate allowHalf disabled value={rating} />
            <h2 className="text-4xl my-4">
              Price: $<span className="font-semibold">{price}</span>
            </h2>
            <p className="my-5">{sub_details}</p>
            <p className="text-xl font-semibold">Features:</p>
            {main_features && (
              <ul>
                {main_features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
            <p>Release year: {release_year}</p>
            <div className="divider"></div>
            <p>Hurry Up! only 70 left in stock</p>
            <div>
              -1+ <button className="btn btn-primary">add to cart</button>
            </div>
            <p>i agree with terms and conditions</p>
            <button className="btn btn-primary w-full">Buy It Now</button>
            <p className="my-4">estimated delivery time: 1-2 days</p>
            <p className="my-6">
              Return within 45 days of purchase. Duties & taxes are
              non-refundable.
            </p>
            <div>
              <div className="divider"></div>
              <p> Sku: N/A</p>
              <p>Available: Instock</p>
              <p>Vendor: Umino</p>
              <p>Type: Umino</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold">Outstanding Features:</p>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
