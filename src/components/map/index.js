import React, { useEffect } from 'react';
import Image from '../image';
import mapImage from "../../assets/map-icon.png";
import './map.css';

const Map = () => {
    const { kakao } = window;

    useEffect(() => { 
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var x = 37.412729;
    var y = 127.127902;
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(x, y), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(x, y)
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent = '<div style="padding:5px;">W힐스컨벤션 B1</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
    });

    infowindow.open(map, marker);

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);  
    });

    }, []);

    return (
        <div width="100%" height="100%">
            <div className="text-icon-container"style={{paddingBottom: "30px"}} >
                <Image className="text-icon" src={mapImage}></Image>
                <span className="h3">오시는 길</span>
            </div>
            <div id="map" className="map">
            </div>
            <ul className="h4">
                <span className="address">경기 성남시 분당구 성남대로925번길 16 지하1층 W힐스컨벤션</span><br/>
                ● 도보: 야탑역(분당선) 4번 출구 - 홈플러스 입구 지하1층<br/>
                ● 자차: CGV야탑 주차장 4F~7F - 36번 기둥 근처 E/V 탑승 - 지하1층
            </ul>
        </div>
    )
}

export default Map;