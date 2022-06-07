module.exports = {
  root: true,
  extends: '@react-native-community',
};

{
  "plugins": [
    "jsx-a11y",
    "react",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "generators": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jquery": true
  },
  "globals": {
    "define": true
  },
  "rules": {
    "array-callback-return": 1,
    "camelcase": 2,
    "complexity": 1,
    "consistent-this": [
      1,
      "self"
    ],
    "curly": 2,
    "dot-notation": 1,
    "eqeqeq": 2,
    "func-names": [
      1,
      "never"
    ],
    "func-style": [
      2,
      "expression"
    ],
    "linebreak-style": ["error", "windows"],
    "max-depth": [1, 10],
    "max-len": [
      1,
      {
        "code": 120,
        "ignoreUrls": true
      }
    ],
    "max-nested-callbacks": [
      1,
      3
    ],
    "max-params": [
      1,
      3
    ],
    "max-statements-per-line": [
      1,
      {
        "max": 1
      }
    ],
    "new-cap": 2,
    "newline-after-var": 1,
    "newline-before-return": 1,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-catch-shadow": 2,
    "no-cond-assign": [
      2,
      "except-parens"
    ],
    "no-console": 2,
    "no-continue": 2,
    "no-duplicate-imports": 2,
    "no-else-return": 1,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-floating-decimal": 1,
    "no-global-assign": 2,
    "no-implicit-coercion": 1,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 1,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-mixed-operators": 0,
    "no-multi-str": 1,
    "no-native-reassign": 2,
    "no-negated-condition": 1,
    "no-nested-ternary": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-undef": 2,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-return-await": 1,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-tabs": 1,
    "no-template-curly-in-string": 1,
    "no-throw-literal": 1,
    "no-undef-init": 1,
    "no-undefined": 1,
    "no-underscore-dangle": 1,
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": 1,
    "no-unsafe-negation": 1,
    "no-unused-expressions": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,
    "no-useless-call": 2,
    "no-useless-computed-key": 1,
    "no-useless-constructor": 1,
    "no-useless-concat": 1,
    "no-useless-escape": 1,
    "no-useless-rename": 1,
    "no-useless-return": 1,
    "no-var": 2,
    "no-void": 2,
    "no-warning-comments": 1,
    "no-with": 2,
    "object-shorthand": 1,
    "one-var": [
      2,
      "never"
    ],
    "prefer-arrow-callback": 1,
    "prefer-const": 1,
    "prefer-rest-params": 1,
    "prefer-spread": 1,
    "prefer-template": 1,
    "prettier/prettier": ["error", {
      "printWidth": 120,
      "singleQuote": true
    }],
    "quotes": [
      2,
      "single"
    ],
    "radix": [
      1,
      "as-needed"
    ],
    "require-await": 1,
    "spaced-comment": [
      1,
      "always"
    ],
    "strict": [
      2,
      "safe"
    ],
    "yoda": [
      1,
      "never"
    ],
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-no-duplicate-props": ["warn", { "ignoreCase": true }],
    "react/jsx-no-undef": "warn",
    "react/jsx-pascal-case": ["warn", { "allowAllCaps": true, "ignore": [] }],
    "react/jsx-space-before-closing": "warn",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/no-danger-with-children": "warn",
    "react/no-deprecated": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-is-mounted": "warn",
    "react/react-in-jsx-scope": "error",
    "react/require-render-return": "warn",
    "react/style-prop-object": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-role": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/href-no-hash": "warn",
    "jsx-a11y/html-has-lang": "warn",
    "jsx-a11y/img-has-alt": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "jsx-a11y/label-has-for": "warn",
    "jsx-a11y/lang": "warn",
    "jsx-a11y/mouse-events-have-key-events": "warn",
    "jsx-a11y/no-access-key": "warn",
    "jsx-a11y/no-marquee": "warn",
    "jsx-a11y/no-onchange": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/onclick-has-focus": "warn",
    "jsx-a11y/onclick-has-role": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/scope": "warn",
    "jsx-a11y/tabindex-no-positive": "warn"
  }
}
