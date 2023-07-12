import { Carousel } from "antd";
import pubg from "../assets/img/pubg.jpg";
import ocean from "../assets/img/ocean.jpg";
import fifa23 from "../assets/img/fifa23.jpg";
import knight from "../assets/img/knight.png";
import starship from "../assets/img/starship.webp";
import glory from "../assets/img/glory.webp";
import spyro from "../assets/img/spyro.jpg";
const contentStyle = {
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const About = () => {
  return (
    ////////////////////////////////CAROUSEL///////////////////////////////////////

    <div className="about">
      <Carousel
        className="w-4/5 border m-auto mt-20 h-auto"
        effect="fade"
        autoplay="true"
      >
        <div style={contentStyle}>
          <img className="w-full h-96" src={ocean}></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96 " src={pubg}></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96" src={fifa23}></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96" src={knight}></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96" src={glory}></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96" src={starship}></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96" src={spyro}></img>
        </div>
      </Carousel>

      {/* //////////////////BOX//////////////////// */}

      <div className="photo flex items-center justify-center mt-20 mb-20 ">
        <div className="about_community rounded-lg w-4/5	border-solid border p-3 ">
          <div className="about_content pt-8">
            <h2 className="about_title font-extrabold text-4xl text-line-primary	 normal-case tracking-normal text-center mb-10 font-mono">
              Join Our Community
            </h2>
          </div>
          <div className="about_box relative flex flex-row items-center ">
            <img
              className="about_box_img w-3/5 border-0 box-content overflow-clip  "
              src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_community.png"
            ></img>
            <div
              className="about_text  text-3xl text-white ml-2.5 font-serif	"
              style={{ color: "#C6C6C6" }}
            >
              Meet new people, join groups, form clans, chat in-game and more!
              <br />
              The fun never stops!
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////THE VIDEO////////////// */}

      <div className="about_video w-[80vw] overflow-hidden flex mt-2  justify-between  mx-auto  items-center">
        <div className=" text-white ms-3">
          <h1>#logo</h1>
          <p className=" text-3xl ">
            V9 Games is the ultimate destination for playing, discussing, and
            creating games.
          </p>
        </div>
        <div className="about_monitor_video  w-[70vw]">
          <video
            className="video w-full h-auto object-contain box-content overflow-clip "
            autoPlay
            muted
            loop
            poster="https://cdn.cloudflare.steamstatic.com/store/about/videos/about_hero_loop_web.png"
          >
            <source src="https://cdn.cloudflare.steamstatic.com/store/about/videos/about_hero_loop_web.webm"></source>
            <source src="https://cdn.cloudflare.steamstatic.com/store/about/videos/about_hero_loop_web.mp4"></source>
          </video>
        </div>
      </div>

      {/* //////////////////GAMES PHOTOS//////////////////// */}

      <div className="about_imgs mt-5 ">
        <img
          className="about_game w-2/5 box-content overflow-clip float-right mr-10"
          src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware.png"
        ></img>
        <img
          className="about_game_img1 w-2/5 box-content overflow-clip "
          src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware_pt1.png"
        ></img>
        <img
          className="about_game_img2 w-2/5 box-content overflow-clip mb-5 ml-6"
          src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware_pt2.png"
        ></img>
        {/* <div className="relative">
          <img
            className="about_game_img1 absolute top-0 left-0 w-2/5 box-content overflow-clip "
            src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware_pt1.png"
          ></img>
          <img
            className="about_game_img2 absolute top-0 left-0 w-2/5 box-content overflow-clip mb-5 ml-6"
            src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware_pt2.png"
          ></img>
        </div> */}
        <img
          className="about_game_img3 w-2/5 box-content overflow-clip float-right mr-6"
          src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_steamworks.png "
        ></img>
      </div>
    </div>
  );
};

export default About;

/////////////
