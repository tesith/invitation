import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./components/gallery";
import Image from "./components/image.js";
import frontImage from "./assets/image-gallery/KIM_0026_custom.png"
import Divider from "./components/divider";
import heartImage from './assets/heart.png';
import Map from "./components/map";
import Button from "./components/button";
import Modal from "./components/modal";
import NametagGroom from "./assets/groom-nametag.png";
import NametagBride from "./assets/bride-nametag.png";
import galleryImage from "./assets/gallery-icon2.png";
import letterImage from "./assets/letter-icon.png";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  return (
    <div className="App">
      <div className="header">
        <Image src={frontImage} width="400px" height="400px" mode="contain" />
      </div>
      <ul className="child">
        조인식 <img src={heartImage} style={{verticalAlign: "middle"}} /> 정유하<br/>
        결혼합니다<br/>
        <br/>
        <div style={{lineHeight: "150%"}}>
        2024년 10월 5일 토요일 오후 1시 10분<br/>
        W힐스컨벤션
        </div>
      </ul>
      <Divider className="child" />
      <div>
        <ul className="child" style={{textAlign: "left", paddingLeft: "150px", lineHeight: "150%"}}>
          <span className="october">10월의 시작,</span><br/>
          저희 두 사람도 이제 사랑으로 하나되어<br/>
          한 길을 걷고자 합니다.<br/>
          가까이서 저희의 출발을 응원해주시면<br/>
          더 없는 기쁨으로 간직하겠습니다.
        </ul>
      </div>
      <Divider className="child" />
      <div className="child" >
        <div className="text-icon-container">
          <Image className="text-icon" src={galleryImage}></Image>
          <span className="h3">갤러리</span>
        </div>
        <Gallery style={{paddingTop: "30px" }} />
      </div>
      <Divider className="child" />
      <div className="child" >
        <Map />
      </div>
      <Divider className="child" />
      <div className="child">
        <div className="text-icon-container">
          <Image className="text-icon" src={letterImage}></Image>
          <span className="h3">마음 전하실 곳</span>
        </div>
        <ul className="child-heart">
          신랑측 계좌번호 <Button onClick={openModal}>보기</Button>
          <Modal isOpen={isModalOpen} close={closeModal}>
            <div className="nametag_img">
              <Image src={NametagGroom}></Image>
              <span className="nametag">신랑</span>
            </div>
            <p>조인식 : 1002-541-398027 우리은행</p>
            <div className="nametag_img">
              <Image src={NametagGroom}></Image>
              <span className="nametag">혼주</span>
            </div>
            <p>조철우(부) : 111-02-223604 농협은행</p>
          </Modal>
          <br/>
          신부측 계좌번호 <Button onClick={openModal2}>보기</Button>
          <Modal isOpen={isModalOpen2} close={closeModal2}>
            <div className="nametag_img">
              <Image src={NametagBride}></Image>
              <span className="nametag">신부</span>
            </div>
            <p>정유하 : 302-1603-1651-11 농협은행</p>
            <div className="nametag_img">
              <Image src={NametagBride}></Image>
              <span className="nametag">혼주</span>
            </div>
            <p>정훈채(부) : 351-0058-8801-03 농협은행</p>
            <p>한길순(모) : 207083-51-021081 지역농협</p>
          </Modal>
        </ul>
      </div>
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
