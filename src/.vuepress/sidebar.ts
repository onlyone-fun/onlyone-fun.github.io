import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Java-Note",
      icon: "book",
      prefix:"java-note",
      children:"structure",
    },
  ],
});
