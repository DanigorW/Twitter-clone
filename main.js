


window.addEventListener("DOMContentLoaded", () =>{

  

  const mainSection = document.querySelector(".main-section");
  const logInSection = document.querySelector(".log-in-section");
  const mainPage = document.querySelector(".main-page");
  const userInfo = document.querySelector(".user-info");
  const password = document.querySelector(".password");
  const postButton = document.querySelector(".post-button");
  const signUp = document.querySelector(".sign-up");
  const logIn = document.querySelector(".log-in");
  const dove = document.querySelector("#dove");
  const postBox = document.querySelector(".post-box");
  const closeIcon = document.querySelector(".close-icon");
  const circle = document.querySelector(".circle");
  const darkMode = document.querySelector(".dark-mode");
  const sideBar = document.querySelector(".side-bar-container");
  const user = document.querySelector(".user");
  const boxContainer = document.querySelector(".box-container");
 

  
  
  
  signUp.addEventListener("click", () => {
    mainSection.style.display = "none";
    logInSection.style.display = "block";
  });
  
  logIn.addEventListener("click", () => {
    mainSection.style.display = "none";
    logInSection.style.display = "block";
  });
  
  dove.addEventListener("click", () => {
    mainSection.style.display = "block";
    logInSection.style.display = "none";
  });
  
  const form = document.querySelector(".right-content-form");
  
  form.addEventListener("submit", e => {
    e.preventDefault();
    const userInfoValue = userInfo.value;
    const passwordValue = password.value;
  
    if (
      (userInfoValue === "" && passwordValue === "") ||
      passwordValue === "" ||
      userInfo === ""
    ) {
      mainSection.style.display = "none";
      logInSection.style.display = "block";
    } else {
      mainSection.style.display = "none";
      mainPage.style.display = "block";
      sideBar.style.display = "block";
      
    }
  });
  
  closeIcon.addEventListener("click", () =>{
    postBox.style.display = "none"
  })
  
  postButton.addEventListener("click", () =>{
    postBox.style.display = "block"
    
  })

  const mainPage2 = document.querySelector(".main-page-nav");
  const headerContainer = document.querySelector(".header-container");
  const followContainer = document.querySelector(".follow-container");
  
  
  darkMode.addEventListener("click", (e)=>{
  e.stopPropagation()
  
    if(darkMode.classList.contains("not-active")){
      circle.classList.add("moveCircle")
      darkMode.classList.remove("not-active")
      mainPage2.classList.add("dark-1")
      mainPage2.classList.add("light")
      headerContainer.classList.add("dark-1")
      followContainer.classList.add("dark-1")
      sideBar.classList.add("dark-1")
      boxContainer.classList.add("dark-1")
      
      document.querySelector("body").style.background="#1c2938"
      document.querySelectorAll("a").forEach(item => {
        item.style.color = "#fff"
      })
      document.querySelectorAll("i").forEach(item => {
        item.style.color = "#fff"
      })
      document.querySelectorAll("img").forEach(item => {
        item.style.border = "2px solid #fff"
      })
      
          
      } else if (!darkMode.classList.contains("not-active")){
        circle.classList.remove("moveCircle")
        darkMode.classList.add("not-active")
        mainPage2.classList.remove("dark-1")
        headerContainer.classList.remove("dark-1")
        followContainer.classList.remove("dark-1")
        sideBar.classList.remove("dark-1")
        document.querySelector("body").style.background="#f0f8fd"
        boxContainer.classList.remove("dark-1")
        document.querySelectorAll("a").forEach(item => {
          item.style.color = "#000"
        })
        document.querySelectorAll("i").forEach(item => {
          item.style.color = "#1aa1f5"
        })
      }
  })
  
  user.addEventListener("click",(e)=>{
    e.preventDefault()
    sideBar.classList.toggle("showNav");
  })
  
})
