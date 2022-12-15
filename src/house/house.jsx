import React from "react";
import Footer from "../footer";
import { Route, Link } from 'react-router-dom';
import styles from "./house.module.css";
import Slider from '../Slider/Slider';
import SubSlider8 from '../Sub-slider/sub-slider8';
import SubSlider9 from '../Sub-slider/sub-slider9';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function House() {
    return (
        <section id="container" className={styles.container}>
            <div className={styles.sub_visual_building}>
                <div className={styles.page_tit_wrap}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.main_building}>
                        <div className={styles.main_img}>
                            <strong className={styles.page_tit}>주택사업</strong>
                            <div className={styles.page_subtit}>주거문화의 프리미엄 브랜드</div>
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
                        <a href="/plant/plant">플랜트사업</a>
                        <a href="/house/house" className={styles.on}>주택사업</a>
                        <Link to='/landmark/landmark'>LANDMARK</Link>
                    </div>
                </div>
            </div>
            <div className={styles.sub_wrap}>
                <div className={styles.tit_wrap}>
                    <div className={styles.location}>
                        <span className={styles.home}></span>
                        <span>주택사업</span>
                        <span>주택사업</span>
                    </div>
                    <form name="search" method="post">

                    </form>
                    <h3 className={styles.tit}>주택사업
                        <a href="#"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.text} />
                    </h3>
                    <div className={styles.subtit_img}>
                        <p className={styles.subtit}>PREMIUM BRAND</p>
                        <p className={styles.subtit_explain}>
                            삼성물산 건설부문은 국내 최초로 ‘브랜드 아파트’라는 획기적인 개념을 도입하여
                            새로운 상품개발과 전략적 마케팅, 고객 커뮤니케이션을 통해 한발 앞선 주거문화를
                            제시하고 있습니다.<br />
                            지속적이며 차별화된 최상의 고객 서비스를 통해 브랜드의 부가가치를 높이며,
                            주거문화의 트렌드 리더로서 성장과 발전을 계속할 것입니다.
                        </p>
                    </div>
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
                                모던하면서도 고급스러운 외관특화
                            </p>
                            <h4 className={styles.building_title}>
                                래미안 퍼스티지
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
                                    <li className={styles.SubSlider9}><img /></li>
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
                                    <SubSlider8 />
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
                                한강변 초고층 아파트 (56F)
                            </p>
                            <h4 className={styles.building_title}>
                                래미안 첼리투스
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
                                    <SubSlider9 />
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

export default House;