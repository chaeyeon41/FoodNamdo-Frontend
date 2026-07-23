# 🍽️ FoodNamdo

이미지 기반 음식점 검색과 객관적인 리뷰를 제공하는 음식점 추천 플랫폼

기존 음식점 플랫폼의 광고성 리뷰와 텍스트 검색 중심의 한계를 개선하기 위해 개발한 서비스입니다.

사용자는 음식 사진을 업로드하여 유사한 음식점을 검색할 수 있으며, 지역·카테고리별 음식점을 탐색하고 객관적인 리뷰를 통해 원하는 음식점을 쉽게 찾을 수 있습니다.


---


# 📅 Project
기간 : 2024.01 ~ 2024.06

형태 : 팀 프로젝트

Frontend 2명 / Backend 2명


---


# 🚀 Problem

기존 음식점 플랫폼은 다음과 같은 한계가 있었습니다.

광고성 리뷰 및 리뷰 이벤트로 인해 신뢰도 높은 정보를 얻기 어려움
음식 이름을 알아야 검색이 가능함
원하는 분위기나 비슷한 음식 스타일을 찾기 어려움

이를 해결하기 위해 이미지 기반 음식 검색과 객관적인 리뷰 시스템을 제공하는 서비스를 기획했습니다.


---


# ✨ 주요 기능
## 👤 회원
회원가입
로그인 / 로그아웃
JWT 기반 사용자 인증
아이디 / 비밀번호 찾기

## 🍽 음식점
음식점 목록 조회
음식점 상세 조회
지역 및 카테고리 필터
음식점 찜 기능

## ⭐ 리뷰
리뷰 작성 / 수정 / 삭제
카테고리별 평점 제공

## 🔍 검색
음식점 이름 검색
이미지 기반 음식점 검색


---

 
# 🛠 Tech Stack
| Category | Tech |
|----------|------|
| **Frontend** | React, JavaScript, HTML5, CSS3 |
| **State Management** | Context API |
| **Authentication** | JWT |
| **API** | REST API, Axios |
| **Tools** | Git, GitHub, Figma, VS Code |


---


# 👨‍💻 My Role
담당 기능
React 기반 메인 UI 구현
JWT 로그인 및 인증 기능 구현
음식점 목록 및 상세 페이지 개발
음식점 이름 검색 기능 구현
이미지 기반 검색 기능 구현
음식점 찜 기능 구현
REST API 연동
Context API를 활용한 전역 상태 관리


---


# ⚙️ Technical Challenge

프로젝트에서는 다양한 화면에서 동일한 음식점 데이터를 활용해야 했습니다.

초기에는 각 컴포넌트에서 API를 개별적으로 호출하면서 상태 관리가 복잡해졌고, 중복 코드가 발생했습니다.

이를 해결하기 위해 Context API를 활용하여 사용자 정보와 인증 상태를 전역으로 관리하고, 필요한 컴포넌트에서 공통 데이터를 재사용할 수 있도록 구조를 개선했습니다.

또한 이미지 검색 기능을 구현하면서 업로드 상태와 검색 결과를 비동기적으로 처리해야 했기 때문에 API 응답 상태에 따른 UI 처리를 고려하며 사용자 경험을 개선했습니다.


---


# 💡 What I Learned

이번 프로젝트를 통해 가장 크게 배운 점은 사용자 경험을 고려한 기능 설계의 중요성이었습니다.

이미지 검색 기능을 구현하면서 단순히 API를 호출하는 것이 아니라, 사용자가 자연스럽게 검색을 이어갈 수 있도록 화면 흐름과 인터랙션을 고민했습니다.

또한

Context API를 활용한 전역 상태 관리
REST API와의 데이터 연동
JWT 기반 사용자 인증
Git과 GitHub를 활용한 협업
Figma를 통한 UI 설계

를 경험하며 프론트엔드 개발에서 상태 관리와 협업의 중요성을 배울 수 있었습니다.


---


# 📷 Preview
## 메인 화면
<img width="900" src="https://github.com/user-attachments/assets/8beb0ed5-f655-4579-9ef4-920c292964c3" />
## 음식점 목록
<img width="1000" src="https://github.com/user-attachments/assets/98dc767d-a667-4787-9b25-903a1ffa2cbc" />
## 상세 페이지
<img width="834" src="https://github.com/user-attachments/assets/e6f1a9a6-fb7b-41d7-b6ab-a2d4668d7cdf" />
## 이미지 검색
<img width="1089" src="https://github.com/user-attachments/assets/2a27e850-a3a0-4fb6-abe2-3d99c5dfe9d8" />
