import searchIcon from "../assets/magnifying-glass.svg";
import homeIcon from "../assets/house-simple.svg";
import movieIcon from "../assets/film-slate.svg";
import monitorIcon from "../assets/monitor.svg";
import trendIcon from "../assets/trend-up.svg";
import plusIcon from "../assets/plus.svg";
import titlecard from "../assets/My_Demon-logo.png";
import MovieCard from "../components/MovieCard";
import './home.css'



function Home() {
  return (
    <div className="netflix">
      <div className="sidebar">
        <img src={searchIcon} alt="Search icon" />
        <button>
          <img src={homeIcon} alt="Home icon"  />
        </button>
        
        <img src={movieIcon} alt="Movie icon "  />
        <img src={monitorIcon} alt="Monitor icon"  />
        <img src={trendIcon} alt="trend icon"  />
        <img src={plusIcon} alt="plus icon"  />
        
      </div>
        <div className="main">
            <div className="det">
              <img src={titlecard} alt="titlecard" />
              <p>Rating : 8/10</p>
              <p>2M Streams</p>
              <div className="hero-button">
          <button className="b1">Play</button>
          <button className="b2">Watch Trailer</button>
        </div>
      </div>
      <MovieCard Mtitle="New This Week"/>
      <MovieCard Mtitle="Trending"/>
    </div>
          </div>
  )
}

export default Home