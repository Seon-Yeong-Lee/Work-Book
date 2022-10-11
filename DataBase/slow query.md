> slow query 발생시 대처 방법

### 1. 현재 실행중인 프로세스 목록 확인

* SHOW processlist;
* select * from information_schema.PROCESSLIST;
* select * from information_schema.PROCESSLIST where COMMAND='Query' order by TIME desc;

### 2. 해당 프로세스 종료처리
kill 0123;
