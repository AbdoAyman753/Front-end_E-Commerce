import home from '../../assets/img/home.gif'
const HomeImg = () => {
    return (
        
        <div
        className="img_home h-[86vh] bg-no-repeat w-full bg-cover"
        style={{ backgroundImage: `url(${home})` }}
      >
        {/* <div className="text font-extrabold text-6xl w-1/2	text-white font-mono z-10 flex mt-32">
          <div>
            <p>
              Welcome to{" "}
              <span className="text-yellow-300 text-7xl ">v9Games</span>{" "}
            </p>
            
          </div>
        </div> */}
    </div>
     );
}
 
export default HomeImg;