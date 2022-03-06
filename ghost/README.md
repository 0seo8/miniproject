### 가운데 정렬
1. 항목이 여러개 있는 경우
```css
  left: 50%;
  transform: translateX(-50%);
```

2. 항목이 하나 있는 경우
```css
  margin-left: 17px;
```

### 애니메이션 효과
```css
.ghost {
  animation: moveUpDown 3s infinite;
}

@keyframes moveUpDown {
  0% {
    margin-top: 0px;
  }  
  50% {
    margin-top: -50px;
  }
  100% {
    margin-top: 0px;
  }
}
```

### 마우스 따라 움직이기
```css
.ghost {
  position: absolute;
}
```
- mousemove이벤트(point객체 이벤트: 마우스가 어느 위치에 있는지 알 수 있음)
- ghost이벤트가 absolute인 포지션, top-left값이 mouseevent에 따라 움직이는 것.
```js
document.body.addEventListener('mousemove', (e) => {
  console.log(e);
  document.querySelector('.ghost').style.left = e.pageX + 'px';
  document.querySelector('.ghost').style.top = e.pageY + 'px';

})
```