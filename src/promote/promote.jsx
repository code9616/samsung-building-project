import { useState } from "react";
import Footer from "../footer";
import { Route, Link } from 'react-router-dom';
import styles from "./promote.module.css";



function Promote() {

    return (
        <section id="container" className={styles.container}>
            <div className={styles.sub_visual_building}>
                <div className={styles.page_tit_wrap}>
                    <div className={styles.landmark}>
                        <a href="#" className={styles.landmark_img}></a>
                    </div>
                    <div className={styles.main_building}>
                        <div className={styles.main_img}>
                            <strong className={styles.page_tit}>홍보센터</strong>
                            <div className={styles.page_subtit}>
                                현재의 위상을 넘어서, 지금에 만족하지 않고 인류의 삶을 더욱 행복하게 하는 미래를 향해 우리의 도전은 계속되고 있습니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className={styles.content}>
                <div className={styles.tab_menu1}>
                    <div>
                        <a href="" className={styles.on}>뉴스</a>
                        <a href="">홍보자료</a>

                    </div>
                </div>
            </div>
            <div className={styles.sub_wrap}>
                <div className={styles.tit_wrap}>
                    <div className={styles.location}>
                        <span className={styles.home}></span>
                        <span>홍보센터</span>
                        <span>뉴스</span>
                    </div>
                    <form name="search" method="post">

                    </form>
                    <h3 className={styles.tit}>뉴스
                        <a href="#"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.text} />
                    </h3>
                    <p className={styles.subtit}>삼성물산 건설부문의 최신 소식을 전해드립니다.</p>
                </div>
                <div className={styles.sub_contents}>
                    <h4 className={styles.title_list}>
                        총
                        <b>1032개</b>
                    </h4>
                    <table className={styles.list_table}>
                        <thead>
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">제목</th>
                                <th scope="col">날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1032</td>
                                <td className={styles.table_title}>
                                    <a href="#">삼성물산, 카타르 초대형 태양광 발전소 건설한다</a>
                                </td>
                                <td>2022.08.24</td>
                            </tr>
                            <tr>
                                <td>1031</td>
                                <td className={styles.table_title}>
                                    <a href="#">삼성 EPC 3社 혁신기술 공모</a>
                                </td>
                                <td>2022.08.08</td>
                            </tr>
                            <tr>
                                <td>1029</td>
                                <td className={styles.table_title}>
                                    <a href="#">삼성물산 래미안, 국가고객만족도(NCSI) 아파트 부문 25년 연속 1위 달성</a>
                                </td>
                                <td>2022.06.27</td>
                            </tr>
                            <tr>
                                <td>1028</td>
                                <td className={styles.table_title}>
                                    <a href="#">삼성물산, 한전/서부발전과 함께 UAE 그린 암모니아 사업 공동개발 협약 체결</a>
                                </td>
                                <td>2022.06.03</td>
                            </tr>
                            <tr>
                                <td>1027</td>
                                <td className={styles.table_title}>
                                    <a href="#">삼성물산, 등급별 층간소음 체험 가능한 연구시설 개관</a>
                                </td>
                                <td>2022.05.26</td>
                            </tr>
                            <tr>
                                <td>1026</td>
                                <td className={styles.table_title}>
                                    <a href="#">‘에버랜드의 장미를 우리집 앞에서도 즐긴다’ 래미안 원베일리에 에버로즈 테마가든 조성</a>
                                </td>
                                <td>2022.05.16</td>
                            </tr>
                            <tr>
                                <td>1025</td>
                                <td className={styles.table_title}>
                                    <a href="#">삼성물산, 소형모듈원전(SMR) 글로벌 사업 본격화</a>
                                </td>
                                <td>2022.05.10</td>
                            </tr>
                            <tr>
                                <td>1024</td>
                                <td className={styles.table_title}>
                                    <a href="#">삼성물산, 2022 iF 디자인 어워드 수상작 배출</a>
                                </td>
                                <td>2022.04.15</td>
                            </tr>
                            <tr>
                                <td>1023</td>
                                <td className={styles.table_title}>
                                    <a href="#">삼성물산, 이촌코오롱 리모델링 시공사 선정</a>
                                </td>
                                <td>2022.03.17</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.page_area}>
                        <a href="#" className={styles.btn_prev}></a>
                        <strong>1</strong>
                        <a href="">2</a>
                        <a href="">3</a>
                        <a href="">4</a>
                        <a href="">5</a>
                        <a href="">6</a>
                        <a href="">7</a>
                        <a href="">8</a>
                        <a href="">9</a>
                        <a href="">10</a>
                        <a href="#" className={styles.btn_next}></a>
                        <a href="#" className={styles.btn_last}></a>
                    </div>
                </div>
                <div className={styles.search_box}>
                    <div className={styles.select_wrap}>
                        <div className={styles.select_box}>
                            <select>
                                <option className={styles.select_box}>
                                    <a href="">제목+내용</a>
                                </option>
                                <option>
                                    <a href="">제목</a>
                                </option>
                                <option>
                                    <a href="">내용</a>
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.search_bar}>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.title_search} />
                        <a href="#"></a>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Promote;