# 프로젝트 버전 명세

- Nodejs - v18.15.0
- React - v18.2.0
- yarn - v3.5.1

# 프로젝트 기술 스택

- React 18+, NextJS 13+
- React Router v6.4+
- emotion(scss, styled-component)
- zustand
- eslint, prettier
- yarn berry
- vite
- json-server(not required)

# 프로젝트 실행 명세

- ~~git clone 후 프로젝트 초기 설정 시 yarn install 사용 !!!~~
- ~~yarn dlx @yarnpkg/sdks vscode (vscode 사용시)~~
- ZipFS VSCode 확장 프로그램 설치 (vscode 사용시)

`yarn set-init`은 `git clone` 이후 최초에만 실행 하면 된다.

```zsh
yarn set-init
yarn dev
```

**package.json** file 참고

**script/set-init.sh** file 참고

```json

  "scripts": {
    "set-init": "sh script/set-init.sh",
    ...
  },
```

# MOCK SERVER 사용법

mock 작업을 위해 json-server 이용한다.

> - 사전에 .env 파일에
> - VITE_REACT_APP_MOCK_PORT="7777"
> - 위 형식대로 환경 변수(원하는 포트 번호)를 추가 해준다

```zsh
yarn mock
```

## 부가 설명 예시

```json
// mockDB.json
// ex) todos
{
  "todos": [
    {
      "id": 1,
      "name": "1",
      "done": true
    },
    {
      "id": 2,
      "name": "2",
      "done": false
    },
    {
      "id": 3,
      "name": "3",
      "done": false
    }
  ]
}
```

```ts
// mockTodoCRUD.ts
import axios from 'axios';

const MOCK_PORT = import.meta.env.VITE_REACT_APP_MOCK_PORT as string;

export type Todo = {
  id: number;
  name: string;
  done: boolean;
};
/** 전체 Todo List 가져오기 */
export const getTodos = async () => {
  ...
};
/** 새로운 Todo 추가 */
export const addTodo = async (name: Todo['name']) => {
  ...
};

/** 해당 Todo의 done 상태 변경 */
export const toggleTodo = async (id: Todo['id']) => {
  ...
};
/** 해당 Todo 삭제 */
export const deleteTodo = async (id: Todo['id']) => {
  ...
};

```

**check-json-server.sh** 참고

**mockDB.json** 참고

**mockTodoCRUD.ts** 참고

# 프로젝트 커밋 컨벤션

- feat : 새로운 기능 추가
- edit : 코드 수정
- fix : 버그 수정
- docs : 문서 수정
- style : Style 변경
- refactor : 코드 리펙토링
- test : 테스트 코드 추가 및 수정, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정
- story : 스토리북 추가 및 수정

# 프로젝트 디렉토리 구조

> src <br/>
> ⎣&nbsp;**pages** - 페이지 단위의 컴포넌트 : 하위로 공용컴포넌트 및 페이지별 컨테이너와 컴포넌트 트리구조로 형성<br/>
> ⎣&nbsp;**router** - Route 관련 파일 <br/>
> ⎣&nbsp;**api** - rest api 및 주소 <br/>
> ⎣&nbsp;**assets/images** - image 파일 <br/>
> ⎣&nbsp;**assets/icons** - image 파일 <br/>
> ⎣&nbsp;**assets/fonts** - font 파일 <br/>
> ⎣&nbsp;**components** - 범용적으로 사용되는 UI 파일<br/>
> ⎣&nbsp;**constants** - 상수 폴더<br/>
> ⎣&nbsp;**hooks** - custom hooks<br/>
> ⎣&nbsp;**i18n** - i18n<br/>
> ⎣&nbsp;**locale** - lang<br/>
> ⎣&nbsp;**types** - Typescript 객체에 대한 타입 지정을 모아두고 있다.<br/>
> ⎣&nbsp;**store** - 전역상태 관련 파일(zustand)<br/>
> ⎣&nbsp;**styles** - css 모음<br/>
> ⎣&nbsp;**utils** - util 함수들<br/><br/>

<!-- > ⎣&nbsp;**components/@common** - 글로벌 공통 컴포넌트<br/>
> ⎣&nbsp;**components/[route]** - 페이지 별 컨테이너<br/>
> ⎣&nbsp;**components/[route]/[common]** - 페이지 별 공통 컴포넌트<br/>
> ⎣&nbsp;**components/[route]/[component]** - 페이지 별 컴포넌트<br/> -->
