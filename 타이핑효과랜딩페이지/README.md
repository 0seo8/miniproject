
# html
## material icon

[▶Develope-desing-icon](https://google.github.io/material-design-icons/)

 ```
 <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
 ```
 [▶Google Fonts](https://fonts.google.com/icons)

 ```
<span class="material-icons">language</span>
 ```
 
 - 아이콘 폰트는 CSS의 텍스트와 관련된 속성을 그대로 적용할 수 있습니다.
 
# CSS
 ## 1.  수직, 수평 중앙 정렬
 
 ```css
 .wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
 ```

## 2. css로 커서 표현

### 2-1 커서만들기
```css
#dynamic {
  position: relative;
  display: inline-block;
}

#dynamic::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: -10px;
  width: 4px;
  height: 100%;
  background-color: #fff;
}
```
- p태그는 block요소이기 때문에 커서가 text크기가 아닌 block요소가 차지하는 부분의 끝에 표시가 되게 됩니다. 따라서 inline-block으로 변경 만든 커서가 text옆에 붙을 수 있도록 해줍니다.

 ```css
#dynamic.active::after {
  display: none;
}
 ```
 
 - class="active"가 생겼다가 사라졌다가 하는 부분은 JS나 HTML로 할 수 없는 부분이기때문에 css로 먼저 구현을 해줍니다.


# javascript
 ###  1. JS를 이용해 커서 깜박이는 효과주기

 ```js
let target = document.querySelector("#dynamic")

function blink() {
  target.classList.toggle("active");
}

//blink라는 함수를 0.5초마다 실행해라
setInterval(blink, 500)
 ```

### 2. 타이핑되는 것 같은 효과주기

### 2-1. Math.random()
- Math.random()*4 : 4미만의 랜덤 숫자 만들기
- Math.random()*3 : 3미만의 랜덤 숫자 만들기
- 배열의 크기에 맞게 랜덤 숫자 만들기 : Math.random()*stringArr.length
- 정수표현: Math.floor(Math.random()*stringArr.length)

### 2-2. 배열요소 중 랜덤하게 가져오기
let selectString = stringArr[Math.floor(Math.random()*stringArr.length)]

### 2-3 선택된 요소을 다시 배열로 만들기
let selectStringArr = selectString.split("");

### 2-4 깜박이는 효과주기
```js
function dynamic(randomArr) {
  if(randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);
    }, 80)
  }
}
```

