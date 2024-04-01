import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Home: React.FC = () => {
  const homePageData = useSelector(
    (state: RootState) => state.main.homePageData
  );
  const { home_banner } = homePageData.sections[0];
  return (
    <div className="home-page">
      <Carousel
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img alt="home-page-banner-1" src={home_banner.banner[0].url} />
        </div>
        <div>
          <img alt="home-page-banner-2" src={home_banner.banner[0].url} />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
