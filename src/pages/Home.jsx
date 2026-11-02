import searchIcon from "../assets/magnifying-glass.svg";
import homeIcon from "../assets/house-simple.svg";
import movieIcon from "../assets/film-slate.svg";
import monitorIcon from "../assets/monitor.svg";
import trendIcon from "../assets/trend-up.svg";
import plusIcon from "../assets/plus.svg";
import titlecard from "../assets/My_Demon-logo.png";
 
import './home.css'



function Home() {
  return (
    <div className="netflix">
      <div className="sidebar">
        <img src={searchIcon} alt="Search icon" />
        <img src={homeIcon} alt="Home icon"  />
        <img src={movieIcon} alt="Movie icon "  />
        <img src={monitorIcon} alt="Monitor icon"  />
        <img src={trendIcon} alt="trend icon"  />
        <img src={plusIcon} alt="plus icon"  />
        
      </div>
        <div className="main">
            <div className="det">
              <img src={titlecard} alt="titlecard" />
            </div>
          </div>
    </div>
  )
}

export default Home