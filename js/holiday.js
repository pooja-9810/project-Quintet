let myImagesArray = ["./images/bridge-4636745_1920.jpg ","./images/lucerne-4285441_1920.jpg","./images/lucerne-4340262_1920.jpg"];
let myImagesArray2 = ["./images/mountain-425134_1920.jpg","./images/zermatt-3304666_1920.jpg","./images/train-62849_1280.jpg"];
let myImagesArray3 = ["./images/switzerland-interlaken-hoheweg.jpg ","./images/interlaken_lake_thun.jpg","./images/switzerland-interlaken-top-attractions-hike-schynige-platte-trails.jpg"];
let myImagesArray4 = ["./images/switzerland-zurich-top-attractions-bahnhofstrasse-bahnfof.jpg ","./images/zurich-opera-house-2213766_1920.jpg","./images/zurich-bridge-6631572_1920.jpg","./images/christmas-1928599_1920.jpg"];



// Section 2 -------------------------------------------------
//make an automatic slide to display the images
let ImageNumber = 0;
let difference = myImagesArray.length -1;

let delay = 2000; //milliseconds    1sec=1000milliseconds

let a = 1

setInterval("ChangeImages(-1)", delay);
//-1 to show the slide backwards
//1 to show the slide forwards

function ChangeImages(direction)
{//begin function
    
    ImageNumber = ImageNumber + direction;

    if(ImageNumber > difference)
    {//begin inner first if
        ImageNumber = 0;
    }//end inner first if

    if(ImageNumber < 0)
    {//begin inner second if
        ImageNumber = difference;
    }//end inner second if
    //document.slideshow.src = myImagesArray[ImageNumber];
    document.getElementById('slideshow').src = myImagesArray[ImageNumber];
    document.getElementById('slideshow2').src = myImagesArray2[ImageNumber];
    document.getElementById('slideshow3').src = myImagesArray3[ImageNumber];
    document.getElementById('slideshow4').src = myImagesArray4[ImageNumber];

}//end function