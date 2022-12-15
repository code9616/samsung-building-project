import React, { Component } from 'react';
import Slider from 'react-slick';
import { Route, Link } from 'react-router-dom';

import wArrowRight from "../images/main-next-btn.png";
import wArrowLeft from "../images/main-pre-btn.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../Slider/Slider.module.css";
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
            style={{ ...style, display: "block", right: "40px", width: "30px", height: "50px" }}
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
            style={{ ...style, display: "block", left: "40px", zIndex: "1", width: "30px", height: "50px" }}
            onClick={onClick}
            src={wArrowLeft}
        />
    );
}

const Carousel = () => {

    const settings = {
        dots: true,//이미지순서를 알려줌
        infinite: true,//loop 사용유뮤
        speed: 1000,//지나가는 속도
        autoplay: true,//자동실행유뮤
        autoplaySpeed: 60000,//자동실행되는속도
        slideToShow: 1,// 한번에 보여줄 슬라이드쇼의 갯수
        slideToScroll: 1,// 슬라이드로 넘길 갯수
        dotsClass: "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => (
            <div
                style={{
                    width: '100%',
                    position: 'absolute',
                    top: '20px',
                    right: '468px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
            >
                <ul> {dots} </ul>
            </div>
        )
    }
    return (
        <div>
            <Slider {...settings}>
                <div className={styles.slider_one}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.title_box_one}>
                        <strong className={styles.title_one}>Burj Khalifa</strong>
                        <p className={styles.title_name_one}>현존 세계 최고층 빌딩, 부르즈 칼리파</p>
                        <p className={styles.title_des_one}>
                            삼성물산은 현재 세계 최고층 빌딩인 부르즈칼리파와 타이페이 101, 말레이시아 페트로나스 타워 등<br />
                            세계적 초고층 빌딩들을 시공함으로써 초고층 분야 세계 톱 클래스 위상을 높여가고 있습니다.
                        </p>
                    </div>
                </div>
                <div className={styles.slider_two}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.title_box_two}>
                        <strong className={styles.title_two}>Incheon Grand Bridge</strong>
                        <p className={styles.title_name_two}>동북아시아의 관문, 한국 최장 교량 인천대교 </p>
                        <p className={styles.title_des_two}>
                            삼성물산은 한국의 관문인 인천국제공항과 서울을 연결하는 두 개의 다리,<br />
                            인천대교와 영종대교를 건설하여 차별화된 도로/교량 건설 능력을 확보하고 있습니다.
                        </p>
                    </div>
                </div>
                <div className={styles.slider_three}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.title_box_three}>
                        <strong className={styles.title_three}>Qurayyah IPP</strong>
                        <p className={styles.title_name_three}>4000MW, 세계 최대의 단일 규모 복합화력 발전소, 쿠라야</p>
                        <p className={styles.title_des_three}>
                            쿠라야 IPP 프로젝트는 발전용량이 3927MW에 달하는<br />
                            세계 최대 규모의 단일 규모 복합화력 발전소입니다.
                        </p>
                    </div>
                </div>
                <div className={styles.slider_four}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.title_box_four}>
                        <strong className={styles.title_four}>Raemian Cǽlĭtus</strong>
                        <p className={styles.title_name_four}>압도적 조망권 한강변 200m 최고층, 래미안 첼리투스</p>
                        <p className={styles.title_des_four}>
                            래미안 첼리투스는 한강변에 위치한 56층의 초고층 아파트로, <br />
                            세계적인 해외 설계사들이 참여하여 외관 디자인과 조경 등을 특화시킨 랜드마크 단지입니다.
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;
