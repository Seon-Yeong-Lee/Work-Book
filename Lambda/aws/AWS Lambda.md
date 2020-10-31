# AWS Lambda

- 서버를 관리하지 않고도 코드를 실행할 수 있게 해주는 컴퓨팅 서비스
	
- 'Lambda 함수'

	  AWS Lambda에서 실행하는 코드
  
	  트리거되는 즉시 언제든지 실행

- lambda runtime

	  함수를 생성할 때 런타임을 선택하며, 함수의 구성을 업데이트하여 런타임을 변경
	
- callbackWaitsForEmptyEventLoop

	  사용하는 라이브러리에서 Timeout에러 -> callbackWaitsForEmptyEventLoop옵션을 설정
  
	  Lambda 함수에서는 callback(async일경우 return)이 호출되어도 람다가 끝나지않고 이벤트루프에있는 작업들이 끝나기를 기다린다.
