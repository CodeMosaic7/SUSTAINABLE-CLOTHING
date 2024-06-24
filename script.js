// For carousel
const slides=document.querySelectorAll(".slide");
//Here, we declared that slides will have all the images with have class slide.
let counter=0;
//Here, I'm traversing each slide in slides and appling style.
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`

})
//This is the sliding function.
const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )

}
const goNext=()=>{
    counter++;
    slideImage();
}
const goPrev=()=>{
    counter--;
    slideImage();
}