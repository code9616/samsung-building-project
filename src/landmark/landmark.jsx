import React from "react";
import Footer from "../footer";
import { Route, Link } from 'react-router-dom';
import styles from "./landmark.module.css";

function Landmark() {
    return (
        <section id="container" className={styles.container}>
            <div className={styles.sub_visual_building}>
                <div className={styles.page_tit_wrap}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.main_building}>
                        <div className={styles.main_img}>
                            <strong className={styles.page_tit}>주요사업
                            </strong>
                            <div className={styles.page_subtit}>
                                인류에 대한 더 깊은 애정과 열정을 실현하기위하여<br />
                                삼성물산 건설부문은 지속적으로 새로운 세계를 건설할 것입니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className={styles.content}>
                <div className={styles.tab_menu1}>
                    <div>
                        <Link to='/majorbussiness/majorbussiness'>주요사업안내</Link>
                        <a href="http://localhost:3000/construct/construct">건축사업</a>
                        <a href="http://localhost:3000/civilengineering/civilengineering">토목사업</a>
                        <a href="http://localhost:3000/plant/plant">플랜트사업</a>
                        <a href="http://localhost:3000/house/house">주택사업</a>
                        <Link to='/landmark/landmark' className={styles.on}>LANDMARK</Link>
                    </div>
                </div>
                <div className={styles.tab_menu2}>
                    <div>
                        <a href="" className={styles.on}>부르즈 칼리파</a>
                        <a href="">인천대교</a>
                        <a href="">원자력발전</a>
                        <a href="">레미안</a>
                    </div>
                </div>
            </div>
            <div className={styles.sub_wrap}>
                <div className={styles.tit_wrap}>
                    <div className={styles.location}>
                        <span className={styles.home}></span>
                        <span>주요사업</span>
                        <span>LANDMARK</span>
                        <span>부르즈 칼리파</span>
                    </div>
                    <form name="search" method="post">

                    </form>
                    <h3 className={styles.tit}>부르즈 칼리파
                        <a href="#"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.text} />
                    </h3>
                    <p className={styles.subtit}>하늘에서 가장 먼저 닿는 그 곳에 삼성물산 건설부문이 있습니다.</p>
                    <p className={styles.subtit_explain}>세계 초일류를 향한 끝없는 도전정신과 불굴의 의지로 새로운 스카이라인을 만들어갑니다.</p>
                    <div className={styles.tab_menu3}>
                        <div>
                            <a href="" className={styles.on}>테마로 보는 부르즈 칼리파</a>
                            <a href="">기술전사</a>
                            <a href="">기술력</a>
                            <a href="">영상 및 사진</a>
                            <a href="">뉴스</a>
                        </div>
                    </div>
                    <div className={styles.sub_contents}>
                        <div className={styles.img_wrap}>

                        </div>
                        <div className={styles.bruj_themaview}>
                            <div className={styles.elevators}>
                                <img />
                                <div className={styles.thema_des}>
                                    <div className={styles.tit}>
                                        <em className={styles.point}>58  </em>
                                        ELEVATORS
                                    </div>
                                    <div className={styles.des}>
                                        부르즈 칼리파의 전체 엘리베이터 개수는 총 58대<br />
                                        가장 빠른 엘리베이터의 경우 124층 전망대까지 45초
                                    </div>
                                </div>
                            </div>
                            <div className={styles.weight}>
                                <img />
                                <div className={styles.thema_des_right}>
                                    <div className={styles.tit}>
                                        WEIGHT
                                        <em className={styles.point}>  430</em>
                                    </div>
                                    <div className={styles.des}>
                                        600m 상공에 올려진 첨탑 구조물 무게 430t, 길이 233m
                                    </div>
                                </div>
                            </div>
                            <div className={styles.wall}>
                                <div className={styles.thema_des_col1}>
                                    <div className={styles.tit}>
                                        <em className={styles.point}>28,601 </em>
                                        curtain wall
                                    </div>
                                    <div className={styles.des}>
                                        커튼월 28601 여장으로 건물 외관을 이루는 벽을 만들고
                                        <br />바람, 비, 햇볕으로부터 건물 내부를 보호
                                    </div>
                                </div>
                                <div className={styles.thema_des_col2}>
                                    <div className={styles.tit}>
                                        <em className={styles.point}>7,000,000 </em>
                                        PEOPLE
                                    </div>
                                    <div className={styles.des}>
                                        50개국 7,000,000명이 참여한 대규모 공사<br />
                                        일일 최대 1만 2천명에 달하는 대규모 공사인력
                                    </div>
                                </div>
                            </div>
                            <div className={styles.animal}>
                                <img />
                                <div className={styles.thema_des}>
                                    <div className={styles.tit}>
                                        <em className={styles.point}>코끼리</em>
                                    </div>
                                    <div className={styles.des}>
                                        5t 아프리카 코끼리 10만마리 =<br />
                                        부르즈칼리파 총 하중 540,000t
                                    </div>
                                </div>
                            </div>
                            <div className={styles.earth}>
                                <img />
                                <div className={styles.thema_des}>
                                    <div className={styles.tit}>
                                        <em className={styles.point}>지구 반바퀴</em>
                                    </div>
                                    <div className={styles.des}>
                                        사용된 철근의 총 길이는 25,000km이며<br />
                                        (지구반 바퀴를 돌 수 있는 길이) 무게는 총 62,200t
                                    </div>
                                </div>
                            </div>
                            <div className={styles.twice}>
                                <img />
                                <div className={styles.thema_des}>
                                    <div className={styles.tit}>
                                        <em className={styles.point}>TWICE</em>
                                    </div>
                                    <div className={styles.des}>
                                        우리나라의 가장 큰 유조선 현대스타(16,530m)의 28배<br />
                                        삼성동 코엑스 몰(119,009㎡)의 4배<br />
                                        여의도 공원(218,183㎡)의 2배<br />
                                        잠실운동장(8,265㎡)의 56배
                                    </div>
                                </div>
                            </div>
                            <div className={styles.plant}>
                                <img />
                                <div className={styles.thema_des}>
                                    <div className={styles.tit}>
                                        <em className={styles.point}>대나무</em>
                                    </div>
                                    <div className={styles.des}>
                                        아웃리거 층 Outrigger : 대나무의 마디를 형상화<br />
                                        약 30층마다 건물의변형을 방지할 수 있도록 특별히 견고하게 설계된 층을 통해<br />
                                        바람에 의한 변형을 막았다
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className={styles.bruj_attribute}>
                            <li className={styles.desc}>
                                <div className={styles.center}>
                                    <strong>자동상승</strong>
                                    거푸집 자동 상승 시스템<br />
                                    (콘크리트를 타설 후 콘크리트가 굳으면<br />
                                    자동으로 거푸집이 한층 올라가는 시스템)을<br />
                                    통해 3일에 한 층을 건설하는 신기원을 이룩했다.
                                </div>
                            </li>
                            <li className={styles.wind}>
                                <div className={styles.center}>
                                    <strong>바람</strong>
                                    초속 40미터의 바람을 이기기 위해<br />
                                    사막에 핀 꽃을 형상화<br />
                                    평면이 나선형 패턴으로 면적이 단계적으로<br />
                                    16회 축소하여 바람을 혼란시킨다.
                                </div>
                            </li>
                            <li className={styles.satellite}>
                                <div className={styles.center}>
                                    <strong>인공위성</strong>
                                    지상에서 1도만 틀어져도<br />
                                    800m 상공에선 14m 차이가 나기 때문에<br />
                                    도입한 3대의 인공위성을 통한<br />
                                    위성 GPS 측량 시스템
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

export default Landmark;