import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home: React.FC = () => {
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
          <img src="https://images.contentstack.io/v3/assets/blt6f19dec108148cb9/blt9a28b03671452955/65e9dd2428294d1673f2187a/youtube-banner-8077450_1280.jpg" />
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/blt6f19dec108148cb9/blt9a28b03671452955/65e9dd2428294d1673f2187a/youtube-banner-8077450_1280.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
