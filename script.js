const shareButton = document.querySelector(".share-button");
const personInfos= document.querySelector(".infos");
const personSocials= document.querySelector(".socials");
const asideContainer = document.querySelector("aside");
const arrowSvg = document.querySelector(".share-button path");
console.log(arrowSvg);

shareButton.addEventListener("click",function(){
    this.classList.toggle("bg");
    personInfos.classList.toggle("remove");
    personSocials.classList.toggle("add");
    asideContainer.classList.toggle("active-socials");
    arrowSvg.classList.toggle("active");
    console.log(window.innerWidth);

    if(window.innerWidth >=819){
        shareButton.insertBefore(personSocials,null);
    }
    else{
        asideContainer.insertBefore(personSocials,personInfos);
    }
});
