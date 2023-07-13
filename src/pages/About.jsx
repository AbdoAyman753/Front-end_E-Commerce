import { Carousel } from "antd";
import pubg from "../assets/img/pubg.jpg";
import ocean from "../assets/img/ocean.jpg";
import fifa23 from "../assets/img/fifa23.jpg";
import knight from "../assets/img/knight.png";
import starship from "../assets/img/starship.webp";
import glory from "../assets/img/glory.webp";
import spyro from "../assets/img/spyro.jpg";

import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../components/ui/Logo";

const contentStyle = {
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about container">
      ////////////////////////////////CAROUSEL///////////////////////////////////////
      <Carousel
        className=" border m-auto mt-20 h-auto"
        effect="fade"
        autoplay="true"
      >
        <div style={contentStyle}>
          <img className="w-full h-96" src={ocean} loading="lazy"></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96 " src={pubg} loading="lazy"></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96" src={fifa23} loading="lazy"></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96" src={knight} loading="lazy"></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96" src={glory} loading="lazy"></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96" src={starship} loading="lazy"></img>
        </div>
        <div style={contentStyle}>
          <img className="w-full h-96" src={spyro} loading="lazy"></img>
        </div>
      </Carousel>
      {/* //////////////////BOX//////////////////// */}
      <div className="photo flex items-center justify-center mt-20 mb-20 ">
        <div className="about_community rounded-lg 	border-solid border p-3 ">
          <div className="about_content pt-8">
            <h2 className="about_title animate-pulse font-extrabold text-4xl text-line-primary	 normal-case tracking-normal text-center mb-10 font-mono">
              Join Our Community
            </h2>
          </div>
          <div className="about_box relative flex flex-row items-center ">
            <img
              className="about_box_img w-3/5 border-0 box-content overflow-clip  "
              src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_community.png"
              loading="lazy"
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
      <div className="about_video  overflow-hidden md:gap-0 gap-4 flex flex-col md:flex-row mt-2  justify-between  mx-auto  items-center">
        <div className=" text-white ms-3 md:order-none order-last md:w-2/5">
          <h1 className="text-center md:text-left">
            <div className="text-white font-semibold animate-bounce">
              <Logo />
            </div>{" "}
          </h1>
          <p className=" text-3xl ">
            V9 Games is the ultimate destination for playing, discussing, and
            creating games.
          </p>
        </div>
        <div className="about_monitor_video  md:w-4/5">
          <video
            className="video w-full h-auto  object-contain box-content overflow-clip "
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

      <div className="about_imgs mt-5 mx-auto mb-20">
        {/* 1st section */}
        <div className="flex flex-col md:gap-0 gap-4 md:flex-row md:justify-betwwen items-center">
          <img
            className="about_game w-3/5 box-content overflow-clip top-0 right-0  mr-10"
            src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware.png"

          ></img>
          <div>
            <h2 className="flex justify-center gap-1">
              <span className="text-red-600 text-3xl font-semibold">
                Experience{" "}
              </span>
              <div className="text-white text-3xl font-semibold  w-32 animate-bounce">
                <Logo />
              </div>{" "}
              <span className="text-red-600 text-3xl font-semibold ">
                Hardware
              </span>
            </h2>
            <p className="text-white">
              We created the V9 Deck and the Valve Index headset to make gaming
              on the PC even better.
            </p>
          </div>
        </div>
        {/* 2nd section */}
        <div className="flex flex-col md:gap-0 gap-4 mt-10 md:flex-row md:justify-betwwen items-center ">
          <div className="text-white md:order-none order-last ">
            <h2 className="text-white text-3xl text-center md:text-left  ">
              Release your Game
            </h2>
            <p className="text-white">
              V9 Games is services that help game developers and publishers get
              the most out of distributing games.
            </p>
          </div>
          <img
            className="about_game_img3 w-3/5  overflow-clip "
            src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_steamworks.png "
          ></img>
        </div>

      </div>
    </div>
  );
};

export default About;
