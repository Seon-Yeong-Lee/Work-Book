### Elastic Load Balancing

      애플리케이션 트래픽을 Amazon EC2 인스턴스, 컨테이너, IP 주소, Lambda 함수와 같은 여러 대상에 자동으로 분산

      1. ALB (Application Load Balancer)
        HTTP 및 HTTPS 트래픽의 로드 밸런싱에 가장 적합
        마이크로서비스와 컨테이너 등 최신 애플리케이션 아키텍처 전달을 위한 고급 요청 라우팅 기능을 제공
        개별 요청 수준(계층 7)에서 작동
        요청의 콘텐츠를 기반으로 Amazon VPC(Amazon Virtual Private Cloud) 내의 대상으로 트래픽을 라우팅

      2. NLB (Network Load Balanced)
        극한의 성능이 요구되는 TCP(Transmission Control Protocol), UDP(User Datagram Protocol) 
            및 TLS(전송 계층 보안) 트래픽의 로드 밸런싱에 가장 적합
        연결 수준(계층 4)에서 작동
        Amazon VPC(Amazon Virtual Private Cloud) 내의 대상으로 트래픽을 라우팅
        초당 수백만 개의 요청을 처리하면서 지연 시간을 매우 낮게 유지
        갑작스러운 일시적 트래픽 패턴 처리에도 최적화

      3. CLB (Classic Load Balancer)
        여러 Amazon EC2 인스턴스에서 기본적인 로드 밸런싱을 제공
        요청 수준 및 연결 수준에서 작동
        EC2-Classic 네트워크 내에 구축된 애플리케이션을 대상

### 로드밸런싱 (Load Balancing)

      여러 대의 서버를 두고 서비스를 제공하는 분산 처리 시스템에서 필요한 기술


### 로드 밸런서 (Load Balancer)
      
      서버에 가해지는 부하를 분산해주는 장치 또는 기술

### Scale-up
      
      서버 자체의 성능을 확장하는 것을 의미
      
### Scale-out

      기존 서버와 동일하거나 낮은 성능의 서버를 두 대 이상 증설하여 운영하는 것을 의미
      여러 대의 서버로 트래픽을 균등하게 분산

### L4

      네트워크 계층(IP, IPX)이나 트랜스포트 계층(TCP, UDP)의 정보를 바탕으로 로드를 분산
      IP주소나 포트번호, MAC주소, 전송 프로토콜에 따라 트래픽을 나누는 것이 가능
      

### L7

      애플리케이션 계층(HTTP, FTP, SMTP)에서 로드를 분산하기 때문에 
        HTTP 헤더, 쿠키 등과 같은 사용자의 요청을 기준으로 특정 서버에 트래픽을 분산하는 것이 가능


[관련 링크] https://aws.amazon.com/ko/elasticloadbalancing
