;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  //1. 구현할 요소들이 모두 .carousel태그 안에 들어있기 때문에 클래스로 구현하는 것이 좋습니다.
  class Carousel {
    constructor(carouselEl) {
      this.carouselEl = carouselEl
      //3. 이렇게 하면 하드코딩을 방지할 수 있습니다. 
      this.itemClassName = 'carousel_item'   
      //4. 캐러셀엘레멘트 안에 있는 모든 carousel_item 를 가져와 items에 담음
      this.items = this.carouselEl.querySelectorAll('.carousel_item')
      
      //5. querySelector로 아이템을 가져오는 경우에는 유사배열형태로 저장이 되게 됩니다.
      // length를 써서 총 갯수를 가져옵니다.
      this.totalItems = this.items.length;
      //items의 첫번째가 화면에 보일 수 있도록 
      this.current = 0;
    }

    //초기화작업
    initCarousel() {
      this.items[0].classList.add('active');
      this.items[1].classList.add('next');
      this.items[this.totalItems - 1].classList.add('prev');
    }

    //요소를 클릭하면 이벤트 리스너가 발생할 수 있도록 class안에 작성
    setEventListener() {
      //this를 이용해 가져옴.
      this.prevBtn = this.carouselEl.querySelector('.carousel_button--prev')
      this.nextBtn = this.carouselEl.querySelector('.carousel_button--next')
    
      //기져온 요소에 클릭이벤트 걸기.
      this.prevBtn.addEventListener('click', () => {
        this.movePrev()
      })
      this.nextBtn.addEventListener('click', () => {
        this.moveNext()
      })
    }

    moveCarouselTo() {
      let prev = this.current - 1; 
      let next = this.current + 1;

      if(this.current === 0) {
        prev = this.totalItems - 1; 
      } else if(this.current===this.totalItems -1) {
        next = 0;
      }
    //클래스 붙이는 직업
      for(let i=0; this.totalItems; i++) {
        if(i == this.current) {
          // 주의: active 앞에 띄어쓰기를 해줘야합니다.
          this.items[i].className = this.itemClassName + ' active'
        } else if (i == prev) {
          this.items[i].className = this.itemClassName + ' prev'
        } else if (i == next) {
          this.items[i].className = this.itemClassName + ' next'
        } else {
          this.items[i].className = this.itemClassName
        }
      }
    }

    //작성 => 함수 선언문으로(함수 호이스팅 필요)
    moveNext() {
      //마지막에서는 제일 첫번쨰로 돌아갈 수 있도록 해주어야합니다.(예외처리 필요)
      if(this.current === this.totalItems -1) {
        this.current =0;
      } else {
        this.current++;
      }
      //메서드 실행
      this.moveCarouselTo()
    }

    movePrev(){
      if(this.current === 0) {
        this.current = this.totalItems - 1;
      }else {
        this.current--;
      }
      this.moveCarouselTo()
    }
  }

  //2. 인스턴스 생성
  document.addEventListener('DOMContentLoaded', () => {
   const carouselEl = get('.carousel')
   const carousel = new Carousel(carouselEl)

   //초기화시킴
   carousel.initCarousel()
   //각 이벤트를 버튼에 지정
   carousel.setEventListener()
  })

})()