# edscratchczech
Browser plugin for Edison Edscratch with Czech localization. Works for two different versions of Edison Edscratch:

- [Edison Edscratch v3](https://www.edscratchapp.com/v3/)
- [Edison Edscratch v2](https://www.edscratchapp.com/v2/)

## How does it work?

There is a different approach used for each version of Edison Edscratch:

### Edison Edscratch v2

The plugin uses two ways to translate Edison Edscratch into Czech language. The first one (file `translate_dom.js`) looks for HTML elements having specific class attribute set and replaces their content with Czech words. This translates top left navigation with block types. The second one (file `block_rules.json`) replaces few JavaScript files downloaded to the browser as part of the Edison Edscratch application with their copy having texts translated into Czech. This translates the blocks and warning and error messages.

### Edison Edscratch v3

In this version the Edison Edscratch team introduced support of multiple languages. Czech language isn't supported so far and the simple way of replacing few JavaScript files doesn't work anymore. So the plugin replaces a file containing all the translations for supported languages and adds the Czech ones. Then finds the dialog and replaces Portuguese language option with Czech one. Czech language can be selected by user as any other language supported originally.