// <--------------------------------------------------(Variables)--------------------------------------------------------------->

var
    // Menu Button
    menuBtn = document.querySelector(".menu-btn-js"),
    // menu Items LI
    menuBtns = document.querySelectorAll(".items")
    // Menu Items UL
    menuItems = document.querySelector(".menu-items-js"),
    // Content Container
    container = document.querySelector(".container"),
    // Banner Span
    bannerSpan = document.querySelector(".banner-text-js"),
    // Menu Items Container
    menuBar = document.querySelector(".menu");
    // Profile Icon And Profile Photo
    profilePhotoBtn = document.querySelectorAll(".profile-photo-js"),
    // Profile Photo Opened Container
    profilePhotoContainer = document.querySelector(".profile-photo-opened-container"),
    // Profile Photo Opened
    profilePhoto = document.querySelector(".profile-photo-opened")
    // Body
    body = document.querySelector("body"),
    // Language Circle
    percentages = document.querySelectorAll(".percentage-js"),
    // Skills Line
    programingJs = document.querySelectorAll(".programing-js"),
    // Recommendations Rigth Slider Button
    rigth = document.querySelector(".rigth"),
    // Recommendations Left Slider Button
    left = document.querySelector(".left"),
    // Left Recommendations Container
    leftContainer = document.querySelector(".recommendations-container1"),
    // Right Recommendations Container
    rigthContainer = document.querySelector(".recommendations-container2"),
    // ALL CATEGORIES Works Button
    allCategoriesBtn = document.querySelector(".works-btn-js1"),
    // WEB TEMPLATES Works Button
    webTemplatesBtn = document.querySelector(".works-btn-js2"),
    // UI ELEMENTS Works Button
    uiElmentsBtn = document.querySelector(".works-btn-js3"),
    // LOGOS Works Button
    logosBtn = document.querySelector(".works-btn-js4"),
    // DRAWINGS Works Button
    drawingBtn = document.querySelector(".works-btn-js5"),
    // All Works Buttons
    allWorksBtns = document.querySelectorAll(".works-is-active"),
    allWorksImges = document.querySelectorAll(".works-imges"),
    webTemplatesImg = document.querySelector(".works-item4"),
    uiElementsImg1 = document.querySelector(".works-item1"),
    uiElementsImg2 = document.querySelector(".works-item2"),
    logosImg1 = document.querySelector(".works-item6"),
    logosImg2 = document.querySelector(".works-item7"),
    logosImg3 = document.querySelector(".works-item8"),
    drawingImg1 = document.querySelector(".works-item3"),
    drawingImg2 = document.querySelector(".works-item5"),
    worksImgesContainer = document.querySelector(".works-items-container"),
    educaionDivs = document.querySelectorAll(".education-item"),
    worksDivs = document.querySelectorAll(".work-item"),
    html = "I build ", c = 0 , text = bannerSpan.getAttribute("data-text")

// <--------------------------------------------------(Functions)--------------------------------------------------------------->

// Menu Bar Silding
var menuBarSlider = () => {
    menuBar.classList.toggle("menu-active");
    container.classList.toggle("container-menu-active");
    if(menuBar.classList.contains("menu-active")){
        menuBtn.setAttribute("class" , "fas fa-times menu-btn-js")
        menuItems.style.transform = "translateX(0px)"
        menuItems.style.opacity = "1"
    }else{
        menuBtn.setAttribute("class" , "fas fa-bars menu-btn-js")
        menuItems.style.transform = "translateX(100px)"
        menuItems.style.opacity = "0"
    }
}
// Open Profile Photo
var openProfilePhoto = () => {
    profilePhotoContainer.style.left = "0"
    profilePhotoContainer.style.opacity = "1"
    body.style.overflow = "hidden"

}
// close Profile Photo
var closeProfilePhoto = () => {
    profilePhotoContainer.style.left = "-100%"
    profilePhotoContainer.style.opacity = "0"
    body.style.overflowY = "visible"
}
// Prevent Spreading Of Close Profile Photo
var preventSpreading = (e) => {
    e.stopPropagation();
}
// Precentage Transition
var percentage = () => {
    percentages.forEach(z => {
        z.style.borderWidth = "4px"
    })
    programingJs.forEach(x => {
        x.style.width = `${x.getAttribute("data-width")}`
    })
}
// Recommendations Slider
var leftRightSlider = (adding , removeing , nameClass) => {
    adding.classList.add(nameClass)
    removeing.classList.remove(nameClass)
}
// Recommendations Slider Buttons Color
var SliderBtn = (x,y) => {
    x.classList.add("stop")
    y.classList.remove("stop")
}

var removeClass = (arr , activeName) => {
    arr.forEach(elment => {
        if(elment.classList.contains(activeName)){
            elment.classList.remove(activeName)
        }
    })
}

var allCategoriesBtnFunction = () => {
    removeClass(allWorksBtns , "works-active")
    allCategoriesBtn.classList.add("works-active")
    allWorksImges.forEach(img => {
        img.classList.add("show")
    })
    worksImgesContainer.style.display = "flex"
}

