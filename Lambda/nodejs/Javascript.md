# Javascript

1. global
	- 전역 정보를 가지는 객체를 반환
	
2. Object
	- 주어진 값의 객체 리퍼를 생성
	- null, undefined -> 빈 객체를 생성 및 반환    
	  값 존재			  -> 값을 그대로 반환
	
	- 속성  
	Object.length   
	Object.prototype : object형의 모든 객체에 속성을 추가
	
	-  메서드     
	Object.assign()	: 하나 이상의 원본 객체들로부터 모든 열거가능한 속성들을 대상 객체로 복사     
	Object.keys()	: 주어진 객체 자신의 열거가능한 속성들의 이름의 배열을 반환

3. hasOwnProperty
	- 해당 객체에 특정 프로퍼티가 존재하면 true, 그렇지 않으면 false 를 반환
	- 프로토타입 체인은 확인x 해당 객체가 스스로 정의한 프로퍼티만 판단
	- 예기치 못한 상황에 따른 버그 대비 / 코드의 가독성 향상

4. 접근자 프로퍼티
	- 프로퍼티를 읽거나 쓸 때 호출하는 함수를 값 대신에 지정할 수 있는 프로퍼티
	- getter -> obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행     
	  setter -> obj.propNAme = value으로 프로퍼티에 값을 할당하려 할 때 실행
	
5. for ... in
	- for (variable in object) { ... }
	- object에 있는 항목들을 반복적으로 반환하여 '무언가'를 할 수 있게 해줍니다.


