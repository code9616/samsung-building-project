import React from "react";
import { Route, Link } from 'react-router-dom';
import Footer from "../footer";
import styles from "./introduce.module.css";

function Introduce() {
    return (
        <section id="container" className={styles.container}>
            <div className={styles.sub_visual_building}>
                <div className={styles.page_tit_wrap}>
                    <div className={styles.landmark}>
                        <Link to='/landmark/landmark'></Link>
                    </div>
                    <div className={styles.main_building}>
                        <div className={styles.main_img}>
                            <strong className={styles.page_tit}>부문소개</strong>
                            <div className={styles.page_subtit}>
                                대한민국의 건설을 주도해 온 삼성물산 건설부문 30여 년을 넘어 이제 세계의 건설을 주도합니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className={styles.content}>
                <div className={styles.tab_menu1}>
                    <div>
                        <a href="" className={styles.on}>Overview</a>
                        <a href="">연혁</a>
                        <a href="">Vision</a>
                        <a href="">글로번네트워크</a>
                        <a href="">IR정보</a>
                    </div>
                </div>
            </div>
            <div className={styles.sub_wrap}>
                <div className={styles.tit_wrap}>
                    <div className={styles.location}>
                        <span className={styles.home}></span>
                        <span>부문소개</span>
                        <span>Overview</span>
                    </div>
                    <form name="search" method="post">

                    </form>
                    <h3 className={styles.tit}>Overview
                        <a href="#"></a>
                        <input type="text" id="search" placeholder="검색어를 입력해주세요." className={styles.text} />
                    </h3>
                    <p className={styles.subtit_explain}>세계 초일류 건설회사로서의 삼성물산 건설부문입니다.</p>
                </div>

                <div className={styles.sub_contents}>
                    <div className={styles.summary_title}>
                        <div>
                            <span>SINCE 1977</span>
                            초일류 건설 기업
                        </div>
                        <div>
                            2017년 삼성물산 건설부문은 창립 40주년을 맞이하였습니다.<br />
                            지속적인 성장 기반을 마련해 세계 초일류 건설회사로 자리매김했습니다.
                        </div>
                    </div>
                    <div className={styles.summary_info}>
                        <p className={styles.ttl}>
                            삼성물산 건설부문은 건축, 토목, 플랜트, 주택사업 등<br />
                            각 분야별 최고 수준의 인재와 기술역량을 보유하고 고객에게 최상의 부가가치를 실현해 드리고 있습니다.
                        </p>
                        <p className={styles.sub}>
                            동대문 디자인 플라자, 서울시청사, 인천국제공항을 비롯한 국내대표 건축물 뿐만 아니라 말레이시아 Petronas 타워, UAE Burj Khalifa 등 세계적 랜드마크를 건설하였고,<br />
                            사우디 Riyadh Metro, 영국 Mersey Gateway 등 전 세계의 대형 인프라 건설에 참여하고 있습니다.<br />
                            또한 사우디 Qurayyah와 Rabigh 2, 말레이시아 Prai, UAE 원전 등을 시공하면서 발전 플랜트 분야에서 글로벌 강자로 발돋움하고 있습니다.
                        </p>
                        <p className={styles.sub}>
                            삼성물산 건설부문은 현재의 위치에 만족하지 않고, 고객요구 이상의 품질·안전 수준에 도달하기 위해 기술력 및 프로젝트 역량 강화에 전사적 역량을 집중하고 있으며,<br />
                            이를 통해 고부가 분야 위주로 사업구조를 고도화해 나가고 있습니다. 뿐만 아니라, 프로세스와 시스템 혁신을 통해 신뢰받는 건설사로 지속 성장해 나갈 것입니다.
                        </p>
                    </div>
                    <div className={styles.summary_category}>
                        <dl>
                            <dt className={styles.icon1}>
                                건축사업
                            </dt>
                            <dd>
                                <ul>
                                    <li>초고층 빌딩</li>
                                    <li>업무용 빌딩</li>
                                    <li>친환경 빌딩</li>
                                    <li>첨단 산업시설(클린룸)</li>
                                    <li>공항</li>
                                    <li>호텔</li>
                                    <li>쇼핑몰</li>
                                    <li>종합 스포츠 경기장</li>
                                    <li>교육/문화/전시공간</li>
                                    <li>리조트 단지</li>
                                    <li>의료시설</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt className={styles.icon2}>
                                토목사업
                            </dt>
                            <dd>
                                <ul>
                                    <li>교량 & 항만</li>
                                    <li>터널</li>
                                    <li>지하철</li>
                                    <li>철도(고속철, 철도, 경전철)</li>
                                    <li>항구 & 항만</li>
                                    <li>준설 & 간척</li>
                                    <li>수처리 시설</li>
                                    <li>댐</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt className={styles.icon3}>
                                플랜트사업
                            </dt>
                            <dd>
                                <ul>
                                    <li>발전 플랜트</li>
                                    <li>화력발전</li>
                                    <li>원자력발전</li>
                                    <li>신재생발전</li>
                                    <li>에너지 저장시설(LNG, LPG)</li>
                                    <li>담수 플랜트</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt className={styles.icon4}>
                                주택사업
                            </dt>
                            <dd>
                                <ul>
                                    <li>주거시설</li>
                                    <li>주상복합</li>
                                    <li>복합 도시개발</li>
                                    <li>사회기반시설 개발(민자/민관합동)</li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Introduce;