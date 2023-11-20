const shareButton = document.querySelector(".share-button");
const personInfos= document.querySelector(".infos");
const personSocials= document.querySelector(".socials");
const asideContainer = document.querySelector("aside");
console.log(asideContainer);

shareButton.addEventListener("click",function(){
    personInfos.classList.toggle("remove");
    personSocials.classList.toggle("add");
    asideContainer.classList.toggle("active-socials");
    console.log(window.innerWidth);

    if(window.innerWidth >=819){
        shareButton.insertBefore(personSocials,null);
    }
    else{
        asideContainer.insertBefore(personSocials,personInfos);
    }
});
