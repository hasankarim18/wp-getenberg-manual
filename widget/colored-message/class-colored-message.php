<?php


class Colored_Message
{
    public function __construct()
    {
        add_action('init', [$this, 'init']);
        add_action('enqueue_block_editor_assets', [$this, 'load_assets']);

    }

    public function init()
    {
        register_block_type('mgb/colored-message', [
            'render_callback' => [$this, 'render_colored_message'],
            'attributes' => [
                "message" => [
                    "type" => "string",
                    "default" => "Hello from colorful world"
                ],
                "color" => [
                    "type" => "string",
                    "default" => "#000"
                ],
                "fontSize" => [
                    "type" => "number",
                    "default" => 16
                ],
                "backgroundColor" => [
                    "type" => "string",
                    "default" => "#fff"
                ]
            ]

        ]);
    }

    public function render_colored_message($attributes, $content)
    {
        $message = $attributes['message'] ? esc_html($attributes['message']) : 'Hello from colorful world';
        $color = $attributes['color'] ? esc_attr($attributes['color']) : '#000';
        $fontSize = $attributes['fontSize'] ? esc_attr($attributes['fontSize']) : '16px';
        $backgroundColor = $attributes['backgroundColor'] ? esc_attr($attributes['backgroundColor']) : '#fff';

        ob_start();
        ?>
        <div style="
        background-color:<?php echo $backgroundColor; ?>;
        padding:20px;
        border-radius:10px;
        " class="mgb-colored-message">
            <p style="
        padding:0;
        margin:0;
        color:<?php echo $color; ?>;
        font-size:<?php echo $fontSize . 'px'; ?>;
        
        "><?php echo $message; ?></p>
        </div>
        <?php return ob_get_clean();

    }

    public function load_assets()
    {
        wp_enqueue_script(
            'mgb-colored-message',
            MGB_URL . 'widget/colored-message/colored-message.js',
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'],
            '1.0.1',
            true
        );
    }
}

new Colored_Message();