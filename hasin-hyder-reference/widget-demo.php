<?php
/*
Plugin Name: Widget Demo
Description: Demonstrates how to develop widgets and sidebars for students.
Version: 1.0
Author: Hasin Hayder
*/

class WidgetDemo {
    public function __construct() {
        $this->load_dependencies();
        add_action('init', [$this, 'init_hook']);
        add_action('widgets_init', [$this, 'register_widgets']);
    }

    function init_hook() {
        add_action('wp_dashboard_setup', [$this, 'register_dashboard_widgets']);

    }

    function register_widgets() {
        register_widget('WidgetDemo_Author_Bio');
    }

    function register_dashboard_widgets() {
        Dashboard_Welcome::register();
        XKCD::register();
    }

    function load_dependencies() {
        require_once __DIR__ . '/dashboard/class-dashboard-welcome.php';
        require_once __DIR__ . '/dashboard/class-xkcd.php';
        require_once __DIR__ . '/classic/class-author-bio.php';
        require_once __DIR__ . '/widget-blocks.php';
    }
}

new WidgetDemo();