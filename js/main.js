// const collapsibles = document.querySelectorAll(".collapsible");

// collapsibles.forEach((item) => 
// item.querySelector('.icon').addEventListener("click", function () {
//     item.classList.toggle("collapsible--expanded");
//   })
// );     

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function (e) {
    console.log(e.target.tagName);
    if(e.target.tagName==='use'|| e.target.tagName==='svg' ){
      this.classList.toggle("collapsible--expanded");
    }
  })
);
