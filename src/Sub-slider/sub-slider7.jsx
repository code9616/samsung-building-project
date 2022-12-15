import React, { Component } from 'react';
import Slider from 'react-slick';

import wArrowRight from "../images/main-next-btn.png";
import wArrowLeft from "../images/main-pre-btn.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../Sub-slider/sub-slider7.module.css";
// yarn 일때
// yarn add react-slick 
// npm install slick-carousel
// npm install react-slick @types/react-slick slick-carousel


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            alt="Right"
            id="right"
            className={className}
            style={{ ...style, display: "block", left: "690px", width: "30px", height: "50px" }}
            onClick={onClick}
            src={wArrowRight}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            alt="Left"
            id="left"
            className={className}
            style={{ ...style, display: "block", left: "26px", zIndex: "1", width: "30px", height: "50px" }}
            onClick={onClick}
            src={wArrowLeft}
        />
    );
}

const SubSlider = () => {

    const settings = {
        infinite: true,//loop 사용유뮤
        speed: 800,//지나가는 속도
        autoplay: true,//자동실행유뮤
        autoplaySpeed: 60000000,//자동실행되는속도
        slideToShow: 1,// 한번에 보여줄 슬라이드쇼의 갯수
        slideToScroll: 1,// 슬라이드로 넘길 갯수
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return (
        <div>
            <Slider {...settings}>
                {/* <div className={styles.slider_list}> */}
                <div className={styles.slider_one}>
                    <div className={styles.title_box_one}>

                    </div>
                </div>
                <div className={styles.slider_two}>
                    <div className={styles.title_box_two}>

                    </div>
                </div>
                {/* </div> */}
            </Slider>
        </div>
    )
}

export default SubSlider;
