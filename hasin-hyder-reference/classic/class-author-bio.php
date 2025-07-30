<?php

class WidgetDemo_Author_Bio extends WP_Widget {
    function __construct() {
        parent::__construct('widgetdemo_author_bio_widget', 'Author Bio', [
            'description' => "Simple Author Bio Widget"
        ]);
    }

    function widget($args, $instance) {
        echo $args['before_widget'];
        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }
        if (!empty($instance['bio'])) {
            echo '<div class="widgetdemo-author-bio">' . (esc_html($instance['bio'])) . '</div>';
        }
        echo $args['after_widget'];
    }

    function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : '';
        $bio = !empty($instance['bio']) ? $instance['bio'] : '';
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>">Title:</label>
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>">
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('bio'); ?>">Bio:</label>
            <textarea class="widefat" id="<?php echo $this->get_field_id('bio'); ?>" name="<?php echo $this->get_field_name('bio'); ?>"><?php echo esc_textarea($bio); ?></textarea>
        </p>
        <?php
    }

    function update($new_instance, $old_instance) {
        $instance = [];
        $instance['title'] = sanitize_text_field($new_instance['title']);
        $instance['bio'] = sanitize_textarea_field($new_instance['bio']);
        return $instance;
    }
}
