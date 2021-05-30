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
 
