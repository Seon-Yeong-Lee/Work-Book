# Jenkins

### 외부망 접근 불가
### 젠킨스 내부 maven install 사용불가

<br/>

1. maven 설정 추가

	* maven.tar 파일을 젠킨스 서버에 추가 및 압축해제
	* 젠킨스에서 maven경로 추가
	```
	Global Tool Configuration
	  maven 
	  - name : mvn
	  - MAVEN_HOME : /approot/apache-maven-3.6.3
	```
	
	* maven clean
	```
	-f/${WORKSPACE}/server_src/pom.xml clean
	```
	
	* maven package
	```
	-f/${WORKSPACE}/server_src/pom.xml package
	```
	
	    => tar 파일 생성


	```
	▷ Maven이란?

	Java기반 프로젝트의 라이프사이클 관리를 목적으로 하는 빌드 도구
	컴파일과 빌드를 동시에 수행, 테스트를 병행하거나 서버 측 Deploy 자원을 관리할 수 있는 환경을 제공하고 라이브러리 관리 기능을 내포
	Java로 개발하다 보면 다양한 라이브러리를 필요로 하게 되는데, pom.xml 파일에 필요한 라이브러리만 적으면 Maven이 다운, 설치, 경로까지 지정
	프로젝트를 진행하다 보면 라이브러리들을 많이 활용하게 되는데, 점점 많아지는 라이브러리들을 일일히 관리하기 어려움

	하지만 Maven을 이용하게 된다면 코드 몇줄로 필요한 라이브러리를 작동시키고 
	그 라이브러리가 필요로 하는 다른 라이브러리(의존 라이브러리)들까지 자동으로 관리해주어서 편리함
	```


2. 파일 이동
	
    * 젠킨스 서버 -> 해당 배포 서버
    ```
	-f/${WORKSPACE}/server_src/target/HCS.war webwas@172.30.71.16:/approot/webapps
    ``` 
    * 해당 비밀번호 지정으로 인하여 접근 x , 공개키 만들어서 해결

3. deploy 실행

	* ssh 명령을 실행할 수 있는 권한
	
	* ssh로 실행
	```
	ssh -t -t webwas@172.30.71.16 "sh/approot/webapps/deploy.sh"
	```
 
