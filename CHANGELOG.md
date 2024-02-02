# CHANGELOG - presidium-theme-website

## Date
### New Features
### Updates
### Bug Fixes

## 2023-012-03
### Updates
- Added a site wide base theme to mermaid diagrams in the Span theme colours

## 2023-01-12
### Bug Fixes
- Fix img shortcode not rendering in the PDF document @Zalaras https://spandigital.atlassian.net/browse/PRSDM-3226

## 2022-12-08
### Updates
- Ensure popup panel symmetry
- Updated Presidium JS @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3102

## 2022-12-05
### Updates
- Updated img shortcode to allow spaces in the attributes fields

## 2022-11-30
### Bug Fixes
- Center align editor-popup-panel text @CharlRitter https://spandigital.atlassian.net/browse/PRSDM-2971
- Fixed the size of the editor modal <p> element @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3035

## 2022-11-23
### Updates
- Ensure entire site's contents wrap correctly

## 2022-11-15
### Updates
- Improve load times by preloading WYSIWYG icons @SamShiels
- Inject the article path into an HTML attribute for use in the React app @SamShiels https://spandigital.atlassian.net/browse/PRSDM-2985
- Preload article create and delete icons @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3005

## 2022-12-08
### Features
- The permalink anchor now automatically copies article links to the clipboard when clicked. Added styles for the "Copied to clipboard" popup @SamShiels https://spandigital.atlassian.net/browse/PRSDM-2965

## 2022-12-08
### Bug Fixes
- Fixed an issue where editor modal overlays would not be on top. @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3155

## 2022-12-19
### Features
- Display all content within a tooltip. @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3158

## 2023-01-09
### Bugfixes
- Fixed a bug where the editor tune menu would swap sides if the page width goes below 651px.

## 2023-01-10
### Performance improvements
- Improved the rendering performance of the theme by making the navigation cachable. @meyerhp https://spandigital.atlassian.net/browse/PRSDM-3209

## 2023-01-11
### Bugfixes
- Fixed a bug where the editor tune menu would swap sides if the page width goes below 651px. @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3223

## 2023-01-12
### Bugfixes
- Placed the article option buttons to the right of the header when the viewport is narrowed. Limit the title width to account for the permalink and article options. @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3224

## 2023-01-20
### Bugfixes
- Added the permalink to the article div so that we can edit landing pages. @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3285

## 2023-02-09
### Bugfixes
- Override Mermaid JS CSS to allow for different edge and node text colours @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3445

## 2023-02-15
### Bugfixes
- Replace multiple dashes in slugs with one. @LantareCode https://spandigital.atlassian.net/browse/PRSDM-3465

## 2023-02-16
### Bugfixes
- Made the article alert popup expandable to make sure text doesn't spill @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3522

## 2023-02-21
### Bugfixes
- Fixed a bug where the WYSIWYG settings menu would disappear when all blocks were deleted @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3487
- Replaced some SVG files with PNGs so that they will show up in the PDF. @LantareCode https://spandigital.atlassian.net/browse/PRSDM-3500

## 2023-02-27
### Bugfixes
- Fixed a bug where image shortcodes in top level `_index.md` files using the `{{< img src="..." >}}` format threw and error, because `.Page.Parent.Parent` does not exist in that file. @CharlRitter https://spandigital.atlassian.net/browse/PRSDM-3563

## 2023-02-28
### Bugfixes
- Fixed this warning `.File.Filename on zero object. Wrap it in if or with: {{ with .File }}{{ .Filename }}{{ end }}` @CharlRitter https://spandigital.atlassian.net/browse/PRSDM-3569

## 2023-03-01
### Bugfixes
- Fixed a bug where the tune menu and popover would be placed off-screen when the viewport is narrow. @SamShiels https://spandigital.atlassian.net/browse/PRSDM-3225

## 2023-03-13
### Bugfixes
- Ensure searchmap is flattened to prevent breaking search upload. @ChrisB https://spandigital.atlassian.net/browse/PRSDM-3618

## 2023-04-26
### Bugfixes
- Fixed the alignment of the Permalink icon. @mpilo-khathwane  https://spandigital.atlassian.net/browse/PRSDM-3818

## 2023-05-09
### Bugfixes
- Fixed the UI Overlap glitch in Export Project as PDF dropdown button. @CharlRitter  https://spandigital.atlassian.net/browse/PRSDM-2952

## 2023-05-10
### Updates
- Add a shortcode for iframes, to lazy load them. @CharlRitter https://spandigital.atlassian.net/browse/PRSDM-3870

## 2023-05-15
### Updates
- Add linting. @CharlRitter

## 2023-05-17
### Updates
- Add a partial for archive table contents. @DustinFischer https://spandigital.atlassian.net/browse/PRSDM-3804

## 2023-05-18
### Updates
- Updated list pages to be able to include archived articles to maintain a minimum number of displayed articles @DustinFischer https://spandigital.atlassian.net/browse/PRSDM-3803

## 2023-05-25
### Bugfixes
- Fixed build error when archive age is set but maximum number of permitted archives to display is unset in site params @DustinFischer https://spandigital.atlassian.net/browse/PRSDM-3940

## 2023-06-05
### Updates
- Added tags to search map. @DustinFischer https://spandigital.atlassian.net/browse/PRSDM-3938

## 2023-08-10
### Bugfixes
- Fixed the dropdown carrot state @meyerhp https://spandigital.atlassian.net/browse/PRSDM-4185
- Fix anchor offset @meyerhp - https://spandigital.atlassian.net/browse/PRSDM-4246

## 2023-09-12
### Bugfixes
- Display menu name if page name is not defined
- Fix styling and layout of external nav links

## 2023-10-09
### Bugfixes
- Remove global font styles @meyerhp

## 2023-10-06
### Improvements
- Optimize page load and reduce layout shift @meyerhp

## 2023-10-27
### Updates
- Fix global h tags in theme affecting enterprise. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-4638

## 2023-11-03
### Bugfixes
- Fix latest theme breaking the chronicle @kmorake https://spandigital.atlassian.net/browse/PRSDM-4681

## 2023-11-03
### Bugfixes
- Revert previous changes and apply fix in chronicle @kmorake https://spandigital.atlassian.net/browse/PRSDM-4681

## 2023-11-21
### Bugfixes
- Add classname to index file content, for editor controls to target it. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-4577

## 2023-11-28
### Updates
- Enable react routing between enterprise pages, while working with the static content. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-4589

## 2024-01-17
### Updates
- Remove dead CSS classes after decoupling the WYSIWYG Editor. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-3945

## 2024-01-30
### New Feature
- Added a new template to create a searchmap in the format required by the compendium. @kmorake https://spandigital.atlassian.net/browse/PRSDM-4966

## 2024-02-02
### bugfix
- Added compendium output to the list of home outputs @kmorake https://spandigital.atlassian.net/browse/PRSDM-4966