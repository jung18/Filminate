# Filminate
  
### 배경
---
사람들이 영화를 찾을 때 가장 먼저 접하게 되는 것이 포스터이며 이는 영화에 대한 흥미를 결정하는 중요한 요소이다.
따라서 이미 선호하는 영화의 포스터와 유사한 스타일의 포스터를 가진 다른 영화들을 추천함으로써 사용자의 관심을 끌고 사용자들이 다양한 영화를 발견하는 경험을 제공할 수 있다.


### 역할분담
---
- 정두홍: 백엔드
    - Django
    - mySQL
    - TMDB API로 데이터베이스 제작
    - DRF로 요청별 기능구현
    
- 김고은: 프론트엔드
    - Vue.js
    - Figma
    - 화면정의서 제작
    - 웹에서 응답처리 기능구현
    - 기능별 웹페이지 구현


### 목표
---
사용자가 선호하는 영화 및 장르를 기반으로 유사한 포스터를 가진 영화를 추천해 선호하는 영화와 함께 더 다양한 선택지를 제공하는 서비스


### 주요 기능
---
#### 추천 알고리즘
- 포스터 이미지별 유사도를 기반으로 특정 영화와 비슷한 포스터를 가진 영화들을 추천목록으로 제공
- 사전학습된 CNN모델을 활용해 포스터들의 특징을 추출하고  결과들의 코사인 유사도를 계산해 각 영화와 높은 유사도 상위 5개의 영화를 연결해 데이터베이스에 M:N테이블 구현
- 로그인한 사용자의 좋아요 영화 목록에서 랜덤으로 3개의 영화 선택 및 좋아요 목록의 전체 장르들 기반으로 비슷한 장르의 영화들 중 2개 선택해 총 5개의 영화를 기준으로 추천영화 목록을 제공

#### 영화 검색 기능
- 기본적으로 전체 영화 목록 제공
- 사용자의 검색 키워드를 기준으로 영화 제목과 줄거리에서 해당 키워드로 필터링된 목록 제공

### 실행 화면
---
 #### **로그인**
  ![로그인](https://github.com/user-attachments/assets/19d5eb7d-4ff7-4c6b-93fd-9860b1ac6317)


 #### **영화 정보 + 리뷰**
  ![영화상세](https://github.com/user-attachments/assets/e833de8f-90f4-45c4-b068-a37cc33a2899)


### ERD
---
![erd](https://github.com/user-attachments/assets/d3f7685c-5a77-46f7-b3d4-3bdbb2a3a902)


### 느낀점 / 후기
--- 
#### 정두홍
- 프로젝트의 기획부터 설계 및 구현을 직접 해보며 서비스를 개발할 때 준비되어야 하는 요소들이 뭔지와 프로젝트를 어떤 식으로 진행해야 하는지에 대한 감을 잡을 수 있었고, 프레임워크와 공식문서를 활용하는 능력이 느는 계기가 되었다. 또한 cs공부를 열심히 해야겠다는 생각도 들었다...
#### 김고은
- 첫 프로젝트로 막막한 부분도 있었지만 일단 시작하고 나니 생각한 부분들이 완성되는 과정이 보여 즐겁게 진행할 수 있었다. 시간에 쫓겨 만들어내다 보니 컴포넌트 정리가 되지 않은 부분은 아쉽다. 프론트엔드 부분에만 집중해서 밀도 있게 배워갈 수 있었던 것 같다. 시작부터 끝까지 재미있게 돌아갔다.
