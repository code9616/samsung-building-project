import React from "react";
import Footer from "../footer";
import styles from "./majorbussiness.module.css"


function Majorbussiness() {

    return (
        <section className={styles.container}>
            <div className={styles.main_door}>
                <div className={styles.door_one}>
                    <a href="" className={styles.part_wrap}>
                        <div className={styles.part}>
                            건축사업
                        </div>
                        <div className={styles.part_tit}>
                            Building
                        </div>
                        <div className={styles.part_description}>
                            세계의 도시를 건설하는 무한창조의 꿈
                        </div>
                    </a>
                    <div className={styles.more_btn}>
                        <a href="http://localhost:3000/construct/construct" className={styles.btn_white}>MORE</a>
                    </div>
                </div>
                <div className={styles.door_two}>
                    <a href="" className={styles.part_wrap}>
                        <div className={styles.part}>
                            토목사업
                        </div>
                        <div className={styles.part_tit}>
                            Civil<br />
                            Infrastructure
                        </div>
                        <div className={styles.part_description}>
                            기술과 역량을 바탕으로 새로운 공간 창조
                        </div>
                    </a>
                    <div className={styles.more_btn}>
                        <a href="http://localhost:3000/civilengineering/civilengineering" className={styles.btn_white}>MORE</a>
                    </div>
                </div>
                <div className={styles.door_three}>
                    <a href="" className={styles.part_wrap}>
                        <div className={styles.part}>
                            플랜트사업
                        </div>
                        <div className={styles.part_tit}>
                            Plant
                        </div>
                        <div className={styles.part_description}>
                            Grobal EPC Contractor 더 큰 세계를 향한 도약
                        </div>
                    </a>
                    <div className={styles.more_btn}>
                        <a href="http://localhost:3000/plant/plant" className={styles.btn_white}>MORE</a>
                    </div>
                </div>
                <div className={styles.door_four}>
                    <a href="" className={styles.part_wrap}>
                        <div className={styles.part}>
                            주택사업
                        </div>
                        <div className={styles.part_tit}>
                            Housing
                        </div>
                        <div className={styles.part_description}>
                            주거문화의 프리미엄 브랜드
                        </div>
                    </a>
                    <div className={styles.more_btn}>
                        <a href="http://localhost:3000/house/house" className={styles.btn_white}>MORE</a>
                    </div>
                </div>
            </div >
            <Footer />
        </section>
    )
}

export default Majorbussiness;