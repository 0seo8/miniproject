## 계산기 버튼

- 계산기 버튼은 button태그 보다는 사용자와의 상호작용이 더 강한  input태그를 사용해 구현합니다.
- input태그는 form태그와 같이 작성을 해야하니, form태그를 먼저 작성합니다.
- 계산 출력부분은 input[type="text"] 버튼은 input[type=button]

## grid방식 레이아웃

### 1. 레이아웃 시안
![](https://images.velog.io/images/0seo8/post/39bb013b-7964-435e-8a41-91fca7bcc9fd/image.png)

### 2. 행, 열설정
/*grid방식*/
```css
.calculator form {
  display: grid;
  /* 열 지정, 4열, 너비 65px*/
  grid-template-columns: repeat(4, 65px);
  /* 행 높이 지정*/
  grid-auto-rows: 65px;
  /*버튼 사이의 갭*/
  grid-gap: 5px;
}
```
![](https://images.velog.io/images/0seo8/post/6934f2c1-f50f-47e5-a61d-7c29813bee05/image.png)

### 3. 영역너비높이 지정

- 영역을 딱 정해주게 하려면 calculator의 width를 정확히 지정해주면 됩니다.
- 왼쪽 테두리 1px + 왼쪽 패딩 5px + 버튼,,, 

![](https://images.velog.io/images/0seo8/post/5a3c35fb-2a95-4050-8885-493b8e357617/image.png)

```css
.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}
```

### 4. 버튼 테두리설정
```css
/*버튼테두리 그리기*/
.calculator form input {
  border: 2px solid #333;
}
```

### 5.hover효과+커서 효과
```css
/*버튼테두리 그리기*/
.calculator form input {
  border: 2px solid #333;
  /*커서효과*/
  cursor: pointer;
}

.calculator form input:hover {
    /*hover효과: 2px:퍼짐정도*/
  box-shadow: 1px 1px 2px #333;;
}
```

### 6.색상입히기


### 7. gird-colunm을 이용해 레이아웃 배치

- input[type="text"]는 4열의 그리드를 전부 차지하고 있습니다.

```css
.calculator form input[type="text"] {
  grid-column: span 4;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
```

### 8.계산기 수직,수평 중앙정렬(flex속성사용)
```css
body {
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

## 계산 작업
### 1. input텍스트의 입력을 방지(readonly)
```html
      <input type="text" name="output" readonly>
```

### 2. 텍스트 우측 정렬
```css
.calculator form input[type="text"] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}
```
### 3. 버튼 클릭시 input 텍스트에 값이 추가.
- html에서 제공하는 onclick속성 사용
```html
      <input type="button" value="1" onclick="document.forms.output.value='1'">
```
- 1을 반복 클릭해도 계산되도록 설정
```html
      <input type="button" value="1" onclick="document.forms.output.value+='1'">
```
- 다르게 작성 필요부분
  -result와 clear는 복합 연산자를 사용하면 안됨.
  -eval함수 : 실제 수식처럼 계산이 되게해주는 메서드,
```html
      <input type="button" class="clear" value="C" onclick="document.forms.output.value=''">
      <input type="button" class="operator result" value="=" onclick="document.forms.output.value=eval(document.forms.output.value)">
```

