#!/bin/bash

# 사전에 .env 파일에
# VITE_REACT_APP_MOCK_PORT="7777"
# 환경 변수(원하는 포트 번호)를 추가 해준다
source .env

if [[ $(npm -g list json-server) == *json-server* ]]; then
  json-server --watch mockDB.json --port $VITE_REACT_APP_MOCK_PORT
else
  npm install -g json-server && json-server --watch mockDB.json --port $VITE_REACT_APP_MOCK_PORT
  echo "json-server package is not installed."
fi