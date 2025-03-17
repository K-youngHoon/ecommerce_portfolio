import { authHoc } from "@src/components/auth";
import { HomeHeader, HomeFooter } from "@src/components/layouts";

import homeStyles from "./home.module.scss";
// import { BannerSlider } from "@src/components/slide";

function Home() {
  return (
    <div>
      <HomeHeader />
      <main className={homeStyles.mainContainer}>{/* <BannerSlider /> */}</main>
      <HomeFooter />
    </div>
  );
}

export default Home;
// export default authHoc(Home);
