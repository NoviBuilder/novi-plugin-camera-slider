import * as Utils from "./Utils";
const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;

const AddSlideItem = {
    trigger: <Icon>{Icons.ICON_PLUS_SQUARE}</Icon>,
    tooltip: "Add Slide",
    closeIcon: "submit",
    title: "Add New Slide",
    collapsed: true,
    onTriggerClick: addSlide
};

export default AddSlideItem;


function addSlide(element) {
    let currentSlide = Utils.getCurrentSlideElement(element);
    if (!currentSlide) return;

    novi.element.duplicate(currentSlide);
    novi.page.forceUpdate();
}

