import TopImageHome from "./TopImageHome";
import SecondImagesHome from "./SecondImagesHome";
import ThirdImagesHome from "./ThirdImagesHome";
import ScrollImagesHome from "./ScrollImagesHome";

const Home = ({ clothes }) => {
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <TopImageHome />
      <SecondImagesHome />
      <ThirdImagesHome />
      <ScrollImagesHome clothes={clothes} />
    </div>
  );
};

export default Home;
