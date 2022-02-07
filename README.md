# Presidium Theme

This is the default Hugo theme for Presidium sites, the theme is automatically applied when creating or converting a site using [Presidium-Hugo](https://github.com/SPANDigital/presidium-hugo). 

For more info on Hugo Themes see the official Hugo documentation [here](https://gohugo.io/hugo-modules/theme-components/) 

### Method 1 (Default)
Update your site the `config.yml`:
```
module:
  imports:
  - path: github.com/spandigital/presidium-theme-website
```

### Method 2 (Development)
1. Clone the theme
2. Inside the folder of your Hugo site, create a themes directory.
3. Create sym link from your cloned theme to the themes directory
```
ln -s /path/to/presidium-theme-website /path/to/themes
```

4. Update your site the `config.yml`:
```
module:
  imports:
  - path: presidium-theme-website
```
