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
    image: {
      type: "string",
      default:"",
    },
  },
  edit: (props) => {
    const InspectorControls = wp.blockEditor
      ? wp.blockEditor.InspectorControls
      : wp.editor.InspectorControls;
    const PanelBody = wp.components.PanelBody;
    const MediaUpload = wp.blockEditor ? wp.blockEditor.MediaUpload : wp.editor.MediaUpload
    const Button = wp.components.Button
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
          wp.element.createElement("div",{ className: "Parent" },
            wp.element.createElement("div",{style:{marginBottom:"16px", background:"lightgray"}},
               wp.element.createElement("label",{ htmlfor: "title" },"Advertisement Title"),
               wp.element.createElement("input", {
                  type: "text",
                  id: "title",
                  style: inputStyle,
                  value: props.attributes.title,
                  onChange: (e) => {
                    props.setAttributes({ title: e.target.value });
                  },
                })
            ),
            wp.element.createElement('div', { style: { marginBottom: '8px' } },
                wp.element.createElement('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Image/File:'),
                wp.element.createElement(MediaUpload, {
                    onSelect: function (media) {
                        props.setAttributes({ image: media.url });
                    },
                    allowedTypes: ['image'],
                    value: props.attributes.image,
                    render: function (obj) {
                        return wp.element.createElement(Button, {
                            isSecondary: true,
                            onClick: obj.open,
                            style: { width: '100%' }
                        }, props.attributes.image ? 'Change File' : 'Select File');
                    }
                }),
                props.attributes.image && wp.element.createElement('div', { style: { marginTop: '8px', textAlign: 'center' } },
                    wp.element.createElement('img', { src: props.attributes.image, style: { maxWidth: '100%', height: 'auto', border: '1px solid #eee', borderRadius: '4px' } })
                )
            )
          )// parent
        ) // InspectorControls
      ),
      wp.element.createElement(
        "div",
        {
          className: "wgb_advertisenement_block",
        },
        wp.element.createElement("h4", {}, props.attributes.title),
        wp.element.createElement(
          "div",
          {},
          wp.element.createElement("img", {
            src: props.attributes.image,
            className: "add_img",
          })
        )
      ),
    ];
  },
  save: (props) => {
    return null;
  },
});
