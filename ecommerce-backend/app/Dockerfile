# Java 17 기반의 OpenJDK 사용
FROM openjdk:17-jdk-slim

# 애플리케이션 디렉토리 설정
WORKDIR /app

# JAR 파일 복사
COPY build/libs/ecommerce-backend-0.0.1-SNAPSHOT.jar app.jar

# 애플리케이션 실행 명령어
ENTRYPOINT ["java", "-jar", "/app/app.jar","--server.port=808"]

