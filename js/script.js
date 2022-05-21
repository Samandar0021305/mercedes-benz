window.addEventListener("DOMContentLoaded",()=>{
    const Loader = document.querySelector(".loader");
    setTimeout(function(){
        Loader.style.opacity = "0"
        setTimeout(function(){
            Loader.style.display = "none"
        },1000)
    },1500)

    const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    headerParents = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  headerParents.addEventListener("click", (event) => {
    console.log(event);
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //modal

  const allModalBtn = document.querySelectorAll("[data-modal]"),
  modal = document.querySelector(".modal"),
  modalClose = document.querySelector("[data-close");

  
allModalBtn.forEach(btn =>{
      btn.addEventListener("click",()=>{
        openModal()
      })
  })


function openModal(){
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow ="hidden"
    clearInterval(modalTimer)
}

function closeModal(){
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow ="";
}

modalClose.addEventListener("click",()=>{
    closeModal()
})


modal.addEventListener("click",(e)=>{
if(e.target  === modal){
    closeModal()
}
})

const modalTimer  = setTimeout(openModal,5000)


function showMyModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showMyModalByScroll);
    }
  }
  window.addEventListener("scroll", showMyModalByScroll);

  //DATA
  const dedline = '2022-05-22'

  function getTime(endTime ){
    const total = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor((total / (1000 * 60 * 60 * 24))),
    seconds = Math.floor(((total / 1000 ) % 60)),
    minuts = Math.floor(((total / 1000) % 60)),
    hours = Math.floor((total / (1000*60*60)*24));

    return {
      total : total,
      days:days,
      seconds:seconds,
      hours:hours,
      minuts:minuts,
    }
  }
 

  function setClock(selector,endTime){
    
  }

})

