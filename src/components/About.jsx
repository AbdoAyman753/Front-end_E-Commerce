import logo from '../assets/img/logo.jpg'

const About =() =>{
    return (
        <>

        {/* /////////////// VIDEO AND LOGO////////////// */}

        <div className="about_header_area  overflow-hidden">
            <div className="about_area_inner_wrapper ">
                <div className="about_monitor_video absolute right-0 w-3/5 ">
                    <video className="video w-full h-auto object-contain box-content overflow-clip " autoPlay muted loop 
                    poster="https://cdn.cloudflare.steamstatic.com/store/about/videos/about_hero_loop_web.png">
                        <source src="https://cdn.cloudflare.steamstatic.com/store/about/videos/about_hero_loop_web.webm"></source>
                        <source src="https://cdn.cloudflare.steamstatic.com/store/about/videos/about_hero_loop_web.mp4"></source>
                    </video>
                </div>
                <div className="about_header overflow-hidden w-28 ml-8 mt-7">
                    <div className="about_greeting relative">
                        <div className="logo">
                            <img src={logo} alt="Our logo"></img>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        {/* ////////////////////GAMES PHOTOS LEFT////////////////// */}

        <div className="about_games_cta_area relative  pt-96  ">
            <div className="about_games_cta_bg bg-cover bg-no-repeat bg-center  "></div>
            <div className="about_inner_wrapper  relative ">
                <div className="about_games_cta text-center mx-8">
                    <div className="about_games_hero relative " >
                        <div className="games_col inset-y-0 flex w-full flex-col items-center justify-center " >
                            <div className="game_image opacity-40 w-60 float-left mr-96 my-6" data-rellax-percentage="0.5"  >
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_231x87.jpg?t=1683566799"></img>
                            </div>
                            <div className="game_image opacity-40 w-60 float-left ml-80 my-6" data-rellax-percentage="0.5" data-rellax-speed="0.8" >
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_231x87.jpg?t=1685123076" ></img>
                            </div>
                            <div className="game_image opacity-40 w-60  float-left mr-72 my-6" data-rellax-percentage="0.5" data-rellax-speed="0.8" >
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_231x87.jpg?t=1684838697" ></img>
                            </div>
                            <div className="game_image opacity-40 w-60  float-left ml-64 my-6" data-rellax-percentage="0.5" data-rellax-speed="0.8" >
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/capsule_231x87.jpg?t=1686291121" ></img>
                            </div>
                            <div className="game_image opacity-40 w-60 float-left mr-64 my-6" data-rellax-percentage="0.5" data-rellax-speed="1.5"  >
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/518790/capsule_231x87_alt_assets_8.jpg?t=1687251606" ></img>
                            </div>
                            <div className="game_image opacity-40 w-60  float-left ml-72 my-6" data-rellax-percentage="0.5" data-rellax-speed="1.5">
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/381210/capsule_231x87.jpg?t=1687465991" ></img>
                            </div>
                            <div className="game_image opacity-40 w-60  float-left mr-80 my-6" data-rellax-percentage="0.5" data-rellax-speed="3" >
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_231x87.jpg?t=1678296348" ></img>
                            </div>
                            <div className="game_image opacity-40 w-60 float-left ml-96 my-6" data-rellax-percentage="0.5" data-rellax-speed="3" >
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/306130/capsule_231x87.jpg?t=1685974187" ></img>
                            </div>
                        </div>

                                {/* ////////////////////GAMES PHOTOS RIGHT////////////////// */}
                                
                        <div className="games_col  inset-y-0 flex w-full flex-col items-center justify-center">
                            <div className="game_image opacity-40 w-60 float-left mr-96 my-6 " data-rellax-percentage="0.5" data-rellax-speed="0.8" style={{ transform: "translate3d(0px, -40px, 0px)" }}>
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/671860/capsule_231x87.jpg?t=1686877598" className="visible"></img>
                            </div>
                            <div className="game_image opacity-40 w-60 float-left ml-80 my-6 "  data-rellax-percentage="0.5" data-rellax-speed="0.8" style={{ transform: "translate3d(0px, -40px, 0px)" }}>
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1548850/capsule_231x87.jpg?t=1687576255" className="visible"></img>
                            </div>
                            <div className="game_image opacity-40 w-60  float-left mr-72 my-6"  data-rellax-percentage="0.5" data-rellax-speed="0.8" style={{ transform: "translate3d(0px, -40px, 0px)" }}>
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/capsule_231x87.jpg?t=1683059745" className="visible"></img>
                            </div>
                            <div className="game_image opacity-40 w-60 float-left ml-64 my-6 "  data-rellax-percentage="0.5" data-rellax-speed="1.5" style={{ transform: "translate3d(0px, -75px, 0px)" }}>
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1675200/capsule_231x87.jpg?t=1683590972" className="visible"></img>
                            </div>
                            <div className="game_image opacity-40 w-60 float-left mr-64 my-6"  data-rellax-percentage="0.5" data-rellax-speed="1.5" style={{ transform: "translate3d(0px, -75px, 0px)" }}>
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/281990/capsule_231x87.jpg?t=1687453160" className="visible"></img>
                            </div>
                            <div className="game_image opacity-40 w-60  float-left ml-72 my-6"  data-rellax-percentage="0.5" data-rellax-speed="1.5" style={{ transform: "translate3d(0px, -75px, 0px)" }}>
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/capsule_231x87.jpg?t=1687571108" className="visible"></img>
                            </div>
                            <div className="game_image opacity-40 w-60  float-left mr-80 my-6"  data-rellax-percentage="0.5" data-rellax-speed="3" style={{ transform: "translate3d(0px, -150px, 0px)" }}>
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1942280/capsule_231x87.jpg?t=1687514377" className="visible"></img>
                            </div>
                            <div className="game_image opacity-40 w-60 float-left ml-96 my-6 "  data-rellax-percentage="0.5" data-rellax-speed="3" style={{ transform: "translate3d(0px, -150px, 0px)" }}>
                                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/916440/capsule_231x87.jpg?t=1681854014" className="visible"></img>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="about_ctas_area ">
            <div className="about_area_inner_wrapper relative">
                <div className="about_ctas">
                    <div className="about_cta_community ">
                    <div className="cta_content">
                            <h2 className="cta_title font-bold text-lg  text-orange-500 normal-case tracking-normal text-center mb-10">Join Our Community</h2>
                            <div className="cta_text font-bold text-lg  text-orange-600 text-center mb-10">
                                Meet new people, join groups, form clans, chat in-game and more! The fun never stops!
                            </div>
                        </div>
                        <div className="cta_hero relative float-right ">
                            <img className="hero_community w-3/5 border-0 box-content overflow-clip " src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_community.png"></img>
                            <img className="hero_community_pt1 w-3/5 border-0 box-content overflow-clip" src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_community_pt1.png" ></img>
                            <img className="hero_community_pt2 w-3/5 border-0 box-content overflow-clip" src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_community_pt2.png" ></img>
                            <img className="hero_community_pt3 w-3/5 border-0 box-content overflow-clip" src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_community_pt3.png" ></img>
                        </div>
                    </div>
                    <div className="about_cta_hardware " >
                        <div className="cta_hero relative">
                            <img className="hero_hardware w-2/5 border-0 box-content overflow-clip float-right" src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware.png"></img>
                            <img className="hero_hardware_pt1 w-2/5 border-0 box-content overflow-clip" src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware_pt1.png" ></img>
                            <img className="hero_hardware_pt2 w-2/5 border-0 box-content overflow-clip" src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware_pt2.png" ></img>
                        </div>
                        
                    </div>
                    <div className="about_cta_steamworks" >
                        <div className="cta_hero relative ">
                            <img className="hero_steamworks w-2/5 border-0 box-content overflow-clip float-right"  src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_steamworks.png "></img>
                            <img className="hero_steamworks_pt1 w-2/5 border-0 box-content overflow-clip" src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_steamworks_pt1.png" ></img>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="about_steam_features_area">
            
        </div>
        </>
    )
}

export default About;