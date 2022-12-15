import React from "react";
import styles from './footer.module.css';


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.inner_footer}>
        <ul className={styles.reference}>
          <li>
            <a href="#">이메일주소 무단수집거부</a>
          </li>
          <li>
            <a href="#">개인정보 처리방침</a>
          </li>
          <li>
            <a href="#">개인정보 수집 출처 및 처리 목적</a>
          </li>
          <li>
            <a href="#">윤리경영</a>
          </li>
          <li>
            <a href="#">고객센터</a>
          </li>
          <li>
            <a href="#">영상정보처리기기 운영관리 방침</a>
          </li>
        </ul>
        <div className={styles.certification}>
          <img src={require('./images/lsms.png')} />
          <p>인증범위: 삼성물산 온라인 서비스(래미안 홈페이지 및 대표/건설/상사 홈페이지) | 유효기간: 2022.07.20~2025.07.19</p>
        </div>
        <address>
          서울특별시 강동구 상일로 6길 26
          <span className={styles.tel}>대표전화 02) 2145-5114 </span>
        </address>
        <p className={styles.copyright}>
          COPYRIGHT © 2017 SAMSUNG C&T. ALL RIGHTS RESERVED.
        </p>
        <div className={styles.footer_option}>
          <ul className={styles.sns}>
            <li className={styles.blog}>
              <a href="https://blog.naver.com/samsungblueprint">블로그</a>
            </li>
            <li className={styles.facebook}>
              <a href="https://www.facebook.com/samsungcnt?fref=photo">페이스북</a>
            </li>
            <li className={styles.youtube}>
              <a href="https://www.youtube.com/user/Samsungcnt">유튜브</a>
            </li>
          </ul>
          <div className={styles.content_select}>
            <div className={styles.select_wrap}>
              <div className={styles.select_box}>
                <select>
                  <option className={styles.select_opt1}>
                    <a>FAMILY SITE</a>
                  </option>
                  <option>
                    <a href="">삼성물산</a>
                  </option>
                  <option>
                    <a href="">래미안</a>
                  </option>
                  <option>
                    <a href="">삼성물산 건설부문 블로그</a>
                  </option>
                  <option>
                    <a href="">삼성물산 영문 블로그</a>
                  </option>
                  <option>
                    <a href="">삼성물산 상사부문</a>
                  </option>
                  <option>
                    <a href="">삼성물산 패션부문</a>
                  </option>
                  <option>
                    <a href="">삼성물산 리조트부문</a>
                  </option>
                  <option>
                    <a href="">협력회사 Portal</a>
                  </option>
                  <option>
                    <a href="">e-사이버감사팀</a>
                  </option>
                  <option>
                    <a href="">Whessoe</a>
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;