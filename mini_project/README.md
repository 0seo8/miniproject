## 1. button태그
- 페이지 이동을 하는 a태그를 사용해 구현
```css
.contents a {
  display: inline-block;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 17px;
  font-weight: bold;
}
```

## 2. 배경 이미지
```css
.main {
  width: 100%;
  height: 100vh;
  background: url(./XWXZpgV.jpeg) no-repeat;
  background-size: cover;
  background-position: center center;
}
```

### 3. a태그 초기화
```css
a {
  color: inherit;
  text-decoration: none;
}
```

### 4. media쿼리
- 웹브라우저의 크기가 769px보다 작아지면 안의 코드가 실행
```css
@media(max-width:769px) {
  .contents h1 {
    font-size: 50px;
  }
  
  .contents p {
    font-size: 20px;
  }

  .contents a {
    font-size: 14px;
  }
}
```