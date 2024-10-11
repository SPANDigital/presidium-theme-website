# Presidium Theme

This is the default Hugo theme for Presidium sites, the theme is automatically applied when creating or converting a site using [Presidium-Hugo](https://github.com/SPANDigital/presidium-hugo). 

For more info on Hugo Themes see the official Hugo documentation [here](https://gohugo.io/hugo-modules/theme-components/) 

### Method 1 (Default)
Update the `config.yml`:
```
module:
  imports:
  - path: github.com/spandigital/presidium-theme-website
```

### Method 2 (Development)
1. Clone the theme
2. Inside the folder of your Hugo site, create a themes directory.
3. Create a sym link from your cloned theme to the themes directory
```
ln -s /path/to/presidium-theme-website /path/to/themes
```

4. Update the `config.yml`:
```
module:
  imports:
  - path: presidium-theme-website
```

---

## Conventional Commits

At SPAN we use [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) to make our commit messages more useful.

### Installation

To install the dependencies for the conventional commits, please use:
```bash
make commitlint
```

### Usage

After installation you can use `git cz` and run through the options, it will build your commit message. For example:

```
? Select the type of change that you're committing: refactor: A code change that neither fixes a bug nor adds a feature (formatting, performance improvement, etc)
? Enter JIRA issue (AK-12345) (optional): PRSDM-5026
? What is the scope of this change (e.g. component or file name): (press enter to skip) 
? Write a short, imperative tense description of the change: 
  [------------------------------------------------------------------------] 51 chars left
   refactor: PRSDM-5026 update makefile and readme
? Provide a longer description of the change: (press enter to skip)
 
? Are there any breaking changes? No
? Does this change affect any open issues? No
```

> **Important!** Any use of `breaking changes` needs to be confirmed with the team as this increments the major version number.

### Commitizen

[Commitizen](http://commitizen.github.io/cz-cli/) is a CLI tool that prompts you to fill in the required commit fields at commit time.
After the setup, you should be able to use `git cz` to build your commit messages.

[Commitizen Jira Smart Commit Plugin](https://github.com/anastariqkhan/cz-conventional-changelog-jira-smart-commits) expands to traditional
commitizen prompt to also prompts for a Jira issue and how you would like update the Jira issue. 

### Conventional Commit Intellij Plugin

If you use Intellij IDEA as your IDE, you could install the [Conventional Commit Plugin](https://plugins.jetbrains.com/plugin/13389-conventional-commit), and then
you can build your conventional commit messages directly in the IDE.

### Commit Linting

[Commitlint](https://commitlint.js.org/#/) is used for linting the commit messages on the CI pipeline to ensure that all commit messages adhere to the Conventional Commits 1.0.0 specification.

[Husky](https://typicode.github.io/husky/) is used for a [commit hook](https://commitlint.js.org/guides/local-setup.html#using-a-git-hooks-manager).

---

## Semantic Releases

This repository uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) tool to automate version management and package publishing.

Upon merging into to the main or develop branch, Semantic Release tool will:
- Calculate the new release version based on the commits
- Create a git commit and a git tag for the release
- Create a Release with release notes from the commit messages
- Create and publish the container images

---

## Branching

Please see this [Presidium Git Strategy Miro board](https://miro.com/app/board/uXjVPK0XxiU=/).

In summary:
- `main` ⇾ production
  - Only hotfixes or `develop` get merged into `main`
- `develop`
  - Feature branches and bug fixes are branched from and merged into `develop`
- `feat/<TITLE>`
  - If there is a feature in development it will be on a feature branch

---


## Using Archetypes

Archetypes support is part of Hugo, and is used when a user wants to create new content.
Archetypes make that whole process easier by creating a file (or leaf bundle) with all the mandatory and optional front matter values automatically populated where possible, or otherwise to have place holder content, that the user could then go and update for their respective content needs.

The `hugo new content` command creates a new file in the content directory, using an archetype as a template. 
For example, the following command would use the default template:
```
hugo new content posts/my-first-post.md
```
The command above would create a new file at path `content/posts/my-first-post.md` according to what has been set in the default template.

If you want to use an archetype kind other than the default, then just use the `--kind` flag.
```
hugo new content --kind blog articles/something.md
```

In Presidium, we currently have 2 archetype kinds that you can use:
- article (default)
- blog

[Hugo Archetype Docs](https://gohugo.io/content-management/archetypes/)

> [!IMPORTANT]  
> The archetypes files need to exist inside the module where the `hugo new content` is being called, which in the Presidium context means that the archetype directory needs to be copied into the documentation modules file structure before it can be used.
