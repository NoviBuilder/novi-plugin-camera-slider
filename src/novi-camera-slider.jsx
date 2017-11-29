const React = novi.react.React;
import ReplaceImageItem from "./ReplaceImageItem";
import AddSlideItem from "./AddSlideItem";
import RemoveSlideItem from "./RemoveSlideItem";
import Settings from "./Settings";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-camera-slider",
    title: "Novi Camera Slider",
    description: "Novi Camera Slider description",
    version: "1.0.2",
    dependencies: {
        novi: "0.8.6"
    },
    defaults: {
        querySelector: '.camera_wrap'
    },
    ui: {
        editor: [ReplaceImageItem, AddSlideItem, RemoveSlideItem],
        settings: <Settings />,
    },
    onLanguageChange: onLanguageChange
};

function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-camera-slider");
    plugin.ui.editor[0].title = messages.editor.replaceImage.title;
    plugin.ui.editor[0].tooltip = messages.editor.replaceImage.tooltip;
    plugin.ui.editor[1].title = messages.editor.addSlide.title;
    plugin.ui.editor[1].tooltip = messages.editor.addSlide.tooltip;
    plugin.ui.editor[2].title = messages.editor.removeSlide.title;
    plugin.ui.editor[2].tooltip = messages.editor.removeSlide.tooltip;
    return plugin;
}

novi.plugins.register(Plugin);