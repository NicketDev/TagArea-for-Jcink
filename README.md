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
