# Jenkins
1. maven 설정 추가

	* maven.tar 파일을 젠킨스 서버에 추가 및 압축해제
	* 젠킨스에서 maven경로 추가
	* maven clean
	* maven package
	
	    => tar 파일 생성

2. 파일 이동
	
    * 젠킨스 서버 -> 해당 배포 서버
	  
    * 해당 비밀번호 지정으로 인하여 접근 x , 공개키 만들어서 해결

3. deploy 실행

	* ssh 명령을 실행할 수 있는 권한
