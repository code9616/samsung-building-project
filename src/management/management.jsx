import React from "react";
import Footer from "../footer";
import { Route, Link } from 'react-router-dom';
import styles from "./management.module.css";

function Management() {
    return (
        <section id="container" className={styles.container}>
            <div className={styles.sub_visual_building}>
                <div className={styles.page_tit_wrap}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.main_building}>
                        <div className={styles.main_img}>
                            <strong className={styles.page_tit}>지속가능경영</strong>
                            <div className={styles.page_subtit}>
                                모두가 함께 이루는 조화 속에서 삼성물산 건설부문의 미래는 더욱 빛날 것입니다
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className={styles.content}>
                <div className={styles.tab_menu1}>
                    <div>
                        <a href="" className={styles.on}>경영이념</a>
                        <a href="">기술경영</a>
                        <a href="">사회공헌</a>
                    </div>
                </div>
                <div className={styles.tab_menu2}>
                    <div>
                        <a href="" className={styles.on}>준법경영</a>
                        <a href="">친환경경영</a>
                    </div>
                </div>
            </div>
            <div className={styles.sub_wrap}>
                <div className={styles.tit_wrap}>
                    <div className={styles.location}>
                        <span className={styles.home}></span>
                        <span>지속가능경영</span>
                        <span>채용안내</span>
                        <span>준법경영</span>
                    </div>
                    <form name="search" method="post">

                    </form>
                    <h3 className={styles.tit}>준법경영
                        <a href="#"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.text} />
                    </h3>
                    <p className={styles.subtit_explain}>삼성물산 건설부문은 지속가능경영을 위하여 윤리경영에 힘쓰고 있습니다.</p>
                </div>
                <div className={styles.sub_contents}>
                    <div className={styles.tit_box}>
                        <div className={styles.img_wrap}>
                            <img className={styles.manage_img} />
                        </div>
                        <div className={styles.tit_wrapper}>
                            <h4 className={styles.tit}>
                                준법경영(COMPLIANCE)의 정의
                            </h4>
                            <ul className={styles.tit_des}>
                                <li>1. 회사가 사업운영상 준수해야 하는 제반 법규를 체계적으로 파악하고,</li>
                                <li>2. 임직원의 법규준수 여부를 자체적으로 점검하여</li>
                                <li>3. 위법행위를 사전적으로 예방하고</li>
                                <li>4. 각종 ‘법적 위험’에 체계적으로 대응하기 위해 채택하는</li>
                                <li>5. 일체의 정책수립 및 경영활동 과정을 말함</li>
                            </ul>
                            <div className={styles.notice}>
                                <strong>법적 위험</strong>
                                임직원이 법령을 준수하지 않음으로써 민사, 형사, 행정적 책임이<br />
                                발생하거나 계약상 효력이 인정되지 않아 손해가 발생할 위험
                            </div>
                        </div>
                    </div>
                    <div className={styles.sub_mean_one}>
                        <h4 className={styles.tit}>
                            준법경영의 목적
                        </h4>
                        <p className={styles.des}>
                            법령을 준수함으로써 공정하고 투명한 업무수행을 도모하고 회사의 건전한 발전과 고객의 신뢰를 확보하여 지속가능경영에 기여함
                        </p>
                    </div>
                    <div className={styles.sub_mean_two}>
                        <h4 className={styles.tit}>
                            준법경영 대상
                        </h4>
                        <p className={styles.des}>
                            법에 한정되지 않고 사내규정 및 기업윤리까지 포함 사전 Risk 예방을 위한 행동규범(Code of Conduct) 정립
                        </p>
                    </div>
                    <div className={styles.process_box}>
                        <p>註)컴플라이언스 經營(日書)</p>
                        <ul>
                            <li>
                                <dl>
                                    <dt>
                                        법규범
                                    </dt>
                                    <dd>
                                        법률 / 시행령 / 시행규칙 / 기타 정부규제 등
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>
                                        회사규범
                                    </dt>
                                    <dd>
                                        사내규정 / 업무메뉴얼 등
                                    </dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>
                                        사회규범
                                    </dt>
                                    <dd>
                                        기업윤리 / 사회문화
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.sub_mean_three}>
                        <h4 className={styles.tit}>준법경영 로드맵</h4>
                        <div className={styles.img_wrapper}>
                            <img className={styles.roadmap_img} />
                        </div>
                    </div>
                    <div className={styles.sub_mean_four}>
                        <h4 className={styles.tit}>
                            준법지원인 제도 도입
                        </h4>
                        <p className={styles.des}>
                            12.4.15 상법上 자산 1조원 이상 상장회사를 대상으로 최소 1인이상 준법지원인 임명을 의무화함<br />
                            이에 따라 우리회사는 ‘12年 3月 이사회 의결을 거쳐 준법지원인 제도를 도입하여 운영中
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Management;