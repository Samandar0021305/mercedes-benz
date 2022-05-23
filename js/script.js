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
  const dedline = '2022-08-11'

  function getTime(endTime ){
    const total = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.floor(total / (1000 * 60 * 60 * 24)),
    seconds = Math.floor((total / 1000 ) % 60),
    minutes = Math.floor((total / 1000 / 60) % 60),
    hours = Math.floor((total / (1000*60*60)) % 24);

    return {
      total : total,
      days:days,
      seconds:seconds,
      hours:hours,
      minuts:minutes,
    }
  }


  function getZero(num){
    if(num >= 0 && num < 10){
      return "0" + num;
    }else{
      return num
    }
  }
 

  function setClock(selector,endTime){
    const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    timeInterval = setInterval(updateClock,1000);
    updateClock();

    function updateClock(){
      const time  = getTime(endTime)
      days.innerHTML = getZero(time.days);
      hours.innerHTML = getZero(time.hours);
      minutes.innerHTML = getZero(time.minuts);
      seconds.innerHTML = getZero(time.seconds);
      if(time.total <= 0){
        clearInterval(timeInterval)
      }
    }
  }

  setClock('.timer',dedline)


  //CLASS

  class CarCard{
    constructor(src,alt,title,descr,price,parentSelector,...classess){
      this.src = src;
      this.alt = alt
      this.title = title
      this.descr = descr
      this.classess = classess
      this.parent = document.querySelector(parentSelector)
      this.transfer = 10.500
      this.changeTo()
    }

    changeTo(){
      this.price = this.price * this.transfer;
    }

    render(){
        const element = document.createElement("div");
        element.innerHTML = `
         <div class="menu__item">
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
              ${this.descr}
              </div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
              <div class="menu__item-cost">Price:</div>
              <div class="menu__item-total"><span>${this.price}</span> $</div>
            </div>
          </div>
        `
        this.parent = append(element)
    }

  }

  
})