var webTemplatesBtnFunction = () => {
    removeClass(allWorksBtns , "works-active")
    webTemplatesBtn.classList.add("works-active")
    allWorksImges.forEach(img => {
        img.classList.remove("show")
    })
    webTemplatesImg.classList.add("show")
    worksImgesContainer.style.display = "flix"
}

var uiElmentsBtnFunction = () => {
    removeClass(allWorksBtns , "works-active")
    uiElmentsBtn.classList.add("works-active")
    allWorksImges.forEach(img => {
        img.classList.remove("show")
    })
    uiElementsImg1.classList.add("show")
    uiElementsImg2.classList.add("show")
    worksImgesContainer.style.display = "inline-block"
}

var logosBtnFunction = () => {
    removeClass(allWorksBtns , "works-active")
    logosBtn.classList.add("works-active")
    allWorksImges.forEach(img => {
        img.classList.remove("show")
    })
    logosImg1.classList.add("show")
    logosImg2.classList.add("show")
    logosImg3.classList.add("show")
    worksImgesContainer.style.display = "flex"
}

var drawingBtnFunction = () => {
    removeClass(allWorksBtns , "works-active")
    drawingBtn.classList.add("works-active")
    allWorksImges.forEach(img => {
        img.classList.remove("show")
    })
    drawingImg1.classList.add("show")
    drawingImg2.classList.add("show")
    worksImgesContainer.style.display = "inline-block"

}
// Function To Do Action On Resume
var resumeAction = () => {
    educaionDivs.forEach(educaionDivs => {
        if(window.scrollY >= (educaionDivs.offsetTop + (educaionDivs.offsetHeight / 2)) - window.innerHeight){
            educaionDivs.style.transform = "translateX(0)";
            educaionDivs.style.opacity = "1";
        }else{
            educaionDivs.style.transform = "translateX(200%)";
            educaionDivs.style.opacity = "0";
        }
    })
    worksDivs.forEach(worksDivs => {
        if(window.scrollY >= (worksDivs.offsetTop + (worksDivs.offsetHeight / 2)) - window.innerHeight){
            worksDivs.style.transform = "translateX(0)";
            worksDivs.style.opacity = "1";
        }else{
            worksDivs.style.transform = "translateX(200%)";
            worksDivs.style.opacity = "0";
        }
    })
}
var homeHeadingSlice = (t) =>{
    html = html + t.slice(c,c+1);
    if(t.slice(c,c+1) == ","){
        html = "I build ";
    }
    bannerSpan.innerHTML = html;
    c++;
    if(c >= t.length){
        html = "I build "
        c = 0;
    }
}

// <--------------------------------------------------(Event Listeners)--------------------------------------------------------------->

menuBtns.forEach(btn => {
    btn.addEventListener("click" , menuBarSlider)
})
profilePhotoBtn.forEach(button => {
    button.addEventListener("click" , openProfilePhoto)
});
profilePhoto.addEventListener("click" , preventSpreading)
profilePhotoContainer.addEventListener("click" , closeProfilePhoto)
menuBtn.addEventListener("click" , menuBarSlider)
window.addEventListener("load" , percentage)
rigth.addEventListener("click" , function(){
    leftRightSlider(leftContainer , rigthContainer , "recommendations-not-active")
    SliderBtn(rigth , left)
})
left.addEventListener("click" , function(){
    leftRightSlider(rigthContainer , leftContainer , "recommendations-not-active")
    SliderBtn(left , rigth)
})
allCategoriesBtn.addEventListener("click" , allCategoriesBtnFunction)
webTemplatesBtn.addEventListener("click" , webTemplatesBtnFunction)
uiElmentsBtn.addEventListener("click" , uiElmentsBtnFunction)
logosBtn.addEventListener("click" , logosBtnFunction)
drawingBtn.addEventListener("click" , drawingBtnFunction)
window.addEventListener("scroll" , resumeAction);

setInterval(function(){
    homeHeadingSlice(text)
} , 250)








// var html1 = ""
// var html2 = ""
// var html3 = ""
// var html4 = ""
// var text1 = "ios and android applications."
// var text2 = "design mockups."
// var text3 = "automation tools."
// var text4 = "web interfaces."
// var counter1 = 0
// var counter2 = 0
// var counter3 = 0
// var counter4 = 0

// function bannerSpanSlice(textToSlice1 , textToSlice2 , textToSlice3 , textToSlice4 ,intervalName){
//     html1 = html1 + textToSlice1.slice(counter1,counter1+1)
//     bannerSpan.innerHTML = html1
//         counter1++;
//         if(counter1 >= textToSlice1.length){
//             html2 = html2 + textToSlice2.slice(counter2,counter2+1)
//             bannerSpan.innerHTML = html2
//             counter2++;
//         }
//         if(counter2 >= textToSlice2.length){
//             html3 = html3 + textToSlice3.slice(counter3,counter3+1)
//             bannerSpan.innerHTML = html3
//             counter3++;
//         }
//         if(counter3 >= textToSlice3.length){
//             html4 = html4 + textToSlice4.slice(counter4,counter4+1)
//             bannerSpan.innerHTML = html4
//             counter4++;
//         }
//         if(counter4 == textToSlice4.length){
//             clearInterval(intervalName)
//         }
// }


// var t = setInterval(function(){
//     bannerSpanSlice(text1 , text2 , text3 , text4 , t)
// } , 250)
