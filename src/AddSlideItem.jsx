import * as Utils from "./Utils";
const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const Language = novi.language;
const messages = Language.getDataByKey("novi-plugin-camera-slider");
const AddSlideItem = {
    trigger: <Icon>{Icons.ICON_PLUS_SQUARE}</Icon>,
    tooltip: messages.editor.addSlide.tooltip,
    closeIcon: "submit",
    title: messages.editor.addSlide.title,
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

