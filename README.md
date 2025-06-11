# TagArea for Jcink

This script utilizes the [TagArea](https://github.com/NicketDev/TagArea) library to introduce @-mention/tagging functionality to textareas within Jcink forums. When a user types `@` followed by a name in a post, a dropdown menu will appear with suggestions from the forum's member list, allowing for easy tagging.

## Features

- **Seamless Integration:** Automatically attaches to all standard posting textareas on Jcink forums.
- **Dynamic User Fetching:** Fetches usernames directly from your forum's member list.
- **Smart Tagging:** Supports tagging usernames, even those containing spaces, by enclosing them in brackets (e.g., `@[user name]`).
- **Customizable Display:** Tagged names are highlighted in the editor for better visibility.

## How It Works

The script identifies all `<textarea>` elements used for creating posts (`textarea[name="Post"]`). For each of these, it initializes the `TagArea` library.

When a user initiates a tag by typing `@`, the script sends a request to the forums' member list page. It then parses the HTML response to extract all member names and presents a filtered list of suggestions based on what the user has typed.

## Installation

1.  A pre-built, minified version of the script is available in the `dist/` directory (`dist/index.min.js`).
2.  Upload this script to your Jcink forum's webhost.
3.  Go to your Jcink Admin CP -> Skins & Templates -> Board Wrappers.
4.  Add the following script tag anywhere in your wrappers, preferably at the end of the `<body>` tag. Using `defer` is recommended to avoid blocking page rendering.

```html
<script src="path/to/your/uploaded/index.min.js" defer></script>
```

Replace `path/to/your/uploaded/index.min.js` with the actual URL to the script you uploaded.

## Building from Source

If you wish to modify the script and build it from the source files, follow these steps:

1.  Clone the repository.
2.  Install the dependencies using Bun:
    ```sh
    bun install
    ```
3.  Run the build command:
    ```sh
    bun run build
    ```

This will generate the necessary files in the `dist/` directory.

## Styling

The appearance of the tags and the dropdown menu can be customized using CSS variables. You can set these variables in your own stylesheet to override the default styles.

### Tag Styling

These variables control the appearance of the tags that are rendered in the mirrored element.

| Variable                                  | Default     | Description                               |
| ----------------------------------------- | ----------- | ----------------------------------------- |
| `--tagarea-tag-color`                     | `inherit`   | The text color of the tag.                |
| `--tagarea-tag-background-color`          | `inherit`   | The background color of the tag.          |
| `--tagarea-tag-font-weight`               | `inherit`   | The font weight of the tag.               |
| `--tagarea-tag-font-style`                | `inherit`   | The font style of the tag.                |
| `--tagarea-tag-font-size`                 | `inherit`   | The font size of the tag.                 |
| `--tagarea-tag-font-family`               | `inherit`   | The font family of the tag.               |
| `--tagarea-tag-text-transform`            | `inherit`   | The text transform of the tag.            |
| `--tagarea-tag-text-align`                | `inherit`   | The text align of the tag.                |
| `--tagarea-tag-text-decoration-line`      | `underline` | The text decoration line of the tag.      |
| `--tagarea-tag-text-decoration-color`     | `inherit`   | The text decoration color of the tag.     |
| `--tagarea-tag-text-decoration-style`     | `inherit`   | The text decoration style of the tag.     |
| `--tagarea-tag-text-decoration-thickness` | `inherit`   | The text decoration thickness of the tag. |
| `--tagarea-tag-border`                    | `inherit`   | The border of the tag.                    |
| `--tagarea-tag-border-radius`             | `0`         | The border radius of the tag.             |

### Dropdown Styling

These variables control the appearance of the dropdown menu and its options.

| Variable                                              | Default                         | Description                                   |
| ----------------------------------------------------- | ------------------------------- | --------------------------------------------- |
| `--tagarea-dropdown-min-width`                        | `180px`                         | The minimum width of the dropdown.            |
| `--tagarea-dropdown-background-color`                 | `#fff`                          | The background color of the dropdown.         |
| `--tagarea-dropdown-border-color`                     | `#ccc`                          | The border color of the dropdown.             |
| `--tagarea-dropdown-box-shadow`                       | `0 2px 8px rgba(0, 0, 0, 0.08)` | The box shadow of the dropdown.               |
| `--tagarea-dropdown-padding`                          | `0`                             | The padding of the dropdown.                  |
| `--tagarea-dropdown-max-height`                       | `250px`                         | The maximum height of the dropdown.           |
| `--tagarea-dropdown-font-family`                      | `sans-serif`                    | The font family of the dropdown.              |
| `--tagarea-dropdown-font-size`                        | `1rem`                          | The font size of the dropdown.                |
| `--tagarea-dropdown-color`                            | `#000`                          | The text color of the dropdown.               |
| `--tagarea-dropdown-option-padding`                   | `8px`                           | The padding of the dropdown options.          |
| `--tagarea-dropdown-option-color`                     | `inherit`                       | The text color of the dropdown options.       |
| `--tagarea-dropdown-option-background-color`          | `#fff`                          | The background color of the dropdown options. |
| `--tagarea-dropdown-option-hover-background-color`    | `#f0f4ff`                       | The background color of hovered options.      |
| `--tagarea-dropdown-option-hover-color`               | `inherit`                       | The text color of hovered options.            |
| `--tagarea-dropdown-option-selected-background-color` | `#e0e8ff`                       | The background color of selected options.     |
| `--tagarea-dropdown-option-selected-color`            | `inherit`                       | The text color of selected options.           |
| `--tagarea-dropdown-option-loading-color`             | `#888`                          | The text color of the loading indicator.      |
| `--tagarea-dropdown-option-error-color`               | `#c00`                          | The text color of the error message.          |
| `--tagarea-dropdown-option-empty-color`               | `#888`                          | The text color of the "no results" message.   |
