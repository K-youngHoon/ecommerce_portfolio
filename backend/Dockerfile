FROM openjdk:17-jdk-slim

# 환경 변수 설정 (실제 JDK 설치 경로에 따라 조정)
ENV JAVA_HOME=/usr/local/openjdk-17
ENV PATH=$JAVA_HOME/bin:$PATH

# /etc/profile.d/java.sh 파일에 환경 변수 설정 추가
RUN echo 'export JAVA_HOME=/usr/local/openjdk-17' > /etc/profile.d/java.sh && \
    echo 'export PATH=$JAVA_HOME/bin:$PATH' >> /etc/profile.d/java.sh && \
    chmod +x /etc/profile.d/java.sh

# 필요한 패키지 설치 (openssh-server, sudo 등)
RUN apt-get update && apt-get install -y openssh-server sudo && rm -rf /var/lib/apt/lists/*

# SSH 데몬 실행에 필요한 디렉터리 생성
RUN mkdir /var/run/sshd

# root 비밀번호 설정 (예: 비밀번호를 "rootpass123"로 설정)
RUN echo "root:qwe123!@#" | chpasswd

# SSH 설정 파일 수정 (비밀번호 인증 활성화)
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config && \
    sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config && \
    sed -i 's/UsePAM yes/UsePAM no/' /etc/ssh/sshd_config

# 2. 빌드 산출물 jar 파일을 컨테이너 안으로 복사
ARG JAR_FILE=build/libs/ecommerce-backend-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar

# 3. 컨테이너 실행 시 사용할 명령어
ENTRYPOINT ["java","-jar","/app.jar"]

RUN echo 'export JAVA_HOME=/usr/local/openjdk-17' >> /root/.bashrc && \
    echo 'export PATH=$JAVA_HOME/bin:$PATH' >> /root/.bashrc
