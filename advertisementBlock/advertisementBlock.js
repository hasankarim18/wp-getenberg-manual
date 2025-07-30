// advertisementBlock

wp.blocks.registerBlockType("wgb/advertisenement-block", {
  title: "MGB Advertenement Block",
  icon: "dashicons-format-image",
  category: "widgets",
  attributes: {
    title: {
      type: "string",
      default: "Advertenement default",
    },
  },
  edit: (props) => {
    const InspectorControls = wp.blockEditor
      ? wp.blockEditor.InspectorControls
      : wp.editor.InspectorControls;
    const PanelBody = wp.components.PanelBody;
    const inputStyle = {
      width: "100%",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "10px",
      boxSizing: "border-box",
    };
    return [
      wp.element.createElement(
        InspectorControls,
        {},
        wp.element.createElement(
          PanelBody,
          { title: "Advertisement panel" },
          wp.element.createElement(
            "div",
            { className: "Parent" },
            wp.element.createElement(
              "div",
              {},
              wp.element.createElement(
                "label",
                { htmlfor: "title" },
                "Advertisement Title"
              ),
              wp.element.createElement("input", {
                type: "text",
                id: "title",
                style: inputStyle,
                value: props.attributes.title,
                onChange: (e) => {
                  props.setAttributes({ title: e.target.value });
                },
              })
            )
          )
        )
      ),
      wp.element.createElement(
        "div",
        {
          className: "wgb_advertisenement_block",
        },
        wp.element.createElement("h4", {}, props.attributes.title)
      ),
    ];
  },
  save: (props) => {
    return null;
  },
});
