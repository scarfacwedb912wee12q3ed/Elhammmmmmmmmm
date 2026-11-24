

var currentPage = -1;
const start = document.getElementById("startBtn");
start.addEventListener("click", function () {
    const main = document.querySelector(".main");

    // همیشه از اسلاید اول شروع کن؛ از شماره‌ی قبلی ادامه نده
    hide();
    currentPage = 0;
    main.classList.add("flipp");
    update();
    pages[currentPage].style.display = "flex";
})



let pages = document.querySelectorAll(".back-page")
function hide(){
  pages.forEach(function(item){
    item.style.display = "none";
  })
}
hide()



let next = document.querySelectorAll(".nextBtn");
let pre = document.querySelectorAll(".preBtn");
next.forEach(function(item){
  item.addEventListener("click", ()=>{
    if(currentPage < pages.length-1){
      currentPage++
      update()
      hide();
      pages[currentPage].style.display = "flex"
    }
  })
})



pre.forEach(function(item){
  item.addEventListener("click", ()=>{
    if(currentPage > -2){
      currentPage--;
      update()

      if(currentPage === -1){
        const main = document.querySelector(".main");
        main.classList.remove("flipp");
      }
      hide();

      if(currentPage>-1){
        pages[currentPage].style.display= "flex";
      }
       
    }
  })
})

let again = document.getElementById("finishBtn");
again.addEventListener("click", function () {
    const main = document.querySelector(".main");

    // پاک‌سازی کامل وضعیت برای اجرای دوباره
    hide();
    currentPage = -1;
    update();
    main.classList.remove("flipp");
})

let pointer = document.querySelector(".pointer");
for(var i =0; i<pages.length; i++){
  var el = document.createElement("span");
  el.setAttribute("class", "dot");
  pointer.appendChild(el);
}


function update(){
  let dots = document.querySelectorAll(".dot");
  dots.forEach(function(item,index){
    item.style.backgroundColor = "purple"
    if(index === currentPage){
      item.style.backgroundColor = "gold"
      item.classList.add("active")
    }
    else{
      item.style.backgroundColor = "purple"
      item.classList.remove("active")
    }
  })
}
update()

// --------------------------------------------------------------------

