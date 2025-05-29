import { action, condition, expression } from "../template/aceDefine.js";

const category = "general";

action(
  category,
  "CloseWebview",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Close Webview",
    displayText: "Close Webview",
    description: "Closes the webview2",
    params: [],
  },
  function () {
    this._sendWrapperExtensionMessage("close-window");
  }
);
