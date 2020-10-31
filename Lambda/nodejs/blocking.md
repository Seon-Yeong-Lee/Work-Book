# Blocking / Non-Blocking

- - - 
- sync

  동기는 두 가지 이상의 대상(함수, 애플리케이션 등)이 서로 시간을 맞춰 행동하는 것

- async

  대상이 서로 시간을 맞추지 않는 것

- - - 


- blocking

  자신의 수행결과가 끝날 때까지 제어권을 갖고 있는 것

- non-bloicking

  자신이 호출되었을 때 제어권을 바로 자신을 호출한 쪽으로 넘기며, 자신을 호출한 쪽에서 다른 일을 할 수 있도록 하는 것

- - -


> sync blocking

    호출되는 함수는 바로 리턴하고, 호출하는 함수는 작업 완료 여부를 신경쓰지 않는 것

> sync non-blocking

    호출되는 함수는 바로 리턴하고, 호출하는 함수는 작업 완료 여부를 신경쓰는 것

> async blocking

    출력되는 함수가 바로 리턴하지 않고, 호출하는 함수는 작업 완료 여부를 신경쓰지 않는 것
 

> async non-blocking

    출력되는 함수가 바로 리턴하지 않고, 호출하는 함수는 작업 완료 여부를 신경쓰는 것
    
    
- - - 


[관련링크 1] https://velog.io/@codemcd/Sync-VS-Async-Blocking-VS-Non-Blocking-sak6d01fhx

[관련링크 2] https://homoefficio.github.io/2017/02/19/Blocking-NonBlocking-Synchronous-Asynchronous/
