# addEventListener

```JavaScript
window.addEventListener("click", function(){
  console.log("click");
  
}, true);

// true -> 캡처링을 통해서 이벤트 전파
// false -> 버블링을 통해서 이벤트 전파
```

### 버블링
* 이벤트가 발생한 요소부터 window 까지 이벤트를 전파

<img width="457" alt="event-bubble" src="https://user-images.githubusercontent.com/66587837/122209430-79b70b00-cedf-11eb-9e71-7e1d75ffb7bc.png">

### 캡처링
* window 로부터 이벤트가 발생한 요소까지 이벤트를 전파

<img width="459" alt="event-capture" src="https://user-images.githubusercontent.com/66587837/122209578-a3703200-cedf-11eb-8643-a927dd46fd86.png">


<hr>

[참고자료1] https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener

[참고자료2] https://ko.javascript.info/bubbling-and-capturing

[참고자료3] https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
