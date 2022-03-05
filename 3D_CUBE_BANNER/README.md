# 3D 적용하기.

[▶실습 가능 자료 : Isomatic Drawing tool](https://www.nctm.org/Classroom-Resources/Illuminations/Interactives/Isometric-Drawing-Tool/)

## 1. 2D공간에서의 요소 이동
- transform의 translateX값을 사용하면 요소가 x축으로 이동을 합니다.(양수: 오른쪽 이동, 음수: 왼쪽 이동)
- transform의 translateY값을 사용하면 요소가 y축으로 이동을 합니다.(**양수: 아래쪽 이동, 음수: 위쪽 이동**)

## 2. 3D공간에서의 요소 이동

### 1. transform-style: preserve-3d
- transform-style: preserve-3d;를 이용해 3D공간에 배치 할 수 있습니다.
 (하위 요소들을 3D공간에 배치합니다.)

 ### 2. perspective: 1000px;
- 원근감을 줘야 3D공간에 있다는 느낌을 극적으로 줄 수 있습니다.
- **원근감은 transform-style: preserve-3d를 준 요소의 가장바깥요소에 설정해줍니다.**
- 속성값을 크게 할 수록 원근감이 상대적으로 커집니다.

### 3. z축 이동 테스트
- transform: translateZ를 이용해 z축으로 이동을 시킬 수 있습니다.
- 양수: 모니터쪽으로 가까이 다가오는 듯한 원근감, 음수: 모니터 안쪽으로 들어가는 것 같은 원근감

## 3. img를 하나로 겹치게 만들기
```css
.cube img {
  position: absolute;
  top: 0;
  left: 0;
}
```

## 4. 큐브형식으로 만들기
- **어떤 3D공간에 배치된 html요소를 회전을 시키게 되면, 회전된 요소에 따라 x,y,z축도 유동적으로 움직이게 됩니다.**

### 4-1 두번째 이미지 90도 회전
```css
.cube img:nth-child(2) {
  transform: rotateX(90deg);
}
```

### 4-2 z축으로 img높이의 절반만큼 이동
```css
.cube img:nth-child(2) {
  transform: rotateX(90deg) translateZ(64px);
}
```
### 4-3 첫번째 이미지 절반만큼 앞으로 당기기
![](https://images.velog.io/images/0seo8/post/62482ade-ffa8-4b52-a00f-6467e813b4b5/image.png)
```css
/*첫번째 이미지 절반만큼 앞으로 당겨오기(여기서 앞: z축)*/
.cube img:nth-child(1) {
  transform: translateZ(64px);
}
```
### 4-4 세번째 이미지 뒷면 배치
- x축으로 180도 회전 후(뒤집어짐),뒤쪽으로  64px만큼 이동.

## 5. 자바스크립트 코드 이용 자동 움직이게 하기
```css
  transition: all 1s;
```

```js
let deg =0;
setInterval(() => {
  deg = deg - 90;
  document.querySelector('.cube').style.transform = 'rotateX(' + deg + 'deg)';
}, 1000)
```

---

## 추가공부 필요 부분.
### 1. div요소 아래 img 추가 시 크기

```html
<div class="cube">
  <img src="./images/facebook_empty.png" alt="페이스북 아이콘 이미지">
</div>
```
```css
.cube {
  width: 128px;
  height: 128px;
}
```
- .cube의 넓이와 높이를 지정한 후 img를 하나 더 추가하게 되면, 지정된 사이즈와 동일하게 아래에 하나 더 추가됩니다.
( 지정된 사이즈 속에서 img 모두가 배치되는 것이 아님!! )
