# Lambda Function

1. handler
	- lambda function 시작되는 메인함수

2. event
	- request
	- Lambda 실행 <br>
    -> 파라미터값들 API Gateway 연동 <br>
    -> GET, POST, PUT, DELETE 동작이 넘겨지는
							query, body, parmas,.. 의 값들

3. context
	- response
	- 결과 리턴 함수 : done(), succeed(), fail()

4. callback
