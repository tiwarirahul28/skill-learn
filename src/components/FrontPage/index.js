import "./index.css";

const Banner = ({ image, heading, description, btnText }) => {
  return (
    <>
      <div className="banner--img">
        <div className="content">
          <h1>{heading}</h1>
          <p>{description}</p>
          <a href="#Featured" rel="noreferrer">{btnText}</a>
        </div>
      </div>
    </>
  );
};

export default Banner;
