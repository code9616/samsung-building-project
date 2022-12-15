import React from "react";
import Footer from "../footer";
import { Route, Link } from 'react-router-dom';
import styles from "./innovation.module.css";

function Innovation() {
    return (
        <section id="container" className={styles.container}>
            <div className={styles.sub_visual_building}>
                <div className={styles.page_tit_wrap}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.main_building}>
                        <div className={styles.main_img}>
                            <strong className={styles.page_tit}>기술혁신</strong>
                            <div className={styles.page_subtit}>
                                삼성물산 건설부문은 세계적인 시공기술 역량과 기반기술 연구개발에 대한<br />
                                적극적인 투자를 통해 건설산업 최고의 전문가 그룹으로 자리매김하고 있습니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className={styles.content}>
                <div className={styles.tab_menu1}>
                    <div>
                        <a href="" className={styles.on}>기술팀</a>
                        <a href="">지식재산권</a>

                    </div>
                </div>
                <div className={styles.tab_menu2}>
                    <div>
                        <a href="" className={styles.on}>건축구조</a>
                        <a href="">토목구조</a>
                        <a href="">콘크리트 재료</a>
                        <a href="">지반</a>
                        <a href="">용접</a>
                        <a href="">환경</a>
                        <a href="">장비</a>
                        <a href="">주거성능연구소</a>
                        <a href="">래미안 고요安 Lab</a>
                    </div>
                </div>
            </div>
            <div className={styles.sub_wrap}>
                <div className={styles.tit_wrap}>
                    <div className={styles.location}>
                        <span className={styles.home}></span>
                        <span>기술혁신</span>
                        <span>건축구조</span>
                    </div>
                    <form name="search" method="post">

                    </form>
                    <h3 className={styles.tit}>건축구조
                        <a href="#"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.text} />
                    </h3>
                </div>
                <div className={styles.sub_contents}>
                    <div className={styles.tech_study_contents}>
                        <ul className={styles.tech_list}>
                            <li className={styles.list_wrap}>
                                <div className={styles.list_contents}>
                                    <div className={styles.img_box}>
                                        <img className={styles.tech_innovate1} />
                                    </div>
                                    <div className={styles.text_box}>
                                        <strong>슬래브 경량화 공법 - GB 슬래브</strong>
                                        <p>
                                            건축물 슬래브 상ㆍ하부근 사이에 도넛 형상 중공체 GB (Green Ball)를 삽입하여 슬래브 중량 약 30% 경량화로 경제성, 시공성 향상 및 GB 슬래브 개발ㆍ확대 적용으로
                                            기술 실용화(R&D Business)에 선도적 역할을 수행하고 있습니다.
                                        </p>
                                        <ul>
                                            <li>건설신기술 제 695호, 특허 10건 이상, 장관상 수상</li>
                                            <li>다수 프로젝트 확대 적용 중 (상세 내용은 [유튜브 동영상] ‘GB slab’ 검색)</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.list_wrap}>
                                <div className={styles.list_contents}>
                                    <div className={styles.img_box}>
                                        <div className={styles.vertical_img}>
                                            <div>
                                                <img className={styles.tech_innovate2} />
                                                <span>합성보 단면 (예시)</span>
                                            </div>
                                            <div>
                                                <img className={styles.tech_innovate3} />
                                                <span>장스팬 합성보 시공</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.text_box}>
                                        <strong>장스팬 합성보</strong>
                                        <p>
                                            콘크리트와 구조용 강재를 전단연결재로 결합하여 구조적 성능을 극대화시킨 합성보 공법개발 연구를 수행하고 있습니다. 24m 길이의 장경간 구조물에 적용할 수 있는 기술로, 실제 하이테크 프로젝트에 적용하여 활용하고 있습니다.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.list_wrap}>
                                <div className={styles.list_contents}>
                                    <div className={styles.img_box}>
                                        <img className={styles.tech_innovate4} />
                                        <span>구조시스템 해석 및 설계</span>
                                    </div>
                                    <div className={styles.text_box}>
                                        <strong>초고층 건물의 구조 해석 및 설계</strong>
                                        <p>구조 해석, 설계 기술은 초고층 건물의 경제성, 안정성, 사용성, 거주성, 시공성을 설계 단계에서 사전 검토하여 최상의 품질을 확보하고 시공 단계에서의 문제점을 최소화하는 것을 목적으로 합니다. 이를 위해 관련 핵심요소 기술을 연구, 개발하여 현업에 적용하고 있습니다.</p>

                                    </div>
                                </div>
                            </li>
                            <li className={styles.list_wrap}>
                                <div className={styles.list_contents}>
                                    <div className={styles.img_box}>
                                        <img className={styles.tech_innovate5} />
                                        <span>시공단계 구조 해석</span>
                                    </div>
                                    <div className={styles.text_box}>
                                        <strong>시공단계해석 기술</strong>
                                        <p>완성된 건물과 달리, 시공 중의 구조물은 공법 및 가설구조에 따라 별도로 안전성 및 건물 변형을 검토해야 합니다. 시공 안전성과 최상의 건물 품질을 확보하기 위하여 시공단계에 따른 구조물의 변형을 예측하고, 현장시공 중에 벽체 및 기둥을 실측 모니터링하고 있습니다.</p>

                                    </div>
                                </div>
                            </li>
                            <li className={styles.list_wrap}>
                                <div className={styles.list_contents}>
                                    <div className={styles.img_box}>
                                        <div className={styles.vertical_img}>
                                            <div>
                                                <img className={styles.tech_innovate6} />
                                                <span>
                                                    지능형 트러스<br />
                                                    최적화 시스템 (ITOSS)
                                                </span>
                                            </div>
                                            <div>
                                                <img className={styles.tech_innovate7} />
                                                <span>Erection Engineering</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.text_box}>
                                        <strong>대공간 구조물의 해석 및 설계 /Erection Engineering</strong>
                                        <p>
                                            대공간 구조물의 설계 및 시공 프로세스는 해석, 설계, 제작, Erection 모니터링의 프로세스로 정리할 수 있습니다.<br />
                                            Space Frame 해석, Membrane 형상 및 부재 최적화, 비선형 해석, 시공단계별 해석 기술을 바탕으로 Truss, <br />
                                            Space Frame, Cable, Membrane으로 이루어지는 대공간 구조물에 대한 연구 개발 및 현 지원을 수행하고 <br />
                                            있습니다. 다양한 지점 조건과 형태 저항형 특수 구조인 대공간 돔 구조의 최적 설계를 위하여 필수적으로 <br />
                                            적용되는 기하+재료 비선형 해석 등 고난이도의 해석 및 최적화 설계 기술과 시공단계를 고려한 Erection <br />
                                            Engineering 기술을 적용 중입니다.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.list_wrap}>
                                <div className={styles.list_contents}>
                                    <div className={styles.img_box}>
                                        <img className={styles.tech_innovate8} />
                                        <span>전산유체역학 (CFD)</span>
                                    </div>
                                    <div className={styles.text_box}>
                                        <strong>구조물의 내풍성능 평가</strong>
                                        <p>초고층 및 대형건물의 계획, 설계 단계에서 바람에 의한 건물의 내풍안전성 및 사용성을 평가하고 있으며, CFD(Computational Fluid Dynamics, 전산유체역학)를 이용하여 건물의 풍하중과 풍환경에 대한 사전 검토를 수행하고 있습니다.</p>

                                    </div>
                                </div>
                            </li>
                            <li className={styles.list_wrap}>
                                <div className={styles.list_contents}>
                                    <div className={styles.img_box}>
                                        <img className={styles.tech_innovate9} />
                                        <span>구조물 Push-Over 해석</span>
                                    </div>
                                    <div className={styles.text_box}>
                                        <strong>내진 해석 및 설계 기술</strong>
                                        <p>지진이 발생하였을 경우에 대비하여, 건물의 지진 해석과 내진 설계를 수행하고 있습니다. 특히, 중요도가 높은 건물이나 강진 지역에 속한 건물에 대해서 상세한 비선형 해석을 통해 내진성능을 검토하고 있습니다.</p>

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Innovation;