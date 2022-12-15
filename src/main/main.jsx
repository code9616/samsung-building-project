import React, { Component } from 'react';
import Footer from "../footer";
import styles from "./main.module.css";

import Slider from '../Slider/Slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Styled from "styled-components/native";



// function ImageTestModule({ imagePath }) {
//     const [height, setHeight] = useState(0);
//     const { width } = Dimension.get('window');
//     Image.getSize(imagePath, (w, h) => {
//         setHeight(h * (width / w));
//     });

// const MainCom = () => {
//     const [width, setWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//             console.log("width height", window.innerWidth, window.innerHeight);
//             setWidth(window.innerWidth);
//         };

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);
function MainCom() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrap}>
                <section id="container" className={styles.container}>
                    <div className={styles.main_slider}>
                        <div className={styles.main_img}>
                            <Slider />
                        </div>
                    </div>

                    <div className={styles.construct}>
                        <div className={styles.intro_construct}>
                            <h3 className={styles.main_tit1}>
                                <img src="/img/intro-construct.png" alt="" />
                            </h3>
                            <p className={styles.sub_tit1}>
                                삼성물산 건설부문은 인류의 미래를 위해 더 나은 세상을 만들어가는<br />
                                초일류 글로벌 기업입니다.
                            </p>
                            <p className={styles.explain_tit1}>
                                삼성물산 건설부문은 전문 지식과 풍부한 경험을 바탕으로 다양한 삶의 공간을 특별함으로 빚어낼 뿐만 아니라<br />
                                최고의 건설 솔루션과 정보 시스템, 효율적인 물류와 금융 시스템으로 고객과 파트너에게 최고의 만족을 선사합니다.
                            </p>
                            <div className={styles.btn_more1}>
                                <a href="#" className={styles.btn1}>MORE</a>
                            </div>
                            <ul className={styles.business_list}>
                                <li>
                                    <img src="/img/business1.png" alt="" />
                                    <span className={styles.tit}>건축사업</span>
                                </li>
                                <li>
                                    <img src="/img/business2.png" alt="" />
                                    <span className={styles.tit}>토목사업</span>
                                </li>
                                <li>
                                    <img src="/img/business3.png" alt="" />
                                    <span className={styles.tit}>플랜트사업</span>
                                </li>
                                <li>
                                    <img src="/img/business4.png" alt="" />
                                    <span className={styles.tit}>주택사업</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.news}>
                        <div className={styles.intro_news}>
                            <h3 className={styles.main_tit2}>
                                <img src="/img/intro-news.png" alt="" />
                            </h3>
                            <p className={styles.sub_tit2}>
                                앞서가는 삼성물산 건설부문의 최신 소식을 전해드립니다.
                            </p>
                            <div className={styles.btn_more2}>
                                <a href="#" className={styles.btn2}>MORE</a>
                            </div>
                        </div>
                        <div className={styles.news_list}>
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="/img/content1.jpg" alt="" className={styles.news_label} />
                                    </a>
                                    <p>
                                        <a href="#">
                                            삼성물산, 한전/서부발전과 함께 UAE 그...
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/content2.jpg" alt="" className={styles.news_label} />
                                    </a>
                                    <p>
                                        <a href="#">
                                            삼성물산, 등급별 층간소음 체험 가능한...
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/img/content3.jpg" alt="" className={styles.news_label} />
                                    </a>
                                    <p>
                                        <a href="#">
                                            '에버랜드의 장미를 우리집 앞에서도 즐...
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.social_list}>
                            <ul>
                                <li>
                                    <div className={styles.link_area}>
                                        <span className={styles.label_youtube}>
                                            YouTube
                                        </span>
                                        <a href="#"></a>
                                    </div>
                                    <a href="#">
                                        <span>
                                            <img src="/img/sns-list1.jpg" alt="" className={styles.sns_label} />
                                        </span>
                                    </a>
                                    <p>
                                        <a href="#">삼성물산 건설부문 유튜브</a>
                                    </p>
                                </li>
                                <li>
                                    <div className={styles.link_area}>
                                        <span className={styles.label_instagram}>
                                            Instagram
                                        </span>
                                        <a href="#"></a>
                                    </div>
                                    <a href="#">
                                        <span>
                                            <img src="/img/sns-list2.jpg" alt="" className={styles.sns_label} />
                                        </span>
                                    </a>
                                    <p>
                                        <a href="#">삼성물산 건설부문 유튜브</a>
                                    </p>
                                </li>
                                <li>
                                    <div className={styles.link_area}>
                                        <span className={styles.label_facebook}>
                                            Facebook
                                        </span>
                                        <a href="#"></a>
                                    </div>
                                    <a href="#">
                                        <span>
                                            <img src="/img/sns-list3.jpg" alt="" className={styles.sns_label} />
                                        </span>
                                    </a>
                                    <p>
                                        <a href="#">삼성물산 건설부문 유튜브</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.impact}>
                        <div className={styles.intro_impact}>
                            <h3 className={styles.main_tit3}>
                                <img src="/img/intro-impact.jpg" alt="" />
                            </h3>
                            <p className={styles.sub_tit3}>
                                함께 이루는 조화 속에서 우리의 미래는 더욱 빛날 것입니다.
                            </p>
                            <p className={styles.explain_tit2}>
                                삼성물산 건설부문은 고객과의 신뢰를 바탕으로 환경과 사회에 대한 책임을 다하며 고객을 위한 프로젝트를 수행하고 있습니다.<br />
                                더 나아가 축적된 자원과 전문성, 경험을 적극 활용하여 인류의 건강하고 풍요로운 삶을 지키고 발전시켜 나가고 있습니다.
                            </p>
                            <div className={styles.btn_more3}>
                                <a href="#" className={styles.btn3}>MORE</a>
                            </div>
                            <ul>
                                <li className={styles.impact_list1}>
                                    <a href="#">
                                        <img src="/img/impact-list1.jpg" alt="" />
                                        <p>사회공헌</p>
                                    </a>
                                </li>
                                <li className={styles.impact_list2}>
                                    <a href="#">
                                        <img src="/img/impact-list2.jpg" alt="" />
                                        <p>인재채용</p>
                                    </a>
                                </li>
                                <li className={styles.impact_list3}>
                                    <a href="#">
                                        <img src="/img/impact-list3.jpg" alt="" />
                                        <p>홍보영상</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.network}>
                        <div className={styles.intro_network}>
                            <h3 className={styles.main_tit4}>
                                <img src="/img/intro-network.png" alt="" />
                            </h3>
                            <p className={styles.sub_tit4}>
                                글로벌 기업 삼성물산 건설부문의 해외지사 현황입니다.
                            </p>
                            <p className={styles.explain_tit3}>
                                <span>
                                    <img src="/img/america.png" alt="america" />
                                </span>
                                <span>
                                    <img src="/img/middleeast.png" alt="middleeast" />
                                </span>
                                <span>
                                    <img src="/img/asia.png" alt="asia" />
                                </span>
                                <span>
                                    <img src="/img/europe.png" alt="europe" />
                                </span>
                                <span>
                                    <img src="/img/oceania.png" alt="oceania" />
                                </span>
                            </p>
                            <div className={styles.btn_more4}>
                                <a href="#" className={styles.btn4}>MORE</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.contents_box}>
                            <h3 className={styles.maincon_tit}>
                                <img src="/img/service-center.png" alt="고객센터" />
                            </h3>
                            <p className={styles.maincon_subtit}>
                                열린 생각 열린 마음으로 <br />
                                언제나 편안한 서비스를 제공합니다.
                            </p>
                            <p className={styles.maincon_num}>
                                전화 문의
                                <span> 02-2145-5114</span>
                            </p>
                            <div className={styles.btn_wrap}>
                                <a href="" className={styles.btn} title="고객센터 더보기">온라인 상담</a>
                            </div>
                        </div>
                        <div className={styles.contents_box}>
                            <h3 className={styles.maincon_tit}>
                                <img src="/img/registration-info.png" alt="고객센터" />
                            </h3>
                            <p className={styles.maincon_subtit}>
                                삼성물산 건설부문과 함께 성장해나갈<br />
                                외주, 자재, 용역서비스 협력회사를<br />
                                상시 모집하고 있습니다.
                            </p>
                            <div className={styles.btn_wrap}>
                                <a href="" className={styles.btn} title="Partners Portal">Partners Portal</a>
                            </div>
                        </div>
                    </div>
                </section >
                <Footer />
            </div >
        </div>

    )
}
// }

export default MainCom;