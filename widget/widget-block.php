<?php

if (!defined('ABSPATH')) {
    exit;
}

error_log('widget-block.php loaded!');


class Widget_Block
{
    public function __construct()
    {
        add_action('init', [$this, 'register_blocks']);
        add_action('enqueue_block_editor_assets', [$this, 'load_assets']);

    }


    public function register_blocks()
    {
        register_block_type('mgb/static-block', [
            'render_callback' => [$this, 'render_static_block']
        ]);

    }

    public function render_static_block($attributes, $content)
    {
        error_log('Render static block called');
        return "<div class='static-widget-demo'>Static widget-block!!!!!!!!!!!!</div>";

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