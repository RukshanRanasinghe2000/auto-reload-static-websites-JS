# auto-reload-static-websites-JS
 Auto reload when content changes of static website

## Auto Reload on New Deployment

This project includes a simple script that **automatically reloads the webpage** when a new version of the site is deployed, without requiring user interaction.

### How It Works

The following JavaScript function uses `setInterval()` to periodically check a `version.txt` file. If the content of that file changes (indicating a new version of the site), the page is reloaded automatically.

### How to use
1. Place auto-refresh.js in your project folder, typically in a js or scripts directory.
2. Link it in your HTML file where the auto-refresh behavior is needed.

### Recomendations 
- Do not link this JS file as a critical script in the <head> section, as it can lead to performance issues.
- Instead, link this JS file in the HTML where needed and add the `defer` attribute to the <script> tag to ensure it doesnt block HTML parsing.
  ex:- `<script src="auto-refresh.js"defer></script>`
- This function is usefull when you are developing 
    1. Static Websites (HTML, CSS, JS).
    2. Single Page Applications and Marketing & Product Pages without using frameworks or build tools.


### Benifits 

1. No need for manual page refresh
2. No external libraries or build tools (like npm)
3. Simple, lightweight solution