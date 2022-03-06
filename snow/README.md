### 1. radial-gradient : 원형그라데이션
(원형의 중심에서의 시작위치, 시작 위치 색상값, 종료위치 색상값)

### 2. 눈내리는 효과(애니메이션효과)
```css
.sonw{
  /*snow가 10초동안 균일한 속도로 무한반복*/
  animation: snow 10s linear infinite;
}

@keyframes snow {
  0% {
    opacity: 0;
    transform: translateY(0);
  } 
  20% {
    opacity: 1;
    transform: translate(-15px, 20vh);
  }  
  40% {
    opacity: 1;
    transform: translate(15px, 40vh);
  }  
  60% {
    opacity: 1;
    transform: translate(-15px, 60vh);
  }  
  80% {
    opacity: 1;
    transform: translate(0, 80vh);
  }  
  100% {
    opacity: 1;
    transform: translateY(100vh);
  }
}
```

