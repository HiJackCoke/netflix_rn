netflix_clone

## 주요기능

- [x] API 연동 및 받아온 DATA 뿌려주기
- [x] Movie 슬라이드 구현(nowPlaying)
- [x] 이미지 슬라이드쇼(movieSlied, vertical, horizontal, scrollContainer)
- [x] Movie 구현(nowPlaying, popular, upcoming)
- [x] Show 화면 구현(popular, topRated, airing_today)
- [x] 검색페이지 구현 및 키워드 서칭 결과 출력
- [x] 세부페이지 구현 및 링크 추가
- [x] 선택한 ID에 대한 추천 영화 및 TV 구현

## 완성 화면
<img src="https://user-images.githubusercontent.com/54699548/93192937-31689200-f781-11ea-84d2-1862399e6a38.gif" /> <img src="https://user-images.githubusercontent.com/54699548/93193254-92906580-f781-11ea-87d7-3aac4349d1ce.gif" /> <img src="https://user-images.githubusercontent.com/54699548/93193348-b2278e00-f781-11ea-8228-9a013bb236c5.gif"/> <img src="https://user-images.githubusercontent.com/54699548/93993665-fb06c480-fdc9-11ea-90dd-611686a14378.gif" />
## 활용한 기술
- [x] NodeJs, React-native, Hook(useState, useEffect, useLayoutEffect)
- [x] axios를 이용한 API 연동
- [x] Vertical, Horizontal, Animation slide

## Study Note

axios를 이용한 API 연동
- [x] 비동기 방식으로 API를 불러오는 함수 만들기
- [x] TMDB 사이트 API를 활용하여 원하는 영화 및 TV Show(Popular, upcoming, airing_today, 등) 함수 만들기
<img src="https://user-images.githubusercontent.com/54699548/93196434-64ad2000-f785-11ea-969d-40a2135408a9.png" width="480"/>


Hook 사용
- [x] useState 
 - useState을 이용해 초기 상태값 설정
 - 키워드 값을 통한 Search 결과 출력
<img src="https://user-images.githubusercontent.com/54699548/93212428-8dd9aa80-f79d-11ea-8e90-08e0c9b0a0e5.png" width="480" />

- [x] useEffect 
 - TMDB의 API를 불러오기
 - Api mapping
<img src="https://user-images.githubusercontent.com/54699548/93212715-eb6df700-f79d-11ea-948e-39ac288eaa53.png" width="480" />
 


