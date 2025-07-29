wp.blocks.registerBlockType("mgb/static-block", {
  title: "Static Widget",
  icon: "smiley",
  category: "widgets",
  attributes: {},
  edit: function (props) {
    return wp.element.createElement(
      "div",
      { className: "static-widget-demo" },
      wp.element.createElement("h2", {}, "Static widget-block***")
    );
  },
  save: function (props) {
    return null;
  },
});

console.log("Widget Block registered js!");
