import React from "react";
import Banner from "../components/FrontPage";
import HomeData from "../Data/HomeData.json";
import Featured from "../components/FrontPage/Featured";
import IntroCard from "../components/Intro";

const FrontPage = () => {
  return (
    <>
      <section className="home-section" style={{ padding: "0px" }}>
        {HomeData?.BannerData?.map((item, index) => {
          return (
            <Banner
              key={index}
              heading={item.title}
              description={item.description}
              btnText={item.btnText}
            />
          );
        })}
        {HomeData?.explore?.map((item, index) => {
            return (
                <Featured
                  key={index}
                  Subheading={item.subheading}
                  Heading={item.heading}
                  Description={item.description}
                />
              
              );
        })}
        <IntroCard/>
      </section>
    </>
  );
};

export default FrontPage;
