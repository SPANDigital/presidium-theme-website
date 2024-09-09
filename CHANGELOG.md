# CHANGELOG - presidium-theme-website

## Date
### New Features
### Updates
### Bug Fixes

## 2023-13-03
### Update
- Changed default compendium article description to blank

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

## 2024-01-04
### Bugfixes
- Fix Left Nav carrot error @WiaanBotha https://spandigital.atlassian.net/browse/PRSDM-4854

## 2024-01-10
### Updates
- Added the Github team as the code owners @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-4891

## 2024-01-17
### Updates
- Remove dead CSS classes after decoupling the WYSIWYG Editor. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-3945

## 2024-01-30
### New Feature
- Added a new template to create a searchmap in the format required by the compendium. @kmorake https://spandigital.atlassian.net/browse/PRSDM-4966

## 2024-02-02
### bugfix
- Added compendium output to the list of home outputs @kmorake https://spandigital.atlassian.net/browse/PRSDM-4966

## 2024-02-06
### bugfix
- Updated the searchmap to converts tags to strings @meyerhp https://spandigital.atlassian.net/browse/PRSDM-5056

## 2024-02-16
### bugfix
- Calculate and set width and height for iframes @zelrestemmet https://spandigital.atlassian.net/browse/PRSDM-5061

## 2024-02-20
### bugfix
- Removed deprecated file params @meyerhp https://spandigital.atlassian.net/browse/PRSDM-5150
- Removed the config.js script from the theme @meyerhp https://spandigital.atlassian.net/browse/PRSDM-5079

## 2024-02-26
### bugfix
- Fix iframe shortcode closing issue. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-5153, https://spandigital.atlassian.net/browse/PRSDM-5147, https://spandigital.atlassian.net/browse/PRSDM-5157

## 2024-03-04
### bugfix
- Remove check if the article content is empty from shortcode, which excluded empty articles from the searchmap, preventing them from being added to the database. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-5230

## 2024-03-11
### Updates
- Old fonts were removed and the portal theme was imported on the base docs html file, to make the fonts accessable from the docs. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-5185

## 2024-04-19
### Updates
- On article summary in searchmap, pipe transform html unescape to summary to resolve issue of HTML special characters. @ChristopherBrunsdon https://spandigital.atlassian.net/browse/PRSDM-5538

## 2024-03-04
### Bugfix
- External links require the SASS url function for the SASS loader HUGO uses. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-5893

## 2024-07-05
### Updates
- Font & typography alignments updates. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-5980

## 2024-07-10
### Updates
- Merge release apple branch. @CharlRitterDev & @WiaanBotha

## 2024-07-17
### Updates
- Add resizer back. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-6012

## 2024-07-29
### Features
- Splitting of js & css build files. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-6018

## 2024-08-05
### Bugfix
- Add relative position for pre and code to fix alignment issue with copy button on enterprise. @Zalaras https://spandigital.atlassian.net/browse/PRSDM-6124

## 2024-08-06
### Bugfix
- Update line-height of caret in the left nav menu to better align with link text. @Zalaras https://spandigital.atlassian.net/browse/PRSDM-6128

## 2024-08-14
### Bugfix
- Center navbar header content, fix navbar header image size & improve how navbar determines height. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-6146

## 2024-09-09
### Features
- Remove Roles dropdown and align the sidenav to match latest designs. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-6329
### Bugfix
- Fix sidenav items wrapping on hover. @CharlRitterDev https://spandigital.atlassian.net/browse/PRSDM-6206
