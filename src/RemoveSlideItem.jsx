import * as Utils from "./Utils";
const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const Language = novi.language;
const messages = Language.getDataByKey("novi-plugin-camera-slider");
const RemoveSlideItem = {
    trigger: <Icon>{Icons.ICON_MINUS_SQUARE}</Icon>,
    tooltip: messages.editor.removeSlide.tooltip,
    closeIcon: "submit",
    title: messages.editor.removeSlide.title,
    collapsed: true,
    onTriggerClick: removeSlide
};

export default RemoveSlideItem;


function removeSlide(element) {
    let currentSlide = Utils.getCurrentSlideElement(element);
    let slidesCount = Utils.getSlidesCount(element);
    if (!currentSlide || slidesCount <= 1) return;  

    novi.element.remove(currentSlide);
    novi.page.forceUpdate();
}
