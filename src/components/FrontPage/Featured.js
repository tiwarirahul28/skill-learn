import "./index.css";
import Cards from "../../components/cards/CardBox";
import HomeData from "../../Data/HomeData.json";

const Featured = ({ Subheading, Heading, Description }) => {
  return (
    <>
      <div className="Featured--section">
        <div className="content" id="Featured">
          <span>{Subheading}</span>
          <h2>{Heading}</h2>
          <p>{Description}</p>
        </div>
        <div className="card">
          {HomeData?.data?.map((item, index) => {
            return (
              <Cards
                style={{ padding: "30px 0" }}
                key={index}
                img={item.img}
                category={item.category}
                heading={item.heading}
                authImg={item.authImg}
                authName={item.authName}
                level={item.skillLevel}
                authLink={item.authLink}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;
