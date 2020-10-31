# module

1. 외부에 영향을 받지 않는 독립된, 재사용 가능한 코드들의 묶음

2. require('파일 경로')
	- 외부 모듈의 파일 경로값

3. exports
	- 전역객체
	- exports에 직접 프로퍼티를 설정 / 새로운 객체에 프로퍼티를 설정 후 module.export에 할당하기
	
	- exports vs module.exports
		같은 객체를 바라보고 있음
		exports가 module.exports를 참조
		
		여러 개의 객체를 내보낼 경우, exports 변수의 속성으로 할당
		딱 하나의 객체를 내보낼 경우, module.exports 변수 자체에 할당
