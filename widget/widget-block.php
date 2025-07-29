<?php

if (!defined('ABSPATH')) {
    exit;
}




class Widget_Block
{
    public function __construct()
    {
        add_action('init', [$this, 'register_blocks']);
        add_action('enqueue_block_editor_assets', [$this, 'load_assets']);

    }


    public function register_blocks()
    {

        register_block_type('mgb/message-block', [
            'render_callback' => [$this, 'render_message_block'],
            "attributes" => [
                "message" => [
                    "type" => "string",
                    "default" => "Hello World!"
                ]
            ]
        ]);

    }



    // 
    public function render_message_block($attributes, $content)
    {
        $msg = $attributes['message'] ? esc_html($attributes['message']) : 'Hello World!';
        ob_start();
        ?>
        <div class="mgb_message_container">
            <p>
                <?php echo $msg; ?>
            </p>
        </div>
        <?php return ob_get_clean();

    }


    public function load_assets()
    {
        wp_enqueue_script(
            'mgb-blocks-js',
            MGB_URL . 'widget/widget-blocks.js',
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'],
            '1.0.0',
            true
        );
    }
}


new Widget_Block();