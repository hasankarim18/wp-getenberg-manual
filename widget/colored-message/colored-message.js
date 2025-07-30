console.log("colored message loaded");

wp.blocks.registerBlockType("mgb/colored-message", {
  title: "Mgb Colored Message",
  icon: "dashicons-media-text",
  category: "widgets",
  attributes: {
    message: { type: "string", default: "Hello from colorful world" },
    color: { type: "string", default: "#000" },
    fontSize: { type: "number", default: 16 },
    backgroundColor: { type: "string", default: "#fff" },
  },
  edit: (props) => {
    const InspectorControls = wp.blockEditor
      ? wp.blockEditor.InspectorControls
      : wp.editor.InspectorControls;
    const PanelBody = wp.components.PanelBody;
    const inputStyle = {
      width: "100%",
      marginBottom: "16px",
      boxSizing: "border-box",
    };

    return [
      wp.element.createElement(
        InspectorControls,
        {},
        wp.element.createElement(
          PanelBody,
          {
            title: "Message",
            initialOpen: true,
          },
          wp.element.createElement(
            "div",
            { className: "mbg_settings_parent" },
            wp.element.createElement(
              "div",
              { className: "mgb_input_settings" },
              wp.element.createElement("label", {}, "Message:"),
              wp.element.createElement("input", {
                id: "message_input",
                type: "text",
                value: props.attributes.message,
                onChange: (event) => {
                  props.setAttributes({ message: event.target.value });
                },
                style: inputStyle,
                placeholder: "Enter your message here...",
              })
            ),
            wp.element.createElement(
              "div",
              { className: "mgb_input_settings" },
              wp.element.createElement(
                "label",
                { htmlFor: "color_input" },
                "Text color"
              ),
              wp.element.createElement("input", {
                id: "color_input",
                type: "color",
                value: props.attributes.color,
                onChange: (event) => {
                  props.setAttributes({ color: event.target.value });
                },
                style: inputStyle,
              })
            ),
            wp.element.createElement(
              "div",
              { className: "mgb_input_settings" },
              wp.element.createElement(
                "label",
                { htmlFor: "fontsize" },
                "Font size"
              ),
              wp.element.createElement("input", {
                id: "fontsize",
                type: "number",
                style: inputStyle,
                value: props.attributes.fontSize,
                onChange: (e) => {
                  props.setAttributes({
                    fontSize: parseInt(e.target.value, 10),
                  });
                },
              })
            ),
            wp.element.createElement(
              "div",
              { className: "mgb_input_settings" },
              wp.element.createElement(
                "label",
                { htmlFor: "backgroundcolor" },
                "Bg color"
              ),
              wp.element.createElement("input", {
                id: "backgroundcolor",
                type: "color",
                value: props.attributes.backgroundColor,
                onChange: (e) => {
                  props.setAttributes({ backgroundColor: e.target.value });
                },
                style: inputStyle,
              })
            )
          )
        )
      ),
      // ⬇️ second parameter
      wp.element.createElement(
        "div",
        {
          style: {
            backgroundColor: props.attributes.backgroundColor,
            padding: "20px",
            borderRadius: "10px",
          },
        },
        wp.element.createElement(
          "p",
          {
            style: {
              color: props.attributes.color,
              fontSize: props.attributes.fontSize + "px",
            },
          },
          props.attributes.message
        )
      ),
    ];
  },
  save: (props) => {
    return null;
  },
});
