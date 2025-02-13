#!/bin/bash

# 현재 스크립트 위치를 기준으로 프로젝트 루트로 이동
cd "$(dirname "$0")/.."

# .env 파일 로드
set -o allexport
source .env
set +o allexport

# Gradle 빌드 실행
./gradlew clean build

# Docker 이미지 빌드
docker compose build
