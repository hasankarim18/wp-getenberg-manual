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

        add_action('enqueue_block_assets', [$this, 'render_block_assets']);
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
                "image" => [
                    "type" => "string",
                    'default' => ""
                ]
            ]

        ]);
    }

    public function render_advertisenement_block($attributes, $content)
    {
        if (is_admin()) {
            return '';
        }
        $addver_title = !empty($attributes['title']) ? $attributes['title'] : "Advertenement default";


        $img_src = !empty($attributes['image']) ? $attributes['image'] : "";


        ob_start();
        ?>
        <div class="wgb_advertisenement_block">
            <h4><?php echo esc_html($addver_title); ?></h4>
            <div>
                <img class="add_img" src="<?php echo esc_attr($img_src) ?>" alt="">
            </div>
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

    public function render_block_assets()
    {
        wp_enqueue_style(
            'wgb-advertisemen-block-css',
            MGB_URL . 'advertisementBlock/advertisementStyles.css',
            [],
            '1.0.1',
            "all"
        );
    }

}

new AdvertisemenBlock();