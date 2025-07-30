

# Manual Gutenberg Block – `mgb/static-block`

This is a minimal example of how to create a **static Gutenberg block manually** without using React or build tools like Webpack or Babel. It uses plain JavaScript and PHP to register and render the block.

## 🔧 File Structure

```
plugin-root/
├── widget/
│   ├── widget-block.php
│   └── widget-blocks.js
```

## 📌 1. PHP Block Registration (`widget-block.php`)

This file is responsible for registering the block and enqueuing its editor script.

```php
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
            MGB_URL . 'widget/widget-blocks.js', // Make sure MGB_URL is defined
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'],
            '1.0.0',
            true
        );
    }
}

new Widget_Block();
```

✅ **Note:** Ensure that `MGB_URL` is defined using `plugin_dir_url(__FILE__)` in your main plugin file or globally.

---

## 📜 2. JavaScript Block Registration (`widget-blocks.js`)

This is the minimal JS needed to register a custom block using `wp.blocks.registerBlockType`.

```js
wp.blocks.registerBlockType("mgb/static-block", {
  title: "Static Widget",
  icon: "smiley",
  category: "widgets",
  attributes: {},
  edit: function (props) {
    return wp.element.createElement(
      "div",
      { className: "static-widget-demo" },
      wp.element.createElement("h2", {}, "Static widget-block***")
    );
  },
  save: function () {
    return null; // Server-side rendered
  },
});

console.log("Widget Block registered js!");
```

---

## 🧠 How It Works

1. **PHP:**

   - Registers the block using `register_block_type()` with a `render_callback`.
   - Enqueues a plain JS file for the block editor.

2. **JS:**

   - Registers the block using `wp.blocks.registerBlockType`.
   - Defines the `edit()` function using `wp.element.createElement()` (no JSX/React).
   - Uses `save: () => null` to indicate server-side rendering.

3. **Output:**

   - When added to a post or page, this block renders a static HTML snippet:

     ```html
     <div class="static-widget-demo">Static widget-block!!!!!!!!!!!!</div>
     ```

---

## ✅ No Build Tools Required

This example avoids build steps entirely — no Webpack, Babel, or npm scripts are needed. It’s great for quick prototypes or adding simple blocks in custom plugins.

---

## 🧪 Testing

- Activate the plugin.
- Go to the WordPress Block Editor.
- Add the block named **“Static Widget”** from the **Widgets** category.
- Save and view the post/page — you’ll see the static content rendered by PHP.

---

Let me know if you want to extend this README with instructions on styling, attributes, or block variations.
