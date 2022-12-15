import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import MainCom from './main/main';
import Construct from './construct/construct';
import Civilengineering from './civilengineering/civilengineering';
import Plant from './plant/plant';
import House from './house/house';
import Introduce from './introduce/introduce';
import Innovation from './innovation/innovation';
import Management from './management/management';
import Promote from './promote/promote';
import Recruit from './recruit/recruit';

import Majorbussiness from './majorbussiness/majorbussiness';
import Landmark from './landmark/landmark';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

//yarn add react-router-dom@5

function App() {
  return (
    <div className="main_wrapper">
      <div className='category'>
        <ul className='header_left'>
          <li><a href='#'>삼성물산</a></li>
          <li><a href='#'>상사부문</a></li>
          <li><a href='#'>패션부문</a></li>
          <li><a href='#'>리조트부문</a></li>
        </ul>
        <ul className='header_right'>
          <li><a href='#'>CONTACT US</a></li>
          <li><a href='#'>SITEMAP</a></li>
          <div className='select_box'>
            <select>
              <option>
                <a href="">KOR</a>
              </option>
              <option>
                <a href="">ENG</a>
              </option>
            </select>
          </div>
          <div className='select_box'>
            <select>
              <option>
                <a href="">Global Network</a>
              </option>
              <option>
                <a href="">AMERICA</a>
              </option>
              <option>
                <a href="">AFRICA</a>
              </option>
              <option>
                <a href="">ASIA</a>
              </option>
              <option>
                <a href="">OCEANA</a>
              </option>
            </select>
          </div>
        </ul>
      </div>

      <div className='header dropdown'>
        <div className='header_in'>
          <div className='nav_left'>
            <ul className='nav_left_list'>
              <li className='dropbtn'><Link to='/construct/construct'>건축사업</Link></li>
              <li className='dropbtn'><Link to='/civilengineering/civilengineering'>토목사업</Link></li>
              <li className='dropbtn'><Link to='/plant/plant'>플랜트사업</Link></li>
              <li className='dropbtn'><Link to='/house/house'>주택사업</Link></li>
              <div className='dropdown-content'>
                <ul className='dropdown-dep1'>
                  <li>
                    <img />
                    <a href='/construct/construct' className='dropdown-construct'>건축사업</a>
                  </li>
                  <li>
                    <img />
                    <a href='/civilengineering/civilengineering' className='dropdown-civilengineering'>토목사업</a>
                  </li>
                  <li>
                    <img />
                    <a href='/plant/plant' className='dropdown-plant'>플랜트사업</a>
                  </li>
                  <li>
                    <img />
                    <a href='/house/house' className='dropdown-house'>주택사업</a>
                  </li>
                  <li>
                    <div className='bar-btn'>
                      <a href='/majorbussiness/majorbussiness' className='btn'>주요사업안내</a>
                    </div><br />
                    <div className='bar-btn'>
                      <a href='/landmark/landmark' className='btn'>LANDMARK</a>
                    </div>
                  </li>
                </ul>
                <div className='dropdown-content-right'>
                  <div>
                    <ul className='dropdown-dep-list1'>
                      <li><a href=''>Overview</a></li>
                      <li><a href=''>연혁</a></li>
                      <li><a href=''>Vision</a></li>
                      <li><a href=''>글로벌네트워크</a></li>
                      <li><a href=''>IR정보</a></li>
                    </ul>
                    <ul className='dropdown-dep-list2'>
                      <li><a href=''>기술팀</a></li>
                      <li><a href=''>재산권</a></li>
                    </ul>
                    <ul className='dropdown-dep-list3'>
                      <li><a href=''>경영이념</a></li>
                      <li><a href=''>기술경영</a></li>
                      <li><a href=''>사회공헌</a></li>
                    </ul>
                    <ul className='dropdown-dep-list4'>
                      <li><a href=''>뉴스</a></li>
                      <li><a href=''>홍보센터</a></li>
                    </ul>
                    <ul className='dropdown-dep-list5'>
                      <li><a href=''>채용안내</a></li>
                      <li><a href=''>직무소개</a></li>
                      <li><a href=''>인사제도</a></li>
                      <li><a href=''>채용 FAQ</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className='logo'>
            <a href='/main/main'><img src='/img/samsung-logo.jpg' /></a>
          </div>
          <div className='nav_right'>
            <ul>
              <li className='dropbtn'><Link to='/introduce/introduce'>부문소개</Link></li>
              <li className='dropbtn'><Link to='/innovation/innovation'>기술혁신</Link></li>
              <li className='dropbtn'><Link to='/management/management'>지속가능경영</Link></li>
              <li className='dropbtn'><Link to='/promote/promote'>홍보센터</Link></li>
              <li className='dropbtn'><Link to='/recruit/recruit'>인재채용</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Route path="/construct/construct" component={Construct} />
        <Route path="/civilengineering/civilengineering" component={Civilengineering} />
        <Route path="/plant/plant" component={Plant} />
        <Route path="/house/house" component={House} />
      </div>
      <div className="main_wrap_of_wrap">
        <Route path="/" exact={true} component={MainCom} />
        <Route path="/main/main" exact={true} component={MainCom} />
      </div>
      <div>
        <Route path="/introduce/introduce" component={Introduce} />
        <Route path="/innovation/innovation" component={Innovation} />
        <Route path="/management/management" component={Management} />
        <Route path="/promote/promote" component={Promote} />
        <Route path="/recruit/recruit" component={Recruit} />
      </div>

      <div>
        <Route path="/majorbussiness/majorbussiness" component={Majorbussiness} />
        <Route path="/landmark/landmark" component={Landmark} />
      </div>
    </div >



  );
}

export default App;
