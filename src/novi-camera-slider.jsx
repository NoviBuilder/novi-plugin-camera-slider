const React = novi.react.React;
import ReplaceImageItem from "./ReplaceImageItem";
import AddSlideItem from "./AddSlideItem";
import RemoveSlideItem from "./RemoveSlideItem";
import Settings from "./Settings";

const Plugin = {
    name: "novi-plugin-camera-slider",
    title: "Novi Camera Slider",
    description: "Novi Camera Slider description",
    version: "1.0.0",
    dependencies: {
    },
    defaults: {
        querySelector: '.camera_wrap'
    },
    ui: {
        editor: [ReplaceImageItem, AddSlideItem, RemoveSlideItem],
        settings: <Settings />,
    }
};

novi.plugins.register(Plugin);