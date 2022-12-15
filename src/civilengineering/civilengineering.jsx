import React from "react";
import { Route, Link } from 'react-router-dom';
import styles from "./civilengineering.module.css"
import Footer from "../footer";
import Slider from '../Slider/Slider';
import SubSlider1 from '../Sub-slider/sub-slider4';
import SubSlider2 from '../Sub-slider/sub-slider5';
import SubSlider3 from '../Sub-slider/sub-slider6';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Civilengineering() {
    return (
        <section id="container" className={styles.container}>
            <div className={styles.sub_visual_building}>
                <div className={styles.page_tit_wrap}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.main_building}>
                        <div className={styles.main_img}>
                            <strong className={styles.page_tit}>토목사업</strong>
                            <div className={styles.page_subtit}>기술과 역량을 바탕으로 새로운 공간 창조</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className={styles.content}>
                <div className={styles.tab_menu1}>
                    <div>
                        <Link to='/majorbussiness/majorbussiness'>주요사업안내</Link>
                        <a href="/construct/construct">건축사업</a>
                        <a href="/civilengineering/civilengineering" className={styles.on}>토목사업</a>
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
                        <span>토목사업</span>
                        <span>토목사업</span>
                    </div>
                    <form name="search" method="post">

                    </form>
                    <h3 className={styles.tit}>토목사업
                        <a href="#"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.text} />
                    </h3>
                    <p className={styles.subtit}>CIVIL Infrastructure</p>
                    <p className={styles.subtit_explain}>토목사업은 자연의 터전에 새로운 공간을 창조하는 산업입니다. 삼성물산 건설부문은 도로, 교량, 터널, 철도 및 항만, 공항, 댐 등 국가의 기반이 되는 기간시설에 주력하고 있으며, 자원개발 인프라 및 수력발전, 해상풍력 등 에너지 인프라 분야로도 확장하고 있습니다. 또한 중동과 동남아 시장 중심에서 영국, 호주 등 선진국에서도 해외 인프라 건설에 참여하고 있습니다.</p>
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
                                인천 국제공항 연결 연륙교
                            </p>
                            <h4 className={styles.building_title}>인천대교</h4>
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
                                경험과 선진기술
                            </div>
                            <p className={styles.text_description}>
                                삼성물산 건설부문은 세계 최초의 자정식 현수교인 영종대교,
                                세계 10대 사장교인 인천대교를 성공적으로 완공하는 등 도로 및
                                교량분야의 기술력을 바탕으로 선진국으로 진출, 현재 호주 WestConnex
                                지하차도, 영국 Mersey Gateway 등을 수행하고 있습니다.
                                항만 분야에서는 국내 최대 규모의 부산 신항만 민자부두를 건설하였고,
                                영주댐, 한강살리기, 용산정화사업, 시화 MTV 등 수자원 분야 및 대규모
                                단지 개발에 있어서도 풍부한 노하우를 가지고 세계의 땅을 개척하고 있습니다.
                                또한 철도분야에서는 경부고속철도를 비롯하여 사우디, 카타르, 대만, 싱가포르,
                                홍콩 등 전 세계 철도 및 지하철 공사에 연이어 참여하는 등 세계 초일류 기업으로
                                자리매김 하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.sub_content}>
                    <div className={styles.picture_select}>
                        <div className={styles.title_wrap_plaza}>
                            <p className={styles.title_length}>
                                항만, 철도, 플랜트 복합개발 프로젝트
                            </p>
                            <h4 className={styles.building_title}>호주 Roy Hill</h4>
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
                                대형 토목사업의 경쟁력 확보
                            </div>
                            <p className={styles.text_description}>
                                삼성물산 건설부문은 지하철, 철도, 교량, 항만, 댐 등 대단위 사업에 참여하여 대형토목사업의 경쟁력을 확보하고 있습니다.
                                엔지니어링 역량을 바탕으로 설계에서 시공까지 일괄적으로 수행할 뿐만 아니라, 투자를 동반한 인프라 건설 및 운영에도 참여하고 있습니다.
                                사업을 수행하는 데 필요한 전문인력을 확보하기 위해 장기적인 계획하에 해외 선진사 연수 및 체계적인 전문기술 교육을 실시함으로써 각 공정의
                                전문가를 양성하고 있으며 국내외 건설시장에서 보다 높은 경쟁력을 확보하기 위해 글로벌 우수인재를 발굴하는 것은 물론 기술개발 투자를
                                늘려감으로써 글로벌 토목사업에서 업계 수위로 도약하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.sub_content}>
                    <div className={styles.picture_select}>
                        <div className={styles.title_wrap}>
                            <p className={styles.title_length}>
                                국내 최대 규모 항만시설
                            </p>
                            <h4 className={styles.building_title}>
                                부산신항만
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

export default Civilengineering;