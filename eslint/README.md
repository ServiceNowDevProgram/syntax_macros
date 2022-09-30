# Inline eslint configuration macros

Macros for manipulating the eslint syntax checking rules to prevent common variable scoping errors.

## Summary

The red and yellow error badges placed on the margin/gutter when mistakes are made are provided by an instance of [eslint](https://eslint.org) running in the browser.

The system wide syntax checking rules are configured via the [glide.ui.syntax_editor.linter.eslint_config property](https://docs.servicenow.com/search?q=glide.ui.syntax_editor.linter.eslint_config).

[ESLint also allows per-file overrides to the syntax checking configuration](https://eslint.org/docs/user-guide/configuring/rules#configuring-rules).

Inline eslint adjustments have several advantages. 
* Configuration travels with the content so IDEs and editors will apply checks as intended without adjusting a local config.
* Dependencies are itemized inline with script content.
* Allows adopting stricter linting incrementally.


## eslint macro

Use the **eslint macro** at the top of any javascript file to enable rules to catch common variable scoping issues and variable usage mistakes.

Enabled Rules:
* [Disallow Undeclared Variables (no-undef)](https://eslint.org/docs/rules/no-undef#disallow-undeclared-variables-no-undef)
* [Disallow Unused Variables (no-unused-vars)](https://eslint.org/docs/rules/no-unused-vars#disallow-unused-variables-no-unused-vars)

## eslintDisableNext macro

Disable the rules enabled by the eslint macro for the next line of code.

```code:javascript
/* eslint-disable-next-line no-undef,no-unused-vars */
answer=false ; // macro adds comment above to prevent lint badges for this line.
```

## eslintDisableLine macro

Disable the rules enabled by the eslint macro for the current line of code.

```code:javascript
answer=false ; // eslint-disable-line no-undef,no-unused-vars
```

## eslintDisableBlock and eslintEnableBlock macros

Used together for a block version of disabling the eslint rules.

```code:javascript
/* eslint-disable no-undef,no-unused-vars */
answer=false;
/* eslint-enable */
```

