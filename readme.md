# HR 👋 | An awesome Bulma + Alpine JS sample app

[![cssninja-discord](https://img.shields.io/discord/785473098069311510?label=join%20us%20on%20discord&color=6944EC)](https://discord.cssninja.io/)

> HR is a sample alpine JS + Bulma app built by [Css Ninja Studio](https://cssninja.io). HR is licensed under the MIT license.

![Screenshot](https://media.cssninja.io/products/hr/product.png "HR landing")

## ✌️ Preview

You can access the demo [here](https://cssninjastudio.github.io/hr/index.html). HR is built with [Bulma](https://bulma.io). Thanks to [Emy Lascan](https://dribbble.com/shots/14820469-wondrhub-Video-Monetization) for the homepage hero inspiration.

## 👌 Usage

The project runs with **npm** and **gulp** and is bundled with [Alpine JS](https://github.com/alpinejs/alpine), [JSON-Server](https://github.com/typicode/json-server)  and [Axios](https://github.com/axios/axios).

1. Install Dev Depedencies

```sh
npm install
```

2. To start development and server and JSON server

```sh
npm run server
```

## 👌 Update template colors

Plex is built with Sass but relies on native CSS variables with HSL for colors. To change the template theme colors:

* Open bulma-css-vars.config.js and change the HSL value of the primary color:

```
primary: hsl(337, 78, 57),
```

* Then, edit the value of the primary, secondary and accent colors inside `src/scss/css-variables/colors.scss`:

```
// primary HSL (#e73c7d) // hsl(337, 78%, 57%)
@include colorHsl("primary", 337, 78%, 57%);

// secondary HSL (#7938f4) // hsl(261, 90%, 59%)
@include colorHsl("secondary", 261, 90%, 59%);

// accent HSL (#3bf486) // hsl(144, 89%, 59%)
@include colorHsl("accent", 144, 89%, 59%);
```

* Once you're done, run the following command in your terminal:

```
npm run build:update-bulma-colors
```

### Note

Changes should be commited to `src/` files only.

### Tools

The template is built with Sass and Gulp build system with these features:

-	Handlebars HTML templates with Panini– Panini is a super simple flat file generator for use with Gulp. It compiles a series of HTML pages using a common layout. These pages can also include HTML partials, external Handlebars helpers, or external data as JSON.
-	Sass compilation, prefixing with Autoprefixer, and JavaScript concatenation
-	Built-in BrowserSync server - Will automatically reload your page when files are changed. It also live-injects CSS changes when you save a Sass file. This task runs continuously. Defaults to localhost.
-	For production builds - CSS compression, JavaScript compression, Image compression and more..


### Additional Resources:
- [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/)
- [Bulma](https://bulma.io/)
- [Alpine JS](https://github.com/alpinejs/alpine)
- [JSON Server](https://github.com/typicode/json-server)
- [Handlebars](http://handlebarsjs.com/)
- [Panini](https://github.com/zurb/panini)
- [Gulp](https://gulpjs.org/getting-started)


## 👍 Features

* Gulp 4 and nodejs 12.13.0 (minimum)
* Bulma 0.9.2
* ES6 support
* Alpine JS
* JSON server running with concurrently
* Homepage
* List page
* Details page


## 🍔 Issues

If you've found an issue or a bug, you can report it in the issues section of this repository. Please try to follow these simple guidelines to report your issue:

* Issue definition
* Expected behaviour
* Actual behaviour
* steps to reproduce
* Already tried fixes (if relevant)

## 🎉 More

You liked HR? Find more premium bulma templates on our [Store](https://cssninja.io/category/all).

Check also our premium [Envato bulma themes](https://cssninja.io/themes).

## 🚀 About Us

Css Ninja is a web design studio. We build handcrafted and polished templates that will give some hype to your startup or to your next project.


