import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Sugestion from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profil.jpg";

const SideBar = () => {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="onushkis.life"
          caption="Ona Girdzijauskaite"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Sugestion />
        <Footer />
      </div>
    </Sticky>
  );
};

export default SideBar;
