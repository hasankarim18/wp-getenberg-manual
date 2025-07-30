// console.log('loaded blocks');
wp.blocks.registerBlockType('widgetdemo/static-block', {
    title: "Widget Demo: Static Block",
    icon: "smiley",
    category: "widgets",
    edit: function () {
        return wp.element.createElement('div',
            { className: 'widgetdemo-static-block' },
            'This is a beginner static block from Widget Demo plugin.'
        )
    },
    save: function () {
        return null;
    }
})

wp.blocks.registerBlockType('widgetdemo/message-block', {
    title: 'Widget Demo: Message Block',
    icon: 'admin-comments',
    category: 'widgets',
    attributes: {
        message: { type: 'string', default: 'Hello World' }
    },
    edit: function (props) {
        const InspectorControls = wp.blockEditor ? wp.blockEditor.InspectorControls : wp.editor.InspectorControls;
        const PanelBody = wp.components.PanelBody;
        const inputStyle = { width: '100%', marginBottom: '12px', boxSizing: 'border-box' };
        return [
            wp.element.createElement(InspectorControls, {},
                wp.element.createElement(PanelBody, { title: 'Message Block Settings', initialOpen: true },
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-message', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Message:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-message',
                            type: 'text',
                            value: props.attributes.message,
                            onChange: function (e) { props.setAttributes({ message: e.target.value }); },
                            placeholder: 'Enter your message...',
                            style: inputStyle
                        })
                    )
                )
            ),
            wp.element.createElement('div', { className: 'widgetdemo-message-block', style: { border: '1px dashed #ccc', padding: '8px' } }, props.attributes.message)
        ]
    },
    save() {
        return null;
    }
})

wp.blocks.registerBlockType('widgetdemo/settings-block', {
    title: 'Widget Demo: Settings Block',
    icon: 'admin-generic',
    category: 'widgets',
    attributes: {
        text: { type: 'string', default: 'Customizable block!' },
        color: { type: 'string', default: '#333333' },
        fontSize: { type: 'number', default: 18 }
    },
    edit: function (props) {
        const InspectorControls = wp.blockEditor ? wp.blockEditor.InspectorControls : wp.editor.InspectorControls;
        const PanelBody = wp.components.PanelBody;
        const inputStyle = { width: '100%', marginBottom: '12px', boxSizing: 'border-box' };
        return [
            wp.element.createElement(InspectorControls, {},
                wp.element.createElement(PanelBody, { title: 'Block Settings', initialOpen: true },
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-settings-text', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Text:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-settings-text',
                            type: 'text',
                            value: props.attributes.text,
                            onChange: function (e) { props.setAttributes({ text: e.target.value }); },
                            placeholder: 'Enter block text...',
                            style: inputStyle
                        })
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-settings-color', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Color:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-settings-color',
                            type: 'color',
                            value: props.attributes.color,
                            onChange: function (e) { props.setAttributes({ color: e.target.value }); },
                            style: inputStyle
                        })
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '8px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-settings-fontsize', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Font Size:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-settings-fontsize',
                            type: 'number',
                            min: 10,
                            max: 60,
                            value: props.attributes.fontSize,
                            onChange: function (e) { props.setAttributes({ fontSize: parseInt(e.target.value) }); },
                            style: { ...inputStyle, width: '80px', display: 'inline-block', marginRight: '8px' }
                        }),
                        'px'
                    )
                )
            ),
            wp.element.createElement('div', {
                className: 'widgetdemo-settings-block',
                style: { color: props.attributes.color, fontSize: props.attributes.fontSize + 'px', border: '1px dashed #ccc', padding: '8px' }
            }, props.attributes.text)
        ];
    },
    save: function () {
        return null; // Rendered in PHP
    }
});


