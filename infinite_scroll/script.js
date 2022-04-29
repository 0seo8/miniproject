;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  const limit =10;
  let page = 1;  
  const $posts = get('.posts')
  const $loader = get('.loader')
  const end = 100
  let total = 10

  const getPost = async () => {
    const API_URL = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    //await를 활용하면 변수에 담을 수가 있다.
    const response = await fetch(API_URL)
    if(!response.ok) {
      throw new Error('에러가 발생했습니다.')
    }
    return await response.json()  
  }

  const showPosts = (posts) => {
    posts.forEach((post) => {

      const $post = document.createElement('div')
      $post.classList.add('post')
      $post.innerHTML = `
        <div class="header">
          <div class="id">${post.id}</div>
          <div class="title ">${post.title}</div>
        </div>
        <div class="body">
        ${post.body}
        </div>
      `

      $posts.appendChild($post)
    });
  }

  const showLoader = () => {
    $loader.classList.add('show')
  }

  const hideLoader= () => {
    $loader.classList.remove('show')
  }

  const loadPost = async () => {
    //로딩 엘레먼트를 보여줌
    showLoader()
    try {
      const response = await getPost()
      showPosts(response)
    } catch (error) {
      console.error(error)
    } finally {
      //로딩엘레멘트를 사라지게 함.
      hideLoader()
    }
  }

  const onscroll = () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement
    if(total == end) {
      window.removeEventListener('scroll', onscroll)
      return
    }
    if(scrollTop + clientHeight  >= scrollHeight - 5) {
      page++;
      total += 10;
      loadPost()
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    loadPost()
    // 스크롤 끝 감지
    window.addEventListener('scroll', onscroll)
  })
})()
