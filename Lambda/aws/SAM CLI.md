# SAM CLI

- SAM => Serverless Application Model

		 YAML 템플릿을 사용 Application을 설명시 사용하는 단축구문
     
					(Lambda 함수, API 엔드포인트, DynamoDB 테이블 및 기타 리소스)
          
		 배포시 SAM -> AWS Cloudformation템플릿으로 변환 및 확장
     
- CLI  => Command Line Interface

-  로컬에서 Lambda 함수를 실행
-  Cloudformation코드를 검증


-  SAM Template
```
    Transform declaration : SAM Template임을 명시 ('Transform: AWS::Serverless-2016-10-31')

    Globals section : 서버리스 애플리케이션에 공통적으로 적용되는 속성을 정의

    Resources section : CloudFormation 리소스와 SAM 리소스를 정의

    Transform, Resources 필수항목
```

[관련 링크] https://docs.aws.amazon.com/ko_kr/serverless-application-model/index.html
