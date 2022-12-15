import React from "react";
import { Route, Link } from 'react-router-dom';
import styles from "./construct.module.css";
import Footer from "../footer";
import Slider from '../Slider/Slider';
import SubSlider1 from '../Sub-slider/sub-slider1';
import SubSlider2 from '../Sub-slider/sub-slider2';
import SubSlider3 from '../Sub-slider/sub-slider3';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Construct() {
    return (
        <section id="container" className={styles.container}>
            <div className={styles.sub_visual_building}>
                <div className={styles.page_tit_wrap}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.main_building}>
                        <div className={styles.main_img}>
                            <strong className={styles.page_tit}>건축사업</strong>
                            <div className={styles.page_subtit}>세계의 도시를 건설하는 무한창조의 꿈</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className={styles.content}>
                <div className={styles.tab_menu1}>
                    <div>
                        <Link to='/majorbussiness/majorbussiness'>주요사업안내</Link>
                        <a href="/construct/construct" className={styles.on}>건축사업</a>
                        <a href="/civilengineering/civilengineering">토목사업</a>
                        <a href="/plant/plant">플랜트사업</a>
                        <a href="/house/house">주택사업</a>
                        <Link to='/landmark/landmark'>LANDMARK</Link>
                    </div>
                </div>
            </div>
            <div className={styles.sub_wrap}>
                <div className={styles.tit_wrap}>
                    <div className={styles.location}>
                        <span className={styles.home}></span>
                        <span>건축사업</span>
                        <span>건축사업</span>
                    </div>
                    <form name="search" method="post">

                    </form>
                    <h3 className={styles.tit}>건축사업
                        <a href="#"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.text} />
                    </h3>
                    <p className={styles.subtit}>DREAM CREATOR</p>
                    <p className={styles.subtit_explain}>더 높은 하늘을 향해, 더 넓은 세계를 향해 인류에 대한 더 깊은 열정으로 꿈을 실현합니다. 이제 더 큰 미래를 향해 삼성물산 건설부문은 또다시 새로운 세계를 건설할 것입니다.</p>
                </div>
                <div className={styles.tab_menu2}>
                    <ul>
                        <li>
                            <a href="#" className={styles.on}>사업소개</a>
                        </li>
                        <li>
                            <a href="#">포트폴리오</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.sub_content}>
                    <div className={styles.picture_select}>
                        <div className={styles.title_wrap}>
                            <p className={styles.title_length}>
                                現 세계 최고층 빌딩, 829.84m
                            </p>
                            <h4 className={styles.building_title}>BURJ KHALIFA</h4>
                            <a href="#" className={styles.btn_portfolio}>포트폴리오</a>
                        </div>
                        <div className={styles.slide_wrap}>
                            <div className={styles.slide_box}>
                                <div className={styles.box_paper_khalifa}>
                                    <a></a>
                                    <a></a>
                                </div>
                                <div className={styles.slide_list_khalifa}>
                                    <SubSlider1 />
                                </div>
                            </div>
                        </div>
                        <div className={styles.explicate}>
                            <div className={styles.text_title}>
                                세계 3대 마천루를 시공한 삼성물산 건설부문의 기술력
                            </div>
                            <p className={styles.text_description}>
                                삼성물산 건설부문은 건축사업 분야에서 공사원가와 건설기간을 단축시키는
                                첨단 공법 개발과 공간 활용을 극대화 시킬 수 있는 최적의 디자인 설계로
                                건축 전분야에 걸쳐 다양한 시공경험을 자랑합니다. 특히 구조설계,
                                최적 설비시스템, 고강도 콘크리트, 양중 등 최첨단 핵심기술과 시공기술 노하우가
                                필요한 초고층 빌딩분야에서 세계 최고층 마천루인 말레이시아 페트로나스 타워,
                                타이페이 금융센터에 이어 부르즈칼리파까지 세계에서 가장 높은 3개의 마천루를
                                모두 직접 시공함으로써 초고층 분야 세계 톱 클래스 위상을 높여가고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.sub_content}>
                    <div className={styles.picture_select}>
                        <div className={styles.title_wrap_plaza}>
                            <p className={styles.title_length}>
                                연면적 85,320㎡,<br />
                                세계 최대 비정형 건축물
                            </p>
                            <h4 className={styles.building_title}>동대문 디자인 플라자</h4>
                            <a href="#" className={styles.btn_portfolio}>포트폴리오</a>
                        </div>
                        <div className={styles.slide_wrap}>
                            <div className={styles.slide_box}>
                                <div className={styles.box_paper_plaza}>
                                    <a href="#"></a>
                                    <a href="#"></a>
                                </div>
                                <div className={styles.slide_list_plaza}>
                                    <SubSlider2 />
                                </div>
                            </div>

                        </div>
                        <div className={styles.explicate}>
                            <div className={styles.text_title}>
                                첨단 기술력으로 건설해온 다양한 포트폴리오
                            </div>
                            <p className={styles.text_description}>
                                삼성물산 건설부문은 초고층 분야 뿐만 아니라 공항, 의료시설, 비정형 건축물 및 첨단 생산 시설을 건설하는 엔지니어링 역량을 보유하고 있습니다.
                                동북아시아 최대의 승객 및 화물 허브인 인천국제공항, 중동의 최신 복합 의료 시설인 클리브랜드 클리닉 아부다비, 아시아 최대의 암 진료 센터인 삼성서울병원 암센터,
                                서울 도심 속 랜드마크이자 미래 지향적 건축물의 아이콘으로 자리 잡은 동대문디자인플라자 등은 삼성물산 건설부문이 최근에 거둔 대표적인 성과물입니다.
                                이처럼 삼성물산 건설부문은 새로운 기술력과 가능성 탐구를 통해 미래를 향한 전진을 계속하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.sub_content}>
                    <div className={styles.picture_select}>
                        <div className={styles.title_wrap}>
                            <h4 className={styles.building_title}>
                                베트남<br />
                                삼성디스플레이 OLED 공장
                            </h4>
                            <a href="#" className={styles.btn_portfolio}>포트폴리오</a>
                        </div>
                        <div className={styles.slide_wrap}>
                            <div className={styles.slide_box}>
                                <div className={styles.box_paper_Vietnam}>
                                    <a href="#"></a>
                                    <a href="#"></a>
                                </div>
                                <div className={styles.slide_list_Vietnam}>
                                    <SubSlider3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Construct;