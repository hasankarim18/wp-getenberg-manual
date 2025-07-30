<?php
class Dashboard_Welcome {
    public static function register() {
        wp_add_dashboard_widget('widget_demo_dashboard_welcome', 'Simple Welcome', [__CLASS__, 'render']);
    }

    public static function render() {
        ?>
        <p>
            Hello Everyone, Welcome to our <strong>WordPress Plugin Development Course</strong>
        <p>
            <?php
    }
}