wp.blocks.registerBlockType('widgetdemo/advertisement-block', {
    title: 'Widget Demo: Advertisement Block',
    icon: 'megaphone',
    category: 'widgets',
    attributes: {
        heading: { type: 'string', default: 'Advertisement' },
        footer: { type: 'string', default: '' },
        link: { type: 'string', default: '' },
        fileUrl: { type: 'string', default: '' }
    },
    edit: function (props) {
        const InspectorControls = wp.blockEditor ? wp.blockEditor.InspectorControls : wp.editor.InspectorControls;
        const PanelBody = wp.components.PanelBody;
        const MediaUpload = wp.blockEditor ? wp.blockEditor.MediaUpload : wp.editor.MediaUpload;
        const Button = wp.components.Button;
        const inputStyle = { width: '100%', marginBottom: '12px', boxSizing: 'border-box' };
        return [
            wp.element.createElement(InspectorControls, {},
                wp.element.createElement(PanelBody, { title: 'Advertisement Settings', initialOpen: true },
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-ad-heading', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Heading:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-ad-heading',
                            type: 'text',
                            value: props.attributes.heading,
                            onChange: function (e) { props.setAttributes({ heading: e.target.value }); },
                            placeholder: 'Enter heading...',
                            style: inputStyle
                        })
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-ad-footer', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Footer Message:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-ad-footer',
                            type: 'text',
                            value: props.attributes.footer,
                            onChange: function (e) { props.setAttributes({ footer: e.target.value }); },
                            placeholder: 'Enter footer message...',
                            style: inputStyle
                        })
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-ad-link', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Link:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-ad-link',
                            type: 'url',
                            value: props.attributes.link,
                            onChange: function (e) { props.setAttributes({ link: e.target.value }); },
                            placeholder: 'https://example.com',
                            style: inputStyle
                        })
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '8px' } },
                        wp.element.createElement('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Image/File:'),
                        wp.element.createElement(MediaUpload, {
                            onSelect: function (media) {
                                props.setAttributes({ fileUrl: media.url });
                            },
                            allowedTypes: ['image'],
                            value: props.attributes.fileUrl,
                            render: function (obj) {
                                return wp.element.createElement(Button, {
                                    isSecondary: true,
                                    onClick: obj.open,
                                    style: { width: '100%' }
                                }, props.attributes.fileUrl ? 'Change File' : 'Select File');
                            }
                        }),
                        props.attributes.fileUrl && wp.element.createElement('div', { style: { marginTop: '8px', textAlign: 'center' } },
                            wp.element.createElement('img', { src: props.attributes.fileUrl, style: { maxWidth: '100%', height: 'auto', border: '1px solid #eee', borderRadius: '4px' } })
                        )
                    )
                )
            ),
            wp.element.createElement('div', {
                className: 'widgetdemo-advertisement-block',
                style: { border: '1px solid #ccc', padding: '12px', textAlign: 'center' }
            },
                wp.element.createElement('h3', null, props.attributes.heading),
                props.attributes.fileUrl && wp.element.createElement('div', { style: { margin: '10px 0' } },
                    props.attributes.link ?
                        wp.element.createElement('a', { href: props.attributes.link, target: '_blank', rel: 'noopener noreferrer' },
                            wp.element.createElement('img', { src: props.attributes.fileUrl, style: { maxWidth: '100%', height: 'auto' } })
                        ) :
                        wp.element.createElement('img', { src: props.attributes.fileUrl, style: { maxWidth: '100%', height: 'auto' } })
                ),
                props.attributes.footer && wp.element.createElement('div', { style: { marginTop: '8px', fontSize: '0.95em', color: '#666' } }, props.attributes.footer)
            )
        ];
    },
    save: function () {
        return null; // Rendered in PHP
    }
});

