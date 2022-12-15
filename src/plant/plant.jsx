import React from "react";
import { Route, Link } from 'react-router-dom';
import Footer from "../footer";
import styles from "./plant.module.css"
import Slider from '../Slider/Slider';
import SubSlider7 from '../Sub-slider/sub-slider7';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Plant() {
    return (
        <section id="container" className={styles.container}>
            <div className={styles.sub_visual_building}>
                <div className={styles.page_tit_wrap}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.main_building}>
                        <div className={styles.main_img}>
                            <strong className={styles.page_tit}>플랜트사업</strong>
                            <div className={styles.page_subtit}>Global 수준의 경쟁력으로 세계를 선도하는 Value Creator로 도약</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className={styles.content}>
                <div className={styles.tab_menu1}>
                    <div>
                        <Link to='/majorbussiness/majorbussiness'>주요사업안내</Link>
                        <a href="/construct/construct">건축사업</a>
                        <a href="/civilengineering/civilengineering">토목사업</a>
                        <a href="/plant/plant" className={styles.on}>플랜트사업</a>
                        <a href="/house/house">주택사업</a>
                        <Link to='/landmark/landmark'>LANDMARK</Link>
                    </div>
                </div>
            </div>
            <div className={styles.sub_wrap}>
                <div className={styles.tit_wrap}>
                    <div className={styles.location}>
                        <span className={styles.home}></span>
                        <span>플랜트사업</span>
                        <span>플랜트사업</span>
                    </div>
                    <form name="search" method="post">

                    </form>
                    <h3 className={styles.tit}>플랜트사업
                        <a href="#"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.text} />
                    </h3>
                    <p className={styles.subtit}>GLOBAL EPC CONTRACTOR</p>
                    <p className={styles.subtit_explain}>플랜트사업은 에너지 인프라를 건설하는 다공종 고급기술이 집약된, 경제적 파급력이 큰 고부가 가치의 고수익 사업입니다.
                        삼성물산 건설부문은 국내의 다양한 경험을 바탕으로 해외로 진출한 이래로, 세계 최대규모인 사우디 Qurayyah 복합화력발전을 비롯하여 싱가포르 LNG 터미널, UAE 원전 등
                        대규모 프로젝트를 수행함으로써 Global 수준의 기술력을 입증하였습니다.</p>
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
                                세계 최대 규모 단일 복합화력발전소
                            </p>
                            <h4 className={styles.building_title}>
                                사우디<br />
                                Qurayyah 복합화력발전
                            </h4>
                            <a href="#" className={styles.btn_portfolio}>포트폴리오</a>
                        </div>
                        <div className={styles.slide_wrap}>
                            <div className={styles.slide_box}>
                                <div className={styles.box_paper_khalifa}>
                                    <a></a>
                                    <a></a>
                                </div>
                                <div className={styles.slide_list_khalifa}>
                                    <li className={styles.subslider7}><img /></li>
                                </div>
                            </div>
                        </div>
                        <div className={styles.explicate}>
                            <div className={styles.text_title}>
                                화력발전
                            </div>
                            <p className={styles.text_description}>
                                <span>화력발전 시장의 Global Top-Player</span><br />
                                삼성물산 건설부문은 복합화력발전부터 석탄화력발전 등 다수 프로젝트를 성공리에 완공/진행하고 있습니다.
                                2011년에는 세계최대규모 복합화력발전인 사우디 Qurayyah에 이어 UAE Emal, 말련 Prai, 사우디 Rabigh 2 등의 프로젝트를 연속 수주하였고, 현재까지 대형 발전 프로젝트를
                                매년 지속적으로 수주하며 명실상부 대형 발전시장의 Global Top Player로 부상하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.sub_content}>
                    <div className={styles.picture_select}>
                        <div className={styles.title_wrap_plaza}>
                            <p className={styles.title_length}>
                                한국형 원전 최초 수출
                            </p>
                            <h4 className={styles.building_title}>UAE원전</h4>
                            <a href="#" className={styles.btn_portfolio}>포트폴리오</a>
                        </div>
                        <div className={styles.slide_wrap}>
                            <div className={styles.slide_box}>
                                <div className={styles.box_paper_plaza}>
                                    <a href="#"></a>
                                    <a href="#"></a>
                                </div>
                                <div className={styles.slide_list_plaza}>
                                    <li className={styles.subslider8}><img /></li>
                                </div>
                            </div>

                        </div>
                        <div className={styles.explicate}>
                            <div className={styles.text_title}>
                                원자력 발전
                            </div>
                            <p className={styles.text_description}>
                                <span>원전을 통한 에너지 수출, 삼성물산 건설부문이 함께 합니다.</span><br />
                                삼성물산 건설부문은 1998년 울진 5,6호기 및 2005년 신월성 1,2호기의
                                성공적 수행을 바탕으로 UAE 원전 수출의 쾌거를 달성하였으며,
                                이후 2015년 신고리 5,6호기를 수주하는 등 원전 수행의 강자로
                                자리매김하고 있습니다. 삼성물산 건설부문은 신공법을 통한 남다른 기술력
                                및 품질로 선진시장을 향해 나아가고 있으며, 한국 원전의 우수성을 널리
                                아려 원전을 통한 에너지 수출의 초석이 되고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.sub_content}>
                    <div className={styles.picture_select}>
                        <div className={styles.title_wrap}>
                            <p className={styles.title_length}>
                                싱가포르 최초의 LNG터미널
                            </p>
                            <h4 className={styles.building_title}>
                                싱가포르 LNG Terminal
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
                                    <SubSlider7 />
                                </div>
                            </div>
                        </div>
                        <div className={styles.explicate}>
                            <div className={styles.text_title}>
                                에너지 저장시설
                            </div>
                            <p className={styles.text_description}>
                                <span>Global Market의 초일류 EPC 복합사업자</span><br />
                                삼성물산 건설부문은 2002년 카타르 LPG 프로젝트와 2008년 평택
                                LNG 인수기지 프로젝트의 성공적 수행을 통해 에너지 저장시설 분야의
                                글로벌 기업으로 도약하였습니다. 또한 2010년 싱가폴 최초의 LNG 인수기지를
                                성공적으로 수행하였고, 2014년부터 말레이시아에서 RGT-2 인수기지를
                                수행하는 등 지속적으로 추가 프로젝트를 반복 수주하여 수행하고 있습니다.
                                이렇듯 삼성물산 건설부문은 국내외에서 쌓은 풍부한 경험과 기술력,
                                그리고 지속적인 혁신을 바탕으로 Global Top Tier를 향해 전진하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Plant;