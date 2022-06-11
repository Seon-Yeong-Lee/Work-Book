# Kill process

* 실행중인 포트 확인
  * lsof -i tcp:8080

* 해당 포트 kill
  * kill $(lsof -t -i:8080)



[참고] https://didadico.tistory.com/entry/Mac에서-8080포트-사용중인-프로세스-찾기 [Different days, different colors]
