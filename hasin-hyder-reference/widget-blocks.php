<?php
class WidgetDemo_Blocks {
    function __construct() {
        add_action('init', [$this, 'register_blocks']);
        add_action('enqueue_block_editor_assets', [$this, 'load_assets']);
    }

    function register_blocks() {
        register_block_type('widgetdemo/static-block', [
            'render_callback' => [$this, 'render_static_block']
        ]);

        register_block_type('widgetdemo/message-block', [
            'render_callback' => [$this, 'render_message_block'],
            'attributes' => [
                'message' => [
                    'type' => 'string',
                    'default' => 'Hello World'
                ]
            ]
        ]);

        register_block_type('widgetdemo/settings-block', array(
            'attributes' => array(
                'text' => array(
                    'type' => 'string',
                    'default' => 'Customizable block!'
                ),
                'color' => array(
                    'type' => 'string',
                    'default' => '#333333'
                ),
                'fontSize' => array(
                    'type' => 'number',
                    'default' => 18
                )
            ),
            'render_callback' => array($this, 'render_settings_block')
        ));

        register_block_type('widgetdemo/advertisement-block', array(
            'attributes' => array(
                'heading' => array(
                    'type' => 'string',
                    'default' => 'Advertisement'
                ),
                'footer' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'link' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'fileUrl' => array(
                    'type' => 'string',
                    'default' => ''
                )
            ),
            'render_callback' => array($this, 'render_advertisement_block')
        ));

        // Block: Show Available Setting Controls
        register_block_type('widgetdemo/available-controls-block', array(
            'attributes' => array(
                'text' => array('type' => 'string', 'default' => ''),
                'textarea' => array('type' => 'string', 'default' => ''),
                'color' => array('type' => 'string', 'default' => '#333333'),
                'number' => array('type' => 'number', 'default' => 10),
                'url' => array('type' => 'string', 'default' => ''),
                'fileUrl' => array('type' => 'string', 'default' => ''),
                'toggle' => array('type' => 'boolean', 'default' => false),
                'select' => array('type' => 'string', 'default' => 'option1'),
                'range' => array('type' => 'number', 'default' => 50)
            ),
            'render_callback' => array($this, 'render_available_controls_block')
        ));
    }

    public function render_available_controls_block($attributes) {
        $output = '<div class="widgetdemo-available-controls-block" style="border:1px solid #eee;padding:16px;background:#fafbfc;">';
        $output .= '<h4 style="margin-top:0;">Common Block Setting Controls (Live Example)</h4>';
        $output .= '<ul style="padding-left:20px;">';
        $output .= '<li>Text: ' . esc_html($attributes['text'] ?? '') . '</li>';
        $output .= '<li>Textarea: ' . nl2br(esc_html($attributes['textarea'] ?? '')) . '</li>';
        $output .= '<li>Color: <span style="color:' . esc_attr($attributes['color'] ?? '#333333') . '">' . esc_html($attributes['color'] ?? '#333333') . '</span></li>';
        $output .= '<li>Number: ' . intval($attributes['number'] ?? 0) . '</li>';
        $output .= '<li>URL: ' . esc_url($attributes['url'] ?? '') . '</li>';
        $output .= '<li>File: ';
        if (!empty($attributes['fileUrl'])) {
            $output .= '<img src="' . esc_url($attributes['fileUrl']) . '" style="max-width:40px;vertical-align:middle;" />';
        } else {
            $output .= 'None';
        }
        $output .= '</li>';
        $output .= '<li>Toggle: ' . (!empty($attributes['toggle']) ? 'On' : 'Off') . '</li>';
        $output .= '<li>Select: ' . esc_html($attributes['select'] ?? '') . '</li>';
        $output .= '<li>Range: ' . intval($attributes['range'] ?? 0) . '</li>';
        $output .= '</ul>';
        $output .= '<p style="font-size:0.95em;color:#666;margin-top:12px;">These controls help you build user-friendly and customizable Gutenberg blocks!</p>';
        $output .= '</div>';
        return $output;
    }

    public function render_advertisement_block($attributes, $content) {
        $heading = !empty($attributes['heading']) ? esc_html($attributes['heading']) : 'Advertisement';
        $footer = !empty($attributes['footer']) ? esc_html($attributes['footer']) : '';
        $link = !empty($attributes['link']) ? esc_url($attributes['link']) : '';
        $fileUrl = !empty($attributes['fileUrl']) ? esc_url($attributes['fileUrl']) : '';
        $output = '<div class="widgetdemo-advertisement-block" style="border:1px solid #ccc;padding:12px;text-align:center;">';
        $output .= '<h3>' . $heading . '</h3>';
        if ($fileUrl) {
            $output .= '<div style="margin:10px 0;">';
            $output .= $link ? '<a href="' . $link . '" target="_blank"><img src="' . $fileUrl . '" style="max-width:100%;height:auto;" /></a>' : '<img src="' . $fileUrl . '" style="max-width:100%;height:auto;" />';
            $output .= '</div>';
        }
        if ($footer) {
            $output .= '<div class="widgetdemo-ad-footer" style="margin-top:8px;font-size:0.95em;color:#666;">' . $footer . '</div>';
        }
        $output .= '</div>';
        return $output;
    }

    public function render_settings_block($attributes, $content) {
        $text = !empty($attributes['text']) ? esc_html($attributes['text']) : 'Customizable block!';
        $color = !empty($attributes['color']) ? esc_attr($attributes['color']) : '#333333';
        $fontSize = !empty($attributes['fontSize']) ? intval($attributes['fontSize']) : 18;
        return '<div class="widgetdemo-settings-block" style="color:' . $color . '; font-size:' . $fontSize . 'px;">' . $text . '</div>';
    }

    function render_message_block($attributes, $content) {
        $msg = !empty($attributes['message']) ? esc_html($attributes['message']) : 'Hello World!';
        return '<div class="widgetdemo-message-block">' . $msg . '</div>';
    }

    function render_static_block($attributes, $content) {
        return '<div class="widgetdemo-static-block">This is a beginner static block from Widget Demo plugin.</div>';
    }

    function load_assets() {
        wp_enqueue_script(
            'widgetdemo-blocks',
            plugins_url('widget-blocks.js', __FILE__),
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'],
            '1.0',
            true
        );
    }
}

new WidgetDemo_Blocks();