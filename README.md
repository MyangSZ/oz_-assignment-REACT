# 포켓몬 도감 만들기

### 포켓몬 API사용

### Redux, redux-Toolkit 사용

### 도감 목록 설정

- 201202/ 콘솔오류 수정
  thunk.js 객체만들기 부분 수정

description: data.description: data.flavor_text_entries.find(
(el) => el.language.name === "ko").flavor_text,
-> description: data.flavor_text_entries.find(
(el) => el.language.name === "ko"), 로 수정

### 검색, 찜목록 만들기

검색어 입력시 화면에 적용 되도록
찜(하트모양) 클릭시 찜목록으로 추가 또는 삭제

### 스타일 적용하기

styled-component, tailwind, sass 사용하기
