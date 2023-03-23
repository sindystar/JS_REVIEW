window.addEventListener("load", () => {
  const grid = new Isotope("section", {  //배치할 요소를 감싼 부모 요소가 "" 안에 들어 와야 한다 
    itemSelection:"article", //배치할 요소명 
    columWidth: "article", //너비값을 구할 요소명 
    transitionDuration:"0.5s", //화면 재배치시 요소가 움직이는 속도
  });

  const btns = document.querySelectorAll("main ul li");

  for (let el of btns) {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      //클릭한 버튼의 a태그에서 href속성값을 변수로 저장 
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      grid.arrange({//sort값에 따라 재정렬
        filter:sort
      });

      //버튼 활성화 하는 코드 

      // 1. 모든 버튼을 반복 돌면서 모두 비활성화 하고 
      for (let el of btns) {
        el.classList.remove("on");
      }
      //2. 클릭한 버튼만 활성화 
      e.currentTarget.classList.add("on");
    })
    //sort에는 우리가 클릭한 버튼에서 속성 뽑아서 정렬에 필요한 해당 클래스가 변수로 담겨져 있다. grid 변수는 플러그인에 접근해서 우리가 필요한 대로 만든 결과물이 담겨 있는데 grid에 접근해서 정렬하는 기준을 우리가 만든 sort라는 변수로 적용시킨다 
  }
})