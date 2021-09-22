# royalprotcol.io

## Set up

From root

-   `yarn` installs packages
-   `gatsby develop` runs app
-   `gatsby clean` delete .cache and public folder

## Dynamic MDX pages

-   `copy any .mdx file into mdx-content/mdx-pages to create dynamic pages` (look at mdx pages for examples).
-   This will create a button on coming soon page and generate a dynamic url for it (royalprotocol.io/"dynamic page title").
-   `change date to change order of buttons ASC`
-   (note) gatsby needs to rebuild for changes to take effect.
-   `src/pages/{mdx.slug}.tsx` is the template that generates the pages. edit to change styles of page

## Dynamic content for MDX components

-   `edit specific component content via root/mdx-content/mdx-component-content folder`

## Dynamic YAML pages

-   `edit yaml-content/yaml-pages/index.yaml` to add pages, the content inside the pages and the styles.

## Dynamic content for YAML components

-   `edit yaml-content/yaml-component-content/.yaml` to change component data.
