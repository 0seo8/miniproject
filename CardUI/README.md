# 카드 UI 
>point1. font awesome<Br>
 point2. 전환효과 only CSS

## 1. font awsome
https://fontawesome.com/

### 1-1 font awsome 라이브러리 적용방법
- [font awsome 사이트](https://fontawesome.com/)에서 이메일로 코드 받기
- [cdn이용하기](https://cdnjs.com/libraries/font-awesome) 

### 1-2 icon추가 코드 작성
- [font awsome 사이트](https://fontawesome.com/) - icons - 필요아이콘 스타일검색
- 코드 카피

```html
  <div class="card">
    <i class="fa-solid fa-credit-card"></i> : 복사한 부분
  </div>
```

### 1-3. font awsome 크기 키우기
- font-size를 통해 크기를 키워도 괜찮지만, font-awsome에서 자체적으로 제공하는 방법도 있습니다.
- class에 fa-배수x 추가 (ex) clas="fa-6x" : 6배)

## 2. 정중앙 배치
```css
/*body정중앙 배치*/
body {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171c3c;
}
.card {
  position: relative;
}
/*아이콘 정중앙 배치*/
.card i {
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: 54px;
  margin-top: 48px;
}
```

## 3. box-shadow
```css
- x축 y축 blur값 spread값
- inset : 내부로 박스쉐도우 적용
.card:hover {
  /* x축 y축 blur값 spread값 */
  box-shadow: inset 0 0 0 100px rgba(255, 190, 0, .7);
}
```

## 4. hover시 카드 모양 바뀌기
### 4-1 기존 아이콘 아래 전환시 사용할 아이콘 추가
```html
  <i class="fa-solid fa-credit-card fa-6x"></i>
  <i class="fa-regular fa-credit-card fa-6x"></i>
```
### 4-2 원래 가지고 있던 첫번째 아이콘 크기가 0배로 축소
```css
.card i:nth-of-type(1) {
  transform: scale(0);
}
```
### 4-3 마우스를 올리는 경우 정상적(1배율)로 변경
```css
.card:hover i:nth-of-type(1) {
  transform: scale(1);
}
```
### 4-4 마우스를 올리는 경우 두번째 0배로 축소 
```css
.card:hover i:nth-of-type(2) {
  transform: scale(0);
}
```


---
## 추가공부 필요

1. transition: all .5s;는 하위요소 모두에 적용되는 것이 아니기에 따로따로 적용을 해줘야합니다.
