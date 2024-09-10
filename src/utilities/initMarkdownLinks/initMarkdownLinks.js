// add target="_blank" to all links contained in the markdown document
// code from: https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer

export default function init_markdown_links(md) {

   // Remember the old renderer if overridden, or proxy to the default renderer.
   var defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
   return self.renderToken(tokens, idx, options)
   }

   md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
      // Add a new `target` attribute, or replace the value of the existing one.
      tokens[idx].attrSet('target', '_blank')

      // Pass the token to the default renderer.
      return defaultRender(tokens, idx, options, env, self);
   }
}
