const editor = grapesjs.init({
  height: "100%",
  container: "#gjs",
  fromElement: 1,
  showOffsets: true,
  fromElement: true,
  noticeOnUnload: false,
  storageManager: false,
  selectorManager: {
    componentFirst: true,
  },
  plugins: [
    "grapesjs-component-code-editor",
    "grapesjs-parser-postcss",
    "grapesjs-preset-webpage",
    "gjs-blocks-basic",
    "grapesjs-navbar",
    "grapesjs-component-countdown",
    "grapesjs-plugin-forms",
    "grapesjs-blocks-flexbox",
    "grapesjs-tui-image-editor",
    "grapesjs-plugin-export",
    "grapesjs-custom-code",
    "grapesjs-plugin-toolbox",
    "grapesjs-tooltip",
    "grapesjs-typed",
  ],
});

const pn = editor.Panels;

const panelViews = pn.addPanel({
  id: "views",
});

panelViews.get("buttons").add([
  {
    attributes: {
      title: "Open Code",
    },
    className: "fa fa-file-code-o",
    command: "open-code",
    togglable: false, //do not close when button is clicked again
    id: "open-code",
  },
]);
