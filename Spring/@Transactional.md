# @Transactional

* 사용해야 될때
  * 회원이 회원가입시 중복 가입된다면?
  * 회원가입시 생성되는 데이터가 중간에서 에러가 발생한다면?
  * 마일리지를 1회에 한해서 지급해야 되는데 중복되서 지급된다면?

> 클래스나 메서드에 붙여줄 경우, 해당 범위 내 메서드가 트랜잭션이 되도록 보장 <br/>
> 단, private 또는 protected 메서드에 사용할 경우 무시된다.
 



[관련 링크] https://www.baeldung.com/spring-transactional-propagation-isolation
