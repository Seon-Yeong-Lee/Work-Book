# Docker

* 컨테이너 기반의 오픈소스 가상화 플랫폼

      컨테이너 : 격리된 공간에서 프로세스가 동작하는 기술

      이미지 : 컨테이너 실행에 필요한 파일과 설정값등을 포함하고 있는 것

* 도커 실행

      => docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]

      -v : 호스트와 컨테이너의 디렉토리를 연결 (마운트)
      –link : 컨테이너 연결 [컨테이너명:별칭]
      -d : 백그라운드 모드
      -p : 호스트와 컨테이너의 포트를 연결 (포워딩)
      -e : 컨테이너 내에서 사용할 환경변수 설정
      –name : 컨테이너 이름 설정
      –rm : 프로세스 종료시 컨테이너 자동 제거
      -it : -i와 -t를 동시에 사용한 것으로 터미널 입력을 위한 옵션
	
* 도커 기본 명령어

       컨테이너 목록 확인
        => docker ps [OPTIONS]
	
  
 <br>
 
[관련 링크]	https://subicura.com/2017/01/19/docker-guide-for-beginners-2.html