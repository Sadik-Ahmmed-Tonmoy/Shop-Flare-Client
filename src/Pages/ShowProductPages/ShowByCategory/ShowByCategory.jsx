import { Link, useParams } from "react-router-dom";
import Card from "../../../components/Card/Card";
import { Breadcrumb, Select } from "antd";
import useCategory from "../../../hooks/useCategory";
import ClipLoader from "react-spinners/ClipLoader";

const ShowByCategory = () => {
  const { item } = useParams();

  const [categoryData, status] = useCategory(item);

  return (
    <div>
      {status === "loading" ? (
        <div className="flex items-center justify-center h-full md:mt-20">
          <ClipLoader
            color={"#f09133"}
            loading={status}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          {" "}
          <div className="md:px-10 md:flex items-center justify-between sticky top-0 bg-[#f5f5f5] z-10">
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>
                <Link to={"/"}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{categoryData[0]?.category}</Breadcrumb.Item>
            </Breadcrumb>
            <Select
              defaultValue="Sort"
              className="md:w-2/12"
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
            {categoryData.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowByCategory;
