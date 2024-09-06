            // ---------------------------------------------------------------
                        //CODE FOR NAV HOME DIV ONLY VIEW IN LAPTOP
            // ----------------------------------------------------------------

function toggleDropdown(item) {
  const subDropdown = item.querySelector(".sub-drop-down")
  const dropDownArrow = item.querySelector('.drop-down-arrow');

  if (subDropdown.style.display === "block") {
      subDropdown.style.display = "none";
      dropDownArrow.innerHTML = '&#11167';
  } else {
      subDropdown.style.display = "block";
      dropDownArrow.innerHTML = '&#11165';
  }
}

            // ------------------------------------------------------
                              //CODE FOR ADMIN PROFILE
            // ------------------------------------------------------

function showNotification() {
  const notification = document.querySelector(".notification-box");
  if (notification.style.display === "none") {
    notification.style.display = "block";
  } else {
    notification.style.display = "none";
  }
}

function showAdmin() {
  const admin = document.querySelector(".box");
  if (admin.style.display === "none") {
    admin.style.display = "block";
  } else {
    admin.style.display = "none";
  }
}

            // ------------------------------------------------------
                        //CODE FOR DISPLAY DATE TIME & Day
            // ------------------------------------------------------

var today = new Date ();
var formattedDate = today.toLocaleDateString();
document.getElementById("date").textContent = formattedDate;


let time = document.getElementById("time");
setInterval(() =>{
 let d = new Date();
 time.innerHTML = d.toLocaleTimeString();
 }, 1000)


function updateDay(){
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date();
  const day = daysOfWeek[now.getDay()];
  document.getElementById("day").textContent = day;
}
updateDay();


            // ----------------------------------------------------------------
                  //CODE FOR ALL SHOW AND HIDE DETAILS (ID, NO., INCOME)
            // -----------------------------------------------------------------

const toggleIcons = document.querySelectorAll(".toggle-icon");
toggleIcons.forEach(icons=> {
  icons.addEventListener("click", function() {
    const balanceItem =this.closest (".balance-item");
    const balanceElement = balanceItem.querySelector(".balance");
    const showEye = balanceItem.querySelector(".ri-eye-line");
    const hideEye = balanceItem.querySelector(".ri-eye-off-line");

    if (balanceElement.textContent === "****") {
      balanceElement.textContent = getBalance (balanceItem.dataset.type);
      showEye.style.display = "none";
      hideEye.style.display = "inline-block";
    } else {
      balanceElement.textContent = "****";
      showEye.style.display = "inline-block";
      hideEye.style.display = "none";
    }
  });
});

function getBalance(type) {
  const balances = {
    rusconID: "R143143",
    rusconContact: "7258963210",

    todayIncome: "100",
    walletIncome: "500",
    totalIncome: "3256",
    totalWithdrawal: "284",
    goldIncome: "555",
    daimondIncome: "262",
    rusconIncome: "143",
    welcomeBonus: "500",
    refferalIncome: "100",
    goldLevelIncome: "2591",
    daimondLevelIncome: "847",
    rusconLevelIncome: "584",
    royalityIncome: "00",
    withdrawalIncome: "125",
    monthlyIncentiveIncome: "40",
    shoppingIncome: "00",
    boosterIncome: "10",
    otherIncome: "20",
    awardAndReward: "789",
  };
  return balances[type] || "N/A" ;
}

            // ------------------------------------------------------
                          //CODE FOR BACK TO TOP
            // ------------------------------------------------------

const backToTop = document.getElementById("backToTop");
window.onscroll = function(){
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}


//            -----------------------------------------------------
//            EXTRA CODE FOR SCROLL AMONG THE MOUSE HOVER AND CLICK BOTH.
//            ------------------------------------------------------

// const backToTop = document.getElementById("backToTop");
// let scrollSpeed = 10;
// backToTop.addEventListener("mouseover", () => {
//   const scrollSpeedMultiplier = Math.max(1, Math.min(scrollSpeed, 50));
//   scrollSpeed = scrollSpeedMultiplier;
//   scrollToTop(scrollSpeed);
// });
// function scrollToTop(speed) {
//   const scrollInterval = setInterval(() => {
//     window.scrollBy(0, -speed);
//     if (window.scrollY <= 0) {
//       clearInterval (scrollInterval);
//     }
//   }, 10); 
// }
// backToTop.addEventListener("click", ()=> {
//   scrollSpeed = Math.max(1, scrollSpeed + 10);
// });


            // ------------------------------------------------------
            //                CODE FOR SHOW & HIDE SIDE BAR
            // ------------------------------------------------------

function toggleSidebar() {
  const showSidebar = document.querySelector("#side-bar");
  if (showSidebar.style.display === "none") {
    showSidebar.style.display = "block";
  } else {
    showSidebar.style.display = "none";
  }
}

// function showDropdown() {
//   const showDropdown = document.querySelector(".dropdown-content");
//   const showPlusIcon = document.querySelector(".plus-icon");
//   const showMinusIcon = document.querySelector(".minus-icon");
  
//   if (showDropdown.style.display === "none") {
//     showDropdown.style.display = "block";
//     showMinusIcon.style.display = "block";
//     showPlusIcon.style.display = "none";

//   } else {
//     showDropdown.style.display = "none";
//     showMinusIcon.style.display = "none";
//     showPlusIcon.style.display = "block";
// }
// }

            // ------------------------------------------------------
            //          CODE FOR SHOW & HIDE SIDE BAR SUB-MENU
            // ------------------------------------------------------

function toggleMenu(item) {
  const submenu = item.nextElementSibling;
  const icon = item.querySelector('.icon');

  if (submenu.style.display === "block") {
      submenu.style.display = "none";
      icon.textContent = '+';
  } else {
      submenu.style.display = "block";
      icon.textContent = '-';
  }
}

            // ------------------------------------------------------
                              //CODE FOR MOUSE FOLLOWER
            // ------------------------------------------------------

Shery.mouseFollower({
  ease: "cubic-bezier(0.53, 1, 0.320, 1)",
  duration: 0.7,
});
