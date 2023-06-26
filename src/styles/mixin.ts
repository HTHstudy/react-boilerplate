import { css } from '@emotion/react';

// 중앙정렬
export const flexRowCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 세로중앙정렬
export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 전체화면 모달 스타일
export const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

// 글자 ... 처리
export const ellipsisText = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

// 이미지 중앙 정렬 및 꽉 채우기
export const imageCenter = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
