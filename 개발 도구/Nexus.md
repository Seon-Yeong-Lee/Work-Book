# Nexus

### Nexus? maven에서 사용할 수 있는 가장 널리 사용되는 무료 레포
* 사용이유 : 외부망 접속 불가로 인하여 해당 넥서스에 maven, jar파일 업로드하여 사용


### Maven프로젝트에 Nexus설정하기
.m2/setting.xml
```XML
<mirrors>
  <mirror>
    <id>nexus</id>
    <mirrorOf>central</mirrorOf>
    <url>http://172.30.135.25:8098/nexus/content/groups/public</url>
  </mirror>
</mirrors>
```

<hr/>
[Nexus 설치 사이트] https://www.sonatype.com/products/repository-pro/trial?hsCtaTracking=387944e4-949c-403c-a489-bd67e7c31a2a%7Ca59637d2-4904-4eb5-9a0b-5d380c65bf51

[Nexus 구성관련 참고자료] https://sound10000w.tistory.com/181
