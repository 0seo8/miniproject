## 1. text수직중앙정렬

- 수평 중앙: text-aling: center
- 수직 중앙: 한줄자리 텍스트에서 요소의 height값과 line-height값이 같으면 수직 중앙정렬됩니다.

```css
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

## 2. 2D요소  3D요소로 변경하기
```css
.container {
  perspective: 1000px;
}

.flip-btn {
  transform-style: preserve-3d;
}
```
- 기본적으로 웹브라우저에 표시되는 HTML요소는 2D입니다.
-   `transform-style: preserve-3d;` 을 사용하면 하위 요소들은 3D공간에 배치가 됩니다.
- `perspective: 1000px`
  - 원근감을 주는 css속성입니다.
  - 기본적으로 가장 최상위 요소에 지정을 해줍니다.
  - 크기가 작을 수록 원근감을 더 가까이서 본다고 생각하면 됩니다.
  ![](https://images.velog.io/images/0seo8/post/eb94bf80-d6cd-4a3f-9bc1-f6f332d79cba/image.png)

  ## 3. 요소회전시키기
```css
.back {
  transform: rotateX(90deg) translateZ(150px);
}
```
 - `translateZ`을 이용해 위아래로 움직일 수 있습니다.
 -  https://www.geogebra.org/m/z27ScfvR
 - 어떤 3D공간에 배치된 html요소를 회전을 시키게 되면, 회전된 요소에 따라 x,y,z축도 유동적으로 움직이게 됩니다.


