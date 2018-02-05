import * as Utils from "./Utils";

const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const Types = novi.types;
const Language = novi.language;
const messages = Language.getDataByKey("novi-plugin-camera-slider");
const ReplaceImageItem = {
    trigger: <Icon>{Icons.ICON_BG_IMAGE}</Icon>,
    tooltip: messages.editor.replaceImage.tooltip,
    closeIcon: "submit",
    title: messages.editor.replaceImage.title,
    onTriggerClick: onClick
};

export default ReplaceImageItem;


function onClick(element) {
    novi.media.choose({onSubmit: onSubmitCrop.bind(this,element), width: element.offsetWidth, height: element.offsetHeight, type: Types.mediaImage})
}

function onSubmitCrop(element, path){
    let correctPath = path.replace(/['|"]/g, ``);

    let currentSlide = Utils.getCurrentSlideElement(element);
    if (!currentSlide) return;

    novi.element.setAttribute(currentSlide, "data-src", correctPath);
    novi.page.forceUpdate();
}