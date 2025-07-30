<?php
class XKCD {
    public static function register() {
        wp_add_dashboard_widget('widget_demo_xkcd', 'Daily Comic', [__CLASS__, 'render']);

    }

    public static function render() {
        $response = wp_remote_get('https://xkcd.com/info.0.json');
        if (isset($response) && !is_wp_error($response)) {
            $data = json_decode(wp_remote_retrieve_body($response));
            if ($data && $data->img) {
                echo "<p>";
                echo "<img src='" . esc_attr($data->img) . "' style='max-width:100%; height:auto;'/>";
                echo "</p>";
            }
        }
    }
}