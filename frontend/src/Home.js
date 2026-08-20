import TopImageHome from "./TopImageHome";
import SecondImagesHome from "./SecondImagesHome";
import ThirdImagesHome from "./ThirdImagesHome";
import ScrollImagesHome from "./ScrollImagesHome";

const Home = ({ clothes }) => {
  return (
    <main className="home-page">
      <TopImageHome />
      <SecondImagesHome />
      <ThirdImagesHome />
      <ScrollImagesHome clothes={clothes} />
    </main>
  );
};

export default Home;
