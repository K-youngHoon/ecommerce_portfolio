#!/bin/bash

# 현재 스크립트의 위치를 기준으로 경로 설정
cd "$(dirname "$0")/.."

# 기존 컨테이너 중지 및 삭제
docker compose down || echo "컨테이너 중지 중 문제가 발생했습니다."

# 새 컨테이너 실행
docker compose up -d || echo "컨테이너 실행 중 문제가 발생했습니다."

# 컨테이너 상태 확인
docker ps
