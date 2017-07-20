const utils = novi.utils;
export function getCurrentSlideElement(element){
    let slideIndex = _getCurrentSlideIndex(element);
    if (slideIndex === null) return null;

    let slidesParent = element.querySelector(".camera_src");
    if (!slidesParent) return null;
    let j = 0, slideCounter = -1;

    while(j < slidesParent.childNodes.length){
        if (utils.dom.isElementNode(slidesParent.childNodes[j])){
            slideCounter++;

            if (slideCounter === slideIndex){
                return slidesParent.childNodes[j];
            }
        }

        j++;
    }


    return null;
}

export function getSlidesCount(element){
    let slidesParent = element.querySelector(".camera_src");
    if (!slidesParent) return null;
    let j = 0, slideCounter = 0;

    while(j < slidesParent.childNodes.length){
        if (utils.dom.isElementNode(slidesParent.childNodes[j])){
            slideCounter++;
        }

        j++;
    }


    return slideCounter;
}

function _getCurrentSlideIndex(element){
    let tmpCurrent = element.querySelector(".cameraContent.cameracurrent");
    if (!tmpCurrent) return null;

    let childNodes = tmpCurrent.parentNode.childNodes;
    for (let i = 0; i < childNodes.length; i++){
        if (childNodes[i] === tmpCurrent) {
            return i;
            break;
        }
    }

    return null;
}
