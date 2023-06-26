# Styles

## styles 디렉토리

css관련 파일들 모음

### global.css

전역에 추가 되어야 할 css
NextJS에서는 `pages/_app.tsx`에 import 되어야 한다.

### reset.css

css 초기화

### font.css

font 설정
global.css에서 import 해준다.

### theme.ts

emotion provider를 통해 추가 해줄 theme 설정
dark/light 등의 테마 관련 설정하기 용이하다.

### mixin.ts

scss의 mixin을 emotion에서 사용할 변수들을 모아놓은 파일
