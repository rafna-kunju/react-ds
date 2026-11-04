import React from 'react';
import sm1 from "../assets/sm1.jpg";
import sm2 from "../assets/sm2.jpg";
import sm3 from "../assets/sm3.jpg";
import sm4 from "../assets/sm4.jpg";
import sm5 from "../assets/sm5.jpg";
import sm6 from "../assets/sm6.jpg";
import smallmovie from "../assets/smallmovie.jpg";
import moviesm2 from "../assets/moviesm2.jpg";
import s7 from "../assets/s7.jpg";
import './moviecard.css'

function MovieCard({Mtitle}) {
  return (
    <div>
        <h1 className="mltitle">{Mtitle}</h1>
        <div className="mlist">
            <img src={sm1} alt="" />
            <img src={sm2} alt="" />
            <img src={sm3} alt="" />
            <img src={sm4} alt="" />
            <img src={sm5} alt="" />
            <img src={sm6} alt="" />
            <img src={sm1} alt="" />
            <img src={sm2} alt="" />
            <img src={sm3} alt="" />
            <img src={sm4} alt="" />
            <img src={sm5} alt="" />
            <img src={sm6} alt="" />
            <img src={smallmovie} alt="" />
            <img src={moviesm2} alt=""/>
            <img src={s7} alt=""/>
        </div>
    </div>
  )
}

export default MovieCard