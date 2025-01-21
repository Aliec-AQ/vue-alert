# Alert Plugin for Vue Application

Created by: Amaury Quilliec

This plugin allows you to display alerts in a Vue application. It can be called directly via the methods `$alertSuccess`, `$alertError`, and `$alertWarning`.

## Example Usage

```javascript
this.$alertSuccess('Message de succès');
```

## Installation

To install the plugin, follow these steps:

1. Add the plugin to your project.
2. Register the plugin in your Vue application.

```javascript
import Vue from 'vue';
import AlertPlugin from './path/to/alert-plugin';

Vue.use(AlertPlugin, {
    // Options here (overriding the default options)
    duration: 3000,
    animation: 'slide',
    position: 'top-right'
});
```

## Methods

- **$alertSuccess(message)**: Displays a success alert with the given message.
- **$alertError(message)**: Displays an error alert with the given message.
- **$alertWarning(message)**: Displays a warning alert with the given message.

## Configuration

### Options

- **duration**: The duration for which the alert is displayed (in milliseconds). 
- **animation**: The type of animation for the alert.
    - **slide**: The alert slides in and out. The side (left or right) is determined by the `position` option.
    - **fade**: The alert fades in and out.
    - **flip**: The alert flips in and out.
    - **shake**: The alert shakes in and out.
    - **bounce**: The alert bounces in and out.
    - **zoom**: The alert zooms in and out.

- **position**: The position of the alert on the screen.
    - **top-left**: The alert is displayed in the top-left corner of the screen.
    - **top-right**: The alert is displayed in the top-right corner of the screen.
    - **bottom-left**: The alert is displayed in the bottom-left corner of the screen.
    - **bottom-right**: The alert is displayed in the bottom-right corner of the screen.

- **iconType**: The type of icon to display in the alert.
    - **html**: The icon is an HTML element.
    - **fontawesome**: The icon is a Font Awesome icon. The fontawesome library will be automatically added to the header of the HTML document.
    - **none**: No icon is displayed.  
### Default Options

```javascript
{
    duration: 3000,
    animation: 'slide',
    position: 'top-right',
    iconType: 'none',
}
```