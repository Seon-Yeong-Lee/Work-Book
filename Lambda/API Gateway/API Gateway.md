# Amazon API Gateway

     API => Application Programming Interface
         프로그램과 또 다른 프로그램을 연결

     백엔드 HTTP 엔드포인트
     AWS Lambda 함수
     기타 AWS 서비스를 노출하기 위한 RESTful API의 생성, 배포 및 관리
- - - 
1. REST API
	- 클라이언트가 서비스에 요청을 보내고 서비스가 동기식으로 응답하는 요청/응답 모델
	- HTTP 통신에서 어떤 자원에 대한 CRUD 요청을
			Resource와 Method로 표현하여 특정한 형태로 전달하는 방식
	
	- 구성요소
		· Resource
			서버 : Unique한 ID를 가짐
			클라이언트 : 서버가 가진것에 요청을 보냄
			=> URI, URL
			
		· Method
			CRUD 연산 ( GET, POST, PUT, DELETE )
				-> 서버에 요청을 보냄
			
		· Representation of Resource
			클라이언트와 서버가 데이터를 주고받는 형태 
			=> json(주로 사용) , xml , ..
			
2. HTTP API
	- 하이퍼텍스트 트랜스퍼란 링크 기반으로 데이터를 요청하고 받음
	
	- 동작방식
		· 클라이언트	: 웹어플리케이션의 경우 크롬, IE 등 브라우저를 통햇허 서버에 요청을 함(프로토콜 + 도메인 + URI)
		· 서버		: 클라이언트로부터 받은 요청을 내부적으로 처리하여 그에 대한 결과를 응답해줌

3. WebSocket API
	- 클라이언트 앱과 백엔드 간의 양방향 통신을 지원
		( 백엔드에서 연결된 클라이언트로 콜백 메세지 전송가능 )
	
	- 실시간 애플리케이션에서 자주 사용


[관련 링크] https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/welcome.html
