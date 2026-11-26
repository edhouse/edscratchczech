# edscratchczech
Browser plugin for Edison Edscratch with Czech localization. Works only for version 2 of Edison robot. Version 3 finally supports Czech language itself.

- [Edison Edscratch v2](https://www.edscratchapp.com/v2/)
- [Edison Edscratch v3](https://www.edscratchapp.com/v3/)

## How does it work (Edison Edscratch v2)?

The plugin uses two ways to translate Edison Edscratch into Czech language. The first one (file `translate_dom.js`) looks for HTML elements having specific class attribute set and replaces their content with Czech words. This translates top left navigation with block types. The second one (file `block_rules.json`) replaces few JavaScript files downloaded to the browser as part of the Edison Edscratch application with their copy having texts translated into Czech. This translates the blocks and warning and error messages.