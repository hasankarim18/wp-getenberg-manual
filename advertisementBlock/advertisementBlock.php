<?php

if (!defined('ABSPATH')) {
    exit;
}

class AdvertisemenBlock
{
    public function __construct()
    {
        // error_log('Initializing AdvertisemenBlock');
        add_action('init', [$this, 'init']);
        add_action('enqueue_block_editor_assets', [$this, 'load_assets']);
    }

    public function init()
    {
        // Register blocks
        register_block_type('wgb/advertisenement-block', [
            'render_callback' => [$this, 'render_advertisenement_block'],
            "attributes" => [
                "title" => [
                    'type' => 'string',
                    'default' => 'Advertenement default'
                ],
            ]

        ]);
    }

    public function render_advertisenement_block($attributes, $content)
    {
        if (is_admin()) {
            return '';
        }
        $addver_title = !empty($attributes['title']) ? $attributes['title'] : "Advertenement default";

        ob_start();
        ?>
        <div class="wgb_advertisenement_block">
            <h4><?php echo esc_html($addver_title); ?></h4>
        </div>
        <?php return ob_get_clean();
    }


    public function load_assets()
    {
        wp_enqueue_script(
            'wgb-advertisemen-block-js',
            MGB_URL . 'advertisementBlock/advertisementBlock.js',
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'],
            '1.0.0',
            true
        );
    }

}

new AdvertisemenBlock();