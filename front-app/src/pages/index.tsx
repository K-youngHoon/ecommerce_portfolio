import { authHoc } from "@src/components/common";
import { HomeHeader, HomeFooter } from "@src/components/layouts";

function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeFooter />
    </div>
  );
}

export default authHoc(Home);
