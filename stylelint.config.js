module.exports = {
  "extends": [
    "stylelint-config-recommended-scss"
  ],
  "rules": {
    "block-no-empty": null,
    "font-family-no-missing-generic-family-keyword": null,
    "no-descending-specificity": null,
    "comment-empty-line-before": null,
    "at-rule-empty-line-before": null,
    "declaration-empty-line-before": null,
    "selector-type-no-unknown": [
      true,
      { "ignoreTypes": ["_", "x"] }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        "ignorePseudoElements": ["v-deep"]
      }
    ]
  }
}
