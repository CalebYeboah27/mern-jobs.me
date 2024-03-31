import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job<span>tracking </span> app
            </h1>
            <p>
              I'm baby tumeric kombucha 90's, leggings chicharrones banjo
              blackbird spyplane iPhone next level. Ugh af umami live-edge tofu
              tonx kombucha salvia tumeric slow-carb cupping yuccie. Gorpcore
              paleo vegan readymade try-hard twee intelligentsia forage yr.
            </p>
            <button className="btn btn-hero">Login/Register</button>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};
export default Landing;
