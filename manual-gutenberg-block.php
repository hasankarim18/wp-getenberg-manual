<?php

/**
 * Plugin Name: Manual Gutenberg Block (MGB)
 * Plugin URI: https://example.com/
 * Description: A brief description of the plugin.
 * Version: 1.0.0
 * Author: Your Name
 * Author URI: https://yourwebsite.com/
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: plugin-textdomain
 * Domain Path: /languages
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('MGB_PATH', plugin_dir_path(__FILE__));
define('MGB_URL', plugin_dir_url(__FILE__));

class Plugin_Class_Name
{
    public function __construct()
    {
        add_action('plugins_loaded', [$this, 'load_dependencies']);
        add_action('init', [$this, 'init']);
    }

    public function load_dependencies()
    {
        // Load includes or helpers
    }

    public function init()
    {
        // Register blocks, post types, etc.
    }
}

new Plugin_Class_Name();

/**
 * Plugin Activation Hook
 */
function activate_plugin_function()
{
    // Activation code
}
register_activation_hook(__FILE__, 'activate_plugin_function');

/**
 * Plugin Deactivation Hook
 */
function deactivate_plugin_function()
{
    // Deactivation code
}
register_deactivation_hook(__FILE__, 'deactivate_plugin_function');

/**
 * Plugin Uninstall Hook
 */
function uninstall_plugin_function()
{
    // Uninstall code
}
register_uninstall_hook(__FILE__, 'uninstall_plugin_function');
