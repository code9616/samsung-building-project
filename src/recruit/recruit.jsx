import React from "react";
import Footer from "../footer";
import { Route, Link } from 'react-router-dom';
import styles from "./recruit.module.css";

function Recruit() {
    return (
        <section id="container" className={styles.container}>
            <div className={styles.sub_visual_building}>
                <div className={styles.page_tit_wrap}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.main_building}>
                        <div className={styles.main_img}>
                            <strong className={styles.page_tit}>인재채용</strong>
                            <div className={styles.page_subtit}>
                                변화를 이끄는 당신이 삼성물산 건설부문의 인재입니다.<br />
                                삼성물산 건설부문은 인재와 기술을 바탕으로 인류사회에 공헌합니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className={styles.content}>
                <div className={styles.tab_menu1}>
                    <div>
                        <a href="" className={styles.on}>채용안내</a>
                        <a href="">직무소개</a>
                        <a href="">인사제도</a>
                        <a href="">채용FAQ</a>
                    </div>
                </div>
                <div className={styles.tab_menu2}>
                    <div>
                        <a href="" className={styles.on}>채용프로세스</a>
                        <a href="">채용공고</a>
                    </div>
                </div>
            </div>
            <div className={styles.sub_wrap}>
                <div className={styles.tit_wrap}>
                    <div className={styles.location}>
                        <span className={styles.home}></span>
                        <span>인재채용</span>
                        <span>채용안내</span>
                        <span>채용프로세스</span>
                    </div>
                    <form name="search" method="post">

                    </form>
                    <h3 className={styles.tit}>채용프로세스
                        <a href="#"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.text} />
                    </h3>
                    <p className={styles.subtit_explain}>삼성물산 건설부문의 채용프로세스입니다.</p>
                </div>
                <div className={styles.sub_contents}>
                    <div className={styles.recruits}>
                        <div className={styles.tit}>
                            신입사원 채용절차
                        </div>
                        <ul className={styles.color_process}>
                            <li className={styles.process1}>
                                <strong>1단계</strong>
                                직무적합성평가
                            </li>
                            <li className={styles.process2}>
                                <strong>2단계</strong>
                                삼성직무적성검사(GSAT)
                            </li>
                            <li className={styles.process3}>
                                <strong>3단계</strong>
                                종합면접
                            </li>
                            <li className={styles.process4}>
                                <strong>4단계</strong>
                                건강검진
                            </li>
                            <li className={styles.process5}>
                                <strong>5단계</strong>
                                최종합격
                            </li>
                        </ul>
                    </div>
                    <div className={styles.recruits}>
                        <div className={styles.tit}>
                            경력사원 채용절차
                        </div>
                        <ul className={styles.color_process}>
                            <li className={styles.process1}>
                                <strong>1단계</strong>
                                서류전형
                            </li>
                            <li className={styles.process2}>
                                <strong>2단계</strong>
                                기술면접
                            </li>
                            <li className={styles.process3}>
                                <strong>3단계</strong>
                                인성면접
                            </li>
                            <li className={styles.process4}>
                                <strong>4단계</strong>
                                건강검진/영어회화평가
                            </li>
                            <li className={styles.process5}>
                                <strong>5단계</strong>
                                최종합격
                            </li>
                        </ul>
                    </div>
                    <div className={styles.recruits_banner}>
                        <div className={styles.col1}>
                            <strong>삼성채용</strong>
                            <p>삼성그룹 입사지원 통합 채용사이트</p>
                            <a href="#" className={styles.recruits_btn}>바로가기</a>
                        </div>
                        <div className={styles.col2}>
                            <strong>Young SAMSUNG</strong>
                            <p>삼성영포털 내삶의 Pathfinder</p>
                            <a href="#" className={styles.recruits_btn}>바로가기</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default Recruit;