const { createMacro } = require('babel-plugin-macros');

module.exports = createMacro(requireContextMacro);

function requireContextMacro({ references, state, babel: { types: t } }) {
  if (process.env.NODE_ENV === 'test') {
    references.default.forEach(path =>
      path.parentPath.replaceWith(
        t.callExpression(t.identifier('__requireContext'), [
          t.identifier('__dirname'),
          ...path.parent.arguments,
        ])
      )
    );
  } else {
    references.default.forEach(path =>
      path.parentPath.replaceWith(
        t.callExpression(t.identifier('require.context'), [...path.parent.arguments])
      )
    );
  }
}
