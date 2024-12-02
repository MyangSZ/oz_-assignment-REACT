# 포켓몬 API사용

### Redux, redux-Toolkit 사용
### 도감 목록 설정

- 201202/ 콘솔오류 수정
thunk.js 객체만들기 부분 수정

description: data.description: data.flavor_text_entries.find(
          (el) => el.language.name === "ko").flavor_text,
 -> description: data.flavor_text_entries.find(
          (el) => el.language.name === "ko"), 로 수정
