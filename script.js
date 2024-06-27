// For carousel
const slides = document.querySelectorAll(".slide");
//Here, we declared that slides will have all the images with have class slide.
let counter = 0;
//Here, I'm traversing each slide in slides and appling style.
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`

})
//This is the sliding function.

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )

}
const goNext = () => {
    if(counter<slides.length-1){
        counter++;
    }else{
        counter=0;
    }
    slideImage();
}

// If check whether the images is in range or not
const goPrev = () => {
    if(counter>0){
        counter--;
    }else{
        counter.slides.length-1;
    }
    slideImage();
}