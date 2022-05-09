# DB 정기점검

## 시스템 점검시간을 이용하여 마일리지관련 테이블을 변경한다.

### DB 설계 팁 공유 
``` 해당 DB 설계를 고려하여 DB를 변경한다.```

<br/>

**기본 컬럼**
* Key : timestamp shorten 12자 + uuid shorten 12자
    * Serrial과 Random을 모두 가져갈 수 있음
* Status varchar(6)
    * 더 길어질 경우 6글자 이상도 가능 최대한 6글자
    * Varchar vs char 중에서 누가 더 빠른가? 무조건 varchar
    * Int, tinyint 말고 varchar를 쓰는 이유는 db에서 primitive가 varchar
* Created
    * Timestamp
* Creater
* Updated
* Updater
    * Timestamp or updated timestamp

* 유의사항
    * meta와 log성 데이터 분리
        * Log 데이터는 웬만하면 archaive에서 생성/수정 하도록
