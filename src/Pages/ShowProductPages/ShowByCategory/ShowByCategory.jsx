import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../../components/Card/Card";
import { Breadcrumb, Select } from "antd";

const ShowByCategory = () => {
    const { products } = useParams();
    console.log(products);
    const [items, setItems] = useState([]);
    console.log(items);
  
    useEffect(() => {
      axios
        .get(`http://localhost:5000/showByCategory/${products}`)
        .then((response) => {
          setItems(response.data);
        });
    }, [products]);
    return (
        <div>
              <div className="px-10  flex items-center justify-between sticky top-0 bg-[#f5f5f5] z-10">
              <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                <Breadcrumb.Item>
                  <Link to={"/"}>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{products}</Breadcrumb.Item>
              </Breadcrumb>
              <Select
                defaultValue="Sort"
                className="w-2/12 me-16"
                // onChange={handleChange}
                options={[
                  {
                    value: "Low To High",
                    label: "Low To High",
                  },
                  {
                    value: "High To Low",
                    label: "High To Low",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {items.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
    );
};

export default ShowByCategory;