// Block: Show Available Setting Controls
wp.blocks.registerBlockType('widgetdemo/available-controls-block', {
    title: 'Widget Demo: Available Setting Controls',
    icon: 'admin-settings',
    category: 'widgets',
    attributes: {
        text: { type: 'string', default: '' },
        textarea: { type: 'string', default: '' },
        color: { type: 'string', default: '#333333' },
        number: { type: 'number', default: 10 },
        url: { type: 'string', default: '' },
        fileUrl: { type: 'string', default: '' },
        toggle: { type: 'boolean', default: false },
        select: { type: 'string', default: 'option1' },
        range: { type: 'number', default: 50 }
    },
    edit: function (props) {
        const InspectorControls = wp.blockEditor ? wp.blockEditor.InspectorControls : wp.editor.InspectorControls;
        const PanelBody = wp.components.PanelBody;
        const MediaUpload = wp.blockEditor ? wp.blockEditor.MediaUpload : wp.editor.MediaUpload;
        const Button = wp.components.Button;
        const inputStyle = { width: '100%', marginBottom: '12px', boxSizing: 'border-box' };
        return [
            wp.element.createElement(InspectorControls, {},
                wp.element.createElement(PanelBody, { title: 'Available Controls Demo', initialOpen: true },
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-controls-text', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Text Input:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-controls-text',
                            type: 'text',
                            value: props.attributes.text,
                            onChange: function (e) { props.setAttributes({ text: e.target.value }); },
                            placeholder: 'Enter text...',
                            style: inputStyle
                        })
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-controls-textarea', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Textarea:'),
                        wp.element.createElement('textarea', {
                            id: 'widgetdemo-controls-textarea',
                            value: props.attributes.textarea,
                            onChange: function (e) { props.setAttributes({ textarea: e.target.value }); },
                            placeholder: 'Enter multi-line text...',
                            style: { ...inputStyle, minHeight: '60px' }
                        })
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-controls-color', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Color Picker:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-controls-color',
                            type: 'color',
                            value: props.attributes.color,
                            onChange: function (e) { props.setAttributes({ color: e.target.value }); },
                            style: { ...inputStyle, width: '60px', display: 'inline-block' }
                        })
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-controls-number', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Number Input:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-controls-number',
                            type: 'number',
                            value: props.attributes.number,
                            onChange: function (e) { props.setAttributes({ number: parseInt(e.target.value) }); },
                            min: 0,
                            max: 100,
                            style: { ...inputStyle, width: '80px', display: 'inline-block' }
                        })
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-controls-url', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'URL Input:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-controls-url',
                            type: 'url',
                            value: props.attributes.url,
                            onChange: function (e) { props.setAttributes({ url: e.target.value }); },
                            placeholder: 'https://example.com',
                            style: inputStyle
                        })
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Media Upload:'),
                        wp.element.createElement(MediaUpload, {
                            onSelect: function (media) {
                                props.setAttributes({ fileUrl: media.url });
                            },
                            allowedTypes: ['image'],
                            value: props.attributes.fileUrl,
                            render: function (obj) {
                                return wp.element.createElement(Button, {
                                    isSecondary: true,
                                    onClick: obj.open,
                                    style: { width: '100%' }
                                }, props.attributes.fileUrl ? 'Change File' : 'Select File');
                            }
                        }),
                        props.attributes.fileUrl && wp.element.createElement('div', { style: { marginTop: '8px', textAlign: 'center' } },
                            wp.element.createElement('img', { src: props.attributes.fileUrl, style: { maxWidth: '100%', height: 'auto', border: '1px solid #eee', borderRadius: '4px' } })
                        )
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-controls-toggle', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Toggle Switch:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-controls-toggle',
                            type: 'checkbox',
                            checked: props.attributes.toggle,
                            onChange: function (e) { props.setAttributes({ toggle: e.target.checked }); },
                            style: { marginRight: '8px' }
                        }),
                        props.attributes.toggle ? 'On' : 'Off'
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-controls-select', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Dropdown:'),
                        wp.element.createElement('select', {
                            id: 'widgetdemo-controls-select',
                            value: props.attributes.select,
                            onChange: function (e) { props.setAttributes({ select: e.target.value }); },
                            style: inputStyle
                        },
                            wp.element.createElement('option', { value: 'option1' }, 'Option 1'),
                            wp.element.createElement('option', { value: 'option2' }, 'Option 2'),
                            wp.element.createElement('option', { value: 'option3' }, 'Option 3')
                        )
                    ),
                    wp.element.createElement('div', { style: { marginBottom: '16px' } },
                        wp.element.createElement('label', { htmlFor: 'widgetdemo-controls-range', style: { display: 'block', fontWeight: 'bold', marginBottom: '4px' } }, 'Range Slider:'),
                        wp.element.createElement('input', {
                            id: 'widgetdemo-controls-range',
                            type: 'range',
                            min: 0,
                            max: 100,
                            value: props.attributes.range,
                            onChange: function (e) { props.setAttributes({ range: parseInt(e.target.value) }); },
                            style: { width: '100%' }
                        }),
                        'Value: ' + props.attributes.range
                    )
                )
            ),
            wp.element.createElement('div', { style: { border: '1px solid #eee', padding: '16px', background: '#fafbfc', marginTop: '12px' } },
                wp.element.createElement('h4', { style: { marginTop: 0 } }, 'Live Preview of Controls'),
                wp.element.createElement('ul', { style: { paddingLeft: '20px' } },
                    wp.element.createElement('li', null, 'Text: ', props.attributes.text),
                    wp.element.createElement('li', null, 'Textarea: ', props.attributes.textarea),
                    wp.element.createElement('li', null, 'Color: ', wp.element.createElement('span', { style: { color: props.attributes.color } }, props.attributes.color)),
                    wp.element.createElement('li', null, 'Number: ', props.attributes.number),
                    wp.element.createElement('li', null, 'URL: ', props.attributes.url),
                    wp.element.createElement('li', null, 'File: ', props.attributes.fileUrl ? wp.element.createElement('img', { src: props.attributes.fileUrl, style: { maxWidth: '40px', verticalAlign: 'middle' } }) : 'None'),
                    wp.element.createElement('li', null, 'Toggle: ', props.attributes.toggle ? 'On' : 'Off'),
                    wp.element.createElement('li', null, 'Select: ', props.attributes.select),
                    wp.element.createElement('li', null, 'Range: ', props.attributes.range)
                )
            )
        ];
    },
    save: function () {
        return null; // Rendered in PHP
    }
});