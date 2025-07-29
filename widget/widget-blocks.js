wp.blocks.registerBlockType("mgb/message-block", {
  title: "Mgb Message Widget",
  icon: "dashicons-buddicons-pm",
  category: "widgets",
  attributes: {
    message: {
      type: "string",
      default: "Hello World!",
    },
  },
  edit: (props) => {
    const InspectorControls = wp.blockEditor
      ? wp.blockEditor.InspectorControls
      : wp.editor.InspectorControls;
    const PanelBody = wp.components.PanelBody;
    const inputStyle = {
      width: "100%",
      marginBottom: "12px",
      boxSizing: "border-box",
    };

    return [
      wp.element.createElement(
        InspectorControls,
        {},
        wp.element.createElement(
          PanelBody,
          {
            title: "Message Controls",
            initialOpen: true,
          },
          wp.element.createElement(
            "div",
            { style: { marginBottom: "16px" } },
            wp.element.createElement(
              "label",
              { htmlFor: "mgb-message" },
              "Message Input"
            ),
            wp.element.createElement("input", {
              id: "mgb-message",
              type: "text",
              value: props.attributes.message,
              onChange: function (e) {
                props.setAttributes({ message: e.target.value });
              },
              placeholder: "Enter your message...",
              style: inputStyle,
            })
          )
        )
      ),
      wp.element.createElement(
        "div",
        {},
        wp.element.createElement("p", {}, props.attributes.message)
      ),
    ];
  },
  save: () => {
    return null;
  },
});
