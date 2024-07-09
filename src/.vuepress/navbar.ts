import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "java-note",
        icon: "pen-to-square",
        prefix: "/note/java-note/",
        children: [
            {text: "JVM", icon: "pen-to-square", link: "JVM"},
            {text: "API", icon: "pen-to-square", link: "API"}
        ]
    },
]);
