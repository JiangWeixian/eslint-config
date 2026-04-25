/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface Rules {
  /**
   * Enforce font-display behavior with Google Fonts.
   * @see https://nextjs.org/docs/messages/google-font-display
   */
  '@next/next/google-font-display'?: Linter.RuleEntry<[]>
  /**
   * Ensure `preconnect` is used with Google Fonts.
   * @see https://nextjs.org/docs/messages/google-font-preconnect
   */
  '@next/next/google-font-preconnect'?: Linter.RuleEntry<[]>
  /**
   * Enforce `id` attribute on `next/script` components with inline content.
   * @see https://nextjs.org/docs/messages/inline-script-id
   */
  '@next/next/inline-script-id'?: Linter.RuleEntry<[]>
  /**
   * Prefer `@next/third-parties/google` when using the inline script for Google Analytics and Tag Manager.
   * @see https://nextjs.org/docs/messages/next-script-for-ga
   */
  '@next/next/next-script-for-ga'?: Linter.RuleEntry<[]>
  /**
   * Prevent assignment to the `module` variable.
   * @see https://nextjs.org/docs/messages/no-assign-module-variable
   */
  '@next/next/no-assign-module-variable'?: Linter.RuleEntry<[]>
  /**
   * Prevent Client Components from being async functions.
   * @see https://nextjs.org/docs/messages/no-async-client-component
   */
  '@next/next/no-async-client-component'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-before-interactive-script-outside-document
   */
  '@next/next/no-before-interactive-script-outside-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent manual stylesheet tags.
   * @see https://nextjs.org/docs/messages/no-css-tags
   */
  '@next/next/no-css-tags'?: Linter.RuleEntry<[]>
  /**
   * Prevent importing `next/document` outside of `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-document-import-in-page
   */
  '@next/next/no-document-import-in-page'?: Linter.RuleEntry<[]>
  /**
   * Prevent duplicate usage of `<Head>` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-duplicate-head
   */
  '@next/next/no-duplicate-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<head>` element.
   * @see https://nextjs.org/docs/messages/no-head-element
   */
  '@next/next/no-head-element'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/head` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-head-import-in-document
   */
  '@next/next/no-head-import-in-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<a>` elements to navigate to internal Next.js pages.
   * @see https://nextjs.org/docs/messages/no-html-link-for-pages
   */
  '@next/next/no-html-link-for-pages'?: Linter.RuleEntry<NextNextNoHtmlLinkForPages>
  /**
   * Prevent usage of `<img>` element due to slower LCP and higher bandwidth.
   * @see https://nextjs.org/docs/messages/no-img-element
   */
  '@next/next/no-img-element'?: Linter.RuleEntry<[]>
  /**
   * Prevent page-only custom fonts.
   * @see https://nextjs.org/docs/messages/no-page-custom-font
   */
  '@next/next/no-page-custom-font'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/script` in `next/head` component.
   * @see https://nextjs.org/docs/messages/no-script-component-in-head
   */
  '@next/next/no-script-component-in-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `styled-jsx` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-styled-jsx-in-document
   */
  '@next/next/no-styled-jsx-in-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent synchronous scripts.
   * @see https://nextjs.org/docs/messages/no-sync-scripts
   */
  '@next/next/no-sync-scripts'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<title>` with `Head` component from `next/document`.
   * @see https://nextjs.org/docs/messages/no-title-in-document-head
   */
  '@next/next/no-title-in-document-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent common typos in Next.js data fetching functions.
   */
  '@next/next/no-typos'?: Linter.RuleEntry<[]>
  /**
   * Prevent duplicate polyfills from Polyfill.io.
   * @see https://nextjs.org/docs/messages/no-unwanted-polyfillio
   */
  '@next/next/no-unwanted-polyfillio'?: Linter.RuleEntry<[]>
  /**
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.style/rules/array-bracket-newline
   */
  '@stylistic/array-bracket-newline'?: Linter.RuleEntry<StylisticArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.style/rules/array-bracket-spacing
   */
  '@stylistic/array-bracket-spacing'?: Linter.RuleEntry<StylisticArrayBracketSpacing>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.style/rules/array-element-newline
   */
  '@stylistic/array-element-newline'?: Linter.RuleEntry<StylisticArrayElementNewline>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.style/rules/arrow-parens
   */
  '@stylistic/arrow-parens'?: Linter.RuleEntry<StylisticArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.style/rules/arrow-spacing
   */
  '@stylistic/arrow-spacing'?: Linter.RuleEntry<StylisticArrowSpacing>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.style/rules/block-spacing
   */
  '@stylistic/block-spacing'?: Linter.RuleEntry<StylisticBlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.style/rules/brace-style
   */
  '@stylistic/brace-style'?: Linter.RuleEntry<StylisticBraceStyle>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.style/rules/comma-dangle
   */
  '@stylistic/comma-dangle'?: Linter.RuleEntry<StylisticCommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.style/rules/comma-spacing
   */
  '@stylistic/comma-spacing'?: Linter.RuleEntry<StylisticCommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.style/rules/comma-style
   */
  '@stylistic/comma-style'?: Linter.RuleEntry<StylisticCommaStyle>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.style/rules/computed-property-spacing
   */
  '@stylistic/computed-property-spacing'?: Linter.RuleEntry<StylisticComputedPropertySpacing>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/curly-newline
   */
  '@stylistic/curly-newline'?: Linter.RuleEntry<StylisticCurlyNewline>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.style/rules/dot-location
   */
  '@stylistic/dot-location'?: Linter.RuleEntry<StylisticDotLocation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.style/rules/eol-last
   */
  '@stylistic/eol-last'?: Linter.RuleEntry<StylisticEolLast>
  /**
   * Enforce consistent line break styles for JSX props
   * @see https://eslint.style/rules/jsx-props-style
   */
  '@stylistic/exp-jsx-props-style'?: Linter.RuleEntry<StylisticExpJsxPropsStyle>
  /**
   * Enforce consistent spacing and line break styles inside brackets.
   * @see https://eslint.style/rules/list-style
   */
  '@stylistic/exp-list-style'?: Linter.RuleEntry<StylisticExpListStyle>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.style/rules/function-call-argument-newline
   */
  '@stylistic/function-call-argument-newline'?: Linter.RuleEntry<StylisticFunctionCallArgumentNewline>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/function-call-spacing
   */
  '@stylistic/function-call-spacing'?: Linter.RuleEntry<StylisticFunctionCallSpacing>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.style/rules/function-paren-newline
   */
  '@stylistic/function-paren-newline'?: Linter.RuleEntry<StylisticFunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.style/rules/generator-star-spacing
   */
  '@stylistic/generator-star-spacing'?: Linter.RuleEntry<StylisticGeneratorStarSpacing>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.style/rules/implicit-arrow-linebreak
   */
  '@stylistic/implicit-arrow-linebreak'?: Linter.RuleEntry<StylisticImplicitArrowLinebreak>
  /**
   * Enforce consistent indentation
   * @see https://eslint.style/rules/indent
   */
  '@stylistic/indent'?: Linter.RuleEntry<StylisticIndent>
  /**
   * Indentation for binary operators
   * @see https://eslint.style/rules/indent-binary-ops
   */
  '@stylistic/indent-binary-ops'?: Linter.RuleEntry<StylisticIndentBinaryOps>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-child-element-spacing
   */
  '@stylistic/jsx-child-element-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce closing bracket location in JSX
   * @see https://eslint.style/rules/jsx-closing-bracket-location
   */
  '@stylistic/jsx-closing-bracket-location'?: Linter.RuleEntry<StylisticJsxClosingBracketLocation>
  /**
   * Enforce closing tag location for multiline JSX
   * @see https://eslint.style/rules/jsx-closing-tag-location
   */
  '@stylistic/jsx-closing-tag-location'?: Linter.RuleEntry<StylisticJsxClosingTagLocation>
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   * @see https://eslint.style/rules/jsx-curly-brace-presence
   */
  '@stylistic/jsx-curly-brace-presence'?: Linter.RuleEntry<StylisticJsxCurlyBracePresence>
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-curly-newline
   */
  '@stylistic/jsx-curly-newline'?: Linter.RuleEntry<StylisticJsxCurlyNewline>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-curly-spacing
   */
  '@stylistic/jsx-curly-spacing'?: Linter.RuleEntry<StylisticJsxCurlySpacing>
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   * @see https://eslint.style/rules/jsx-equals-spacing
   */
  '@stylistic/jsx-equals-spacing'?: Linter.RuleEntry<StylisticJsxEqualsSpacing>
  /**
   * Enforce proper position of the first property in JSX
   * @see https://eslint.style/rules/jsx-first-prop-new-line
   */
  '@stylistic/jsx-first-prop-new-line'?: Linter.RuleEntry<StylisticJsxFirstPropNewLine>
  /**
   * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
   * @see https://eslint.style/rules/jsx-function-call-newline
   */
  '@stylistic/jsx-function-call-newline'?: Linter.RuleEntry<StylisticJsxFunctionCallNewline>
  /**
   * Enforce JSX indentation. Deprecated, use `indent` rule instead.
   * @see https://eslint.style/rules/jsx-indent
   * @deprecated
   */
  '@stylistic/jsx-indent'?: Linter.RuleEntry<StylisticJsxIndent>
  /**
   * Enforce props indentation in JSX
   * @see https://eslint.style/rules/jsx-indent-props
   */
  '@stylistic/jsx-indent-props'?: Linter.RuleEntry<StylisticJsxIndentProps>
  /**
   * Enforce maximum of props on a single line in JSX
   * @see https://eslint.style/rules/jsx-max-props-per-line
   */
  '@stylistic/jsx-max-props-per-line'?: Linter.RuleEntry<StylisticJsxMaxPropsPerLine>
  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see https://eslint.style/rules/jsx-newline
   */
  '@stylistic/jsx-newline'?: Linter.RuleEntry<StylisticJsxNewline>
  /**
   * Require one JSX element per line
   * @see https://eslint.style/rules/jsx-one-expression-per-line
   */
  '@stylistic/jsx-one-expression-per-line'?: Linter.RuleEntry<StylisticJsxOneExpressionPerLine>
  /**
   * Enforce PascalCase for user-defined JSX components
   * @see https://eslint.style/rules/jsx-pascal-case
   */
  '@stylistic/jsx-pascal-case'?: Linter.RuleEntry<StylisticJsxPascalCase>
  /**
   * Disallow multiple spaces between inline JSX props. Deprecated, use `no-multi-spaces` rule instead.
   * @see https://eslint.style/rules/jsx-props-no-multi-spaces
   * @deprecated
   */
  '@stylistic/jsx-props-no-multi-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.style/rules/jsx-quotes
   */
  '@stylistic/jsx-quotes'?: Linter.RuleEntry<StylisticJsxQuotes>
  /**
   * Disallow extra closing tags for components without children
   * @see https://eslint.style/rules/jsx-self-closing-comp
   */
  '@stylistic/jsx-self-closing-comp'?: Linter.RuleEntry<StylisticJsxSelfClosingComp>
  /**
   * Enforce props alphabetical sorting
   * @see https://eslint.style/rules/jsx-sort-props
   * @deprecated
   */
  '@stylistic/jsx-sort-props'?: Linter.RuleEntry<StylisticJsxSortProps>
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   * @see https://eslint.style/rules/jsx-tag-spacing
   */
  '@stylistic/jsx-tag-spacing'?: Linter.RuleEntry<StylisticJsxTagSpacing>
  /**
   * Disallow missing parentheses around multiline JSX
   * @see https://eslint.style/rules/jsx-wrap-multilines
   */
  '@stylistic/jsx-wrap-multilines'?: Linter.RuleEntry<StylisticJsxWrapMultilines>
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces
   * @see https://eslint.style/rules/key-spacing
   */
  '@stylistic/key-spacing'?: Linter.RuleEntry<StylisticKeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.style/rules/keyword-spacing
   */
  '@stylistic/keyword-spacing'?: Linter.RuleEntry<StylisticKeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.style/rules/line-comment-position
   */
  '@stylistic/line-comment-position'?: Linter.RuleEntry<StylisticLineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.style/rules/linebreak-style
   */
  '@stylistic/linebreak-style'?: Linter.RuleEntry<StylisticLinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.style/rules/lines-around-comment
   */
  '@stylistic/lines-around-comment'?: Linter.RuleEntry<StylisticLinesAroundComment>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.style/rules/lines-between-class-members
   */
  '@stylistic/lines-between-class-members'?: Linter.RuleEntry<StylisticLinesBetweenClassMembers>
  /**
   * Enforce a maximum line length
   * @see https://eslint.style/rules/max-len
   */
  '@stylistic/max-len'?: Linter.RuleEntry<StylisticMaxLen>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.style/rules/max-statements-per-line
   */
  '@stylistic/max-statements-per-line'?: Linter.RuleEntry<StylisticMaxStatementsPerLine>
  /**
   * Require a specific member delimiter style for interfaces and type literals
   * @see https://eslint.style/rules/member-delimiter-style
   */
  '@stylistic/member-delimiter-style'?: Linter.RuleEntry<StylisticMemberDelimiterStyle>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.style/rules/multiline-comment-style
   */
  '@stylistic/multiline-comment-style'?: Linter.RuleEntry<StylisticMultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.style/rules/multiline-ternary
   */
  '@stylistic/multiline-ternary'?: Linter.RuleEntry<StylisticMultilineTernary>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.style/rules/new-parens
   */
  '@stylistic/new-parens'?: Linter.RuleEntry<StylisticNewParens>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.style/rules/newline-per-chained-call
   */
  '@stylistic/newline-per-chained-call'?: Linter.RuleEntry<StylisticNewlinePerChainedCall>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.style/rules/no-confusing-arrow
   */
  '@stylistic/no-confusing-arrow'?: Linter.RuleEntry<StylisticNoConfusingArrow>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.style/rules/no-extra-parens
   */
  '@stylistic/no-extra-parens'?: Linter.RuleEntry<StylisticNoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.style/rules/no-extra-semi
   */
  '@stylistic/no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.style/rules/no-floating-decimal
   */
  '@stylistic/no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.style/rules/no-mixed-operators
   */
  '@stylistic/no-mixed-operators'?: Linter.RuleEntry<StylisticNoMixedOperators>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.style/rules/no-mixed-spaces-and-tabs
   */
  '@stylistic/no-mixed-spaces-and-tabs'?: Linter.RuleEntry<StylisticNoMixedSpacesAndTabs>
  /**
   * Disallow multiple spaces
   * @see https://eslint.style/rules/no-multi-spaces
   */
  '@stylistic/no-multi-spaces'?: Linter.RuleEntry<StylisticNoMultiSpaces>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.style/rules/no-multiple-empty-lines
   */
  '@stylistic/no-multiple-empty-lines'?: Linter.RuleEntry<StylisticNoMultipleEmptyLines>
  /**
   * Disallow all tabs
   * @see https://eslint.style/rules/no-tabs
   */
  '@stylistic/no-tabs'?: Linter.RuleEntry<StylisticNoTabs>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.style/rules/no-trailing-spaces
   */
  '@stylistic/no-trailing-spaces'?: Linter.RuleEntry<StylisticNoTrailingSpaces>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.style/rules/no-whitespace-before-property
   */
  '@stylistic/no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.style/rules/nonblock-statement-body-position
   */
  '@stylistic/nonblock-statement-body-position'?: Linter.RuleEntry<StylisticNonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/object-curly-newline
   */
  '@stylistic/object-curly-newline'?: Linter.RuleEntry<StylisticObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.style/rules/object-curly-spacing
   */
  '@stylistic/object-curly-spacing'?: Linter.RuleEntry<StylisticObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.style/rules/object-property-newline
   */
  '@stylistic/object-property-newline'?: Linter.RuleEntry<StylisticObjectPropertyNewline>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.style/rules/one-var-declaration-per-line
   */
  '@stylistic/one-var-declaration-per-line'?: Linter.RuleEntry<StylisticOneVarDeclarationPerLine>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.style/rules/operator-linebreak
   */
  '@stylistic/operator-linebreak'?: Linter.RuleEntry<StylisticOperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.style/rules/padded-blocks
   */
  '@stylistic/padded-blocks'?: Linter.RuleEntry<StylisticPaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.style/rules/padding-line-between-statements
   */
  '@stylistic/padding-line-between-statements'?: Linter.RuleEntry<StylisticPaddingLineBetweenStatements>
  /**
   * Require quotes around object literal, type literal, interfaces and enums property names
   * @see https://eslint.style/rules/quote-props
   */
  '@stylistic/quote-props'?: Linter.RuleEntry<StylisticQuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.style/rules/quotes
   */
  '@stylistic/quotes'?: Linter.RuleEntry<StylisticQuotes>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.style/rules/rest-spread-spacing
   */
  '@stylistic/rest-spread-spacing'?: Linter.RuleEntry<StylisticRestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.style/rules/semi
   */
  '@stylistic/semi'?: Linter.RuleEntry<StylisticSemi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.style/rules/semi-spacing
   */
  '@stylistic/semi-spacing'?: Linter.RuleEntry<StylisticSemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.style/rules/semi-style
   */
  '@stylistic/semi-style'?: Linter.RuleEntry<StylisticSemiStyle>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.style/rules/space-before-blocks
   */
  '@stylistic/space-before-blocks'?: Linter.RuleEntry<StylisticSpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before function parenthesis
   * @see https://eslint.style/rules/space-before-function-paren
   */
  '@stylistic/space-before-function-paren'?: Linter.RuleEntry<StylisticSpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.style/rules/space-in-parens
   */
  '@stylistic/space-in-parens'?: Linter.RuleEntry<StylisticSpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.style/rules/space-infix-ops
   */
  '@stylistic/space-infix-ops'?: Linter.RuleEntry<StylisticSpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.style/rules/space-unary-ops
   */
  '@stylistic/space-unary-ops'?: Linter.RuleEntry<StylisticSpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.style/rules/spaced-comment
   */
  '@stylistic/spaced-comment'?: Linter.RuleEntry<StylisticSpacedComment>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.style/rules/switch-colon-spacing
   */
  '@stylistic/switch-colon-spacing'?: Linter.RuleEntry<StylisticSwitchColonSpacing>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.style/rules/template-curly-spacing
   */
  '@stylistic/template-curly-spacing'?: Linter.RuleEntry<StylisticTemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.style/rules/template-tag-spacing
   */
  '@stylistic/template-tag-spacing'?: Linter.RuleEntry<StylisticTemplateTagSpacing>
  /**
   * Require consistent spacing around type annotations
   * @see https://eslint.style/rules/type-annotation-spacing
   */
  '@stylistic/type-annotation-spacing'?: Linter.RuleEntry<StylisticTypeAnnotationSpacing>
  /**
   * Enforces consistent spacing inside TypeScript type generics
   * @see https://eslint.style/rules/type-generic-spacing
   */
  '@stylistic/type-generic-spacing'?: Linter.RuleEntry<[]>
  /**
   * Expect space before the type declaration in the named tuple
   * @see https://eslint.style/rules/type-named-tuple-spacing
   */
  '@stylistic/type-named-tuple-spacing'?: Linter.RuleEntry<[]>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.style/rules/wrap-iife
   */
  '@stylistic/wrap-iife'?: Linter.RuleEntry<StylisticWrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.style/rules/wrap-regex
   */
  '@stylistic/wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.style/rules/yield-star-spacing
   */
  '@stylistic/yield-star-spacing'?: Linter.RuleEntry<StylisticYieldStarSpacing>
  /**
   * Require that function overload signatures be consecutive
   * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
   */
  '@typescript-eslint/adjacent-overload-signatures'?: Linter.RuleEntry<[]>
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   * @see https://typescript-eslint.io/rules/array-type
   */
  '@typescript-eslint/array-type'?: Linter.RuleEntry<TypescriptEslintArrayType>
  /**
   * Disallow awaiting a value that is not a Thenable
   * @see https://typescript-eslint.io/rules/await-thenable
   */
  '@typescript-eslint/await-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   * @see https://typescript-eslint.io/rules/ban-ts-comment
   */
  '@typescript-eslint/ban-ts-comment'?: Linter.RuleEntry<TypescriptEslintBanTsComment>
  /**
   * Disallow `// tslint:<rule-flag>` comments
   * @see https://typescript-eslint.io/rules/ban-tslint-comment
   */
  '@typescript-eslint/ban-tslint-comment'?: Linter.RuleEntry<[]>
  /**
   * Enforce that literals on classes are exposed in a consistent style
   * @see https://typescript-eslint.io/rules/class-literal-property-style
   */
  '@typescript-eslint/class-literal-property-style'?: Linter.RuleEntry<TypescriptEslintClassLiteralPropertyStyle>
  /**
   * Enforce that class methods utilize `this`
   * @see https://typescript-eslint.io/rules/class-methods-use-this
   */
  '@typescript-eslint/class-methods-use-this'?: Linter.RuleEntry<TypescriptEslintClassMethodsUseThis>
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   * @see https://typescript-eslint.io/rules/consistent-generic-constructors
   */
  '@typescript-eslint/consistent-generic-constructors'?: Linter.RuleEntry<TypescriptEslintConsistentGenericConstructors>
  /**
   * Require or disallow the `Record` type
   * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
   */
  '@typescript-eslint/consistent-indexed-object-style'?: Linter.RuleEntry<TypescriptEslintConsistentIndexedObjectStyle>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://typescript-eslint.io/rules/consistent-return
   */
  '@typescript-eslint/consistent-return'?: Linter.RuleEntry<TypescriptEslintConsistentReturn>
  /**
   * Enforce consistent usage of type assertions
   * @see https://typescript-eslint.io/rules/consistent-type-assertions
   */
  '@typescript-eslint/consistent-type-assertions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeAssertions>
  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   * @see https://typescript-eslint.io/rules/consistent-type-definitions
   */
  '@typescript-eslint/consistent-type-definitions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeDefinitions>
  /**
   * Enforce consistent usage of type exports
   * @see https://typescript-eslint.io/rules/consistent-type-exports
   */
  '@typescript-eslint/consistent-type-exports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeExports>
  /**
   * Enforce consistent usage of type imports
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  '@typescript-eslint/consistent-type-imports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeImports>
  /**
   * Enforce default parameters to be last
   * @see https://typescript-eslint.io/rules/default-param-last
   */
  '@typescript-eslint/default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce dot notation whenever possible
   * @see https://typescript-eslint.io/rules/dot-notation
   */
  '@typescript-eslint/dot-notation'?: Linter.RuleEntry<TypescriptEslintDotNotation>
  /**
   * Require explicit return types on functions and class methods
   * @see https://typescript-eslint.io/rules/explicit-function-return-type
   */
  '@typescript-eslint/explicit-function-return-type'?: Linter.RuleEntry<TypescriptEslintExplicitFunctionReturnType>
  /**
   * Require explicit accessibility modifiers on class properties and methods
   * @see https://typescript-eslint.io/rules/explicit-member-accessibility
   */
  '@typescript-eslint/explicit-member-accessibility'?: Linter.RuleEntry<TypescriptEslintExplicitMemberAccessibility>
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
   */
  '@typescript-eslint/explicit-module-boundary-types'?: Linter.RuleEntry<TypescriptEslintExplicitModuleBoundaryTypes>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://typescript-eslint.io/rules/init-declarations
   */
  '@typescript-eslint/init-declarations'?: Linter.RuleEntry<TypescriptEslintInitDeclarations>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://typescript-eslint.io/rules/max-params
   */
  '@typescript-eslint/max-params'?: Linter.RuleEntry<TypescriptEslintMaxParams>
  /**
   * Require a consistent member declaration order
   * @see https://typescript-eslint.io/rules/member-ordering
   */
  '@typescript-eslint/member-ordering'?: Linter.RuleEntry<TypescriptEslintMemberOrdering>
  /**
   * Enforce using a particular method signature syntax
   * @see https://typescript-eslint.io/rules/method-signature-style
   */
  '@typescript-eslint/method-signature-style'?: Linter.RuleEntry<TypescriptEslintMethodSignatureStyle>
  /**
   * Enforce naming conventions for everything across a codebase
   * @see https://typescript-eslint.io/rules/naming-convention
   */
  '@typescript-eslint/naming-convention'?: Linter.RuleEntry<TypescriptEslintNamingConvention>
  /**
   * Disallow generic `Array` constructors
   * @see https://typescript-eslint.io/rules/no-array-constructor
   */
  '@typescript-eslint/no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `delete` operator on array values
   * @see https://typescript-eslint.io/rules/no-array-delete
   */
  '@typescript-eslint/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
   * @see https://typescript-eslint.io/rules/no-base-to-string
   */
  '@typescript-eslint/no-base-to-string'?: Linter.RuleEntry<TypescriptEslintNoBaseToString>
  /**
   * Disallow non-null assertion in locations that may be confusing
   * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   */
  '@typescript-eslint/no-confusing-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require expressions of type void to appear in statement position
   * @see https://typescript-eslint.io/rules/no-confusing-void-expression
   */
  '@typescript-eslint/no-confusing-void-expression'?: Linter.RuleEntry<TypescriptEslintNoConfusingVoidExpression>
  /**
   * Disallow using code marked as `@deprecated`
   * @see https://typescript-eslint.io/rules/no-deprecated
   */
  '@typescript-eslint/no-deprecated'?: Linter.RuleEntry<TypescriptEslintNoDeprecated>
  /**
   * Disallow duplicate class members
   * @see https://typescript-eslint.io/rules/no-dupe-class-members
   */
  '@typescript-eslint/no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate enum member values
   * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
   */
  '@typescript-eslint/no-duplicate-enum-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate constituents of union or intersection types
   * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
   */
  '@typescript-eslint/no-duplicate-type-constituents'?: Linter.RuleEntry<TypescriptEslintNoDuplicateTypeConstituents>
  /**
   * Disallow using the `delete` operator on computed key expressions
   * @see https://typescript-eslint.io/rules/no-dynamic-delete
   */
  '@typescript-eslint/no-dynamic-delete'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://typescript-eslint.io/rules/no-empty-function
   */
  '@typescript-eslint/no-empty-function'?: Linter.RuleEntry<TypescriptEslintNoEmptyFunction>
  /**
   * Disallow the declaration of empty interfaces
   * @see https://typescript-eslint.io/rules/no-empty-interface
   * @deprecated
   */
  '@typescript-eslint/no-empty-interface'?: Linter.RuleEntry<TypescriptEslintNoEmptyInterface>
  /**
   * Disallow accidentally using the "empty object" type
   * @see https://typescript-eslint.io/rules/no-empty-object-type
   */
  '@typescript-eslint/no-empty-object-type'?: Linter.RuleEntry<TypescriptEslintNoEmptyObjectType>
  /**
   * Disallow the `any` type
   * @see https://typescript-eslint.io/rules/no-explicit-any
   */
  '@typescript-eslint/no-explicit-any'?: Linter.RuleEntry<TypescriptEslintNoExplicitAny>
  /**
   * Disallow extra non-null assertions
   * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
   */
  '@typescript-eslint/no-extra-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes used as namespaces
   * @see https://typescript-eslint.io/rules/no-extraneous-class
   */
  '@typescript-eslint/no-extraneous-class'?: Linter.RuleEntry<TypescriptEslintNoExtraneousClass>
  /**
   * Require Promise-like statements to be handled appropriately
   * @see https://typescript-eslint.io/rules/no-floating-promises
   */
  '@typescript-eslint/no-floating-promises'?: Linter.RuleEntry<TypescriptEslintNoFloatingPromises>
  /**
   * Disallow iterating over an array with a for-in loop
   * @see https://typescript-eslint.io/rules/no-for-in-array
   */
  '@typescript-eslint/no-for-in-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`-like functions
   * @see https://typescript-eslint.io/rules/no-implied-eval
   */
  '@typescript-eslint/no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   * @see https://typescript-eslint.io/rules/no-import-type-side-effects
   */
  '@typescript-eslint/no-import-type-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   * @see https://typescript-eslint.io/rules/no-inferrable-types
   */
  '@typescript-eslint/no-inferrable-types'?: Linter.RuleEntry<TypescriptEslintNoInferrableTypes>
  /**
   * Disallow `this` keywords outside of classes or class-like objects
   * @see https://typescript-eslint.io/rules/no-invalid-this
   */
  '@typescript-eslint/no-invalid-this'?: Linter.RuleEntry<TypescriptEslintNoInvalidThis>
  /**
   * Disallow `void` type outside of generic or return types
   * @see https://typescript-eslint.io/rules/no-invalid-void-type
   */
  '@typescript-eslint/no-invalid-void-type'?: Linter.RuleEntry<TypescriptEslintNoInvalidVoidType>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://typescript-eslint.io/rules/no-loop-func
   */
  '@typescript-eslint/no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://typescript-eslint.io/rules/no-loss-of-precision
   * @deprecated
   */
  '@typescript-eslint/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://typescript-eslint.io/rules/no-magic-numbers
   */
  '@typescript-eslint/no-magic-numbers'?: Linter.RuleEntry<TypescriptEslintNoMagicNumbers>
  /**
   * Disallow the `void` operator except when used to discard a value
   * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
   */
  '@typescript-eslint/no-meaningless-void-operator'?: Linter.RuleEntry<TypescriptEslintNoMeaninglessVoidOperator>
  /**
   * Enforce valid definition of `new` and `constructor`
   * @see https://typescript-eslint.io/rules/no-misused-new
   */
  '@typescript-eslint/no-misused-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow Promises in places not designed to handle them
   * @see https://typescript-eslint.io/rules/no-misused-promises
   */
  '@typescript-eslint/no-misused-promises'?: Linter.RuleEntry<TypescriptEslintNoMisusedPromises>
  /**
   * Disallow using the spread operator when it might cause unexpected behavior
   * @see https://typescript-eslint.io/rules/no-misused-spread
   */
  '@typescript-eslint/no-misused-spread'?: Linter.RuleEntry<TypescriptEslintNoMisusedSpread>
  /**
   * Disallow enums from having both number and string members
   * @see https://typescript-eslint.io/rules/no-mixed-enums
   */
  '@typescript-eslint/no-mixed-enums'?: Linter.RuleEntry<[]>
  /**
   * Disallow TypeScript namespaces
   * @see https://typescript-eslint.io/rules/no-namespace
   */
  '@typescript-eslint/no-namespace'?: Linter.RuleEntry<TypescriptEslintNoNamespace>
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions after an optional chain expression
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions using the `!` postfix operator
   * @see https://typescript-eslint.io/rules/no-non-null-assertion
   */
  '@typescript-eslint/no-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://typescript-eslint.io/rules/no-redeclare
   */
  '@typescript-eslint/no-redeclare'?: Linter.RuleEntry<TypescriptEslintNoRedeclare>
  /**
   * Disallow members of unions and intersections that do nothing or override type information
   * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
   */
  '@typescript-eslint/no-redundant-type-constituents'?: Linter.RuleEntry<[]>
  /**
   * Disallow invocation of `require()`
   * @see https://typescript-eslint.io/rules/no-require-imports
   */
  '@typescript-eslint/no-require-imports'?: Linter.RuleEntry<TypescriptEslintNoRequireImports>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://typescript-eslint.io/rules/no-restricted-imports
   */
  '@typescript-eslint/no-restricted-imports'?: Linter.RuleEntry<TypescriptEslintNoRestrictedImports>
  /**
   * Disallow certain types
   * @see https://typescript-eslint.io/rules/no-restricted-types
   */
  '@typescript-eslint/no-restricted-types'?: Linter.RuleEntry<TypescriptEslintNoRestrictedTypes>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://typescript-eslint.io/rules/no-shadow
   */
  '@typescript-eslint/no-shadow'?: Linter.RuleEntry<TypescriptEslintNoShadow>
  /**
   * Disallow aliasing `this`
   * @see https://typescript-eslint.io/rules/no-this-alias
   */
  '@typescript-eslint/no-this-alias'?: Linter.RuleEntry<TypescriptEslintNoThisAlias>
  /**
   * Disallow type aliases
   * @see https://typescript-eslint.io/rules/no-type-alias
   * @deprecated
   */
  '@typescript-eslint/no-type-alias'?: Linter.RuleEntry<TypescriptEslintNoTypeAlias>
  /**
   * Disallow unnecessary equality comparisons against boolean literals
   * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryBooleanLiteralCompare>
  /**
   * Disallow conditionals where the type is always truthy or always falsy
   * @see https://typescript-eslint.io/rules/no-unnecessary-condition
   */
  '@typescript-eslint/no-unnecessary-condition'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryCondition>
  /**
   * Disallow unnecessary assignment of constructor property parameter
   * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
   */
  '@typescript-eslint/no-unnecessary-parameter-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary namespace qualifiers
   * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
   */
  '@typescript-eslint/no-unnecessary-qualifier'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary template expressions
   * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
   */
  '@typescript-eslint/no-unnecessary-template-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow type arguments that are equal to the default
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
   */
  '@typescript-eslint/no-unnecessary-type-arguments'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that do not change the type of an expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
   */
  '@typescript-eslint/no-unnecessary-type-assertion'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryTypeAssertion>
  /**
   * Disallow unnecessary constraints on generic types
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   */
  '@typescript-eslint/no-unnecessary-type-constraint'?: Linter.RuleEntry<[]>
  /**
   * Disallow conversion idioms when they do not change the type or value of the expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-conversion
   */
  '@typescript-eslint/no-unnecessary-type-conversion'?: Linter.RuleEntry<[]>
  /**
   * Disallow type parameters that aren't used multiple times
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
   */
  '@typescript-eslint/no-unnecessary-type-parameters'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a function with a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-argument
   */
  '@typescript-eslint/no-unsafe-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning a value with type `any` to variables and properties
   * @see https://typescript-eslint.io/rules/no-unsafe-assignment
   */
  '@typescript-eslint/no-unsafe-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-call
   */
  '@typescript-eslint/no-unsafe-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe declaration merging
   * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   */
  '@typescript-eslint/no-unsafe-declaration-merging'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing an enum value with a non-enum value
   * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
   */
  '@typescript-eslint/no-unsafe-enum-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the unsafe built-in Function type
   * @see https://typescript-eslint.io/rules/no-unsafe-function-type
   */
  '@typescript-eslint/no-unsafe-function-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access on a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-member-access
   */
  '@typescript-eslint/no-unsafe-member-access'?: Linter.RuleEntry<TypescriptEslintNoUnsafeMemberAccess>
  /**
   * Disallow returning a value with type `any` from a function
   * @see https://typescript-eslint.io/rules/no-unsafe-return
   */
  '@typescript-eslint/no-unsafe-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that narrow a type
   * @see https://typescript-eslint.io/rules/no-unsafe-type-assertion
   */
  '@typescript-eslint/no-unsafe-type-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require unary negation to take a number
   * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
   */
  '@typescript-eslint/no-unsafe-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused expressions
   * @see https://typescript-eslint.io/rules/no-unused-expressions
   */
  '@typescript-eslint/no-unused-expressions'?: Linter.RuleEntry<TypescriptEslintNoUnusedExpressions>
  /**
   * Disallow unused private class members
   * @see https://typescript-eslint.io/rules/no-unused-private-class-members
   */
  '@typescript-eslint/no-unused-private-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused variables
   * @see https://typescript-eslint.io/rules/no-unused-vars
   */
  '@typescript-eslint/no-unused-vars'?: Linter.RuleEntry<TypescriptEslintNoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://typescript-eslint.io/rules/no-use-before-define
   */
  '@typescript-eslint/no-use-before-define'?: Linter.RuleEntry<TypescriptEslintNoUseBeforeDefine>
  /**
   * Disallow unnecessary constructors
   * @see https://typescript-eslint.io/rules/no-useless-constructor
   */
  '@typescript-eslint/no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow default values that will never be used
   * @see https://typescript-eslint.io/rules/no-useless-default-assignment
   */
  '@typescript-eslint/no-useless-default-assignment'?: Linter.RuleEntry<TypescriptEslintNoUselessDefaultAssignment>
  /**
   * Disallow empty exports that don't change anything in a module file
   * @see https://typescript-eslint.io/rules/no-useless-empty-export
   */
  '@typescript-eslint/no-useless-empty-export'?: Linter.RuleEntry<[]>
  /**
   * Disallow `require` statements except in import statements
   * @see https://typescript-eslint.io/rules/no-var-requires
   * @deprecated
   */
  '@typescript-eslint/no-var-requires'?: Linter.RuleEntry<TypescriptEslintNoVarRequires>
  /**
   * Disallow using confusing built-in primitive class wrappers
   * @see https://typescript-eslint.io/rules/no-wrapper-object-types
   */
  '@typescript-eslint/no-wrapper-object-types'?: Linter.RuleEntry<[]>
  /**
   * Enforce non-null assertions over explicit type assertions
   * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
   */
  '@typescript-eslint/non-nullable-type-assertion-style'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing non-`Error` values as exceptions
   * @see https://typescript-eslint.io/rules/only-throw-error
   */
  '@typescript-eslint/only-throw-error'?: Linter.RuleEntry<TypescriptEslintOnlyThrowError>
  /**
   * Require or disallow parameter properties in class constructors
   * @see https://typescript-eslint.io/rules/parameter-properties
   */
  '@typescript-eslint/parameter-properties'?: Linter.RuleEntry<TypescriptEslintParameterProperties>
  /**
   * Enforce the use of `as const` over literal type
   * @see https://typescript-eslint.io/rules/prefer-as-const
   */
  '@typescript-eslint/prefer-as-const'?: Linter.RuleEntry<[]>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://typescript-eslint.io/rules/prefer-destructuring
   */
  '@typescript-eslint/prefer-destructuring'?: Linter.RuleEntry<TypescriptEslintPreferDestructuring>
  /**
   * Require each enum member value to be explicitly initialized
   * @see https://typescript-eslint.io/rules/prefer-enum-initializers
   */
  '@typescript-eslint/prefer-enum-initializers'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
   * @see https://typescript-eslint.io/rules/prefer-find
   */
  '@typescript-eslint/prefer-find'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   * @see https://typescript-eslint.io/rules/prefer-for-of
   */
  '@typescript-eslint/prefer-for-of'?: Linter.RuleEntry<[]>
  /**
   * Enforce using function types instead of interfaces with call signatures
   * @see https://typescript-eslint.io/rules/prefer-function-type
   */
  '@typescript-eslint/prefer-function-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce `includes` method over `indexOf` method
   * @see https://typescript-eslint.io/rules/prefer-includes
   */
  '@typescript-eslint/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Require all enum members to be literal values
   * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
   */
  '@typescript-eslint/prefer-literal-enum-member'?: Linter.RuleEntry<TypescriptEslintPreferLiteralEnumMember>
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
   */
  '@typescript-eslint/prefer-namespace-keyword'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
   */
  '@typescript-eslint/prefer-nullish-coalescing'?: Linter.RuleEntry<TypescriptEslintPreferNullishCoalescing>
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   * @see https://typescript-eslint.io/rules/prefer-optional-chain
   */
  '@typescript-eslint/prefer-optional-chain'?: Linter.RuleEntry<TypescriptEslintPreferOptionalChain>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
   */
  '@typescript-eslint/prefer-promise-reject-errors'?: Linter.RuleEntry<TypescriptEslintPreferPromiseRejectErrors>
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   * @see https://typescript-eslint.io/rules/prefer-readonly
   */
  '@typescript-eslint/prefer-readonly'?: Linter.RuleEntry<TypescriptEslintPreferReadonly>
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
   */
  '@typescript-eslint/prefer-readonly-parameter-types'?: Linter.RuleEntry<TypescriptEslintPreferReadonlyParameterTypes>
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
   * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
   */
  '@typescript-eslint/prefer-reduce-type-parameter'?: Linter.RuleEntry<[]>
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   * @see https://typescript-eslint.io/rules/prefer-regexp-exec
   */
  '@typescript-eslint/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Enforce that `this` is used when only `this` type is returned
   * @see https://typescript-eslint.io/rules/prefer-return-this-type
   */
  '@typescript-eslint/prefer-return-this-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
   */
  '@typescript-eslint/prefer-string-starts-ends-with'?: Linter.RuleEntry<TypescriptEslintPreferStringStartsEndsWith>
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
   * @deprecated
   */
  '@typescript-eslint/prefer-ts-expect-error'?: Linter.RuleEntry<[]>
  /**
   * Require any function or method that returns a Promise to be marked async
   * @see https://typescript-eslint.io/rules/promise-function-async
   */
  '@typescript-eslint/promise-function-async'?: Linter.RuleEntry<TypescriptEslintPromiseFunctionAsync>
  /**
   * Enforce that `get()` types should be assignable to their equivalent `set()` type
   * @see https://typescript-eslint.io/rules/related-getter-setter-pairs
   */
  '@typescript-eslint/related-getter-setter-pairs'?: Linter.RuleEntry<[]>
  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   * @see https://typescript-eslint.io/rules/require-array-sort-compare
   */
  '@typescript-eslint/require-array-sort-compare'?: Linter.RuleEntry<TypescriptEslintRequireArraySortCompare>
  /**
   * Disallow async functions which do not return promises and have no `await` expression
   * @see https://typescript-eslint.io/rules/require-await
   */
  '@typescript-eslint/require-await'?: Linter.RuleEntry<[]>
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   * @see https://typescript-eslint.io/rules/restrict-plus-operands
   */
  '@typescript-eslint/restrict-plus-operands'?: Linter.RuleEntry<TypescriptEslintRestrictPlusOperands>
  /**
   * Enforce template literal expressions to be of `string` type
   * @see https://typescript-eslint.io/rules/restrict-template-expressions
   */
  '@typescript-eslint/restrict-template-expressions'?: Linter.RuleEntry<TypescriptEslintRestrictTemplateExpressions>
  /**
   * Enforce consistent awaiting of returned promises
   * @see https://typescript-eslint.io/rules/return-await
   */
  '@typescript-eslint/return-await'?: Linter.RuleEntry<TypescriptEslintReturnAwait>
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   * @see https://typescript-eslint.io/rules/sort-type-constituents
   * @deprecated
   */
  '@typescript-eslint/sort-type-constituents'?: Linter.RuleEntry<TypescriptEslintSortTypeConstituents>
  /**
   * Disallow certain types in boolean expressions
   * @see https://typescript-eslint.io/rules/strict-boolean-expressions
   */
  '@typescript-eslint/strict-boolean-expressions'?: Linter.RuleEntry<TypescriptEslintStrictBooleanExpressions>
  /**
   * Disallow passing a value-returning function in a position accepting a void function
   * @see https://typescript-eslint.io/rules/strict-void-return
   */
  '@typescript-eslint/strict-void-return'?: Linter.RuleEntry<TypescriptEslintStrictVoidReturn>
  /**
   * Require switch-case statements to be exhaustive
   * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
   */
  '@typescript-eslint/switch-exhaustiveness-check'?: Linter.RuleEntry<TypescriptEslintSwitchExhaustivenessCheck>
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   * @see https://typescript-eslint.io/rules/triple-slash-reference
   */
  '@typescript-eslint/triple-slash-reference'?: Linter.RuleEntry<TypescriptEslintTripleSlashReference>
  /**
   * Require type annotations in certain places
   * @see https://typescript-eslint.io/rules/typedef
   * @deprecated
   */
  '@typescript-eslint/typedef'?: Linter.RuleEntry<TypescriptEslintTypedef>
  /**
   * Enforce unbound methods are called with their expected scope
   * @see https://typescript-eslint.io/rules/unbound-method
   */
  '@typescript-eslint/unbound-method'?: Linter.RuleEntry<TypescriptEslintUnboundMethod>
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   * @see https://typescript-eslint.io/rules/unified-signatures
   */
  '@typescript-eslint/unified-signatures'?: Linter.RuleEntry<TypescriptEslintUnifiedSignatures>
  /**
   * Enforce typing arguments in Promise rejection callbacks as `unknown`
   * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
   */
  '@typescript-eslint/use-unknown-in-catch-callback-variable'?: Linter.RuleEntry<[]>
  /**
   * require a `eslint-enable` comment for every `eslint-disable` comment
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
   */
  'eslint-comments/disable-enable-pair'?: Linter.RuleEntry<EslintCommentsDisableEnablePair>
  /**
   * disallow a `eslint-enable` comment for multiple `eslint-disable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
   */
  'eslint-comments/no-aggregating-enable'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate `eslint-disable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
   */
  'eslint-comments/no-duplicate-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow `eslint-disable` comments about specific rules
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
   */
  'eslint-comments/no-restricted-disable'?: Linter.RuleEntry<EslintCommentsNoRestrictedDisable>
  /**
   * disallow `eslint-disable` comments without rule names
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
   */
  'eslint-comments/no-unlimited-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow unused `eslint-disable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
   * @deprecated
   */
  'eslint-comments/no-unused-disable'?: Linter.RuleEntry<[]>
  /**
   * disallow unused `eslint-enable` comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
   */
  'eslint-comments/no-unused-enable'?: Linter.RuleEntry<[]>
  /**
   * disallow ESLint directive-comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-use.html
   */
  'eslint-comments/no-use'?: Linter.RuleEntry<EslintCommentsNoUse>
  /**
   * require include descriptions in ESLint directive-comments
   * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html
   */
  'eslint-comments/require-description'?: Linter.RuleEntry<EslintCommentsRequireDescription>
  /**
   * Forbids the assignment of returned, mutated arrays.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/no-assign-mutated-array.md
   */
  'etc/no-assign-mutated-array'?: Linter.RuleEntry<[]>
  /**
   * Forbids commented-out code.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/no-commented-out-code.md
   */
  'etc/no-commented-out-code'?: Linter.RuleEntry<[]>
  /**
   * Forbids the use of `const enum`.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/no-const-enum.md
   */
  'etc/no-const-enum'?: Linter.RuleEntry<EtcNoConstEnum>
  /**
   * Forbids the use of deprecated APIs.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/no-deprecated.md
   */
  'etc/no-deprecated'?: Linter.RuleEntry<EtcNoDeprecated>
  /**
   * Forbids the use of `enum`.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/no-enum.md
   */
  'etc/no-enum'?: Linter.RuleEntry<[]>
  /**
   * Forbids calling `forEach`.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/no-foreach.md
   */
  'etc/no-foreach'?: Linter.RuleEntry<EtcNoForeach>
  /**
   * Forbids implicit `any` error parameters in promise rejections.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/no-implicit-any-catch.md
   */
  'etc/no-implicit-any-catch'?: Linter.RuleEntry<EtcNoImplicitAnyCatch>
  /**
   * Forbids the use of internal APIs.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/no-internal.md
   */
  'etc/no-internal'?: Linter.RuleEntry<EtcNoInternal>
  /**
   * Forbids type parameters without inference sites and type parameters that don't add type safety to declarations.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/no-misused-generics.md
   */
  'etc/no-misused-generics'?: Linter.RuleEntry<[]>
  /**
   * Forbids single-character type parameters.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/no-t.md
   */
  'etc/no-t'?: Linter.RuleEntry<EtcNoT>
  /**
   * Forbids type aliases where interfaces can be used.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/prefer-interface.md
   */
  'etc/prefer-interface'?: Linter.RuleEntry<EtcPreferInterface>
  /**
   * Forbids greater-than comparisons.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/prefer-less-than.md
   */
  'etc/prefer-less-than'?: Linter.RuleEntry<[]>
  /**
   * Forbids throwing - or rejecting with - non-`Error` values.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/throw-error.md
   */
  'etc/throw-error'?: Linter.RuleEntry<[]>
  /**
   * Forbids internal APIs that are not prefixed with underscores.
   * @see https://github.com/cartant/eslint-plugin-etc/tree/main/docs/rules/underscore-internal.md
   */
  'etc/underscore-internal'?: Linter.RuleEntry<[]>
  /**
   * enforce multiple lines for import statements past a certain number of items
   * @see https://github.com/SeinopSys/eslint-plugin-import-newlines
   */
  'import-newlines/enforce'?: Linter.RuleEntry<ImportNewlinesEnforce>
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/consistent-type-specifier-style.md
   */
  'import/consistent-type-specifier-style'?: Linter.RuleEntry<ImportConsistentTypeSpecifierStyle>
  /**
   * Ensure a default export is present, given a default import.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/default.md
   */
  'import/default'?: Linter.RuleEntry<[]>
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/dynamic-import-chunkname.md
   */
  'import/dynamic-import-chunkname'?: Linter.RuleEntry<ImportDynamicImportChunkname>
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/export.md
   */
  'import/export'?: Linter.RuleEntry<[]>
  /**
   * Ensure all exports appear after other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/exports-last.md
   */
  'import/exports-last'?: Linter.RuleEntry<[]>
  /**
   * Ensure consistent use of file extension within the import path.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/extensions.md
   */
  'import/extensions'?: Linter.RuleEntry<ImportExtensions>
  /**
   * Ensure all imports appear before other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/first.md
   */
  'import/first'?: Linter.RuleEntry<ImportFirst>
  /**
   * Prefer named exports to be grouped together in a single export declaration.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/group-exports.md
   */
  'import/group-exports'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `import-x/first`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/imports-first.md
   * @deprecated
   */
  'import/imports-first'?: Linter.RuleEntry<ImportImportsFirst>
  /**
   * Enforce the maximum number of dependencies a module can have.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/max-dependencies.md
   */
  'import/max-dependencies'?: Linter.RuleEntry<ImportMaxDependencies>
  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/named.md
   */
  'import/named'?: Linter.RuleEntry<ImportNamed>
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/namespace.md
   */
  'import/namespace'?: Linter.RuleEntry<ImportNamespace>
  /**
   * Enforce a newline after import statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/newline-after-import.md
   */
  'import/newline-after-import'?: Linter.RuleEntry<ImportNewlineAfterImport>
  /**
   * Forbid import of modules using absolute paths.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-absolute-path.md
   */
  'import/no-absolute-path'?: Linter.RuleEntry<ImportNoAbsolutePath>
  /**
   * Forbid AMD `require` and `define` calls.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-amd.md
   */
  'import/no-amd'?: Linter.RuleEntry<[]>
  /**
   * Forbid anonymous values as default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-anonymous-default-export.md
   */
  'import/no-anonymous-default-export'?: Linter.RuleEntry<ImportNoAnonymousDefaultExport>
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-commonjs.md
   */
  'import/no-commonjs'?: Linter.RuleEntry<ImportNoCommonjs>
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-cycle.md
   */
  'import/no-cycle'?: Linter.RuleEntry<ImportNoCycle>
  /**
   * Forbid default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-default-export.md
   */
  'import/no-default-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-deprecated.md
   */
  'import/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Forbid repeated import of the same module in multiple places.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-duplicates.md
   */
  'import/no-duplicates'?: Linter.RuleEntry<ImportNoDuplicates>
  /**
   * Forbid `require()` calls with expressions.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-dynamic-require.md
   */
  'import/no-dynamic-require'?: Linter.RuleEntry<ImportNoDynamicRequire>
  /**
   * Forbid empty named import blocks.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-empty-named-blocks.md
   */
  'import/no-empty-named-blocks'?: Linter.RuleEntry<[]>
  /**
   * Forbid the use of extraneous packages.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-extraneous-dependencies.md
   */
  'import/no-extraneous-dependencies'?: Linter.RuleEntry<ImportNoExtraneousDependencies>
  /**
   * Forbid import statements with CommonJS module.exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-import-module-exports.md
   */
  'import/no-import-module-exports'?: Linter.RuleEntry<ImportNoImportModuleExports>
  /**
   * Forbid importing the submodules of other modules.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-internal-modules.md
   */
  'import/no-internal-modules'?: Linter.RuleEntry<ImportNoInternalModules>
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-mutable-exports.md
   */
  'import/no-mutable-exports'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as identifier of default export.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-named-as-default.md
   */
  'import/no-named-as-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as property of default export.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-named-as-default-member.md
   */
  'import/no-named-as-default-member'?: Linter.RuleEntry<[]>
  /**
   * Forbid named default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-named-default.md
   */
  'import/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid named exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-named-export.md
   */
  'import/no-named-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-namespace.md
   */
  'import/no-namespace'?: Linter.RuleEntry<ImportNoNamespace>
  /**
   * Forbid Node.js builtin modules.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-nodejs-modules.md
   */
  'import/no-nodejs-modules'?: Linter.RuleEntry<ImportNoNodejsModules>
  /**
   * Forbid importing packages through relative paths.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-relative-packages.md
   */
  'import/no-relative-packages'?: Linter.RuleEntry<ImportNoRelativePackages>
  /**
   * Forbid importing modules from parent directories.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-relative-parent-imports.md
   */
  'import/no-relative-parent-imports'?: Linter.RuleEntry<ImportNoRelativeParentImports>
  /**
   * Forbid importing a default export by a different name.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-rename-default.md
   */
  'import/no-rename-default'?: Linter.RuleEntry<ImportNoRenameDefault>
  /**
   * Enforce which files can be imported in a given folder.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-restricted-paths.md
   */
  'import/no-restricted-paths'?: Linter.RuleEntry<ImportNoRestrictedPaths>
  /**
   * Forbid a module from importing itself.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-self-import.md
   */
  'import/no-self-import'?: Linter.RuleEntry<[]>
  /**
   * Forbid unassigned imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-unassigned-import.md
   */
  'import/no-unassigned-import'?: Linter.RuleEntry<ImportNoUnassignedImport>
  /**
   * Ensure imports point to a file/module that can be resolved.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-unresolved.md
   */
  'import/no-unresolved'?: Linter.RuleEntry<ImportNoUnresolved>
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-unused-modules.md
   */
  'import/no-unused-modules'?: Linter.RuleEntry<ImportNoUnusedModules>
  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-useless-path-segments.md
   */
  'import/no-useless-path-segments'?: Linter.RuleEntry<ImportNoUselessPathSegments>
  /**
   * Forbid webpack loader syntax in imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/no-webpack-loader-syntax.md
   */
  'import/no-webpack-loader-syntax'?: Linter.RuleEntry<[]>
  /**
   * Enforce a convention in module import order.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/order.md
   */
  'import/order'?: Linter.RuleEntry<ImportOrder>
  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/prefer-default-export.md
   */
  'import/prefer-default-export'?: Linter.RuleEntry<ImportPreferDefaultExport>
  /**
   * Enforce using namespace imports for specific modules, like `react`/`react-dom`, etc.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/prefer-namespace-import.md
   */
  'import/prefer-namespace-import'?: Linter.RuleEntry<ImportPreferNamespaceImport>
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.2/docs/rules/unambiguous.md
   */
  'import/unambiguous'?: Linter.RuleEntry<[]>
  /**
   * enforce line breaks after opening and before closing array brackets
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html
   */
  'jsonc/array-bracket-newline'?: Linter.RuleEntry<JsoncArrayBracketNewline>
  /**
   * disallow or enforce spaces inside of brackets
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html
   */
  'jsonc/array-bracket-spacing'?: Linter.RuleEntry<JsoncArrayBracketSpacing>
  /**
   * enforce line breaks between array elements
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html
   */
  'jsonc/array-element-newline'?: Linter.RuleEntry<JsoncArrayElementNewline>
  /**
   * apply jsonc rules similar to your configured ESLint core rules
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html
   */
  'jsonc/auto'?: Linter.RuleEntry<[]>
  /**
   * require or disallow trailing commas
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html
   */
  'jsonc/comma-dangle'?: Linter.RuleEntry<JsoncCommaDangle>
  /**
   * enforce consistent comma style
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html
   */
  'jsonc/comma-style'?: Linter.RuleEntry<JsoncCommaStyle>
  /**
   * enforce consistent indentation
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
   */
  'jsonc/indent'?: Linter.RuleEntry<JsoncIndent>
  /**
   * enforce naming convention to property key names
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-name-casing.html
   */
  'jsonc/key-name-casing'?: Linter.RuleEntry<JsoncKeyNameCasing>
  /**
   * enforce consistent spacing between keys and values in object literal properties
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html
   */
  'jsonc/key-spacing'?: Linter.RuleEntry<JsoncKeySpacing>
  /**
   * disallow BigInt literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html
   */
  'jsonc/no-bigint-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow binary expression
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html
   */
  'jsonc/no-binary-expression'?: Linter.RuleEntry<[]>
  /**
   * disallow binary numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html
   */
  'jsonc/no-binary-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow comments
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html
   */
  'jsonc/no-comments'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate keys in object literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html
   */
  'jsonc/no-dupe-keys'?: Linter.RuleEntry<[]>
  /**
   * disallow escape sequences in identifiers.
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html
   */
  'jsonc/no-escape-sequence-in-identifier'?: Linter.RuleEntry<[]>
  /**
   * disallow leading or trailing decimal points in numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html
   */
  'jsonc/no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * disallow hexadecimal numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html
   */
  'jsonc/no-hexadecimal-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow Infinity
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html
   */
  'jsonc/no-infinity'?: Linter.RuleEntry<[]>
  /**
   * disallow irregular whitespace
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html
   */
  'jsonc/no-irregular-whitespace'?: Linter.RuleEntry<JsoncNoIrregularWhitespace>
  /**
   * disallow multiline strings
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html
   */
  'jsonc/no-multi-str'?: Linter.RuleEntry<[]>
  /**
   * disallow NaN
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html
   */
  'jsonc/no-nan'?: Linter.RuleEntry<[]>
  /**
   * disallow number property keys
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html
   */
  'jsonc/no-number-props'?: Linter.RuleEntry<[]>
  /**
   * disallow numeric separators
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html
   */
  'jsonc/no-numeric-separators'?: Linter.RuleEntry<[]>
  /**
   * disallow legacy octal literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html
   */
  'jsonc/no-octal'?: Linter.RuleEntry<[]>
  /**
   * disallow octal escape sequences in string literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html
   */
  'jsonc/no-octal-escape'?: Linter.RuleEntry<[]>
  /**
   * disallow octal numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html
   */
  'jsonc/no-octal-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow parentheses around the expression
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html
   */
  'jsonc/no-parenthesized'?: Linter.RuleEntry<[]>
  /**
   * disallow plus sign
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html
   */
  'jsonc/no-plus-sign'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html
   */
  'jsonc/no-regexp-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow sparse arrays
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html
   */
  'jsonc/no-sparse-arrays'?: Linter.RuleEntry<[]>
  /**
   * disallow template literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html
   */
  'jsonc/no-template-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow `undefined`
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html
   */
  'jsonc/no-undefined-value'?: Linter.RuleEntry<[]>
  /**
   * disallow Unicode code point escape sequences.
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html
   */
  'jsonc/no-unicode-codepoint-escapes'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary escape usage
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html
   */
  'jsonc/no-useless-escape'?: Linter.RuleEntry<JsoncNoUselessEscape>
  /**
   * enforce consistent line breaks inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html
   */
  'jsonc/object-curly-newline'?: Linter.RuleEntry<JsoncObjectCurlyNewline>
  /**
   * enforce consistent spacing inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html
   */
  'jsonc/object-curly-spacing'?: Linter.RuleEntry<JsoncObjectCurlySpacing>
  /**
   * enforce placing object properties on separate lines
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html
   */
  'jsonc/object-property-newline'?: Linter.RuleEntry<JsoncObjectPropertyNewline>
  /**
   * require quotes around object literal property names
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html
   */
  'jsonc/quote-props'?: Linter.RuleEntry<JsoncQuoteProps>
  /**
   * enforce use of double or single quotes
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html
   */
  'jsonc/quotes'?: Linter.RuleEntry<JsoncQuotes>
  /**
   * require array values to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html
   */
  'jsonc/sort-array-values'?: Linter.RuleEntry<JsoncSortArrayValues>
  /**
   * require object keys to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
   */
  'jsonc/sort-keys'?: Linter.RuleEntry<JsoncSortKeys>
  /**
   * disallow spaces after unary operators
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html
   */
  'jsonc/space-unary-ops'?: Linter.RuleEntry<JsoncSpaceUnaryOps>
  /**
   * disallow invalid number for JSON
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html
   */
  'jsonc/valid-json-number'?: Linter.RuleEntry<[]>
  /**
   * disallow parsing errors in Vue custom blocks
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html
   */
  'jsonc/vue-custom-block/no-parsing-error'?: Linter.RuleEntry<[]>
  /**
   * Require languages for fenced code blocks
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/fenced-code-language.md
   */
  'markdown/fenced-code-language'?: Linter.RuleEntry<MarkdownFencedCodeLanguage>
  /**
   * Require or disallow metadata for fenced code blocks
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/fenced-code-meta.md
   */
  'markdown/fenced-code-meta'?: Linter.RuleEntry<MarkdownFencedCodeMeta>
  /**
   * Enforce heading levels increment by one
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/heading-increment.md
   */
  'markdown/heading-increment'?: Linter.RuleEntry<MarkdownHeadingIncrement>
  /**
   * Disallow bare URLs
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-bare-urls.md
   */
  'markdown/no-bare-urls'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate definitions
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-definitions.md
   */
  'markdown/no-duplicate-definitions'?: Linter.RuleEntry<MarkdownNoDuplicateDefinitions>
  /**
   * Disallow duplicate headings in the same document
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-headings.md
   */
  'markdown/no-duplicate-headings'?: Linter.RuleEntry<MarkdownNoDuplicateHeadings>
  /**
   * Disallow empty definitions
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-definitions.md
   */
  'markdown/no-empty-definitions'?: Linter.RuleEntry<MarkdownNoEmptyDefinitions>
  /**
   * Disallow empty images
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-images.md
   */
  'markdown/no-empty-images'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty links
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-links.md
   */
  'markdown/no-empty-links'?: Linter.RuleEntry<[]>
  /**
   * Disallow HTML tags
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-html.md
   */
  'markdown/no-html'?: Linter.RuleEntry<MarkdownNoHtml>
  /**
   * Disallow invalid label references
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-invalid-label-refs.md
   */
  'markdown/no-invalid-label-refs'?: Linter.RuleEntry<[]>
  /**
   * Disallow headings without a space after the hash characters
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-atx-heading-space.md
   */
  'markdown/no-missing-atx-heading-space'?: Linter.RuleEntry<MarkdownNoMissingAtxHeadingSpace>
  /**
   * Disallow missing label references
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-label-refs.md
   */
  'markdown/no-missing-label-refs'?: Linter.RuleEntry<MarkdownNoMissingLabelRefs>
  /**
   * Disallow link fragments that do not reference valid headings
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-link-fragments.md
   */
  'markdown/no-missing-link-fragments'?: Linter.RuleEntry<MarkdownNoMissingLinkFragments>
  /**
   * Disallow multiple H1 headings in the same document
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-multiple-h1.md
   */
  'markdown/no-multiple-h1'?: Linter.RuleEntry<MarkdownNoMultipleH1>
  /**
   * Disallow URLs that match defined reference identifiers
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-reference-like-urls.md
   */
  'markdown/no-reference-like-urls'?: Linter.RuleEntry<[]>
  /**
   * Disallow reversed link and image syntax
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-reversed-media-syntax.md
   */
  'markdown/no-reversed-media-syntax'?: Linter.RuleEntry<[]>
  /**
   * Disallow spaces around emphasis markers
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-space-in-emphasis.md
   */
  'markdown/no-space-in-emphasis'?: Linter.RuleEntry<MarkdownNoSpaceInEmphasis>
  /**
   * Disallow unused definitions
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-unused-definitions.md
   */
  'markdown/no-unused-definitions'?: Linter.RuleEntry<MarkdownNoUnusedDefinitions>
  /**
   * Require alternative text for images
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/require-alt-text.md
   */
  'markdown/require-alt-text'?: Linter.RuleEntry<[]>
  /**
   * Disallow data rows in a GitHub Flavored Markdown table from having more cells than the header row
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/table-column-count.md
   */
  'markdown/table-column-count'?: Linter.RuleEntry<MarkdownTableColumnCount>
  /**
   * require `return` statements after callbacks
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/callback-return.md
   */
  'n/callback-return'?: Linter.RuleEntry<NCallbackReturn>
  /**
   * enforce either `module.exports` or `exports`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/exports-style.md
   */
  'n/exports-style'?: Linter.RuleEntry<NExportsStyle>
  /**
   * enforce the style of file extensions in `import` declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/file-extension-in-import.md
   */
  'n/file-extension-in-import'?: Linter.RuleEntry<NFileExtensionInImport>
  /**
   * require `require()` calls to be placed at top-level module scope
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md
   */
  'n/global-require'?: Linter.RuleEntry<[]>
  /**
   * require error handling in callbacks
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md
   */
  'n/handle-callback-err'?: Linter.RuleEntry<NHandleCallbackErr>
  /**
   * require correct usage of hashbang
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
   */
  'n/hashbang'?: Linter.RuleEntry<NHashbang>
  /**
   * enforce Node.js-style error-first callback pattern is followed
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md
   */
  'n/no-callback-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated APIs
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md
   */
  'n/no-deprecated-api'?: Linter.RuleEntry<NNoDeprecatedApi>
  /**
   * disallow the assignment to `exports`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md
   */
  'n/no-exports-assign'?: Linter.RuleEntry<[]>
  /**
   * disallow `import` declarations which import extraneous modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md
   */
  'n/no-extraneous-import'?: Linter.RuleEntry<NNoExtraneousImport>
  /**
   * disallow `require()` expressions which import extraneous modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md
   */
  'n/no-extraneous-require'?: Linter.RuleEntry<NNoExtraneousRequire>
  /**
   * disallow third-party modules which are hiding core modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-hide-core-modules.md
   * @deprecated
   */
  'n/no-hide-core-modules'?: Linter.RuleEntry<NNoHideCoreModules>
  /**
   * disallow `import` declarations which import missing modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md
   */
  'n/no-missing-import'?: Linter.RuleEntry<NNoMissingImport>
  /**
   * disallow `require()` expressions which import missing modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md
   */
  'n/no-missing-require'?: Linter.RuleEntry<NNoMissingRequire>
  /**
   * disallow `require` calls to be mixed with regular variable declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md
   */
  'n/no-mixed-requires'?: Linter.RuleEntry<NNoMixedRequires>
  /**
   * disallow `new` operators with calls to `require`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md
   */
  'n/no-new-require'?: Linter.RuleEntry<[]>
  /**
   * disallow string concatenation with `__dirname` and `__filename`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md
   */
  'n/no-path-concat'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of `process.env`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md
   */
  'n/no-process-env'?: Linter.RuleEntry<NNoProcessEnv>
  /**
   * disallow the use of `process.exit()`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md
   */
  'n/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * disallow specified modules when loaded by `import` declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-import.md
   */
  'n/no-restricted-import'?: Linter.RuleEntry<NNoRestrictedImport>
  /**
   * disallow specified modules when loaded by `require`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-require.md
   */
  'n/no-restricted-require'?: Linter.RuleEntry<NNoRestrictedRequire>
  /**
   * disallow synchronous methods
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md
   */
  'n/no-sync'?: Linter.RuleEntry<NNoSync>
  /**
   * disallow top-level `await` in published modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-top-level-await.md
   */
  'n/no-top-level-await'?: Linter.RuleEntry<NNoTopLevelAwait>
  /**
   * disallow `bin` files that npm ignores
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md
   */
  'n/no-unpublished-bin'?: Linter.RuleEntry<NNoUnpublishedBin>
  /**
   * disallow `import` declarations which import private modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md
   */
  'n/no-unpublished-import'?: Linter.RuleEntry<NNoUnpublishedImport>
  /**
   * disallow `require()` expressions which import private modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md
   */
  'n/no-unpublished-require'?: Linter.RuleEntry<NNoUnpublishedRequire>
  /**
   * disallow unsupported ECMAScript built-ins on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md
   */
  'n/no-unsupported-features/es-builtins'?: Linter.RuleEntry<NNoUnsupportedFeaturesEsBuiltins>
  /**
   * disallow unsupported ECMAScript syntax on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md
   */
  'n/no-unsupported-features/es-syntax'?: Linter.RuleEntry<NNoUnsupportedFeaturesEsSyntax>
  /**
   * disallow unsupported Node.js built-in APIs on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md
   */
  'n/no-unsupported-features/node-builtins'?: Linter.RuleEntry<NNoUnsupportedFeaturesNodeBuiltins>
  /**
   * enforce either `Buffer` or `require("buffer").Buffer`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/buffer.md
   */
  'n/prefer-global/buffer'?: Linter.RuleEntry<NPreferGlobalBuffer>
  /**
   * enforce either `console` or `require("console")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/console.md
   */
  'n/prefer-global/console'?: Linter.RuleEntry<NPreferGlobalConsole>
  /**
   * enforce either `crypto` or `require("crypto").webcrypto`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/crypto.md
   */
  'n/prefer-global/crypto'?: Linter.RuleEntry<NPreferGlobalCrypto>
  /**
   * enforce either `process` or `require("process")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md
   */
  'n/prefer-global/process'?: Linter.RuleEntry<NPreferGlobalProcess>
  /**
   * enforce either `TextDecoder` or `require("util").TextDecoder`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-decoder.md
   */
  'n/prefer-global/text-decoder'?: Linter.RuleEntry<NPreferGlobalTextDecoder>
  /**
   * enforce either `TextEncoder` or `require("util").TextEncoder`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-encoder.md
   */
  'n/prefer-global/text-encoder'?: Linter.RuleEntry<NPreferGlobalTextEncoder>
  /**
   * enforce either global timer functions or `require("timers")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/timers.md
   */
  'n/prefer-global/timers'?: Linter.RuleEntry<NPreferGlobalTimers>
  /**
   * enforce either `URL` or `require("url").URL`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url.md
   */
  'n/prefer-global/url'?: Linter.RuleEntry<NPreferGlobalUrl>
  /**
   * enforce either `URLSearchParams` or `require("url").URLSearchParams`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md
   */
  'n/prefer-global/url-search-params'?: Linter.RuleEntry<NPreferGlobalUrlSearchParams>
  /**
   * enforce using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md
   */
  'n/prefer-node-protocol'?: Linter.RuleEntry<NPreferNodeProtocol>
  /**
   * enforce `require("dns").promises`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/dns.md
   */
  'n/prefer-promises/dns'?: Linter.RuleEntry<[]>
  /**
   * enforce `require("fs").promises`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md
   */
  'n/prefer-promises/fs'?: Linter.RuleEntry<[]>
  /**
   * require that `process.exit()` expressions use the same code path as `throw`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md
   */
  'n/process-exit-as-throw'?: Linter.RuleEntry<[]>
  /**
   * require correct usage of hashbang
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
   * @deprecated
   */
  'n/shebang'?: Linter.RuleEntry<NShebang>
  'progress/activate'?: Linter.RuleEntry<[]>
  /**
   * Require returning inside each `then()` to create readable and reusable Promise chains.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md
   */
  'promise/always-return'?: Linter.RuleEntry<PromiseAlwaysReturn>
  /**
   * Disallow creating `new` promises outside of utility libs (use [util.promisify][] instead).
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md
   */
  'promise/avoid-new'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `catch()` on un-returned promises.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md
   */
  'promise/catch-or-return'?: Linter.RuleEntry<PromiseCatchOrReturn>
  /**
   * Disallow calling `cb()` inside of a `then()` (use [util.callbackify][] instead).
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md
   */
  'promise/no-callback-in-promise'?: Linter.RuleEntry<PromiseNoCallbackInPromise>
  /**
   * Disallow creating new promises with paths that resolve multiple times.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md
   */
  'promise/no-multiple-resolved'?: Linter.RuleEntry<[]>
  /**
   * Require creating a `Promise` constructor before using it in an ES5 environment.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md
   */
  'promise/no-native'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested `then()` or `catch()` statements.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md
   */
  'promise/no-nesting'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling `new` on a Promise static method.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md
   */
  'promise/no-new-statics'?: Linter.RuleEntry<[]>
  /**
   * Disallow using promises inside of callbacks.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md
   */
  'promise/no-promise-in-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallow return statements in `finally()`.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md
   */
  'promise/no-return-in-finally'?: Linter.RuleEntry<[]>
  /**
   * Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md
   */
  'promise/no-return-wrap'?: Linter.RuleEntry<PromiseNoReturnWrap>
  /**
   * Enforce consistent param names and ordering when creating new promises.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md
   */
  'promise/param-names'?: Linter.RuleEntry<PromiseParamNames>
  /**
   * Prefer `async`/`await` to the callback pattern.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md
   */
  'promise/prefer-await-to-callbacks'?: Linter.RuleEntry<[]>
  /**
   * Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md
   */
  'promise/prefer-await-to-then'?: Linter.RuleEntry<PromisePreferAwaitToThen>
  /**
   * Prefer `catch` to `then(a, b)`/`then(null, b)` for handling errors.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-catch.md
   */
  'promise/prefer-catch'?: Linter.RuleEntry<[]>
  /**
   * Disallow use of non-standard Promise static methods.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/spec-only.md
   */
  'promise/spec-only'?: Linter.RuleEntry<PromiseSpecOnly>
  /**
   * Enforces the proper number of arguments are passed to Promise functions.
   * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md
   */
  'promise/valid-params'?: Linter.RuleEntry<PromiseValidParams>
  /**
   * Disallows higher order functions that define components or hooks inside them.
   * @see https://eslint-react.xyz/docs/rules/component-hook-factories
   */
  'react-dom/component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  'react-dom/dom-no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML' and 'children' at the same time.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  'react-dom/dom-no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'findDOMNode'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  'react-dom/dom-no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'flushSync'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-flush-sync
   */
  'react-dom/dom-no-flush-sync'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.hydrate()' with 'hydrateRoot()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-hydrate
   */
  'react-dom/dom-no-hydrate'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'type' attribute for 'button' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  'react-dom/dom-no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'sandbox' attribute for 'iframe' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  'react-dom/dom-no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.render()' with 'createRoot(node).render()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render
   */
  'react-dom/dom-no-render'?: Linter.RuleEntry<[]>
  /**
   * Disallows the return value of 'ReactDOM.render'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  'react-dom/dom-no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'javascript:' URLs as attribute values.
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  'react-dom/dom-no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of string style prop in JSX. Use an object instead.
   * @see https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
   */
  'react-dom/dom-no-string-style-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows unknown 'DOM' properties.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  'react-dom/dom-no-unknown-property'?: Linter.RuleEntry<ReactDomDomNoUnknownProperty>
  /**
   * Enforces that the 'sandbox' attribute for 'iframe' elements is not set to unsafe combinations.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  'react-dom/dom-no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'target="_blank"' without 'rel="noreferrer noopener"'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  'react-dom/dom-no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useFormState' with 'useActionState'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-use-form-state
   */
  'react-dom/dom-no-use-form-state'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'children' in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react-dom/dom-no-void-elements-with-children'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React DOM via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/dom-prefer-namespace-import
   */
  'react-dom/dom-prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react-dom/error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-dom/exhaustive-deps'?: Linter.RuleEntry<ReactDomExhaustiveDeps>
  /**
   * Validates against mutating props, state, and other values that are immutable.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react-dom/immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop
   */
  'react-dom/jsx-no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop when children are also passed as nested content.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop-with-children
   */
  'react-dom/jsx-no-children-prop-with-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents comment strings from being accidentally inserted into a JSX element's text nodes.
   * @see https://eslint-react.xyz/docs/rules/no-comment-textnodes
   */
  'react-dom/jsx-no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Prevent patterns that cause deoptimization when using the automatic JSX runtime.
   * @see https://eslint-react.xyz/docs/rules/no-key-after-spread
   */
  'react-dom/jsx-no-key-after-spread'?: Linter.RuleEntry<[]>
  /**
   * Catches `$` before `{expr}` in JSX — typically from template literal `${expr}` being copy-pasted into JSX without removing the `$`. The `$` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-dollar
   */
  'react-dom/jsx-no-leaked-dollar'?: Linter.RuleEntry<[]>
  /**
   * Catches `;` at the start of JSX text nodes — typically from accidentally placing a statement-ending `;` inside JSX. The `;` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-semicolon
   */
  'react-dom/jsx-no-leaked-semicolon'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX namespace syntax, as React does not support them.
   * @see https://eslint-react.xyz/docs/rules/no-namespace
   */
  'react-dom/jsx-no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Disallows useless fragment elements.
   * @see https://eslint-react.xyz/docs/rules/no-useless-fragment
   */
  'react-dom/jsx-no-useless-fragment'?: Linter.RuleEntry<ReactDomJsxNoUselessFragment>
  /**
   * Enforces the context name to be a valid component name with the suffix 'Context'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-context-name
   */
  'react-dom/naming-convention-context-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useId' calls to be either 'id' or end with 'Id'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-id-name
   */
  'react-dom/naming-convention-id-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useRef' calls to be either 'ref' or end with 'Ref'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-ref-name
   */
  'react-dom/naming-convention-ref-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react-dom/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react-dom/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react-dom/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react-dom/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react-dom/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react-dom/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react-dom/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react-dom/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react-dom/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react-dom/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react-dom/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react-dom/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react-dom/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react-dom/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react-dom/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react-dom/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react-dom/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react-dom/no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react-dom/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react-dom/no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react-dom/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react-dom/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react-dom/no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react-dom/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react-dom/no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react-dom/no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react-dom/no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react-dom/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react-dom/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react-dom/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react-dom/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
   */
  'react-dom/no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
   */
  'react-dom/no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react-dom/no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react-dom/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react-dom/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react-dom/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react-dom/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react-dom/no-unstable-default-props'?: Linter.RuleEntry<ReactDomNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react-dom/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react-dom/no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react-dom/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react-dom/no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react-dom/prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-namespace-import
   */
  'react-dom/prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react-dom/purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react-dom/refs'?: Linter.RuleEntry<[]>
  /**
   * Validates and transforms React Client/Server Function definitions.
   * @see https://eslint-react.xyz/docs/rules/function-definition
   */
  'react-dom/rsc-function-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react-dom/rules-of-hooks'?: Linter.RuleEntry<ReactDomRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react-dom/set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react-dom/set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react-dom/unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react-dom/use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react-dom/use-state'?: Linter.RuleEntry<ReactDomUseState>
  /**
   * Enforces that every 'addEventListener' in a component or custom hook has a corresponding 'removeEventListener'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
   */
  'react-dom/web-api-no-leaked-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setInterval' in a component or custom hook has a corresponding 'clearInterval'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
   */
  'react-dom/web-api-no-leaked-interval'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'ResizeObserver' created in a component or custom hook has a corresponding 'ResizeObserver.disconnect()'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
   */
  'react-dom/web-api-no-leaked-resize-observer'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setTimeout' in a component or custom hook has a corresponding 'clearTimeout'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
   */
  'react-dom/web-api-no-leaked-timeout'?: Linter.RuleEntry<[]>
  /**
   * Disallows higher order functions that define components or hooks inside them.
   * @see https://eslint-react.xyz/docs/rules/component-hook-factories
   */
  'react-dom/x-component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react-dom/x-error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-dom/x-exhaustive-deps'?: Linter.RuleEntry<ReactDomXExhaustiveDeps>
  /**
   * Validates against mutating props, state, and other values that are immutable.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react-dom/x-immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react-dom/x-no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react-dom/x-no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react-dom/x-no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react-dom/x-no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react-dom/x-no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react-dom/x-no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react-dom/x-no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react-dom/x-no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react-dom/x-no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react-dom/x-no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react-dom/x-no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react-dom/x-no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react-dom/x-no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react-dom/x-no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react-dom/x-no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react-dom/x-no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react-dom/x-no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react-dom/x-no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react-dom/x-no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react-dom/x-no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react-dom/x-no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react-dom/x-no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react-dom/x-no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react-dom/x-no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react-dom/x-no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react-dom/x-no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react-dom/x-no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react-dom/x-no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react-dom/x-no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react-dom/x-no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react-dom/x-no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
   */
  'react-dom/x-no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
   */
  'react-dom/x-no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react-dom/x-no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react-dom/x-no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react-dom/x-no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react-dom/x-no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react-dom/x-no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react-dom/x-no-unstable-default-props'?: Linter.RuleEntry<ReactDomXNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react-dom/x-no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react-dom/x-no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react-dom/x-no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react-dom/x-no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react-dom/x-prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-namespace-import
   */
  'react-dom/x-prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react-dom/x-purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react-dom/x-refs'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react-dom/x-rules-of-hooks'?: Linter.RuleEntry<ReactDomXRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react-dom/x-set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react-dom/x-set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react-dom/x-unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react-dom/x-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react-dom/x-use-state'?: Linter.RuleEntry<ReactDomXUseState>
  /**
   * Disallows higher order functions that define components or hooks inside them.
   * @see https://eslint-react.xyz/docs/rules/component-hook-factories
   */
  'react-hooks-extra/component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  'react-hooks-extra/dom-no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML' and 'children' at the same time.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  'react-hooks-extra/dom-no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'findDOMNode'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  'react-hooks-extra/dom-no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'flushSync'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-flush-sync
   */
  'react-hooks-extra/dom-no-flush-sync'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.hydrate()' with 'hydrateRoot()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-hydrate
   */
  'react-hooks-extra/dom-no-hydrate'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'type' attribute for 'button' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  'react-hooks-extra/dom-no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'sandbox' attribute for 'iframe' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  'react-hooks-extra/dom-no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.render()' with 'createRoot(node).render()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render
   */
  'react-hooks-extra/dom-no-render'?: Linter.RuleEntry<[]>
  /**
   * Disallows the return value of 'ReactDOM.render'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  'react-hooks-extra/dom-no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'javascript:' URLs as attribute values.
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  'react-hooks-extra/dom-no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of string style prop in JSX. Use an object instead.
   * @see https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
   */
  'react-hooks-extra/dom-no-string-style-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows unknown 'DOM' properties.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  'react-hooks-extra/dom-no-unknown-property'?: Linter.RuleEntry<ReactHooksExtraDomNoUnknownProperty>
  /**
   * Enforces that the 'sandbox' attribute for 'iframe' elements is not set to unsafe combinations.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  'react-hooks-extra/dom-no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'target="_blank"' without 'rel="noreferrer noopener"'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  'react-hooks-extra/dom-no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useFormState' with 'useActionState'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-use-form-state
   */
  'react-hooks-extra/dom-no-use-form-state'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'children' in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react-hooks-extra/dom-no-void-elements-with-children'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React DOM via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/dom-prefer-namespace-import
   */
  'react-hooks-extra/dom-prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react-hooks-extra/error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-hooks-extra/exhaustive-deps'?: Linter.RuleEntry<ReactHooksExtraExhaustiveDeps>
  /**
   * Validates against mutating props, state, and other values that are immutable.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react-hooks-extra/immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop
   */
  'react-hooks-extra/jsx-no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop when children are also passed as nested content.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop-with-children
   */
  'react-hooks-extra/jsx-no-children-prop-with-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents comment strings from being accidentally inserted into a JSX element's text nodes.
   * @see https://eslint-react.xyz/docs/rules/no-comment-textnodes
   */
  'react-hooks-extra/jsx-no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Prevent patterns that cause deoptimization when using the automatic JSX runtime.
   * @see https://eslint-react.xyz/docs/rules/no-key-after-spread
   */
  'react-hooks-extra/jsx-no-key-after-spread'?: Linter.RuleEntry<[]>
  /**
   * Catches `$` before `{expr}` in JSX — typically from template literal `${expr}` being copy-pasted into JSX without removing the `$`. The `$` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-dollar
   */
  'react-hooks-extra/jsx-no-leaked-dollar'?: Linter.RuleEntry<[]>
  /**
   * Catches `;` at the start of JSX text nodes — typically from accidentally placing a statement-ending `;` inside JSX. The `;` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-semicolon
   */
  'react-hooks-extra/jsx-no-leaked-semicolon'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX namespace syntax, as React does not support them.
   * @see https://eslint-react.xyz/docs/rules/no-namespace
   */
  'react-hooks-extra/jsx-no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Disallows useless fragment elements.
   * @see https://eslint-react.xyz/docs/rules/no-useless-fragment
   */
  'react-hooks-extra/jsx-no-useless-fragment'?: Linter.RuleEntry<ReactHooksExtraJsxNoUselessFragment>
  /**
   * Enforces the context name to be a valid component name with the suffix 'Context'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-context-name
   */
  'react-hooks-extra/naming-convention-context-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useId' calls to be either 'id' or end with 'Id'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-id-name
   */
  'react-hooks-extra/naming-convention-id-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useRef' calls to be either 'ref' or end with 'Ref'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-ref-name
   */
  'react-hooks-extra/naming-convention-ref-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react-hooks-extra/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react-hooks-extra/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react-hooks-extra/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react-hooks-extra/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react-hooks-extra/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react-hooks-extra/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react-hooks-extra/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react-hooks-extra/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react-hooks-extra/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react-hooks-extra/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react-hooks-extra/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react-hooks-extra/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react-hooks-extra/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react-hooks-extra/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react-hooks-extra/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react-hooks-extra/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react-hooks-extra/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react-hooks-extra/no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react-hooks-extra/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react-hooks-extra/no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react-hooks-extra/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react-hooks-extra/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react-hooks-extra/no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react-hooks-extra/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react-hooks-extra/no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react-hooks-extra/no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react-hooks-extra/no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react-hooks-extra/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react-hooks-extra/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react-hooks-extra/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react-hooks-extra/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
   */
  'react-hooks-extra/no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
   */
  'react-hooks-extra/no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react-hooks-extra/no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react-hooks-extra/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react-hooks-extra/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react-hooks-extra/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react-hooks-extra/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react-hooks-extra/no-unstable-default-props'?: Linter.RuleEntry<ReactHooksExtraNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react-hooks-extra/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react-hooks-extra/no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react-hooks-extra/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react-hooks-extra/no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react-hooks-extra/prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-namespace-import
   */
  'react-hooks-extra/prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react-hooks-extra/purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react-hooks-extra/refs'?: Linter.RuleEntry<[]>
  /**
   * Validates and transforms React Client/Server Function definitions.
   * @see https://eslint-react.xyz/docs/rules/function-definition
   */
  'react-hooks-extra/rsc-function-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react-hooks-extra/rules-of-hooks'?: Linter.RuleEntry<ReactHooksExtraRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react-hooks-extra/set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react-hooks-extra/set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react-hooks-extra/unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react-hooks-extra/use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react-hooks-extra/use-state'?: Linter.RuleEntry<ReactHooksExtraUseState>
  /**
   * Enforces that every 'addEventListener' in a component or custom hook has a corresponding 'removeEventListener'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
   */
  'react-hooks-extra/web-api-no-leaked-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setInterval' in a component or custom hook has a corresponding 'clearInterval'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
   */
  'react-hooks-extra/web-api-no-leaked-interval'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'ResizeObserver' created in a component or custom hook has a corresponding 'ResizeObserver.disconnect()'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
   */
  'react-hooks-extra/web-api-no-leaked-resize-observer'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setTimeout' in a component or custom hook has a corresponding 'clearTimeout'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
   */
  'react-hooks-extra/web-api-no-leaked-timeout'?: Linter.RuleEntry<[]>
  /**
   * Disallows higher order functions that define components or hooks inside them.
   * @see https://eslint-react.xyz/docs/rules/component-hook-factories
   */
  'react-hooks-extra/x-component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react-hooks-extra/x-error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-hooks-extra/x-exhaustive-deps'?: Linter.RuleEntry<ReactHooksExtraXExhaustiveDeps>
  /**
   * Validates against mutating props, state, and other values that are immutable.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react-hooks-extra/x-immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react-hooks-extra/x-no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react-hooks-extra/x-no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react-hooks-extra/x-no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react-hooks-extra/x-no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react-hooks-extra/x-no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react-hooks-extra/x-no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react-hooks-extra/x-no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react-hooks-extra/x-no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react-hooks-extra/x-no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react-hooks-extra/x-no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react-hooks-extra/x-no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react-hooks-extra/x-no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react-hooks-extra/x-no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react-hooks-extra/x-no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react-hooks-extra/x-no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react-hooks-extra/x-no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react-hooks-extra/x-no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react-hooks-extra/x-no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react-hooks-extra/x-no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react-hooks-extra/x-no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react-hooks-extra/x-no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react-hooks-extra/x-no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react-hooks-extra/x-no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react-hooks-extra/x-no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react-hooks-extra/x-no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react-hooks-extra/x-no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react-hooks-extra/x-no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react-hooks-extra/x-no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react-hooks-extra/x-no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react-hooks-extra/x-no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react-hooks-extra/x-no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
   */
  'react-hooks-extra/x-no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
   */
  'react-hooks-extra/x-no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react-hooks-extra/x-no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react-hooks-extra/x-no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react-hooks-extra/x-no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react-hooks-extra/x-no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react-hooks-extra/x-no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react-hooks-extra/x-no-unstable-default-props'?: Linter.RuleEntry<ReactHooksExtraXNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react-hooks-extra/x-no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react-hooks-extra/x-no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react-hooks-extra/x-no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react-hooks-extra/x-no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react-hooks-extra/x-prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-namespace-import
   */
  'react-hooks-extra/x-prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react-hooks-extra/x-purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react-hooks-extra/x-refs'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react-hooks-extra/x-rules-of-hooks'?: Linter.RuleEntry<ReactHooksExtraXRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react-hooks-extra/x-set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react-hooks-extra/x-set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react-hooks-extra/x-unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react-hooks-extra/x-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react-hooks-extra/x-use-state'?: Linter.RuleEntry<ReactHooksExtraXUseState>
  /**
   * Validates against calling capitalized functions/methods instead of using JSX
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/capitalized-calls
   */
  'react-hooks/capitalized-calls'?: Linter.RuleEntry<ReactHooksCapitalizedCalls>
  /**
   * Deprecated: this rule has been removed in 7.1.0.
   * @deprecated
   */
  'react-hooks/component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Validates the compiler configuration options
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/config
   */
  'react-hooks/config'?: Linter.RuleEntry<ReactHooksConfig>
  /**
   * Validates usage of error boundaries instead of try/catch for errors in child components
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/error-boundaries
   */
  'react-hooks/error-boundaries'?: Linter.RuleEntry<ReactHooksErrorBoundaries>
  /**
   * verifies the list of dependencies for Hooks like useEffect and similar
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-hooks/exhaustive-deps'?: Linter.RuleEntry<ReactHooksExhaustiveDeps>
  /**
   * Validates that effect dependencies are exhaustive and without extraneous values
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-effect-dependencies
   */
  'react-hooks/exhaustive-effect-dependencies'?: Linter.RuleEntry<ReactHooksExhaustiveEffectDependencies>
  /**
   * Validates usage of fbt
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/fbt
   */
  'react-hooks/fbt'?: Linter.RuleEntry<ReactHooksFbt>
  /**
   * Validates configuration of [gating mode](https://react.dev/reference/react-compiler/gating)
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/gating
   */
  'react-hooks/gating'?: Linter.RuleEntry<ReactHooksGating>
  /**
   * Validates against assignment/mutation of globals during render, part of ensuring that [side effects must render outside of render](https://react.dev/reference/rules/components-and-hooks-must-be-pure#side-effects-must-run-outside-of-render)
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/globals
   */
  'react-hooks/globals'?: Linter.RuleEntry<ReactHooksGlobals>
  /**
   * Validates the rules of hooks
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/hooks
   */
  'react-hooks/hooks'?: Linter.RuleEntry<ReactHooksHooks>
  /**
   * Validates against mutating props, state, and other values that [are immutable](https://react.dev/reference/rules/components-and-hooks-must-be-pure#props-and-state-are-immutable)
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/immutability
   */
  'react-hooks/immutability'?: Linter.RuleEntry<ReactHooksImmutability>
  /**
   * Validates against usage of libraries which are incompatible with memoization (manual or automatic)
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/incompatible-library
   */
  'react-hooks/incompatible-library'?: Linter.RuleEntry<ReactHooksIncompatibleLibrary>
  /**
   * Internal invariants
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/invariant
   */
  'react-hooks/invariant'?: Linter.RuleEntry<ReactHooksInvariant>
  /**
   * Validates that useMemo() and useCallback() specify comprehensive dependencies without extraneous values. See [`useMemo()` docs](https://react.dev/reference/react/useMemo) for more information.
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/memo-dependencies
   */
  'react-hooks/memo-dependencies'?: Linter.RuleEntry<ReactHooksMemoDependencies>
  /**
   * Validates that effect dependencies are memoized
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/memoized-effect-dependencies
   */
  'react-hooks/memoized-effect-dependencies'?: Linter.RuleEntry<ReactHooksMemoizedEffectDependencies>
  /**
   * Validates against deriving values from state in an effect
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/no-deriving-state-in-effects
   */
  'react-hooks/no-deriving-state-in-effects'?: Linter.RuleEntry<ReactHooksNoDerivingStateInEffects>
  /**
   * Validates that existing manual memoized is preserved by the compiler. React Compiler will only compile components and hooks if its inference [matches or exceeds the existing manual memoization](https://react.dev/learn/react-compiler/introduction#what-should-i-do-about-usememo-usecallback-and-reactmemo)
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/preserve-manual-memoization
   */
  'react-hooks/preserve-manual-memoization'?: Linter.RuleEntry<ReactHooksPreserveManualMemoization>
  /**
   * Validates that [components/hooks are pure](https://react.dev/reference/rules/components-and-hooks-must-be-pure) by checking that they do not call known-impure functions
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
   */
  'react-hooks/purity'?: Linter.RuleEntry<ReactHooksPurity>
  /**
   * Validates correct usage of refs, not reading/writing during render. See the "pitfalls" section in [`useRef()` usage](https://react.dev/reference/react/useRef#usage)
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/refs
   */
  'react-hooks/refs'?: Linter.RuleEntry<ReactHooksRefs>
  /**
   * Validates against suppression of other rules
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/rule-suppression
   */
  'react-hooks/rule-suppression'?: Linter.RuleEntry<ReactHooksRuleSuppression>
  /**
   * enforces the Rules of Hooks
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react-hooks/rules-of-hooks'?: Linter.RuleEntry<ReactHooksRulesOfHooks>
  /**
   * Validates against calling setState synchronously in an effect. This can indicate non-local derived data, a derived event pattern, or improper external data synchronization.
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
   */
  'react-hooks/set-state-in-effect'?: Linter.RuleEntry<ReactHooksSetStateInEffect>
  /**
   * Validates against setting state during render, which can trigger additional renders and potential infinite render loops
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-render
   */
  'react-hooks/set-state-in-render'?: Linter.RuleEntry<ReactHooksSetStateInRender>
  /**
   * Validates that components are static, not recreated every render. Components that are recreated dynamically can reset state and trigger excessive re-rendering
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/static-components
   */
  'react-hooks/static-components'?: Linter.RuleEntry<ReactHooksStaticComponents>
  /**
   * Validates against invalid syntax
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/syntax
   */
  'react-hooks/syntax'?: Linter.RuleEntry<ReactHooksSyntax>
  /**
   * Unimplemented features
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/todo
   */
  'react-hooks/todo'?: Linter.RuleEntry<ReactHooksTodo>
  /**
   * Validates against syntax that we do not plan to support in React Compiler
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/unsupported-syntax
   */
  'react-hooks/unsupported-syntax'?: Linter.RuleEntry<ReactHooksUnsupportedSyntax>
  /**
   * Validates usage of the useMemo() hook against common mistakes. See [`useMemo()` docs](https://react.dev/reference/react/useMemo) for more information.
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/use-memo
   */
  'react-hooks/use-memo'?: Linter.RuleEntry<ReactHooksUseMemo>
  /**
   * Validates that useMemos always return a value and that the result of the useMemo is used by the component/hook. See [`useMemo()` docs](https://react.dev/reference/react/useMemo) for more information.
   * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/void-use-memo
   */
  'react-hooks/void-use-memo'?: Linter.RuleEntry<ReactHooksVoidUseMemo>
  /**
   * Disallows higher order functions that define components or hooks inside them.
   * @see https://eslint-react.xyz/docs/rules/component-hook-factories
   */
  'react-naming-convention/component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  'react-naming-convention/dom-no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML' and 'children' at the same time.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  'react-naming-convention/dom-no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'findDOMNode'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  'react-naming-convention/dom-no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'flushSync'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-flush-sync
   */
  'react-naming-convention/dom-no-flush-sync'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.hydrate()' with 'hydrateRoot()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-hydrate
   */
  'react-naming-convention/dom-no-hydrate'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'type' attribute for 'button' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  'react-naming-convention/dom-no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'sandbox' attribute for 'iframe' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  'react-naming-convention/dom-no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.render()' with 'createRoot(node).render()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render
   */
  'react-naming-convention/dom-no-render'?: Linter.RuleEntry<[]>
  /**
   * Disallows the return value of 'ReactDOM.render'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  'react-naming-convention/dom-no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'javascript:' URLs as attribute values.
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  'react-naming-convention/dom-no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of string style prop in JSX. Use an object instead.
   * @see https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
   */
  'react-naming-convention/dom-no-string-style-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows unknown 'DOM' properties.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  'react-naming-convention/dom-no-unknown-property'?: Linter.RuleEntry<ReactNamingConventionDomNoUnknownProperty>
  /**
   * Enforces that the 'sandbox' attribute for 'iframe' elements is not set to unsafe combinations.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  'react-naming-convention/dom-no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'target="_blank"' without 'rel="noreferrer noopener"'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  'react-naming-convention/dom-no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useFormState' with 'useActionState'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-use-form-state
   */
  'react-naming-convention/dom-no-use-form-state'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'children' in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react-naming-convention/dom-no-void-elements-with-children'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React DOM via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/dom-prefer-namespace-import
   */
  'react-naming-convention/dom-prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react-naming-convention/error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-naming-convention/exhaustive-deps'?: Linter.RuleEntry<ReactNamingConventionExhaustiveDeps>
  /**
   * Validates against mutating props, state, and other values that are immutable.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react-naming-convention/immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop
   */
  'react-naming-convention/jsx-no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop when children are also passed as nested content.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop-with-children
   */
  'react-naming-convention/jsx-no-children-prop-with-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents comment strings from being accidentally inserted into a JSX element's text nodes.
   * @see https://eslint-react.xyz/docs/rules/no-comment-textnodes
   */
  'react-naming-convention/jsx-no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Prevent patterns that cause deoptimization when using the automatic JSX runtime.
   * @see https://eslint-react.xyz/docs/rules/no-key-after-spread
   */
  'react-naming-convention/jsx-no-key-after-spread'?: Linter.RuleEntry<[]>
  /**
   * Catches `$` before `{expr}` in JSX — typically from template literal `${expr}` being copy-pasted into JSX without removing the `$`. The `$` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-dollar
   */
  'react-naming-convention/jsx-no-leaked-dollar'?: Linter.RuleEntry<[]>
  /**
   * Catches `;` at the start of JSX text nodes — typically from accidentally placing a statement-ending `;` inside JSX. The `;` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-semicolon
   */
  'react-naming-convention/jsx-no-leaked-semicolon'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX namespace syntax, as React does not support them.
   * @see https://eslint-react.xyz/docs/rules/no-namespace
   */
  'react-naming-convention/jsx-no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Disallows useless fragment elements.
   * @see https://eslint-react.xyz/docs/rules/no-useless-fragment
   */
  'react-naming-convention/jsx-no-useless-fragment'?: Linter.RuleEntry<ReactNamingConventionJsxNoUselessFragment>
  /**
   * Enforces the context name to be a valid component name with the suffix 'Context'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-context-name
   */
  'react-naming-convention/naming-convention-context-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useId' calls to be either 'id' or end with 'Id'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-id-name
   */
  'react-naming-convention/naming-convention-id-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useRef' calls to be either 'ref' or end with 'Ref'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-ref-name
   */
  'react-naming-convention/naming-convention-ref-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react-naming-convention/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react-naming-convention/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react-naming-convention/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react-naming-convention/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react-naming-convention/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react-naming-convention/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react-naming-convention/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react-naming-convention/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react-naming-convention/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react-naming-convention/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react-naming-convention/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react-naming-convention/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react-naming-convention/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react-naming-convention/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react-naming-convention/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react-naming-convention/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react-naming-convention/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react-naming-convention/no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react-naming-convention/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react-naming-convention/no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react-naming-convention/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react-naming-convention/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react-naming-convention/no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react-naming-convention/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react-naming-convention/no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react-naming-convention/no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react-naming-convention/no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react-naming-convention/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react-naming-convention/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react-naming-convention/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react-naming-convention/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
   */
  'react-naming-convention/no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
   */
  'react-naming-convention/no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react-naming-convention/no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react-naming-convention/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react-naming-convention/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react-naming-convention/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react-naming-convention/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react-naming-convention/no-unstable-default-props'?: Linter.RuleEntry<ReactNamingConventionNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react-naming-convention/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react-naming-convention/no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react-naming-convention/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react-naming-convention/no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react-naming-convention/prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-namespace-import
   */
  'react-naming-convention/prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react-naming-convention/purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react-naming-convention/refs'?: Linter.RuleEntry<[]>
  /**
   * Validates and transforms React Client/Server Function definitions.
   * @see https://eslint-react.xyz/docs/rules/function-definition
   */
  'react-naming-convention/rsc-function-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react-naming-convention/rules-of-hooks'?: Linter.RuleEntry<ReactNamingConventionRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react-naming-convention/set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react-naming-convention/set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react-naming-convention/unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react-naming-convention/use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react-naming-convention/use-state'?: Linter.RuleEntry<ReactNamingConventionUseState>
  /**
   * Enforces that every 'addEventListener' in a component or custom hook has a corresponding 'removeEventListener'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
   */
  'react-naming-convention/web-api-no-leaked-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setInterval' in a component or custom hook has a corresponding 'clearInterval'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
   */
  'react-naming-convention/web-api-no-leaked-interval'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'ResizeObserver' created in a component or custom hook has a corresponding 'ResizeObserver.disconnect()'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
   */
  'react-naming-convention/web-api-no-leaked-resize-observer'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setTimeout' in a component or custom hook has a corresponding 'clearTimeout'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
   */
  'react-naming-convention/web-api-no-leaked-timeout'?: Linter.RuleEntry<[]>
  /**
   * Disallows higher order functions that define components or hooks inside them.
   * @see https://eslint-react.xyz/docs/rules/component-hook-factories
   */
  'react-naming-convention/x-component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react-naming-convention/x-error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-naming-convention/x-exhaustive-deps'?: Linter.RuleEntry<ReactNamingConventionXExhaustiveDeps>
  /**
   * Validates against mutating props, state, and other values that are immutable.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react-naming-convention/x-immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react-naming-convention/x-no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react-naming-convention/x-no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react-naming-convention/x-no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react-naming-convention/x-no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react-naming-convention/x-no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react-naming-convention/x-no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react-naming-convention/x-no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react-naming-convention/x-no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react-naming-convention/x-no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react-naming-convention/x-no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react-naming-convention/x-no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react-naming-convention/x-no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react-naming-convention/x-no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react-naming-convention/x-no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react-naming-convention/x-no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react-naming-convention/x-no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react-naming-convention/x-no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react-naming-convention/x-no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react-naming-convention/x-no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react-naming-convention/x-no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react-naming-convention/x-no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react-naming-convention/x-no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react-naming-convention/x-no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react-naming-convention/x-no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react-naming-convention/x-no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react-naming-convention/x-no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react-naming-convention/x-no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react-naming-convention/x-no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react-naming-convention/x-no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react-naming-convention/x-no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react-naming-convention/x-no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
   */
  'react-naming-convention/x-no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
   */
  'react-naming-convention/x-no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react-naming-convention/x-no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react-naming-convention/x-no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react-naming-convention/x-no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react-naming-convention/x-no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react-naming-convention/x-no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react-naming-convention/x-no-unstable-default-props'?: Linter.RuleEntry<ReactNamingConventionXNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react-naming-convention/x-no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react-naming-convention/x-no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react-naming-convention/x-no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react-naming-convention/x-no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react-naming-convention/x-prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-namespace-import
   */
  'react-naming-convention/x-prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react-naming-convention/x-purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react-naming-convention/x-refs'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react-naming-convention/x-rules-of-hooks'?: Linter.RuleEntry<ReactNamingConventionXRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react-naming-convention/x-set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react-naming-convention/x-set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react-naming-convention/x-unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react-naming-convention/x-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react-naming-convention/x-use-state'?: Linter.RuleEntry<ReactNamingConventionXUseState>
  'react-refresh/only-export-components'?: Linter.RuleEntry<ReactRefreshOnlyExportComponents>
  /**
   * Disallows higher order functions that define components or hooks inside them.
   * @see https://eslint-react.xyz/docs/rules/component-hook-factories
   */
  'react-web-api/component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  'react-web-api/dom-no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML' and 'children' at the same time.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  'react-web-api/dom-no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'findDOMNode'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  'react-web-api/dom-no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'flushSync'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-flush-sync
   */
  'react-web-api/dom-no-flush-sync'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.hydrate()' with 'hydrateRoot()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-hydrate
   */
  'react-web-api/dom-no-hydrate'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'type' attribute for 'button' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  'react-web-api/dom-no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'sandbox' attribute for 'iframe' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  'react-web-api/dom-no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.render()' with 'createRoot(node).render()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render
   */
  'react-web-api/dom-no-render'?: Linter.RuleEntry<[]>
  /**
   * Disallows the return value of 'ReactDOM.render'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  'react-web-api/dom-no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'javascript:' URLs as attribute values.
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  'react-web-api/dom-no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of string style prop in JSX. Use an object instead.
   * @see https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
   */
  'react-web-api/dom-no-string-style-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows unknown 'DOM' properties.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  'react-web-api/dom-no-unknown-property'?: Linter.RuleEntry<ReactWebApiDomNoUnknownProperty>
  /**
   * Enforces that the 'sandbox' attribute for 'iframe' elements is not set to unsafe combinations.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  'react-web-api/dom-no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'target="_blank"' without 'rel="noreferrer noopener"'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  'react-web-api/dom-no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useFormState' with 'useActionState'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-use-form-state
   */
  'react-web-api/dom-no-use-form-state'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'children' in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react-web-api/dom-no-void-elements-with-children'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React DOM via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/dom-prefer-namespace-import
   */
  'react-web-api/dom-prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react-web-api/error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-web-api/exhaustive-deps'?: Linter.RuleEntry<ReactWebApiExhaustiveDeps>
  /**
   * Validates against mutating props, state, and other values that are immutable.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react-web-api/immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop
   */
  'react-web-api/jsx-no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop when children are also passed as nested content.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop-with-children
   */
  'react-web-api/jsx-no-children-prop-with-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents comment strings from being accidentally inserted into a JSX element's text nodes.
   * @see https://eslint-react.xyz/docs/rules/no-comment-textnodes
   */
  'react-web-api/jsx-no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Prevent patterns that cause deoptimization when using the automatic JSX runtime.
   * @see https://eslint-react.xyz/docs/rules/no-key-after-spread
   */
  'react-web-api/jsx-no-key-after-spread'?: Linter.RuleEntry<[]>
  /**
   * Catches `$` before `{expr}` in JSX — typically from template literal `${expr}` being copy-pasted into JSX without removing the `$`. The `$` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-dollar
   */
  'react-web-api/jsx-no-leaked-dollar'?: Linter.RuleEntry<[]>
  /**
   * Catches `;` at the start of JSX text nodes — typically from accidentally placing a statement-ending `;` inside JSX. The `;` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-semicolon
   */
  'react-web-api/jsx-no-leaked-semicolon'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX namespace syntax, as React does not support them.
   * @see https://eslint-react.xyz/docs/rules/no-namespace
   */
  'react-web-api/jsx-no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Disallows useless fragment elements.
   * @see https://eslint-react.xyz/docs/rules/no-useless-fragment
   */
  'react-web-api/jsx-no-useless-fragment'?: Linter.RuleEntry<ReactWebApiJsxNoUselessFragment>
  /**
   * Enforces the context name to be a valid component name with the suffix 'Context'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-context-name
   */
  'react-web-api/naming-convention-context-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useId' calls to be either 'id' or end with 'Id'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-id-name
   */
  'react-web-api/naming-convention-id-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useRef' calls to be either 'ref' or end with 'Ref'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-ref-name
   */
  'react-web-api/naming-convention-ref-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react-web-api/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react-web-api/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react-web-api/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react-web-api/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react-web-api/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react-web-api/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react-web-api/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react-web-api/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react-web-api/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react-web-api/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react-web-api/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react-web-api/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react-web-api/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react-web-api/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react-web-api/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react-web-api/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react-web-api/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react-web-api/no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react-web-api/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react-web-api/no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react-web-api/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react-web-api/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react-web-api/no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react-web-api/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react-web-api/no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react-web-api/no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react-web-api/no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react-web-api/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react-web-api/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react-web-api/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react-web-api/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
   */
  'react-web-api/no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
   */
  'react-web-api/no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react-web-api/no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react-web-api/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react-web-api/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react-web-api/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react-web-api/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react-web-api/no-unstable-default-props'?: Linter.RuleEntry<ReactWebApiNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react-web-api/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react-web-api/no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react-web-api/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react-web-api/no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react-web-api/prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-namespace-import
   */
  'react-web-api/prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react-web-api/purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react-web-api/refs'?: Linter.RuleEntry<[]>
  /**
   * Validates and transforms React Client/Server Function definitions.
   * @see https://eslint-react.xyz/docs/rules/function-definition
   */
  'react-web-api/rsc-function-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react-web-api/rules-of-hooks'?: Linter.RuleEntry<ReactWebApiRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react-web-api/set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react-web-api/set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react-web-api/unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react-web-api/use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react-web-api/use-state'?: Linter.RuleEntry<ReactWebApiUseState>
  /**
   * Enforces that every 'addEventListener' in a component or custom hook has a corresponding 'removeEventListener'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
   */
  'react-web-api/web-api-no-leaked-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setInterval' in a component or custom hook has a corresponding 'clearInterval'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
   */
  'react-web-api/web-api-no-leaked-interval'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'ResizeObserver' created in a component or custom hook has a corresponding 'ResizeObserver.disconnect()'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
   */
  'react-web-api/web-api-no-leaked-resize-observer'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setTimeout' in a component or custom hook has a corresponding 'clearTimeout'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
   */
  'react-web-api/web-api-no-leaked-timeout'?: Linter.RuleEntry<[]>
  /**
   * Disallows higher order functions that define components or hooks inside them.
   * @see https://eslint-react.xyz/docs/rules/component-hook-factories
   */
  'react-web-api/x-component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react-web-api/x-error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react-web-api/x-exhaustive-deps'?: Linter.RuleEntry<ReactWebApiXExhaustiveDeps>
  /**
   * Validates against mutating props, state, and other values that are immutable.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react-web-api/x-immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react-web-api/x-no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react-web-api/x-no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react-web-api/x-no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react-web-api/x-no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react-web-api/x-no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react-web-api/x-no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react-web-api/x-no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react-web-api/x-no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react-web-api/x-no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react-web-api/x-no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react-web-api/x-no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react-web-api/x-no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react-web-api/x-no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react-web-api/x-no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react-web-api/x-no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react-web-api/x-no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react-web-api/x-no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react-web-api/x-no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react-web-api/x-no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react-web-api/x-no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react-web-api/x-no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react-web-api/x-no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react-web-api/x-no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react-web-api/x-no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react-web-api/x-no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react-web-api/x-no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react-web-api/x-no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react-web-api/x-no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react-web-api/x-no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react-web-api/x-no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react-web-api/x-no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
   */
  'react-web-api/x-no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
   */
  'react-web-api/x-no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react-web-api/x-no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react-web-api/x-no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react-web-api/x-no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react-web-api/x-no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react-web-api/x-no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react-web-api/x-no-unstable-default-props'?: Linter.RuleEntry<ReactWebApiXNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react-web-api/x-no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react-web-api/x-no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react-web-api/x-no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react-web-api/x-no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react-web-api/x-prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-namespace-import
   */
  'react-web-api/x-prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react-web-api/x-purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react-web-api/x-refs'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react-web-api/x-rules-of-hooks'?: Linter.RuleEntry<ReactWebApiXRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react-web-api/x-set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react-web-api/x-set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react-web-api/x-unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react-web-api/x-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react-web-api/x-use-state'?: Linter.RuleEntry<ReactWebApiXUseState>
  /**
   * Disallows higher order functions that define components or hooks inside them.
   * @see https://eslint-react.xyz/docs/rules/component-hook-factories
   */
  'react/component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  'react/dom-no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML' and 'children' at the same time.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  'react/dom-no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'findDOMNode'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  'react/dom-no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'flushSync'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-flush-sync
   */
  'react/dom-no-flush-sync'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.hydrate()' with 'hydrateRoot()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-hydrate
   */
  'react/dom-no-hydrate'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'type' attribute for 'button' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  'react/dom-no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'sandbox' attribute for 'iframe' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  'react/dom-no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.render()' with 'createRoot(node).render()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render
   */
  'react/dom-no-render'?: Linter.RuleEntry<[]>
  /**
   * Disallows the return value of 'ReactDOM.render'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  'react/dom-no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'javascript:' URLs as attribute values.
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  'react/dom-no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of string style prop in JSX. Use an object instead.
   * @see https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
   */
  'react/dom-no-string-style-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows unknown 'DOM' properties.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  'react/dom-no-unknown-property'?: Linter.RuleEntry<ReactDomNoUnknownProperty>
  /**
   * Enforces that the 'sandbox' attribute for 'iframe' elements is not set to unsafe combinations.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  'react/dom-no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'target="_blank"' without 'rel="noreferrer noopener"'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  'react/dom-no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useFormState' with 'useActionState'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-use-form-state
   */
  'react/dom-no-use-form-state'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'children' in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react/dom-no-void-elements-with-children'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React DOM via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/dom-prefer-namespace-import
   */
  'react/dom-prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react/error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react/exhaustive-deps'?: Linter.RuleEntry<ReactExhaustiveDeps>
  /**
   * Validates against mutating props, state, and other values that are immutable.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react/immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop
   */
  'react/jsx-no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop when children are also passed as nested content.
   * @see https://eslint-react.xyz/docs/rules/no-children-prop-with-children
   */
  'react/jsx-no-children-prop-with-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents comment strings from being accidentally inserted into a JSX element's text nodes.
   * @see https://eslint-react.xyz/docs/rules/no-comment-textnodes
   */
  'react/jsx-no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Prevent patterns that cause deoptimization when using the automatic JSX runtime.
   * @see https://eslint-react.xyz/docs/rules/no-key-after-spread
   */
  'react/jsx-no-key-after-spread'?: Linter.RuleEntry<[]>
  /**
   * Catches `$` before `{expr}` in JSX — typically from template literal `${expr}` being copy-pasted into JSX without removing the `$`. The `$` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-dollar
   */
  'react/jsx-no-leaked-dollar'?: Linter.RuleEntry<[]>
  /**
   * Catches `;` at the start of JSX text nodes — typically from accidentally placing a statement-ending `;` inside JSX. The `;` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-semicolon
   */
  'react/jsx-no-leaked-semicolon'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX namespace syntax, as React does not support them.
   * @see https://eslint-react.xyz/docs/rules/no-namespace
   */
  'react/jsx-no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Disallows useless fragment elements.
   * @see https://eslint-react.xyz/docs/rules/no-useless-fragment
   */
  'react/jsx-no-useless-fragment'?: Linter.RuleEntry<ReactJsxNoUselessFragment>
  /**
   * Enforces the context name to be a valid component name with the suffix 'Context'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-context-name
   */
  'react/naming-convention-context-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useId' calls to be either 'id' or end with 'Id'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-id-name
   */
  'react/naming-convention-id-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useRef' calls to be either 'ref' or end with 'Ref'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-ref-name
   */
  'react/naming-convention-ref-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react/no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react/no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react/no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react/no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react/no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react/no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react/no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
   */
  'react/no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
   */
  'react/no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react/no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react/no-unstable-default-props'?: Linter.RuleEntry<ReactNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react/no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react/no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react/prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-namespace-import
   */
  'react/prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react/purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react/refs'?: Linter.RuleEntry<[]>
  /**
   * Validates and transforms React Client/Server Function definitions.
   * @see https://eslint-react.xyz/docs/rules/function-definition
   */
  'react/rsc-function-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react/rules-of-hooks'?: Linter.RuleEntry<ReactRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react/set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react/set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react/unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react/use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react/use-state'?: Linter.RuleEntry<ReactUseState>
  /**
   * Enforces that every 'addEventListener' in a component or custom hook has a corresponding 'removeEventListener'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
   */
  'react/web-api-no-leaked-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setInterval' in a component or custom hook has a corresponding 'clearInterval'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
   */
  'react/web-api-no-leaked-interval'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'ResizeObserver' created in a component or custom hook has a corresponding 'ResizeObserver.disconnect()'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
   */
  'react/web-api-no-leaked-resize-observer'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setTimeout' in a component or custom hook has a corresponding 'clearTimeout'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
   */
  'react/web-api-no-leaked-timeout'?: Linter.RuleEntry<[]>
  /**
   * Disallows higher order functions that define components or hooks inside them.
   * @see https://eslint-react.xyz/docs/rules/component-hook-factories
   */
  'react/x-component-hook-factories'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react/x-error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react/x-exhaustive-deps'?: Linter.RuleEntry<ReactXExhaustiveDeps>
  /**
   * Validates against mutating props, state, and other values that are immutable.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react/x-immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react/x-no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react/x-no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react/x-no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react/x-no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react/x-no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react/x-no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react/x-no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react/x-no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react/x-no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react/x-no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react/x-no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react/x-no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react/x-no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react/x-no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react/x-no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react/x-no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react/x-no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react/x-no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react/x-no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react/x-no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react/x-no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react/x-no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react/x-no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react/x-no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react/x-no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react/x-no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react/x-no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'shouldComponentUpdate' when extending 'React.PureComponent'.
   * @see https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
   */
  'react/x-no-redundant-should-component-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react/x-no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react/x-no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react/x-no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useCallback'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
   */
  'react/x-no-unnecessary-use-callback'?: Linter.RuleEntry<[]>
  /**
   * Disallows unnecessary usage of 'useMemo'.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
   */
  'react/x-no-unnecessary-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react/x-no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react/x-no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react/x-no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react/x-no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react/x-no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react/x-no-unstable-default-props'?: Linter.RuleEntry<ReactXNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react/x-no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react/x-no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about unused class component state.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react/x-no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react/x-no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Enforces destructuring assignment for component props and context.
   * @see https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
   */
  'react/x-prefer-destructuring-assignment'?: Linter.RuleEntry<[]>
  /**
   * Enforces importing React via a namespace import.
   * @see https://eslint-react.xyz/docs/rules/prefer-namespace-import
   */
  'react/x-prefer-namespace-import'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react/x-purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react/x-refs'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react/x-rules-of-hooks'?: Linter.RuleEntry<ReactXRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react/x-set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react/x-set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react/x-unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react/x-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react/x-use-state'?: Linter.RuleEntry<ReactXUseState>
  /**
   * disallow confusing quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/confusing-quantifier.html
   */
  'regexp/confusing-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent escaping of control characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html
   */
  'regexp/control-character-escape'?: Linter.RuleEntry<[]>
  /**
   * enforce single grapheme in string literal
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/grapheme-string-literal.html
   */
  'regexp/grapheme-string-literal'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent usage of hexadecimal escape
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/hexadecimal-escape.html
   */
  'regexp/hexadecimal-escape'?: Linter.RuleEntry<RegexpHexadecimalEscape>
  /**
   * enforce into your favorite case
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/letter-case.html
   */
  'regexp/letter-case'?: Linter.RuleEntry<RegexpLetterCase>
  /**
   * enforce match any character style
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html
   */
  'regexp/match-any'?: Linter.RuleEntry<RegexpMatchAny>
  /**
   * enforce use of escapes on negation
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html
   */
  'regexp/negation'?: Linter.RuleEntry<[]>
  /**
   * disallow elements that contradict assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html
   */
  'regexp/no-contradiction-with-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow control characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-control-character.html
   */
  'regexp/no-control-character'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate characters in the RegExp character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html
   */
  'regexp/no-dupe-characters-character-class'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate disjunctions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html
   */
  'regexp/no-dupe-disjunctions'?: Linter.RuleEntry<RegexpNoDupeDisjunctions>
  /**
   * disallow alternatives without elements
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html
   */
  'regexp/no-empty-alternative'?: Linter.RuleEntry<[]>
  /**
   * disallow capturing group that captures empty.
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html
   */
  'regexp/no-empty-capturing-group'?: Linter.RuleEntry<[]>
  /**
   * disallow character classes that match no characters
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html
   */
  'regexp/no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * disallow empty group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html
   */
  'regexp/no-empty-group'?: Linter.RuleEntry<[]>
  /**
   * disallow empty lookahead assertion or empty lookbehind assertion
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html
   */
  'regexp/no-empty-lookarounds-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow empty string literals in character classes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-string-literal.html
   */
  'regexp/no-empty-string-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow escape backspace (`[\b]`)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html
   */
  'regexp/no-escape-backspace'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary nested lookaround assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-extra-lookaround-assertions.html
   */
  'regexp/no-extra-lookaround-assertions'?: Linter.RuleEntry<[]>
  /**
   * disallow invalid regular expression strings in `RegExp` constructors
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html
   */
  'regexp/no-invalid-regexp'?: Linter.RuleEntry<[]>
  /**
   * disallow invisible raw character
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html
   */
  'regexp/no-invisible-character'?: Linter.RuleEntry<[]>
  /**
   * disallow lazy quantifiers at the end of an expression
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html
   */
  'regexp/no-lazy-ends'?: Linter.RuleEntry<RegexpNoLazyEnds>
  /**
   * disallow legacy RegExp features
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html
   */
  'regexp/no-legacy-features'?: Linter.RuleEntry<RegexpNoLegacyFeatures>
  /**
   * disallow capturing groups that do not behave as one would expect
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html
   */
  'regexp/no-misleading-capturing-group'?: Linter.RuleEntry<RegexpNoMisleadingCapturingGroup>
  /**
   * disallow multi-code-point characters in character classes and quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html
   */
  'regexp/no-misleading-unicode-character'?: Linter.RuleEntry<RegexpNoMisleadingUnicodeCharacter>
  /**
   * disallow missing `g` flag in patterns used in `String#matchAll` and `String#replaceAll`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html
   */
  'regexp/no-missing-g-flag'?: Linter.RuleEntry<RegexpNoMissingGFlag>
  /**
   * disallow non-standard flags
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html
   */
  'regexp/no-non-standard-flag'?: Linter.RuleEntry<[]>
  /**
   * disallow obscure character ranges
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html
   */
  'regexp/no-obscure-range'?: Linter.RuleEntry<RegexpNoObscureRange>
  /**
   * disallow octal escape sequence
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-octal.html
   */
  'regexp/no-octal'?: Linter.RuleEntry<[]>
  /**
   * disallow optional assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html
   */
  'regexp/no-optional-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow backreferences that reference a group that might not be matched
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html
   */
  'regexp/no-potentially-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * disallow standalone backslashes (`\`)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-standalone-backslash.html
   */
  'regexp/no-standalone-backslash'?: Linter.RuleEntry<[]>
  /**
   * disallow exponential and polynomial backtracking
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html
   */
  'regexp/no-super-linear-backtracking'?: Linter.RuleEntry<RegexpNoSuperLinearBacktracking>
  /**
   * disallow quantifiers that cause quadratic moves
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html
   */
  'regexp/no-super-linear-move'?: Linter.RuleEntry<RegexpNoSuperLinearMove>
  /**
   * disallow trivially nested assertions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-assertion.html
   */
  'regexp/no-trivially-nested-assertion'?: Linter.RuleEntry<[]>
  /**
   * disallow nested quantifiers that can be rewritten as one quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-quantifier.html
   */
  'regexp/no-trivially-nested-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow unused capturing group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html
   */
  'regexp/no-unused-capturing-group'?: Linter.RuleEntry<RegexpNoUnusedCapturingGroup>
  /**
   * disallow assertions that are known to always accept (or reject)
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html
   */
  'regexp/no-useless-assertions'?: Linter.RuleEntry<[]>
  /**
   * disallow useless backreferences in regular expressions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html
   */
  'regexp/no-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * disallow character class with one character
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html
   */
  'regexp/no-useless-character-class'?: Linter.RuleEntry<RegexpNoUselessCharacterClass>
  /**
   * disallow useless `$` replacements in replacement string
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html
   */
  'regexp/no-useless-dollar-replacements'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary escape characters in RegExp
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html
   */
  'regexp/no-useless-escape'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary regex flags
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-flag.html
   */
  'regexp/no-useless-flag'?: Linter.RuleEntry<RegexpNoUselessFlag>
  /**
   * disallow unnecessarily non-greedy quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html
   */
  'regexp/no-useless-lazy'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary non-capturing group
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html
   */
  'regexp/no-useless-non-capturing-group'?: Linter.RuleEntry<RegexpNoUselessNonCapturingGroup>
  /**
   * disallow quantifiers that can be removed
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html
   */
  'regexp/no-useless-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary character ranges
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html
   */
  'regexp/no-useless-range'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary elements in expression character classes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-set-operand.html
   */
  'regexp/no-useless-set-operand'?: Linter.RuleEntry<[]>
  /**
   * disallow string disjunction of single characters in `\q{...}`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-string-literal.html
   */
  'regexp/no-useless-string-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary `{n,m}` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html
   */
  'regexp/no-useless-two-nums-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow quantifiers with a maximum of zero
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html
   */
  'regexp/no-zero-quantifier'?: Linter.RuleEntry<[]>
  /**
   * disallow the alternatives of lookarounds that end with a non-constant quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html
   */
  'regexp/optimal-lookaround-quantifier'?: Linter.RuleEntry<[]>
  /**
   * require optimal quantifiers for concatenated quantifiers
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-quantifier-concatenation.html
   */
  'regexp/optimal-quantifier-concatenation'?: Linter.RuleEntry<RegexpOptimalQuantifierConcatenation>
  /**
   * enforce using character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html
   */
  'regexp/prefer-character-class'?: Linter.RuleEntry<RegexpPreferCharacterClass>
  /**
   * enforce using `\d`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html
   */
  'regexp/prefer-d'?: Linter.RuleEntry<RegexpPreferD>
  /**
   * enforces escape of replacement `$` character (`$$`).
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-escape-replacement-dollar-char.html
   */
  'regexp/prefer-escape-replacement-dollar-char'?: Linter.RuleEntry<[]>
  /**
   * prefer lookarounds over capturing group that do not replace
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-lookaround.html
   */
  'regexp/prefer-lookaround'?: Linter.RuleEntry<RegexpPreferLookaround>
  /**
   * enforce using named backreferences
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-backreference.html
   */
  'regexp/prefer-named-backreference'?: Linter.RuleEntry<[]>
  /**
   * enforce using named capture groups
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-capture-group.html
   */
  'regexp/prefer-named-capture-group'?: Linter.RuleEntry<[]>
  /**
   * enforce using named replacement
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-replacement.html
   */
  'regexp/prefer-named-replacement'?: Linter.RuleEntry<RegexpPreferNamedReplacement>
  /**
   * enforce using `+` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html
   */
  'regexp/prefer-plus-quantifier'?: Linter.RuleEntry<[]>
  /**
   * prefer predefined assertion over equivalent lookarounds
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-predefined-assertion.html
   */
  'regexp/prefer-predefined-assertion'?: Linter.RuleEntry<[]>
  /**
   * enforce using quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-quantifier.html
   */
  'regexp/prefer-quantifier'?: Linter.RuleEntry<RegexpPreferQuantifier>
  /**
   * enforce using `?` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html
   */
  'regexp/prefer-question-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce using character class range
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html
   */
  'regexp/prefer-range'?: Linter.RuleEntry<RegexpPreferRange>
  /**
   * enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-exec.html
   */
  'regexp/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * enforce that `RegExp#test` is used instead of `String#match` and `RegExp#exec`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-test.html
   */
  'regexp/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * enforce using result array `groups`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-result-array-groups.html
   */
  'regexp/prefer-result-array-groups'?: Linter.RuleEntry<RegexpPreferResultArrayGroups>
  /**
   * prefer character class set operations instead of lookarounds
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-set-operation.html
   */
  'regexp/prefer-set-operation'?: Linter.RuleEntry<[]>
  /**
   * enforce using `*` quantifier
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html
   */
  'regexp/prefer-star-quantifier'?: Linter.RuleEntry<[]>
  /**
   * enforce use of unicode codepoint escapes
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html
   */
  'regexp/prefer-unicode-codepoint-escapes'?: Linter.RuleEntry<[]>
  /**
   * enforce using `\w`
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html
   */
  'regexp/prefer-w'?: Linter.RuleEntry<[]>
  /**
   * enforce the use of the `u` flag
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-regexp.html
   */
  'regexp/require-unicode-regexp'?: Linter.RuleEntry<[]>
  /**
   * enforce the use of the `v` flag
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-sets-regexp.html
   */
  'regexp/require-unicode-sets-regexp'?: Linter.RuleEntry<[]>
  /**
   * require simplify set operations
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/simplify-set-operations.html
   */
  'regexp/simplify-set-operations'?: Linter.RuleEntry<[]>
  /**
   * sort alternatives if order doesn't matter
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-alternatives.html
   */
  'regexp/sort-alternatives'?: Linter.RuleEntry<[]>
  /**
   * enforces elements order in character class
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-character-class-elements.html
   */
  'regexp/sort-character-class-elements'?: Linter.RuleEntry<RegexpSortCharacterClassElements>
  /**
   * require regex flags to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html
   */
  'regexp/sort-flags'?: Linter.RuleEntry<[]>
  /**
   * disallow not strictly valid regular expressions
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html
   */
  'regexp/strict'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent usage of unicode escape or unicode codepoint escape
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-escape.html
   */
  'regexp/unicode-escape'?: Linter.RuleEntry<RegexpUnicodeEscape>
  /**
   * enforce consistent naming of unicode properties
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-property.html
   */
  'regexp/unicode-property'?: Linter.RuleEntry<RegexpUnicodeProperty>
  /**
   * use the `i` flag if it simplifies the pattern
   * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/use-ignore-case.html
   */
  'regexp/use-ignore-case'?: Linter.RuleEntry<[]>
  /**
   * Automatically sort exports.
   * @see https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order
   */
  'simple-import-sort/exports'?: Linter.RuleEntry<[]>
  /**
   * Automatically sort imports.
   * @see https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order
   */
  'simple-import-sort/imports'?: Linter.RuleEntry<SimpleImportSortImports>
  /**
   * Enforce a consistent and logical order of the Tailwind CSS classnames
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/classnames-order.md
   */
  'tailwindcss/classnames-order'?: Linter.RuleEntry<TailwindcssClassnamesOrder>
  /**
   * Warns about dash prefixed classnames using arbitrary values
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/enforces-negative-arbitrary-values.md
   */
  'tailwindcss/enforces-negative-arbitrary-values'?: Linter.RuleEntry<TailwindcssEnforcesNegativeArbitraryValues>
  /**
   * Enforces the usage of shorthand Tailwind CSS classnames
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/enforces-shorthand.md
   */
  'tailwindcss/enforces-shorthand'?: Linter.RuleEntry<TailwindcssEnforcesShorthand>
  /**
   * Detect obsolete classnames when upgrading to Tailwind CSS v3
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/migration-from-tailwind-2.md
   */
  'tailwindcss/migration-from-tailwind-2'?: Linter.RuleEntry<TailwindcssMigrationFromTailwind2>
  /**
   * Forbid using arbitrary values in classnames
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-arbitrary-value.md
   */
  'tailwindcss/no-arbitrary-value'?: Linter.RuleEntry<TailwindcssNoArbitraryValue>
  /**
   * Avoid contradicting Tailwind CSS classnames (e.g. "w-3 w-5")
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-contradicting-classname.md
   */
  'tailwindcss/no-contradicting-classname'?: Linter.RuleEntry<TailwindcssNoContradictingClassname>
  /**
   * Detect classnames which do not belong to Tailwind CSS
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-custom-classname.md
   */
  'tailwindcss/no-custom-classname'?: Linter.RuleEntry<TailwindcssNoCustomClassname>
  /**
   * Forbid using arbitrary values in classnames when an equivalent preset exists
   * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-unnecessary-arbitrary-value.md
   */
  'tailwindcss/no-unnecessary-arbitrary-value'?: Linter.RuleEntry<TailwindcssNoUnnecessaryArbitraryValue>
  /**
   * enforce linebreaks after opening and before closing array brackets
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/array-bracket-newline.html
   */
  'toml/array-bracket-newline'?: Linter.RuleEntry<TomlArrayBracketNewline>
  /**
   * enforce consistent spacing inside array brackets
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/array-bracket-spacing.html
   */
  'toml/array-bracket-spacing'?: Linter.RuleEntry<TomlArrayBracketSpacing>
  /**
   * enforce line breaks between array elements
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/array-element-newline.html
   */
  'toml/array-element-newline'?: Linter.RuleEntry<TomlArrayElementNewline>
  /**
   * enforce consistent comma style in array
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/comma-style.html
   */
  'toml/comma-style'?: Linter.RuleEntry<TomlCommaStyle>
  /**
   * enforce consistent indentation
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/indent.html
   */
  'toml/indent'?: Linter.RuleEntry<TomlIndent>
  /**
   * enforce linebreaks after opening and before closing braces
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-curly-newline.html
   */
  'toml/inline-table-curly-newline'?: Linter.RuleEntry<TomlInlineTableCurlyNewline>
  /**
   * enforce consistent spacing inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-curly-spacing.html
   */
  'toml/inline-table-curly-spacing'?: Linter.RuleEntry<TomlInlineTableCurlySpacing>
  /**
   * enforce placing inline table key-value pairs on separate lines
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-key-value-newline.html
   */
  'toml/inline-table-key-value-newline'?: Linter.RuleEntry<TomlInlineTableKeyValueNewline>
  /**
   * enforce consistent spacing between keys and values in key/value pairs
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/key-spacing.html
   */
  'toml/key-spacing'?: Linter.RuleEntry<TomlKeySpacing>
  /**
   * disallow defining pair keys out-of-order
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/keys-order.html
   */
  'toml/keys-order'?: Linter.RuleEntry<[]>
  /**
   * disallow mixed data types in array
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-mixed-type-in-array.html
   */
  'toml/no-mixed-type-in-array'?: Linter.RuleEntry<TomlNoMixedTypeInArray>
  /**
   * disallow hexadecimal, octal and binary integer
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-non-decimal-integer.html
   */
  'toml/no-non-decimal-integer'?: Linter.RuleEntry<TomlNoNonDecimalInteger>
  /**
   * disallow spacing around infix operators
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-space-dots.html
   */
  'toml/no-space-dots'?: Linter.RuleEntry<[]>
  /**
   * disallow number separators that to not enhance readability.
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-unreadable-number-separator.html
   */
  'toml/no-unreadable-number-separator'?: Linter.RuleEntry<[]>
  /**
   * require or disallow padding lines between pairs
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/padding-line-between-pairs.html
   */
  'toml/padding-line-between-pairs'?: Linter.RuleEntry<[]>
  /**
   * require or disallow padding lines between tables
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/padding-line-between-tables.html
   */
  'toml/padding-line-between-tables'?: Linter.RuleEntry<[]>
  /**
   * disallow precision of fractional seconds greater than the specified value.
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/precision-of-fractional-seconds.html
   */
  'toml/precision-of-fractional-seconds'?: Linter.RuleEntry<TomlPrecisionOfFractionalSeconds>
  /**
   * disallow precision of integer greater than the specified value.
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/precision-of-integer.html
   */
  'toml/precision-of-integer'?: Linter.RuleEntry<TomlPrecisionOfInteger>
  /**
   * require or disallow quotes around keys
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/quoted-keys.html
   */
  'toml/quoted-keys'?: Linter.RuleEntry<TomlQuotedKeys>
  /**
   * require spacing around equals sign
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/space-eq-sign.html
   * @deprecated
   */
  'toml/space-eq-sign'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent spacing after the `#` in a comment
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/spaced-comment.html
   */
  'toml/spaced-comment'?: Linter.RuleEntry<TomlSpacedComment>
  /**
   * enforce consistent spacing inside table brackets
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/table-bracket-spacing.html
   */
  'toml/table-bracket-spacing'?: Linter.RuleEntry<TomlTableBracketSpacing>
  /**
   * disallow defining tables out-of-order
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/tables-order.html
   */
  'toml/tables-order'?: Linter.RuleEntry<[]>
  /**
   * disallow parsing errors in Vue custom blocks
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/vue-custom-block/no-parsing-error.html
   */
  'toml/vue-custom-block/no-parsing-error'?: Linter.RuleEntry<[]>
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/better-regex.md
   */
  'unicorn/better-regex'?: Linter.RuleEntry<UnicornBetterRegex>
  /**
   * Enforce a specific parameter name in catch clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/catch-error-name.md
   */
  'unicorn/catch-error-name'?: Linter.RuleEntry<UnicornCatchErrorName>
  /**
   * Enforce consistent assertion style with `node:assert`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/consistent-assert.md
   */
  'unicorn/consistent-assert'?: Linter.RuleEntry<[]>
  /**
   * Prefer passing `Date` directly to the constructor when cloning.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/consistent-date-clone.md
   */
  'unicorn/consistent-date-clone'?: Linter.RuleEntry<[]>
  /**
   * Use destructured variables over properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/consistent-destructuring.md
   */
  'unicorn/consistent-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/consistent-empty-array-spread.md
   */
  'unicorn/consistent-empty-array-spread'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/consistent-existence-index-check.md
   */
  'unicorn/consistent-existence-index-check'?: Linter.RuleEntry<[]>
  /**
   * Move function definitions to the highest possible scope.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/consistent-function-scoping.md
   */
  'unicorn/consistent-function-scoping'?: Linter.RuleEntry<UnicornConsistentFunctionScoping>
  /**
   * Enforce consistent style for escaping `${` in template literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/consistent-template-literal-escape.md
   */
  'unicorn/consistent-template-literal-escape'?: Linter.RuleEntry<[]>
  /**
   * Enforce correct `Error` subclassing.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/custom-error-definition.md
   */
  'unicorn/custom-error-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforce no spaces between braces.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/empty-brace-spaces.md
   */
  'unicorn/empty-brace-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/error-message.md
   */
  'unicorn/error-message'?: Linter.RuleEntry<[]>
  /**
   * Require escape sequences to use uppercase or lowercase values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/escape-case.md
   */
  'unicorn/escape-case'?: Linter.RuleEntry<UnicornEscapeCase>
  /**
   * Add expiration conditions to TODO comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/expiring-todo-comments.md
   */
  'unicorn/expiring-todo-comments'?: Linter.RuleEntry<UnicornExpiringTodoComments>
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/explicit-length-check.md
   */
  'unicorn/explicit-length-check'?: Linter.RuleEntry<UnicornExplicitLengthCheck>
  /**
   * Enforce a case style for filenames.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/filename-case.md
   */
  'unicorn/filename-case'?: Linter.RuleEntry<UnicornFilenameCase>
  /**
   * Enforce specific import styles per module.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/import-style.md
   */
  'unicorn/import-style'?: Linter.RuleEntry<UnicornImportStyle>
  /**
   * Prevent usage of variables from outside the scope of isolated functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/isolated-functions.md
   */
  'unicorn/isolated-functions'?: Linter.RuleEntry<UnicornIsolatedFunctions>
  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/new-for-builtins.md
   */
  'unicorn/new-for-builtins'?: Linter.RuleEntry<[]>
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-abusive-eslint-disable.md
   */
  'unicorn/no-abusive-eslint-disable'?: Linter.RuleEntry<[]>
  /**
   * Disallow recursive access to `this` within getters and setters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-accessor-recursion.md
   */
  'unicorn/no-accessor-recursion'?: Linter.RuleEntry<[]>
  /**
   * Disallow anonymous functions and classes as the default export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-anonymous-default-export.md
   */
  'unicorn/no-anonymous-default-export'?: Linter.RuleEntry<[]>
  /**
   * Prevent passing a function reference directly to iterator methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-array-callback-reference.md
   */
  'unicorn/no-array-callback-reference'?: Linter.RuleEntry<[]>
  /**
   * Prefer `for…of` over the `forEach` method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-array-for-each.md
   */
  'unicorn/no-array-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `this` argument in array methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-array-method-this-argument.md
   */
  'unicorn/no-array-method-this-argument'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/prefer-single-call` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/deleted-and-deprecated-rules.md#no-array-push-push
   * @deprecated
   */
  'unicorn/no-array-push-push'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-array-reduce.md
   */
  'unicorn/no-array-reduce'?: Linter.RuleEntry<UnicornNoArrayReduce>
  /**
   * Prefer `Array#toReversed()` over `Array#reverse()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-array-reverse.md
   */
  'unicorn/no-array-reverse'?: Linter.RuleEntry<UnicornNoArrayReverse>
  /**
   * Prefer `Array#toSorted()` over `Array#sort()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-array-sort.md
   */
  'unicorn/no-array-sort'?: Linter.RuleEntry<UnicornNoArraySort>
  /**
   * Disallow member access from await expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-await-expression-member.md
   */
  'unicorn/no-await-expression-member'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `await` in `Promise` method parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-await-in-promise-methods.md
   */
  'unicorn/no-await-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-console-spaces.md
   */
  'unicorn/no-console-spaces'?: Linter.RuleEntry<[]>
  /**
   * Do not use `document.cookie` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-document-cookie.md
   */
  'unicorn/no-document-cookie'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty files.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-empty-file.md
   */
  'unicorn/no-empty-file'?: Linter.RuleEntry<[]>
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-for-loop.md
   */
  'unicorn/no-for-loop'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-hex-escape.md
   */
  'unicorn/no-hex-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow immediate mutation after variable assignment.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-immediate-mutation.md
   */
  'unicorn/no-immediate-mutation'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/no-instanceof-builtins` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/deleted-and-deprecated-rules.md#no-instanceof-array
   * @deprecated
   */
  'unicorn/no-instanceof-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow `instanceof` with built-in objects
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-instanceof-builtins.md
   */
  'unicorn/no-instanceof-builtins'?: Linter.RuleEntry<UnicornNoInstanceofBuiltins>
  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-invalid-fetch-options.md
   */
  'unicorn/no-invalid-fetch-options'?: Linter.RuleEntry<[]>
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-invalid-remove-event-listener.md
   */
  'unicorn/no-invalid-remove-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Disallow identifiers starting with `new` or `class`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-keyword-prefix.md
   */
  'unicorn/no-keyword-prefix'?: Linter.RuleEntry<UnicornNoKeywordPrefix>
  /**
   * Replaced by `unicorn/no-unnecessary-slice-end` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/deleted-and-deprecated-rules.md#no-length-as-slice-end
   * @deprecated
   */
  'unicorn/no-length-as-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-lonely-if.md
   */
  'unicorn/no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-magic-array-flat-depth.md
   */
  'unicorn/no-magic-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow named usage of default import and export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-named-default.md
   */
  'unicorn/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-negated-condition.md
   */
  'unicorn/no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated expression in equality check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-negation-in-equality-check.md
   */
  'unicorn/no-negation-in-equality-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-nested-ternary.md
   */
  'unicorn/no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new Array()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-new-array.md
   */
  'unicorn/no-new-array'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-new-buffer.md
   */
  'unicorn/no-new-buffer'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of the `null` literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-null.md
   */
  'unicorn/no-null'?: Linter.RuleEntry<UnicornNoNull>
  /**
   * Disallow the use of objects as default parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-object-as-default-parameter.md
   */
  'unicorn/no-object-as-default-parameter'?: Linter.RuleEntry<[]>
  /**
   * Disallow `process.exit()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-process-exit.md
   */
  'unicorn/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-single-promise-in-promise-methods.md
   */
  'unicorn/no-single-promise-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes that only have static members.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-static-only-class.md
   */
  'unicorn/no-static-only-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow `then` property.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-thenable.md
   */
  'unicorn/no-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning `this` to a variable.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-this-assignment.md
   */
  'unicorn/no-this-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing `undefined` using `typeof`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-typeof-undefined.md
   */
  'unicorn/no-typeof-undefined'?: Linter.RuleEntry<UnicornNoTypeofUndefined>
  /**
   * Disallow using `1` as the `depth` argument of `Array#flat()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-unnecessary-array-flat-depth.md
   */
  'unicorn/no-unnecessary-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#{splice,toSpliced}()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-unnecessary-array-splice-count.md
   */
  'unicorn/no-unnecessary-array-splice-count'?: Linter.RuleEntry<[]>
  /**
   * Disallow awaiting non-promise values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-unnecessary-await.md
   */
  'unicorn/no-unnecessary-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-unnecessary-polyfills.md
   */
  'unicorn/no-unnecessary-polyfills'?: Linter.RuleEntry<UnicornNoUnnecessaryPolyfills>
  /**
   * Disallow using `.length` or `Infinity` as the `end` argument of `{Array,String,TypedArray}#slice()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-unnecessary-slice-end.md
   */
  'unicorn/no-unnecessary-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable array destructuring.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-unreadable-array-destructuring.md
   */
  'unicorn/no-unreadable-array-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable IIFEs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-unreadable-iife.md
   */
  'unicorn/no-unreadable-iife'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused object properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-unused-properties.md
   */
  'unicorn/no-unused-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless values or fallbacks in `Set`, `Map`, `WeakSet`, or `WeakMap`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-useless-collection-argument.md
   */
  'unicorn/no-useless-collection-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `Error.captureStackTrace(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-useless-error-capture-stack-trace.md
   */
  'unicorn/no-useless-error-capture-stack-trace'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless fallback when spreading in object literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-useless-fallback-in-spread.md
   */
  'unicorn/no-useless-fallback-in-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `.toArray()` on iterators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-useless-iterator-to-array.md
   */
  'unicorn/no-useless-iterator-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless array length check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-useless-length-check.md
   */
  'unicorn/no-useless-length-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-useless-promise-resolve-reject.md
   */
  'unicorn/no-useless-promise-resolve-reject'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary spread.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-useless-spread.md
   */
  'unicorn/no-useless-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless case in switch statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-useless-switch-case.md
   */
  'unicorn/no-useless-switch-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `undefined`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-useless-undefined.md
   */
  'unicorn/no-useless-undefined'?: Linter.RuleEntry<UnicornNoUselessUndefined>
  /**
   * Disallow number literals with zero fractions or dangling dots.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/no-zero-fractions.md
   */
  'unicorn/no-zero-fractions'?: Linter.RuleEntry<[]>
  /**
   * Enforce proper case for numeric literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/number-literal-case.md
   */
  'unicorn/number-literal-case'?: Linter.RuleEntry<UnicornNumberLiteralCase>
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/numeric-separators-style.md
   */
  'unicorn/numeric-separators-style'?: Linter.RuleEntry<UnicornNumericSeparatorsStyle>
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-add-event-listener.md
   */
  'unicorn/prefer-add-event-listener'?: Linter.RuleEntry<UnicornPreferAddEventListener>
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-array-find.md
   */
  'unicorn/prefer-array-find'?: Linter.RuleEntry<UnicornPreferArrayFind>
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-array-flat.md
   */
  'unicorn/prefer-array-flat'?: Linter.RuleEntry<UnicornPreferArrayFlat>
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-array-flat-map.md
   */
  'unicorn/prefer-array-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-array-index-of.md
   */
  'unicorn/prefer-array-index-of'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-array-some.md
   */
  'unicorn/prefer-array-some'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-at.md
   */
  'unicorn/prefer-at'?: Linter.RuleEntry<UnicornPreferAt>
  /**
   * Prefer `BigInt` literals over the constructor.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-bigint-literals.md
   */
  'unicorn/prefer-bigint-literals'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-blob-reading-methods.md
   */
  'unicorn/prefer-blob-reading-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer class field declarations over `this` assignments in constructors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-class-fields.md
   */
  'unicorn/prefer-class-fields'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Element#classList.toggle()` to toggle class names.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-classlist-toggle.md
   */
  'unicorn/prefer-classlist-toggle'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-code-point.md
   */
  'unicorn/prefer-code-point'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-date-now.md
   */
  'unicorn/prefer-date-now'?: Linter.RuleEntry<[]>
  /**
   * Prefer default parameters over reassignment.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-default-parameters.md
   */
  'unicorn/prefer-default-parameters'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-dom-node-append.md
   */
  'unicorn/prefer-dom-node-append'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-dom-node-dataset.md
   */
  'unicorn/prefer-dom-node-dataset'?: Linter.RuleEntry<[]>
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-dom-node-remove.md
   */
  'unicorn/prefer-dom-node-remove'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.textContent` over `.innerText`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-dom-node-text-content.md
   */
  'unicorn/prefer-dom-node-text-content'?: Linter.RuleEntry<[]>
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-event-target.md
   */
  'unicorn/prefer-event-target'?: Linter.RuleEntry<[]>
  /**
   * Prefer `export…from` when re-exporting.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-export-from.md
   */
  'unicorn/prefer-export-from'?: Linter.RuleEntry<UnicornPreferExportFrom>
  /**
   * Prefer `globalThis` over `window`, `self`, and `global`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-global-this.md
   */
  'unicorn/prefer-global-this'?: Linter.RuleEntry<[]>
  /**
   * Prefer `import.meta.{dirname,filename}` over legacy techniques for getting file paths.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-import-meta-properties.md
   */
  'unicorn/prefer-import-meta-properties'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-includes.md
   */
  'unicorn/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Prefer reading a JSON file as a buffer.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-json-parse-buffer.md
   */
  'unicorn/prefer-json-parse-buffer'?: Linter.RuleEntry<[]>
  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-keyboard-event-key.md
   */
  'unicorn/prefer-keyboard-event-key'?: Linter.RuleEntry<[]>
  /**
   * Prefer using a logical operator over a ternary.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-logical-operator-over-ternary.md
   */
  'unicorn/prefer-logical-operator-over-ternary'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-math-min-max.md
   */
  'unicorn/prefer-math-min-max'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-math-trunc.md
   */
  'unicorn/prefer-math-trunc'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-modern-dom-apis.md
   */
  'unicorn/prefer-modern-dom-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-modern-math-apis.md
   */
  'unicorn/prefer-modern-math-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-module.md
   */
  'unicorn/prefer-module'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-native-coercion-functions.md
   */
  'unicorn/prefer-native-coercion-functions'?: Linter.RuleEntry<[]>
  /**
   * Prefer negative index over `.length - index` when possible.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-negative-index.md
   */
  'unicorn/prefer-negative-index'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-node-protocol.md
   */
  'unicorn/prefer-node-protocol'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number` static properties over global ones.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-number-properties.md
   */
  'unicorn/prefer-number-properties'?: Linter.RuleEntry<UnicornPreferNumberProperties>
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-object-from-entries.md
   */
  'unicorn/prefer-object-from-entries'?: Linter.RuleEntry<UnicornPreferObjectFromEntries>
  /**
   * Prefer omitting the `catch` binding parameter.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-optional-catch-binding.md
   */
  'unicorn/prefer-optional-catch-binding'?: Linter.RuleEntry<[]>
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-prototype-methods.md
   */
  'unicorn/prefer-prototype-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-query-selector.md
   */
  'unicorn/prefer-query-selector'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-reflect-apply.md
   */
  'unicorn/prefer-reflect-apply'?: Linter.RuleEntry<[]>
  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-regexp-test.md
   */
  'unicorn/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Response.json()` over `new Response(JSON.stringify())`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-response-static-json.md
   */
  'unicorn/prefer-response-static-json'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-set-has.md
   */
  'unicorn/prefer-set-has'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-set-size.md
   */
  'unicorn/prefer-set-size'?: Linter.RuleEntry<[]>
  /**
   * Prefer simple conditions first in logical expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-simple-condition-first.md
   */
  'unicorn/prefer-simple-condition-first'?: Linter.RuleEntry<[]>
  /**
   * Enforce combining multiple `Array#push()`, `Element#classList.{add,remove}()`, and `importScripts()` into one call.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-single-call.md
   */
  'unicorn/prefer-single-call'?: Linter.RuleEntry<UnicornPreferSingleCall>
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-spread.md
   */
  'unicorn/prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-string-raw.md
   */
  'unicorn/prefer-string-raw'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-string-replace-all.md
   */
  'unicorn/prefer-string-replace-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-string-slice.md
   */
  'unicorn/prefer-string-slice'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-string-starts-ends-with.md
   */
  'unicorn/prefer-string-starts-ends-with'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-string-trim-start-end.md
   */
  'unicorn/prefer-string-trim-start-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-structured-clone.md
   */
  'unicorn/prefer-structured-clone'?: Linter.RuleEntry<UnicornPreferStructuredClone>
  /**
   * Prefer `switch` over multiple `else-if`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-switch.md
   */
  'unicorn/prefer-switch'?: Linter.RuleEntry<UnicornPreferSwitch>
  /**
   * Prefer ternary expressions over simple `if-else` statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-ternary.md
   */
  'unicorn/prefer-ternary'?: Linter.RuleEntry<UnicornPreferTernary>
  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-top-level-await.md
   */
  'unicorn/prefer-top-level-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prefer-type-error.md
   */
  'unicorn/prefer-type-error'?: Linter.RuleEntry<[]>
  /**
   * Prevent abbreviations.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/prevent-abbreviations.md
   */
  'unicorn/prevent-abbreviations'?: Linter.RuleEntry<UnicornPreventAbbreviations>
  /**
   * Enforce consistent relative URL style.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/relative-url-style.md
   */
  'unicorn/relative-url-style'?: Linter.RuleEntry<UnicornRelativeUrlStyle>
  /**
   * Enforce using the separator argument with `Array#join()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/require-array-join-separator.md
   */
  'unicorn/require-array-join-separator'?: Linter.RuleEntry<[]>
  /**
   * Require non-empty module attributes for imports and exports
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/require-module-attributes.md
   */
  'unicorn/require-module-attributes'?: Linter.RuleEntry<[]>
  /**
   * Require non-empty specifier list in import and export statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/require-module-specifiers.md
   */
  'unicorn/require-module-specifiers'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/require-number-to-fixed-digits-argument.md
   */
  'unicorn/require-number-to-fixed-digits-argument'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/require-post-message-target-origin.md
   */
  'unicorn/require-post-message-target-origin'?: Linter.RuleEntry<[]>
  /**
   * Enforce better string content.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/string-content.md
   */
  'unicorn/string-content'?: Linter.RuleEntry<UnicornStringContent>
  /**
   * Enforce consistent brace style for `case` clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/switch-case-braces.md
   */
  'unicorn/switch-case-braces'?: Linter.RuleEntry<UnicornSwitchCaseBraces>
  /**
   * Enforce consistent `break`/`return`/`continue`/`throw` position in `case` clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/switch-case-break-position.md
   */
  'unicorn/switch-case-break-position'?: Linter.RuleEntry<[]>
  /**
   * Fix whitespace-insensitive template indentation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/template-indent.md
   */
  'unicorn/template-indent'?: Linter.RuleEntry<UnicornTemplateIndent>
  /**
   * Enforce consistent case for text encoding identifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/text-encoding-identifier-case.md
   */
  'unicorn/text-encoding-identifier-case'?: Linter.RuleEntry<UnicornTextEncodingIdentifierCase>
  /**
   * Require `new` when creating an error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v64.0.0/docs/rules/throw-new-error.md
   */
  'unicorn/throw-new-error'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused variables
   * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
   */
  'unused-imports/no-unused-imports'?: Linter.RuleEntry<UnusedImportsNoUnusedImports>
  /**
   * Disallow unused variables
   * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-vars.md
   */
  'unused-imports/no-unused-vars'?: Linter.RuleEntry<UnusedImportsNoUnusedVars>
  /**
   * require or disallow block style mappings.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html
   */
  'yml/block-mapping'?: Linter.RuleEntry<YmlBlockMapping>
  /**
   * enforce consistent line breaks after `:` indicator
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html
   */
  'yml/block-mapping-colon-indicator-newline'?: Linter.RuleEntry<YmlBlockMappingColonIndicatorNewline>
  /**
   * enforce consistent line breaks after `?` indicator
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html
   */
  'yml/block-mapping-question-indicator-newline'?: Linter.RuleEntry<YmlBlockMappingQuestionIndicatorNewline>
  /**
   * require or disallow block style sequences.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html
   */
  'yml/block-sequence'?: Linter.RuleEntry<YmlBlockSequence>
  /**
   * enforce consistent line breaks after `-` indicator
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html
   */
  'yml/block-sequence-hyphen-indicator-newline'?: Linter.RuleEntry<YmlBlockSequenceHyphenIndicatorNewline>
  /**
   * enforce YAML file extension
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html
   */
  'yml/file-extension'?: Linter.RuleEntry<YmlFileExtension>
  /**
   * enforce consistent line breaks inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html
   */
  'yml/flow-mapping-curly-newline'?: Linter.RuleEntry<YmlFlowMappingCurlyNewline>
  /**
   * enforce consistent spacing inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html
   */
  'yml/flow-mapping-curly-spacing'?: Linter.RuleEntry<YmlFlowMappingCurlySpacing>
  /**
   * enforce linebreaks after opening and before closing flow sequence brackets
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html
   */
  'yml/flow-sequence-bracket-newline'?: Linter.RuleEntry<YmlFlowSequenceBracketNewline>
  /**
   * enforce consistent spacing inside flow sequence brackets
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html
   */
  'yml/flow-sequence-bracket-spacing'?: Linter.RuleEntry<YmlFlowSequenceBracketSpacing>
  /**
   * enforce consistent indentation
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html
   */
  'yml/indent'?: Linter.RuleEntry<YmlIndent>
  /**
   * enforce naming convention to key names
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html
   */
  'yml/key-name-casing'?: Linter.RuleEntry<YmlKeyNameCasing>
  /**
   * enforce consistent spacing between keys and values in mapping pairs
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html
   */
  'yml/key-spacing'?: Linter.RuleEntry<YmlKeySpacing>
  /**
   * disallow empty document
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html
   */
  'yml/no-empty-document'?: Linter.RuleEntry<[]>
  /**
   * disallow empty mapping keys
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html
   */
  'yml/no-empty-key'?: Linter.RuleEntry<[]>
  /**
   * disallow empty mapping values
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html
   */
  'yml/no-empty-mapping-value'?: Linter.RuleEntry<[]>
  /**
   * disallow empty sequence entries
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html
   */
  'yml/no-empty-sequence-entry'?: Linter.RuleEntry<[]>
  /**
   * disallow irregular whitespace
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html
   */
  'yml/no-irregular-whitespace'?: Linter.RuleEntry<YmlNoIrregularWhitespace>
  /**
   * disallow multiple empty lines
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html
   */
  'yml/no-multiple-empty-lines'?: Linter.RuleEntry<YmlNoMultipleEmptyLines>
  /**
   * disallow tabs for indentation.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html
   */
  'yml/no-tab-indent'?: Linter.RuleEntry<[]>
  /**
   * disallow trailing zeros for floats
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-zeros.html
   */
  'yml/no-trailing-zeros'?: Linter.RuleEntry<[]>
  /**
   * require or disallow plain style scalar.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html
   */
  'yml/plain-scalar'?: Linter.RuleEntry<YmlPlainScalar>
  /**
   * enforce the consistent use of either double, or single quotes
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html
   */
  'yml/quotes'?: Linter.RuleEntry<YmlQuotes>
  /**
   * disallow mapping keys other than strings
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html
   */
  'yml/require-string-key'?: Linter.RuleEntry<[]>
  /**
   * require mapping keys to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-keys.html
   */
  'yml/sort-keys'?: Linter.RuleEntry<YmlSortKeys>
  /**
   * require sequence values to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html
   */
  'yml/sort-sequence-values'?: Linter.RuleEntry<YmlSortSequenceValues>
  /**
   * enforce consistent spacing after the `#` in a comment
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html
   */
  'yml/spaced-comment'?: Linter.RuleEntry<YmlSpacedComment>
  /**
   * disallow parsing errors in Vue custom blocks
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html
   */
  'yml/vue-custom-block/no-parsing-error'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- @next/next/no-html-link-for-pages -----
type NextNextNoHtmlLinkForPages = []|[(string | string[])]
// ----- @stylistic/array-bracket-newline -----
type StylisticArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- @stylistic/array-bracket-spacing -----
type StylisticArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- @stylistic/array-element-newline -----
type StylisticArrayElementNewline = []|[(_StylisticArrayElementNewlineBasicConfig | {
  ArrayExpression?: _StylisticArrayElementNewlineBasicConfig
  ArrayPattern?: _StylisticArrayElementNewlineBasicConfig
})]
type _StylisticArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  consistent?: boolean
  multiline?: boolean
  minItems?: (number | null)
})
// ----- @stylistic/arrow-parens -----
type StylisticArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]
// ----- @stylistic/arrow-spacing -----
type StylisticArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/block-spacing -----
type StylisticBlockSpacing = []|[("always" | "never")]
// ----- @stylistic/brace-style -----
type StylisticBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- @stylistic/comma-dangle -----
type StylisticCommaDangle = []|[(_StylisticCommaDangleValue | {
  arrays?: _StylisticCommaDangleValueWithIgnore
  objects?: _StylisticCommaDangleValueWithIgnore
  imports?: _StylisticCommaDangleValueWithIgnore
  exports?: _StylisticCommaDangleValueWithIgnore
  functions?: _StylisticCommaDangleValueWithIgnore
  importAttributes?: _StylisticCommaDangleValueWithIgnore
  dynamicImports?: _StylisticCommaDangleValueWithIgnore
  enums?: _StylisticCommaDangleValueWithIgnore
  generics?: _StylisticCommaDangleValueWithIgnore
  tuples?: _StylisticCommaDangleValueWithIgnore
})]
type _StylisticCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _StylisticCommaDangleValueWithIgnore = ("always-multiline" | "always" | "never" | "only-multiline" | "ignore")
// ----- @stylistic/comma-spacing -----
type StylisticCommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/comma-style -----
type StylisticCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- @stylistic/computed-property-spacing -----
type StylisticComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]
// ----- @stylistic/curly-newline -----
type StylisticCurlyNewline = []|[(("always" | "never") | {
  IfStatementConsequent?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  IfStatementAlternative?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  DoWhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForInStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForOfStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchCase?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementHandler?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementFinalizer?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  BlockStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ArrowFunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  Property?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ClassBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  StaticBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WithStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSModuleBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  multiline?: boolean
  minElements?: number
  consistent?: boolean
})]
// ----- @stylistic/dot-location -----
type StylisticDotLocation = []|[("object" | "property")]
// ----- @stylistic/eol-last -----
type StylisticEolLast = []|[("always" | "never" | "unix" | "windows")]
// ----- @stylistic/exp-jsx-props-style -----
type StylisticExpJsxPropsStyle = []|[{
  singleLine?: {
    maxItems?: number
  }
  multiLine?: {
    minItems?: number
    maxItemsPerLine?: number
  }
}]
// ----- @stylistic/exp-list-style -----
type StylisticExpListStyle = []|[{
  singleLine?: _StylisticExpListStyle_SingleLineConfig
  multiLine?: _StylisticExpListStyle_MultiLineConfig
  overrides?: {
    "()"?: (_StylisticExpListStyle_BaseConfig | "off")
    "[]"?: (_StylisticExpListStyle_BaseConfig | "off")
    "{}"?: (_StylisticExpListStyle_BaseConfig | "off")
    "<>"?: (_StylisticExpListStyle_BaseConfig | "off")
    ArrayExpression?: (_StylisticExpListStyle_BaseConfig | "off")
    ArrayPattern?: (_StylisticExpListStyle_BaseConfig | "off")
    ArrowFunctionExpression?: (_StylisticExpListStyle_BaseConfig | "off")
    CallExpression?: (_StylisticExpListStyle_BaseConfig | "off")
    ExportNamedDeclaration?: (_StylisticExpListStyle_BaseConfig | "off")
    FunctionDeclaration?: (_StylisticExpListStyle_BaseConfig | "off")
    FunctionExpression?: (_StylisticExpListStyle_BaseConfig | "off")
    IfStatement?: (_StylisticExpListStyle_BaseConfig | "off")
    ImportAttributes?: (_StylisticExpListStyle_BaseConfig | "off")
    ImportDeclaration?: (_StylisticExpListStyle_BaseConfig | "off")
    JSONArrayExpression?: (_StylisticExpListStyle_BaseConfig | "off")
    JSONObjectExpression?: (_StylisticExpListStyle_BaseConfig | "off")
    NewExpression?: (_StylisticExpListStyle_BaseConfig | "off")
    ObjectExpression?: (_StylisticExpListStyle_BaseConfig | "off")
    ObjectPattern?: (_StylisticExpListStyle_BaseConfig | "off")
    TSDeclareFunction?: (_StylisticExpListStyle_BaseConfig | "off")
    TSEnumBody?: (_StylisticExpListStyle_BaseConfig | "off")
    TSFunctionType?: (_StylisticExpListStyle_BaseConfig | "off")
    TSInterfaceBody?: (_StylisticExpListStyle_BaseConfig | "off")
    TSTupleType?: (_StylisticExpListStyle_BaseConfig | "off")
    TSTypeLiteral?: (_StylisticExpListStyle_BaseConfig | "off")
    TSTypeParameterDeclaration?: (_StylisticExpListStyle_BaseConfig | "off")
    TSTypeParameterInstantiation?: (_StylisticExpListStyle_BaseConfig | "off")
  }
}]
interface _StylisticExpListStyle_SingleLineConfig {
  spacing?: ("always" | "never")
  maxItems?: number
}
interface _StylisticExpListStyle_MultiLineConfig {
  minItems?: number
}
interface _StylisticExpListStyle_BaseConfig {
  singleLine?: _StylisticExpListStyle_SingleLineConfig
  multiline?: _StylisticExpListStyle_MultiLineConfig
}
// ----- @stylistic/function-call-argument-newline -----
type StylisticFunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]
// ----- @stylistic/function-call-spacing -----
type StylisticFunctionCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- @stylistic/function-paren-newline -----
type StylisticFunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]
// ----- @stylistic/generator-star-spacing -----
type StylisticGeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  shorthand?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]
// ----- @stylistic/implicit-arrow-linebreak -----
type StylisticImplicitArrowLinebreak = []|[("beside" | "below")]
// ----- @stylistic/indent -----
type StylisticIndent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
    using?: (number | ("first" | "off"))
  })
  assignmentOperator?: (number | "off")
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
    returnType?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
    returnType?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: (boolean | {
    CallExpression?: boolean
    AwaitExpression?: boolean
    NewExpression?: boolean
  })
  offsetTernaryExpressionsOffsetCallExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
  tabLength?: number
}]
// ----- @stylistic/indent-binary-ops -----
type StylisticIndentBinaryOps = []|[(number | "tab")]
// ----- @stylistic/jsx-closing-bracket-location -----
type StylisticJsxClosingBracketLocation = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
  selfClosing?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
})]
// ----- @stylistic/jsx-closing-tag-location -----
type StylisticJsxClosingTagLocation = []|[("tag-aligned" | "line-aligned")]
// ----- @stylistic/jsx-curly-brace-presence -----
type StylisticJsxCurlyBracePresence = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]
// ----- @stylistic/jsx-curly-newline -----
type StylisticJsxCurlyNewline = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]
// ----- @stylistic/jsx-curly-spacing -----
type StylisticJsxCurlySpacing = []|[({
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
  attributes?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
  children?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
} | ("always" | "never"))]|[({
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
  attributes?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
  children?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
} | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
}]
// ----- @stylistic/jsx-equals-spacing -----
type StylisticJsxEqualsSpacing = []|[("always" | "never")]
// ----- @stylistic/jsx-first-prop-new-line -----
type StylisticJsxFirstPropNewLine = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]
// ----- @stylistic/jsx-function-call-newline -----
type StylisticJsxFunctionCallNewline = []|[("always" | "multiline")]
// ----- @stylistic/jsx-indent -----
type StylisticJsxIndent = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]
// ----- @stylistic/jsx-indent-props -----
type StylisticJsxIndentProps = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
})]
// ----- @stylistic/jsx-max-props-per-line -----
type StylisticJsxMaxPropsPerLine = []|[({
  maximum?: {
    single?: number
    multi?: number
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]
// ----- @stylistic/jsx-newline -----
type StylisticJsxNewline = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]
// ----- @stylistic/jsx-one-expression-per-line -----
type StylisticJsxOneExpressionPerLine = []|[{
  allow?: ("none" | "literal" | "single-child" | "single-line" | "non-jsx")
}]
// ----- @stylistic/jsx-pascal-case -----
type StylisticJsxPascalCase = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  ignore?: string[]
}]
// ----- @stylistic/jsx-quotes -----
type StylisticJsxQuotes = []|[("prefer-single" | "prefer-double")]
// ----- @stylistic/jsx-self-closing-comp -----
type StylisticJsxSelfClosingComp = []|[{
  component?: boolean
  html?: boolean
}]
// ----- @stylistic/jsx-sort-props -----
type StylisticJsxSortProps = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (string[] | boolean)
  reservedLast?: string[]
  locale?: string
}]
// ----- @stylistic/jsx-tag-spacing -----
type StylisticJsxTagSpacing = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]
// ----- @stylistic/jsx-wrap-multilines -----
type StylisticJsxWrapMultilines = []|[{
  declaration?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  assignment?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  return?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  arrow?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  condition?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  logical?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  prop?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  propertyValue?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
}]
// ----- @stylistic/key-spacing -----
type StylisticKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
  ignoredNodes?: ("ObjectExpression" | "ObjectPattern" | "ImportDeclaration" | "ExportNamedDeclaration" | "ExportAllDeclaration" | "TSTypeLiteral" | "TSInterfaceBody" | "ClassBody")[]
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- @stylistic/keyword-spacing -----
type StylisticKeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    arguments?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    eval?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    type?: {
      before?: boolean
      after?: boolean
    }
    using?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
    accessor?: {
      before?: boolean
      after?: boolean
    }
    satisfies?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- @stylistic/line-comment-position -----
type StylisticLineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]
// ----- @stylistic/linebreak-style -----
type StylisticLinebreakStyle = []|[("unix" | "windows")]
// ----- @stylistic/lines-around-comment -----
type StylisticLinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  allowInterfaceStart?: boolean
  allowInterfaceEnd?: boolean
  allowTypeStart?: boolean
  allowTypeEnd?: boolean
  allowEnumStart?: boolean
  allowEnumEnd?: boolean
  allowModuleStart?: boolean
  allowModuleEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- @stylistic/lines-between-class-members -----
type StylisticLinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
  exceptAfterOverload?: boolean
}]
// ----- @stylistic/max-len -----
type StylisticMaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]
// ----- @stylistic/max-statements-per-line -----
type StylisticMaxStatementsPerLine = []|[{
  max?: number
  ignoredNodes?: ("BreakStatement" | "ClassDeclaration" | "ContinueStatement" | "DebuggerStatement" | "DoWhileStatement" | "ExpressionStatement" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "IfStatement" | "ImportDeclaration" | "LabeledStatement" | "ReturnStatement" | "SwitchStatement" | "ThrowStatement" | "TryStatement" | "VariableDeclaration" | "WhileStatement" | "WithStatement" | "ExportNamedDeclaration" | "ExportDefaultDeclaration" | "ExportAllDeclaration")[]
}]
// ----- @stylistic/member-delimiter-style -----
type StylisticMemberDelimiterStyle = []|[{
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
  overrides?: {
    interface?: _StylisticMemberDelimiterStyle_DelimiterConfig
    typeLiteral?: _StylisticMemberDelimiterStyle_DelimiterConfig
  }
  multilineDetection?: ("brackets" | "last-member")
}]
interface _StylisticMemberDelimiterStyle_DelimiterConfig {
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
}
// ----- @stylistic/multiline-comment-style -----
type StylisticMultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
  checkExclamation?: boolean
}])
// ----- @stylistic/multiline-ternary -----
type StylisticMultilineTernary = []|[("always" | "always-multiline" | "never")]|[("always" | "always-multiline" | "never"), {
  ignoreJSX?: boolean
}]
// ----- @stylistic/new-parens -----
type StylisticNewParens = []|[("always" | "never")]
// ----- @stylistic/newline-per-chained-call -----
type StylisticNewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]
// ----- @stylistic/no-confusing-arrow -----
type StylisticNoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]
// ----- @stylistic/no-extra-parens -----
type StylisticNoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
  nestedConditionalExpressions?: boolean
  allowNodesInSpreadElement?: {
    ConditionalExpression?: boolean
    LogicalExpression?: boolean
    AwaitExpression?: boolean
  }
  ignoredNodes?: string[]
}])
// ----- @stylistic/no-mixed-operators -----
type StylisticNoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]
// ----- @stylistic/no-mixed-spaces-and-tabs -----
type StylisticNoMixedSpacesAndTabs = []|[("smart-tabs" | boolean)]
// ----- @stylistic/no-multi-spaces -----
type StylisticNoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
  includeTabs?: boolean
}]
// ----- @stylistic/no-multiple-empty-lines -----
type StylisticNoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- @stylistic/no-tabs -----
type StylisticNoTabs = []|[{
  allowIndentationTabs?: boolean
}]
// ----- @stylistic/no-trailing-spaces -----
type StylisticNoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- @stylistic/nonblock-statement-body-position -----
type StylisticNonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]
// ----- @stylistic/object-curly-newline -----
type StylisticObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSTypeLiteral?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSEnumBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- @stylistic/object-curly-spacing -----
type StylisticObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  overrides?: {
    ObjectPattern?: ("always" | "never")
    ObjectExpression?: ("always" | "never")
    ImportDeclaration?: ("always" | "never")
    ImportAttributes?: ("always" | "never")
    ExportNamedDeclaration?: ("always" | "never")
    ExportAllDeclaration?: ("always" | "never")
    TSMappedType?: ("always" | "never")
    TSTypeLiteral?: ("always" | "never")
    TSInterfaceBody?: ("always" | "never")
    TSEnumBody?: ("always" | "never")
  }
  emptyObjects?: ("ignore" | "always" | "never")
}]
// ----- @stylistic/object-property-newline -----
type StylisticObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
}]
// ----- @stylistic/one-var-declaration-per-line -----
type StylisticOneVarDeclarationPerLine = []|[("always" | "initializations")]
// ----- @stylistic/operator-linebreak -----
type StylisticOperatorLinebreak = []|[(("after" | "before" | "none") | null)]|[(("after" | "before" | "none") | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- @stylistic/padded-blocks -----
type StylisticPaddedBlocks = []|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
})]|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
}), {
  allowSingleLineBlocks?: boolean
}]
// ----- @stylistic/padding-line-between-statements -----
type _StylisticPaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
type _StylisticPaddingLineBetweenStatementsStatementOption = (_StylisticPaddingLineBetweenStatementsStatementMatcher | [_StylisticPaddingLineBetweenStatementsStatementMatcher, ...(_StylisticPaddingLineBetweenStatementsStatementMatcher)[]])
type _StylisticPaddingLineBetweenStatementsStatementMatcher = (_StylisticPaddingLineBetweenStatementsStatementType | _StylisticPaddingLineBetweenStatements_SelectorOption)
type _StylisticPaddingLineBetweenStatementsStatementType = ("*" | "exports" | "require" | "directive" | "iife" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "continue" | "debugger" | "default" | "do" | "for" | "if" | "import" | "switch" | "throw" | "try" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "function-overload" | "block-like" | "singleline-block-like" | "multiline-block-like" | "expression" | "singleline-expression" | "multiline-expression" | "return" | "singleline-return" | "multiline-return" | "export" | "singleline-export" | "multiline-export" | "var" | "singleline-var" | "multiline-var" | "let" | "singleline-let" | "multiline-let" | "const" | "singleline-const" | "multiline-const" | "using" | "singleline-using" | "multiline-using" | "type" | "singleline-type" | "multiline-type")
type StylisticPaddingLineBetweenStatements = {
  blankLine: _StylisticPaddingLineBetweenStatementsPaddingType
  prev: _StylisticPaddingLineBetweenStatementsStatementOption
  next: _StylisticPaddingLineBetweenStatementsStatementOption
}[]
interface _StylisticPaddingLineBetweenStatements_SelectorOption {
  selector: string
  lineMode?: ("any" | "singleline" | "multiline")
}
// ----- @stylistic/quote-props -----
type StylisticQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- @stylistic/quotes -----
type StylisticQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: (boolean | ("never" | "avoidEscape" | "always"))
  ignoreStringLiterals?: boolean
})]
// ----- @stylistic/rest-spread-spacing -----
type StylisticRestSpreadSpacing = []|[("always" | "never")]
// ----- @stylistic/semi -----
type StylisticSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- @stylistic/semi-spacing -----
type StylisticSemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/semi-style -----
type StylisticSemiStyle = []|[("last" | "first")]
// ----- @stylistic/space-before-blocks -----
type StylisticSpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
  modules?: ("always" | "never" | "off")
})]
// ----- @stylistic/space-before-function-paren -----
type StylisticSpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
  catch?: ("always" | "never" | "ignore")
})]
// ----- @stylistic/space-in-parens -----
type StylisticSpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- @stylistic/space-infix-ops -----
type StylisticSpaceInfixOps = []|[{
  int32Hint?: boolean
  ignoreTypes?: boolean
}]
// ----- @stylistic/space-unary-ops -----
type StylisticSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- @stylistic/spaced-comment -----
type StylisticSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]
// ----- @stylistic/switch-colon-spacing -----
type StylisticSwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/template-curly-spacing -----
type StylisticTemplateCurlySpacing = []|[("always" | "never")]
// ----- @stylistic/template-tag-spacing -----
type StylisticTemplateTagSpacing = []|[("always" | "never")]
// ----- @stylistic/type-annotation-spacing -----
type StylisticTypeAnnotationSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    colon?: _StylisticTypeAnnotationSpacing_SpacingConfig
    arrow?: ("ignore" | _StylisticTypeAnnotationSpacing_SpacingConfig)
    variable?: _StylisticTypeAnnotationSpacing_SpacingConfig
    parameter?: _StylisticTypeAnnotationSpacing_SpacingConfig
    property?: _StylisticTypeAnnotationSpacing_SpacingConfig
    returnType?: _StylisticTypeAnnotationSpacing_SpacingConfig
  }
}]
interface _StylisticTypeAnnotationSpacing_SpacingConfig {
  before?: boolean
  after?: boolean
}
// ----- @stylistic/wrap-iife -----
type StylisticWrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]
// ----- @stylistic/yield-star-spacing -----
type StylisticYieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]
// ----- @typescript-eslint/array-type -----
type TypescriptEslintArrayType = []|[{
  
  default?: ("array" | "generic" | "array-simple")
  
  readonly?: ("array" | "generic" | "array-simple")
}]
// ----- @typescript-eslint/ban-ts-comment -----
type TypescriptEslintBanTsComment = []|[{
  
  minimumDescriptionLength?: number
  
  "ts-check"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-expect-error"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-ignore"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-nocheck"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
}]
// ----- @typescript-eslint/class-literal-property-style -----
type TypescriptEslintClassLiteralPropertyStyle = []|[("fields" | "getters")]
// ----- @typescript-eslint/class-methods-use-this -----
type TypescriptEslintClassMethodsUseThis = []|[{
  
  enforceForClassFields?: boolean
  
  exceptMethods?: string[]
  
  ignoreClassesThatImplementAnInterface?: (boolean | "public-fields")
  
  ignoreOverrideMethods?: boolean
}]
// ----- @typescript-eslint/consistent-generic-constructors -----
type TypescriptEslintConsistentGenericConstructors = []|[("type-annotation" | "constructor")]
// ----- @typescript-eslint/consistent-indexed-object-style -----
type TypescriptEslintConsistentIndexedObjectStyle = []|[("record" | "index-signature")]
// ----- @typescript-eslint/consistent-return -----
type TypescriptEslintConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- @typescript-eslint/consistent-type-assertions -----
type TypescriptEslintConsistentTypeAssertions = []|[({
  
  assertionStyle: "never"
} | {
  
  arrayLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
  
  assertionStyle?: ("as" | "angle-bracket")
  
  objectLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
})]
// ----- @typescript-eslint/consistent-type-definitions -----
type TypescriptEslintConsistentTypeDefinitions = []|[("interface" | "type")]
// ----- @typescript-eslint/consistent-type-exports -----
type TypescriptEslintConsistentTypeExports = []|[{
  
  fixMixedExportsWithInlineTypeSpecifier?: boolean
}]
// ----- @typescript-eslint/consistent-type-imports -----
type TypescriptEslintConsistentTypeImports = []|[{
  
  disallowTypeAnnotations?: boolean
  
  fixStyle?: ("separate-type-imports" | "inline-type-imports")
  
  prefer?: ("type-imports" | "no-type-imports")
}]
// ----- @typescript-eslint/dot-notation -----
type TypescriptEslintDotNotation = []|[{
  
  allowIndexSignaturePropertyAccess?: boolean
  
  allowKeywords?: boolean
  
  allowPattern?: string
  
  allowPrivateClassPropertyAccess?: boolean
  
  allowProtectedClassPropertyAccess?: boolean
}]
// ----- @typescript-eslint/explicit-function-return-type -----
type TypescriptEslintExplicitFunctionReturnType = []|[{
  
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowExpressions?: boolean
  
  allowFunctionsWithoutTypeParameters?: boolean
  
  allowHigherOrderFunctions?: boolean
  
  allowIIFEs?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/explicit-member-accessibility -----
type TypescriptEslintExplicitMemberAccessibility = []|[{
  
  accessibility?: ("explicit" | "no-public" | "off")
  
  ignoredMethodNames?: string[]
  
  overrides?: {
    
    accessors?: ("explicit" | "no-public" | "off")
    
    constructors?: ("explicit" | "no-public" | "off")
    
    methods?: ("explicit" | "no-public" | "off")
    
    parameterProperties?: ("explicit" | "no-public" | "off")
    
    properties?: ("explicit" | "no-public" | "off")
  }
}]
// ----- @typescript-eslint/explicit-module-boundary-types -----
type TypescriptEslintExplicitModuleBoundaryTypes = []|[{
  
  allowArgumentsExplicitlyTypedAsAny?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowHigherOrderFunctions?: boolean
  
  allowOverloadFunctions?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/init-declarations -----
type TypescriptEslintInitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- @typescript-eslint/max-params -----
type TypescriptEslintMaxParams = []|[{
  
  countVoidThis?: boolean
  
  max?: number
  
  maximum?: number
}]
// ----- @typescript-eslint/member-ordering -----
type TypescriptEslintMemberOrdering = []|[{
  
  classes?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  classExpressions?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  default?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  interfaces?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  typeLiterals?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
}]
// ----- @typescript-eslint/method-signature-style -----
type TypescriptEslintMethodSignatureStyle = []|[("property" | "method")]
// ----- @typescript-eslint/naming-convention -----
type _TypescriptEslintNamingConventionFormatOptionsConfig = (_TypescriptEslintNamingConventionPredefinedFormats[] | null)
type _TypescriptEslintNamingConventionPredefinedFormats = ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")
type _TypescriptEslintNamingConventionUnderscoreOptions = ("forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble")
type _TypescriptEslintNamingConvention_PrefixSuffixConfig = string[]
type _TypescriptEslintNamingConventionTypeModifiers = ("boolean" | "string" | "number" | "function" | "array")
type TypescriptEslintNamingConvention = ({
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
  selector: ("default" | "variableLike" | "memberLike" | "typeLike" | "method" | "property" | "accessor" | "variable" | "function" | "parameter" | "parameterProperty" | "classicAccessor" | "enumMember" | "classMethod" | "objectLiteralMethod" | "typeMethod" | "classProperty" | "objectLiteralProperty" | "typeProperty" | "autoAccessor" | "class" | "interface" | "typeAlias" | "enum" | "typeParameter" | "import")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "default"
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variableLike"
  modifiers?: ("unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variable"
  modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "function"
  modifiers?: ("exported" | "global" | "unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameter"
  modifiers?: ("destructured" | "unused")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "memberLike"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classProperty"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralProperty"
  modifiers?: ("public" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeProperty"
  modifiers?: ("public" | "readonly" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameterProperty"
  modifiers?: ("private" | "protected" | "public" | "readonly")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "property"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classMethod"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralMethod"
  modifiers?: ("public" | "requiresQuotes" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeMethod"
  modifiers?: ("public" | "requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "method"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classicAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "autoAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "accessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enumMember"
  modifiers?: ("requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeLike"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "class"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "interface"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeAlias"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enum"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeParameter"
  modifiers?: ("unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "import"
  modifiers?: ("default" | "namespace")[]
})[]
interface _TypescriptEslintNamingConvention_MatchRegexConfig {
  match: boolean
  regex: string
}
// ----- @typescript-eslint/no-base-to-string -----
type TypescriptEslintNoBaseToString = []|[{
  
  checkUnknown?: boolean
  
  ignoredTypeNames?: string[]
}]
// ----- @typescript-eslint/no-confusing-void-expression -----
type TypescriptEslintNoConfusingVoidExpression = []|[{
  
  ignoreArrowShorthand?: boolean
  
  ignoreVoidOperator?: boolean
  
  ignoreVoidReturningFunctions?: boolean
}]
// ----- @typescript-eslint/no-deprecated -----
type TypescriptEslintNoDeprecated = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-duplicate-type-constituents -----
type TypescriptEslintNoDuplicateTypeConstituents = []|[{
  
  ignoreIntersections?: boolean
  
  ignoreUnions?: boolean
}]
// ----- @typescript-eslint/no-empty-function -----
type TypescriptEslintNoEmptyFunction = []|[{
  
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- @typescript-eslint/no-empty-interface -----
type TypescriptEslintNoEmptyInterface = []|[{
  
  allowSingleExtends?: boolean
}]
// ----- @typescript-eslint/no-empty-object-type -----
type TypescriptEslintNoEmptyObjectType = []|[{
  
  allowInterfaces?: ("always" | "never" | "with-single-extends")
  
  allowObjectTypes?: ("always" | "never")
  
  allowWithName?: string
}]
// ----- @typescript-eslint/no-explicit-any -----
type TypescriptEslintNoExplicitAny = []|[{
  
  fixToUnknown?: boolean
  
  ignoreRestArgs?: boolean
}]
// ----- @typescript-eslint/no-extraneous-class -----
type TypescriptEslintNoExtraneousClass = []|[{
  
  allowConstructorOnly?: boolean
  
  allowEmpty?: boolean
  
  allowStaticOnly?: boolean
  
  allowWithDecorator?: boolean
}]
// ----- @typescript-eslint/no-floating-promises -----
type TypescriptEslintNoFloatingPromises = []|[{
  
  allowForKnownSafeCalls?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowForKnownSafePromises?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkThenables?: boolean
  
  ignoreIIFE?: boolean
  
  ignoreVoid?: boolean
}]
// ----- @typescript-eslint/no-inferrable-types -----
type TypescriptEslintNoInferrableTypes = []|[{
  
  ignoreParameters?: boolean
  
  ignoreProperties?: boolean
}]
// ----- @typescript-eslint/no-invalid-this -----
type TypescriptEslintNoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- @typescript-eslint/no-invalid-void-type -----
type TypescriptEslintNoInvalidVoidType = []|[{
  
  allowAsThisParameter?: boolean
  
  allowInGenericTypeArguments?: (boolean | [string, ...(string)[]])
}]
// ----- @typescript-eslint/no-magic-numbers -----
type TypescriptEslintNoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  
  ignoreEnums?: boolean
  
  ignoreNumericLiteralTypes?: boolean
  
  ignoreReadonlyClassProperties?: boolean
  
  ignoreTypeIndexes?: boolean
}]
// ----- @typescript-eslint/no-meaningless-void-operator -----
type TypescriptEslintNoMeaninglessVoidOperator = []|[{
  
  checkNever?: boolean
}]
// ----- @typescript-eslint/no-misused-promises -----
type TypescriptEslintNoMisusedPromises = []|[{
  
  checksConditionals?: boolean
  
  checksSpreads?: boolean
  
  checksVoidReturn?: (boolean | {
    
    arguments?: boolean
    
    attributes?: boolean
    
    inheritedMethods?: boolean
    
    properties?: boolean
    
    returns?: boolean
    
    variables?: boolean
  })
}]
// ----- @typescript-eslint/no-misused-spread -----
type TypescriptEslintNoMisusedSpread = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-namespace -----
type TypescriptEslintNoNamespace = []|[{
  
  allowDeclarations?: boolean
  
  allowDefinitionFiles?: boolean
}]
// ----- @typescript-eslint/no-redeclare -----
type TypescriptEslintNoRedeclare = []|[{
  
  builtinGlobals?: boolean
  
  ignoreDeclarationMerge?: boolean
}]
// ----- @typescript-eslint/no-require-imports -----
type TypescriptEslintNoRequireImports = []|[{
  
  allow?: string[]
  
  allowAsImport?: boolean
}]
// ----- @typescript-eslint/no-restricted-imports -----
type TypescriptEslintNoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | {
    
    importNames?: [string, ...(string)[]]
    
    allowImportNames?: [string, ...(string)[]]
    
    group?: [string, ...(string)[]]
    regex?: string
    importNamePattern?: string
    allowImportNamePattern?: string
    message?: string
    caseSensitive?: boolean
    
    allowTypeImports?: boolean
  }[])
}])
// ----- @typescript-eslint/no-restricted-types -----
type TypescriptEslintNoRestrictedTypes = []|[{
  
  types?: {
    [k: string]: (true | string | {
      
      fixWith?: string
      
      message?: string
      
      suggest?: string[]
    }) | undefined
  }
}]
// ----- @typescript-eslint/no-shadow -----
type TypescriptEslintNoShadow = []|[{
  
  allow?: string[]
  
  builtinGlobals?: boolean
  
  hoist?: ("all" | "functions" | "functions-and-types" | "never" | "types")
  
  ignoreFunctionTypeParameterNameValueShadow?: boolean
  
  ignoreOnInitialization?: boolean
  
  ignoreTypeValueShadow?: boolean
}]
// ----- @typescript-eslint/no-this-alias -----
type TypescriptEslintNoThisAlias = []|[{
  
  allowDestructuring?: boolean
  
  allowedNames?: string[]
}]
// ----- @typescript-eslint/no-type-alias -----
type TypescriptEslintNoTypeAlias = []|[{
  
  allowAliases?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowCallbacks?: ("always" | "never")
  
  allowConditionalTypes?: ("always" | "never")
  
  allowConstructors?: ("always" | "never")
  
  allowGenerics?: ("always" | "never")
  
  allowLiterals?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowMappedTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowTupleTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
}]
// ----- @typescript-eslint/no-unnecessary-boolean-literal-compare -----
type TypescriptEslintNoUnnecessaryBooleanLiteralCompare = []|[{
  
  allowComparingNullableBooleansToFalse?: boolean
  
  allowComparingNullableBooleansToTrue?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-condition -----
type TypescriptEslintNoUnnecessaryCondition = []|[{
  
  allowConstantLoopConditions?: (boolean | ("always" | "never" | "only-allowed-literals"))
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  checkTypePredicates?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-type-assertion -----
type TypescriptEslintNoUnnecessaryTypeAssertion = []|[{
  
  checkLiteralConstAssertions?: boolean
  
  typesToIgnore?: string[]
}]
// ----- @typescript-eslint/no-unsafe-member-access -----
type TypescriptEslintNoUnsafeMemberAccess = []|[{
  
  allowOptionalChaining?: boolean
}]
// ----- @typescript-eslint/no-unused-expressions -----
type TypescriptEslintNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
  ignoreDirectives?: boolean
}]
// ----- @typescript-eslint/no-unused-vars -----
type TypescriptEslintNoUnusedVars = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  enableAutofixRemoval?: {
    
    imports?: boolean
  }
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  ignoreUsingDeclarations?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- @typescript-eslint/no-use-before-define -----
type TypescriptEslintNoUseBeforeDefine = []|[("nofunc" | {
  
  allowNamedExports?: boolean
  
  classes?: boolean
  
  enums?: boolean
  
  functions?: boolean
  
  ignoreTypeReferences?: boolean
  
  typedefs?: boolean
  
  variables?: boolean
})]
// ----- @typescript-eslint/no-useless-default-assignment -----
type TypescriptEslintNoUselessDefaultAssignment = []|[{
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]
// ----- @typescript-eslint/no-var-requires -----
type TypescriptEslintNoVarRequires = []|[{
  
  allow?: string[]
}]
// ----- @typescript-eslint/only-throw-error -----
type TypescriptEslintOnlyThrowError = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowRethrowing?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/parameter-properties -----
type TypescriptEslintParameterProperties = []|[{
  
  allow?: ("readonly" | "private" | "protected" | "public" | "private readonly" | "protected readonly" | "public readonly")[]
  
  prefer?: ("class-property" | "parameter-property")
}]
// ----- @typescript-eslint/prefer-destructuring -----
type TypescriptEslintPreferDestructuring = []|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  
  enforceForDeclarationWithTypeAnnotation?: boolean
  
  enforceForRenamedProperties?: boolean
}]
// ----- @typescript-eslint/prefer-literal-enum-member -----
type TypescriptEslintPreferLiteralEnumMember = []|[{
  
  allowBitwiseExpressions?: boolean
}]
// ----- @typescript-eslint/prefer-nullish-coalescing -----
type TypescriptEslintPreferNullishCoalescing = []|[{
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  ignoreBooleanCoercion?: boolean
  
  ignoreConditionalTests?: boolean
  
  ignoreIfStatements?: boolean
  
  ignoreMixedLogicalExpressions?: boolean
  
  ignorePrimitives?: ({
    
    bigint?: boolean
    
    boolean?: boolean
    
    number?: boolean
    
    string?: boolean
  } | true)
  
  ignoreTernaryTests?: boolean
}]
// ----- @typescript-eslint/prefer-optional-chain -----
type TypescriptEslintPreferOptionalChain = []|[{
  
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
  
  checkAny?: boolean
  
  checkBigInt?: boolean
  
  checkBoolean?: boolean
  
  checkNumber?: boolean
  
  checkString?: boolean
  
  checkUnknown?: boolean
  
  requireNullish?: boolean
}]
// ----- @typescript-eslint/prefer-promise-reject-errors -----
type TypescriptEslintPreferPromiseRejectErrors = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowEmptyReject?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/prefer-readonly -----
type TypescriptEslintPreferReadonly = []|[{
  
  onlyInlineLambdas?: boolean
}]
// ----- @typescript-eslint/prefer-readonly-parameter-types -----
type TypescriptEslintPreferReadonlyParameterTypes = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkParameterProperties?: boolean
  
  ignoreInferredTypes?: boolean
  
  treatMethodsAsReadonly?: boolean
}]
// ----- @typescript-eslint/prefer-string-starts-ends-with -----
type TypescriptEslintPreferStringStartsEndsWith = []|[{
  
  allowSingleElementEquality?: ("always" | "never")
}]
// ----- @typescript-eslint/promise-function-async -----
type TypescriptEslintPromiseFunctionAsync = []|[{
  
  allowAny?: boolean
  
  allowedPromiseNames?: string[]
  
  checkArrowFunctions?: boolean
  
  checkFunctionDeclarations?: boolean
  
  checkFunctionExpressions?: boolean
  
  checkMethodDeclarations?: boolean
}]
// ----- @typescript-eslint/require-array-sort-compare -----
type TypescriptEslintRequireArraySortCompare = []|[{
  
  ignoreStringArrays?: boolean
}]
// ----- @typescript-eslint/restrict-plus-operands -----
type TypescriptEslintRestrictPlusOperands = []|[{
  
  allowAny?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumberAndString?: boolean
  
  allowRegExp?: boolean
  
  skipCompoundAssignments?: boolean
}]
// ----- @typescript-eslint/restrict-template-expressions -----
type TypescriptEslintRestrictTemplateExpressions = []|[{
  
  allowAny?: boolean
  
  allowArray?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumber?: boolean
  
  allowRegExp?: boolean
  
  allowNever?: boolean
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/return-await -----
type TypescriptEslintReturnAwait = []|[(("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string)]
// ----- @typescript-eslint/sort-type-constituents -----
type TypescriptEslintSortTypeConstituents = []|[{
  
  caseSensitive?: boolean
  
  checkIntersections?: boolean
  
  checkUnions?: boolean
  
  groupOrder?: ("conditional" | "function" | "import" | "intersection" | "keyword" | "nullish" | "literal" | "named" | "object" | "operator" | "tuple" | "union")[]
}]
// ----- @typescript-eslint/strict-boolean-expressions -----
type TypescriptEslintStrictBooleanExpressions = []|[{
  
  allowAny?: boolean
  
  allowNullableBoolean?: boolean
  
  allowNullableEnum?: boolean
  
  allowNullableNumber?: boolean
  
  allowNullableObject?: boolean
  
  allowNullableString?: boolean
  
  allowNumber?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  allowString?: boolean
}]
// ----- @typescript-eslint/strict-void-return -----
type TypescriptEslintStrictVoidReturn = []|[{
  
  allowReturnAny?: boolean
}]
// ----- @typescript-eslint/switch-exhaustiveness-check -----
type TypescriptEslintSwitchExhaustivenessCheck = []|[{
  
  allowDefaultCaseForExhaustiveSwitch?: boolean
  
  considerDefaultExhaustiveForUnions?: boolean
  
  defaultCaseCommentPattern?: string
  
  requireDefaultForNonUnion?: boolean
}]
// ----- @typescript-eslint/triple-slash-reference -----
type TypescriptEslintTripleSlashReference = []|[{
  
  lib?: ("always" | "never")
  
  path?: ("always" | "never")
  
  types?: ("always" | "never" | "prefer-import")
}]
// ----- @typescript-eslint/typedef -----
type TypescriptEslintTypedef = []|[{
  
  arrayDestructuring?: boolean
  
  arrowParameter?: boolean
  
  memberVariableDeclaration?: boolean
  
  objectDestructuring?: boolean
  
  parameter?: boolean
  
  propertyDeclaration?: boolean
  
  variableDeclaration?: boolean
  
  variableDeclarationIgnoreFunction?: boolean
}]
// ----- @typescript-eslint/unbound-method -----
type TypescriptEslintUnboundMethod = []|[{
  
  ignoreStatic?: boolean
}]
// ----- @typescript-eslint/unified-signatures -----
type TypescriptEslintUnifiedSignatures = []|[{
  
  ignoreDifferentlyNamedParameters?: boolean
  
  ignoreOverloadsWithDifferentJSDoc?: boolean
}]
// ----- eslint-comments/disable-enable-pair -----
type EslintCommentsDisableEnablePair = []|[{
  allowWholeFile?: boolean
}]
// ----- eslint-comments/no-restricted-disable -----
type EslintCommentsNoRestrictedDisable = string[]
// ----- eslint-comments/no-use -----
type EslintCommentsNoUse = []|[{
  allow?: ("eslint" | "eslint-disable" | "eslint-disable-line" | "eslint-disable-next-line" | "eslint-enable" | "eslint-env" | "exported" | "global" | "globals")[]
}]
// ----- eslint-comments/require-description -----
type EslintCommentsRequireDescription = []|[{
  ignore?: ("eslint" | "eslint-disable" | "eslint-disable-line" | "eslint-disable-next-line" | "eslint-enable" | "eslint-env" | "exported" | "global" | "globals")[]
}]
// ----- etc/no-const-enum -----
type EtcNoConstEnum = []|[{
  allowLocal?: boolean
  [k: string]: unknown | undefined
}]
// ----- etc/no-deprecated -----
type EtcNoDeprecated = []|[{
  ignored?: {
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}]
// ----- etc/no-foreach -----
type EtcNoForeach = []|[{
  types?: string[]
  [k: string]: unknown | undefined
}]
// ----- etc/no-implicit-any-catch -----
type EtcNoImplicitAnyCatch = []|[{
  allowExplicitAny?: boolean
}]
// ----- etc/no-internal -----
type EtcNoInternal = []|[{
  ignored?: {
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}]
// ----- etc/no-t -----
type EtcNoT = []|[{
  prefix?: string
  [k: string]: unknown | undefined
}]
// ----- etc/prefer-interface -----
type EtcPreferInterface = []|[{
  allowLocal?: boolean
  [k: string]: unknown | undefined
}]
// ----- import-newlines/enforce -----
type ImportNewlinesEnforce = ([{
  items?: number
  "max-len"?: number
  semi?: boolean
  forceSingleLine?: boolean
  allowBlankLines?: boolean
  [k: string]: unknown | undefined
}] | []|[number]|[number, number])
// ----- import/consistent-type-specifier-style -----
type ImportConsistentTypeSpecifierStyle = []|[("prefer-top-level" | "prefer-inline")]
// ----- import/dynamic-import-chunkname -----
type ImportDynamicImportChunkname = []|[{
  importFunctions?: string[]
  allowEmpty?: boolean
  webpackChunknameFormat?: string
  [k: string]: unknown | undefined
}]
// ----- import/extensions -----
type ImportExtensions = ([]|[("always" | "ignorePackages" | "never")] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  ignorePackages?: boolean
  checkTypeImports?: boolean
  pathGroupOverrides?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    action: ("enforce" | "ignore")
  }[]
  fix?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  ignorePackages?: boolean
  checkTypeImports?: boolean
  pathGroupOverrides?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    action: ("enforce" | "ignore")
  }[]
  fix?: boolean
  [k: string]: unknown | undefined
}] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  [k: string]: ("always" | "ignorePackages" | "never")
}] | []|[{
  [k: string]: ("always" | "ignorePackages" | "never")
}])
// ----- import/first -----
type ImportFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import/imports-first -----
type ImportImportsFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import/max-dependencies -----
type ImportMaxDependencies = []|[{
  max?: number
  ignoreTypeImports?: boolean
}]
// ----- import/named -----
type ImportNamed = []|[{
  commonjs?: boolean
}]
// ----- import/namespace -----
type ImportNamespace = []|[{
  
  allowComputed?: boolean
}]
// ----- import/newline-after-import -----
type ImportNewlineAfterImport = []|[{
  count?: number
  exactCount?: boolean
  considerComments?: boolean
}]
// ----- import/no-absolute-path -----
type ImportNoAbsolutePath = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import/no-anonymous-default-export -----
type ImportNoAnonymousDefaultExport = []|[{
  
  allowArray?: boolean
  
  allowArrowFunction?: boolean
  
  allowCallExpression?: boolean
  
  allowAnonymousClass?: boolean
  
  allowAnonymousFunction?: boolean
  
  allowLiteral?: boolean
  
  allowObject?: boolean
  
  allowNew?: boolean
}]
// ----- import/no-commonjs -----
type ImportNoCommonjs = ([]|["allow-primitive-modules"] | []|[{
  allowPrimitiveModules?: boolean
  allowRequire?: boolean
  allowConditionalRequire?: boolean
}])
// ----- import/no-cycle -----
type ImportNoCycle = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
  maxDepth?: (number | "∞")
  
  ignoreExternal?: boolean
  
  allowUnsafeDynamicCyclicDependency?: boolean
}]
// ----- import/no-duplicates -----
type ImportNoDuplicates = []|[{
  considerQueryString?: boolean
  "prefer-inline"?: boolean
}]
// ----- import/no-dynamic-require -----
type ImportNoDynamicRequire = []|[{
  esmodule?: boolean
}]
// ----- import/no-extraneous-dependencies -----
type ImportNoExtraneousDependencies = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  bundledDependencies?: (boolean | unknown[])
  packageDir?: (string | unknown[])
  includeInternal?: boolean
  includeTypes?: boolean
  whitelist?: unknown[]
}]
// ----- import/no-import-module-exports -----
type ImportNoImportModuleExports = []|[{
  exceptions?: unknown[]
}]
// ----- import/no-internal-modules -----
type ImportNoInternalModules = []|[({
  allow?: string[]
} | {
  forbid?: string[]
})]
// ----- import/no-namespace -----
type ImportNoNamespace = []|[{
  ignore?: string[]
  [k: string]: unknown | undefined
}]
// ----- import/no-nodejs-modules -----
type ImportNoNodejsModules = []|[{
  allow?: string[]
}]
// ----- import/no-relative-packages -----
type ImportNoRelativePackages = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import/no-relative-parent-imports -----
type ImportNoRelativeParentImports = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import/no-rename-default -----
type ImportNoRenameDefault = []|[{
  commonjs?: boolean
  preventRenamingBindings?: boolean
}]
// ----- import/no-restricted-paths -----
type ImportNoRestrictedPaths = []|[{
  
  zones?: [{
    target?: (string | [string, ...(string)[]])
    from?: (string | [string, ...(string)[]])
    except?: string[]
    message?: string
  }, ...({
    target?: (string | [string, ...(string)[]])
    from?: (string | [string, ...(string)[]])
    except?: string[]
    message?: string
  })[]]
  basePath?: string
}]
// ----- import/no-unassigned-import -----
type ImportNoUnassignedImport = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  allow?: string[]
}]
// ----- import/no-unresolved -----
type ImportNoUnresolved = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
  caseSensitive?: boolean
  caseSensitiveStrict?: boolean
}]
// ----- import/no-unused-modules -----
type ImportNoUnusedModules = []|[({
  unusedExports: true
  
  src?: [unknown, ...(unknown)[]]
  [k: string]: unknown | undefined
} | {
  missingExports: true
  [k: string]: unknown | undefined
})]
// ----- import/no-useless-path-segments -----
type ImportNoUselessPathSegments = []|[{
  commonjs?: boolean
  noUselessIndex?: boolean
}]
// ----- import/order -----
type ImportOrder = []|[{
  groups?: unknown[]
  pathGroupsExcludedImportTypes?: unknown[]
  distinctGroup?: boolean
  pathGroups?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    group: ("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")
    position?: ("after" | "before")
  }[]
  "newlines-between"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  "newlines-between-types"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  consolidateIslands?: ("inside-groups" | "never")
  sortTypesGroup?: boolean
  named?: (boolean | {
    enabled?: boolean
    import?: boolean
    export?: boolean
    require?: boolean
    cjsExports?: boolean
    types?: ("mixed" | "types-first" | "types-last")
  })
  alphabetize?: {
    caseInsensitive?: boolean
    order?: ("ignore" | "asc" | "desc")
    orderImportKind?: ("ignore" | "asc" | "desc")
  }
  warnOnUnassignedImports?: boolean
}]
// ----- import/prefer-default-export -----
type ImportPreferDefaultExport = []|[{
  target?: ("single" | "any")
}]
// ----- import/prefer-namespace-import -----
type ImportPreferNamespaceImport = []|[{
  patterns?: string[]
}]
// ----- jsonc/array-bracket-newline -----
type JsoncArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- jsonc/array-bracket-spacing -----
type JsoncArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- jsonc/array-element-newline -----
type JsoncArrayElementNewline = []|[(_JsoncArrayElementNewlineBasicConfig | {
  ArrayExpression?: _JsoncArrayElementNewlineBasicConfig
  JSONArrayExpression?: _JsoncArrayElementNewlineBasicConfig
  ArrayPattern?: _JsoncArrayElementNewlineBasicConfig
})]
type _JsoncArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})
// ----- jsonc/comma-dangle -----
type JsoncCommaDangle = []|[(_JsoncCommaDangleValue | {
  arrays?: _JsoncCommaDangleValueWithIgnore
  objects?: _JsoncCommaDangleValueWithIgnore
  imports?: _JsoncCommaDangleValueWithIgnore
  exports?: _JsoncCommaDangleValueWithIgnore
  functions?: _JsoncCommaDangleValueWithIgnore
})]
type _JsoncCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _JsoncCommaDangleValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")
// ----- jsonc/comma-style -----
type JsoncCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- jsonc/indent -----
type JsoncIndent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
}]
// ----- jsonc/key-name-casing -----
type JsoncKeyNameCasing = []|[{
  camelCase?: boolean
  PascalCase?: boolean
  SCREAMING_SNAKE_CASE?: boolean
  "kebab-case"?: boolean
  snake_case?: boolean
  ignores?: string[]
}]
// ----- jsonc/key-spacing -----
type JsoncKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- jsonc/no-irregular-whitespace -----
type JsoncNoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipStrings?: boolean
  skipTemplates?: boolean
  skipRegExps?: boolean
  skipJSXText?: boolean
}]
// ----- jsonc/no-useless-escape -----
type JsoncNoUselessEscape = []|[{
  allowRegexCharacters?: string[]
}]
// ----- jsonc/object-curly-newline -----
type JsoncObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- jsonc/object-curly-spacing -----
type JsoncObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  emptyObjects?: ("ignore" | "always" | "never")
}]
// ----- jsonc/object-property-newline -----
type JsoncObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- jsonc/quote-props -----
type JsoncQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- jsonc/quotes -----
type JsoncQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
})]
// ----- jsonc/sort-array-values -----
type JsoncSortArrayValues = [{
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minValues?: number
}, ...({
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minValues?: number
})[]]
// ----- jsonc/sort-keys -----
type JsoncSortKeys = ([{
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}, ...({
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
})[]] | []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}])
// ----- jsonc/space-unary-ops -----
type JsoncSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- markdown/fenced-code-language -----
type MarkdownFencedCodeLanguage = []|[{
  required?: string[]
}]
// ----- markdown/fenced-code-meta -----
type MarkdownFencedCodeMeta = []|[("always" | "never")]
// ----- markdown/heading-increment -----
type MarkdownHeadingIncrement = []|[{
  frontmatterTitle?: string
}]
// ----- markdown/no-duplicate-definitions -----
type MarkdownNoDuplicateDefinitions = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
  checkFootnoteDefinitions?: boolean
}]
// ----- markdown/no-duplicate-headings -----
type MarkdownNoDuplicateHeadings = []|[{
  checkSiblingsOnly?: boolean
}]
// ----- markdown/no-empty-definitions -----
type MarkdownNoEmptyDefinitions = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
  checkFootnoteDefinitions?: boolean
}]
// ----- markdown/no-html -----
type MarkdownNoHtml = []|[{
  allowed?: string[]
  allowedIgnoreCase?: boolean
}]
// ----- markdown/no-missing-atx-heading-space -----
type MarkdownNoMissingAtxHeadingSpace = []|[{
  checkClosedHeadings?: boolean
}]
// ----- markdown/no-missing-label-refs -----
type MarkdownNoMissingLabelRefs = []|[{
  allowLabels?: string[]
}]
// ----- markdown/no-missing-link-fragments -----
type MarkdownNoMissingLinkFragments = []|[{
  ignoreCase?: boolean
  allowPattern?: string
}]
// ----- markdown/no-multiple-h1 -----
type MarkdownNoMultipleH1 = []|[{
  frontmatterTitle?: string
}]
// ----- markdown/no-space-in-emphasis -----
type MarkdownNoSpaceInEmphasis = []|[{
  checkStrikethrough?: boolean
}]
// ----- markdown/no-unused-definitions -----
type MarkdownNoUnusedDefinitions = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
  checkFootnoteDefinitions?: boolean
}]
// ----- markdown/table-column-count -----
type MarkdownTableColumnCount = []|[{
  checkMissingCells?: boolean
}]
// ----- n/callback-return -----
type NCallbackReturn = []|[string[]]
// ----- n/exports-style -----
type NExportsStyle = []|[("module.exports" | "exports")]|[("module.exports" | "exports"), {
  allowBatchAssign?: boolean
}]
// ----- n/file-extension-in-import -----
type NFileExtensionInImport = []|[("always" | "never")]|[("always" | "never"), {
  [k: string]: ("always" | "never") | undefined
}]
// ----- n/handle-callback-err -----
type NHandleCallbackErr = []|[string]
// ----- n/hashbang -----
type NHashbang = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  ignoreUnpublished?: boolean
  additionalExecutables?: string[]
  executableMap?: {
    [k: string]: string
  }
}]
// ----- n/no-deprecated-api -----
type NNoDeprecatedApi = []|[{
  version?: string
  ignoreModuleItems?: ("_linklist" | "_stream_wrap" | "async_hooks.currentId" | "async_hooks.triggerId" | "buffer.Buffer()" | "new buffer.Buffer()" | "buffer.SlowBuffer" | "constants" | "crypto._toBuf" | "crypto.Credentials" | "crypto.DEFAULT_ENCODING" | "crypto.createCipher" | "crypto.createCredentials" | "crypto.createDecipher" | "crypto.fips" | "crypto.prng" | "crypto.pseudoRandomBytes" | "crypto.rng" | "domain" | "events.EventEmitter.listenerCount" | "events.listenerCount" | "freelist" | "fs.SyncWriteStream" | "fs.exists" | "fs.lchmod" | "fs.lchmodSync" | "http.createClient" | "module.Module.createRequireFromPath" | "module.Module.requireRepl" | "module.Module._debug" | "module.createRequireFromPath" | "module.requireRepl" | "module._debug" | "net._setSimultaneousAccepts" | "os.getNetworkInterfaces" | "os.tmpDir" | "path._makeLong" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport" | "punycode" | "readline.codePointAt" | "readline.getStringWidth" | "readline.isFullWidthCodePoint" | "readline.stripVTControlCharacters" | "repl.REPLServer" | "repl.Recoverable" | "repl.REPL_MODE_MAGIC" | "repl.builtinModules" | "safe-buffer.Buffer()" | "new safe-buffer.Buffer()" | "safe-buffer.SlowBuffer" | "sys" | "timers.enroll" | "timers.unenroll" | "tls.CleartextStream" | "tls.CryptoStream" | "tls.SecurePair" | "tls.convertNPNProtocols" | "tls.createSecurePair" | "tls.parseCertString" | "tty.setRawMode" | "url.parse" | "url.resolve" | "util.debug" | "util.error" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util.print" | "util.pump" | "util.puts" | "util._extend" | "vm.runInDebugContext" | "zlib.BrotliCompress()" | "zlib.BrotliDecompress()" | "zlib.Deflate()" | "zlib.DeflateRaw()" | "zlib.Gunzip()" | "zlib.Gzip()" | "zlib.Inflate()" | "zlib.InflateRaw()" | "zlib.Unzip()")[]
  ignoreGlobalItems?: ("Buffer()" | "new Buffer()" | "COUNTER_NET_SERVER_CONNECTION" | "COUNTER_NET_SERVER_CONNECTION_CLOSE" | "COUNTER_HTTP_SERVER_REQUEST" | "COUNTER_HTTP_SERVER_RESPONSE" | "COUNTER_HTTP_CLIENT_REQUEST" | "COUNTER_HTTP_CLIENT_RESPONSE" | "GLOBAL" | "Intl.v8BreakIterator" | "require.extensions" | "root" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport")[]
  ignoreIndirectDependencies?: boolean
}]
// ----- n/no-extraneous-import -----
type NNoExtraneousImport = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
}]
// ----- n/no-extraneous-require -----
type NNoExtraneousRequire = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
}]
// ----- n/no-hide-core-modules -----
type NNoHideCoreModules = []|[{
  allow?: ("assert" | "buffer" | "child_process" | "cluster" | "console" | "constants" | "crypto" | "dgram" | "dns" | "events" | "fs" | "http" | "https" | "module" | "net" | "os" | "path" | "querystring" | "readline" | "repl" | "stream" | "string_decoder" | "timers" | "tls" | "tty" | "url" | "util" | "vm" | "zlib")[]
  ignoreDirectDependencies?: boolean
  ignoreIndirectDependencies?: boolean
}]
// ----- n/no-missing-import -----
type NNoMissingImport = []|[{
  allowModules?: string[]
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignoreTypeImport?: boolean
  tsconfigPath?: string
  typescriptExtensionMap?: (unknown[][] | ("react" | "react-jsx" | "react-jsxdev" | "react-native" | "preserve"))
}]
// ----- n/no-missing-require -----
type NNoMissingRequire = []|[{
  allowModules?: string[]
  tryExtensions?: string[]
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  typescriptExtensionMap?: (unknown[][] | ("react" | "react-jsx" | "react-jsxdev" | "react-native" | "preserve"))
  tsconfigPath?: string
}]
// ----- n/no-mixed-requires -----
type NNoMixedRequires = []|[(boolean | {
  grouping?: boolean
  allowCall?: boolean
})]
// ----- n/no-process-env -----
type NNoProcessEnv = []|[{
  allowedVariables?: string[]
}]
// ----- n/no-restricted-import -----
type NNoRestrictedImport = []|[(string | {
  name: (string | string[])
  message?: string
})[]]
// ----- n/no-restricted-require -----
type NNoRestrictedRequire = []|[(string | {
  name: (string | string[])
  message?: string
})[]]
// ----- n/no-sync -----
type NNoSync = []|[{
  allowAtRootLevel?: boolean
  ignores?: (string | {
    from?: "file"
    path?: string
    name?: string[]
  } | {
    from?: "lib"
    name?: string[]
  } | {
    from?: "package"
    package?: string
    name?: string[]
  })[]
}]
// ----- n/no-top-level-await -----
type NNoTopLevelAwait = []|[{
  ignoreBin?: boolean
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
}]
// ----- n/no-unpublished-bin -----
type NNoUnpublishedBin = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  [k: string]: unknown | undefined
}]
// ----- n/no-unpublished-import -----
type NNoUnpublishedImport = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignoreTypeImport?: boolean
  ignorePrivate?: boolean
}]
// ----- n/no-unpublished-require -----
type NNoUnpublishedRequire = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignorePrivate?: boolean
}]
// ----- n/no-unsupported-features/es-builtins -----
type NNoUnsupportedFeaturesEsBuiltins = []|[{
  version?: string
  ignores?: ("AggregateError" | "Array" | "Array.from" | "Array.isArray" | "Array.length" | "Array.of" | "Array.toLocaleString" | "ArrayBuffer" | "ArrayBuffer.isView" | "Atomics" | "Atomics.add" | "Atomics.and" | "Atomics.compareExchange" | "Atomics.exchange" | "Atomics.isLockFree" | "Atomics.load" | "Atomics.notify" | "Atomics.or" | "Atomics.store" | "Atomics.sub" | "Atomics.wait" | "Atomics.waitAsync" | "Atomics.xor" | "BigInt" | "BigInt.asIntN" | "BigInt.asUintN" | "BigInt64Array" | "BigInt64Array.BYTES_PER_ELEMENT" | "BigInt64Array.from" | "BigInt64Array.name" | "BigInt64Array.of" | "BigUint64Array" | "BigUint64Array.BYTES_PER_ELEMENT" | "BigUint64Array.from" | "BigUint64Array.name" | "BigUint64Array.of" | "Boolean" | "DataView" | "Date" | "Date.UTC" | "Date.now" | "Date.parse" | "Date.toLocaleDateString" | "Date.toLocaleString" | "Date.toLocaleTimeString" | "Error" | "Error.cause" | "EvalError" | "FinalizationRegistry" | "Float32Array" | "Float32Array.BYTES_PER_ELEMENT" | "Float32Array.from" | "Float32Array.name" | "Float32Array.of" | "Float64Array" | "Float64Array.BYTES_PER_ELEMENT" | "Float64Array.from" | "Float64Array.name" | "Float64Array.of" | "Function" | "Function.length" | "Function.name" | "Infinity" | "Int16Array" | "Int16Array.BYTES_PER_ELEMENT" | "Int16Array.from" | "Int16Array.name" | "Int16Array.of" | "Int32Array" | "Int32Array.BYTES_PER_ELEMENT" | "Int32Array.from" | "Int32Array.name" | "Int32Array.of" | "Int8Array" | "Int8Array.BYTES_PER_ELEMENT" | "Int8Array.from" | "Int8Array.name" | "Int8Array.of" | "Intl" | "Intl.Collator" | "Intl.DateTimeFormat" | "Intl.DisplayNames" | "Intl.ListFormat" | "Intl.Locale" | "Intl.NumberFormat" | "Intl.PluralRules" | "Intl.RelativeTimeFormat" | "Intl.Segmenter" | "Intl.Segments" | "Intl.getCanonicalLocales" | "Intl.supportedValuesOf" | "JSON" | "JSON.parse" | "JSON.stringify" | "Map" | "Map.groupBy" | "Math" | "Math.E" | "Math.LN10" | "Math.LN2" | "Math.LOG10E" | "Math.LOG2E" | "Math.PI" | "Math.SQRT1_2" | "Math.SQRT2" | "Math.abs" | "Math.acos" | "Math.acosh" | "Math.asin" | "Math.asinh" | "Math.atan" | "Math.atan2" | "Math.atanh" | "Math.cbrt" | "Math.ceil" | "Math.clz32" | "Math.cos" | "Math.cosh" | "Math.exp" | "Math.expm1" | "Math.floor" | "Math.fround" | "Math.hypot" | "Math.imul" | "Math.log" | "Math.log10" | "Math.log1p" | "Math.log2" | "Math.max" | "Math.min" | "Math.pow" | "Math.random" | "Math.round" | "Math.sign" | "Math.sin" | "Math.sinh" | "Math.sqrt" | "Math.tan" | "Math.tanh" | "Math.trunc" | "NaN" | "Number.EPSILON" | "Number.MAX_SAFE_INTEGER" | "Number.MAX_VALUE" | "Number.MIN_SAFE_INTEGER" | "Number.MIN_VALUE" | "Number.NEGATIVE_INFINITY" | "Number.NaN" | "Number.POSITIVE_INFINITY" | "Number.isFinite" | "Number.isInteger" | "Number.isNaN" | "Number.isSafeInteger" | "Number.parseFloat" | "Number.parseInt" | "Number.toLocaleString" | "Object.assign" | "Object.create" | "Object.defineGetter" | "Object.defineProperties" | "Object.defineProperty" | "Object.defineSetter" | "Object.entries" | "Object.freeze" | "Object.fromEntries" | "Object.getOwnPropertyDescriptor" | "Object.getOwnPropertyDescriptors" | "Object.getOwnPropertyNames" | "Object.getOwnPropertySymbols" | "Object.getPrototypeOf" | "Object.groupBy" | "Object.hasOwn" | "Object.is" | "Object.isExtensible" | "Object.isFrozen" | "Object.isSealed" | "Object.keys" | "Object.lookupGetter" | "Object.lookupSetter" | "Object.preventExtensions" | "Object.proto" | "Object.seal" | "Object.setPrototypeOf" | "Object.values" | "Promise" | "Promise.all" | "Promise.allSettled" | "Promise.any" | "Promise.race" | "Promise.reject" | "Promise.resolve" | "Proxy" | "Proxy.revocable" | "RangeError" | "ReferenceError" | "Reflect" | "Reflect.apply" | "Reflect.construct" | "Reflect.defineProperty" | "Reflect.deleteProperty" | "Reflect.get" | "Reflect.getOwnPropertyDescriptor" | "Reflect.getPrototypeOf" | "Reflect.has" | "Reflect.isExtensible" | "Reflect.ownKeys" | "Reflect.preventExtensions" | "Reflect.set" | "Reflect.setPrototypeOf" | "RegExp" | "RegExp.dotAll" | "RegExp.hasIndices" | "RegExp.input" | "RegExp.lastIndex" | "RegExp.lastMatch" | "RegExp.lastParen" | "RegExp.leftContext" | "RegExp.n" | "RegExp.rightContext" | "Set" | "SharedArrayBuffer" | "String" | "String.fromCharCode" | "String.fromCodePoint" | "String.length" | "String.localeCompare" | "String.raw" | "String.toLocaleLowerCase" | "String.toLocaleUpperCase" | "Symbol" | "Symbol.asyncIterator" | "Symbol.for" | "Symbol.hasInstance" | "Symbol.isConcatSpreadable" | "Symbol.iterator" | "Symbol.keyFor" | "Symbol.match" | "Symbol.matchAll" | "Symbol.replace" | "Symbol.search" | "Symbol.species" | "Symbol.split" | "Symbol.toPrimitive" | "Symbol.toStringTag" | "Symbol.unscopables" | "SyntaxError" | "TypeError" | "URIError" | "Uint16Array" | "Uint16Array.BYTES_PER_ELEMENT" | "Uint16Array.from" | "Uint16Array.name" | "Uint16Array.of" | "Uint32Array" | "Uint32Array.BYTES_PER_ELEMENT" | "Uint32Array.from" | "Uint32Array.name" | "Uint32Array.of" | "Uint8Array" | "Uint8Array.BYTES_PER_ELEMENT" | "Uint8Array.from" | "Uint8Array.name" | "Uint8Array.of" | "Uint8ClampedArray" | "Uint8ClampedArray.BYTES_PER_ELEMENT" | "Uint8ClampedArray.from" | "Uint8ClampedArray.name" | "Uint8ClampedArray.of" | "WeakMap" | "WeakRef" | "WeakSet" | "decodeURI" | "decodeURIComponent" | "encodeURI" | "encodeURIComponent" | "escape" | "eval" | "globalThis" | "isFinite" | "isNaN" | "parseFloat" | "parseInt" | "unescape")[]
}]
// ----- n/no-unsupported-features/es-syntax -----
type NNoUnsupportedFeaturesEsSyntax = []|[{
  version?: string
  ignores?: ("no-accessor-properties" | "accessor-properties" | "accessorProperties" | "no-arbitrary-module-namespace-names" | "arbitrary-module-namespace-names" | "arbitraryModuleNamespaceNames" | "no-array-from" | "array-from" | "arrayFrom" | "no-array-isarray" | "array-isarray" | "arrayIsarray" | "no-array-of" | "array-of" | "arrayOf" | "no-array-prototype-copywithin" | "array-prototype-copywithin" | "arrayPrototypeCopywithin" | "no-array-prototype-entries" | "array-prototype-entries" | "arrayPrototypeEntries" | "no-array-prototype-every" | "array-prototype-every" | "arrayPrototypeEvery" | "no-array-prototype-fill" | "array-prototype-fill" | "arrayPrototypeFill" | "no-array-prototype-filter" | "array-prototype-filter" | "arrayPrototypeFilter" | "no-array-prototype-find" | "array-prototype-find" | "arrayPrototypeFind" | "no-array-prototype-findindex" | "array-prototype-findindex" | "arrayPrototypeFindindex" | "no-array-prototype-findlast-findlastindex" | "array-prototype-findlast-findlastindex" | "arrayPrototypeFindlastFindlastindex" | "no-array-prototype-flat" | "array-prototype-flat" | "arrayPrototypeFlat" | "no-array-prototype-foreach" | "array-prototype-foreach" | "arrayPrototypeForeach" | "no-array-prototype-includes" | "array-prototype-includes" | "arrayPrototypeIncludes" | "no-array-prototype-indexof" | "array-prototype-indexof" | "arrayPrototypeIndexof" | "no-array-prototype-keys" | "array-prototype-keys" | "arrayPrototypeKeys" | "no-array-prototype-lastindexof" | "array-prototype-lastindexof" | "arrayPrototypeLastindexof" | "no-array-prototype-map" | "array-prototype-map" | "arrayPrototypeMap" | "no-array-prototype-reduce" | "array-prototype-reduce" | "arrayPrototypeReduce" | "no-array-prototype-reduceright" | "array-prototype-reduceright" | "arrayPrototypeReduceright" | "no-array-prototype-some" | "array-prototype-some" | "arrayPrototypeSome" | "no-array-prototype-toreversed" | "array-prototype-toreversed" | "arrayPrototypeToreversed" | "no-array-prototype-tosorted" | "array-prototype-tosorted" | "arrayPrototypeTosorted" | "no-array-prototype-tospliced" | "array-prototype-tospliced" | "arrayPrototypeTospliced" | "no-array-prototype-values" | "array-prototype-values" | "arrayPrototypeValues" | "no-array-prototype-with" | "array-prototype-with" | "arrayPrototypeWith" | "no-array-string-prototype-at" | "array-string-prototype-at" | "arrayStringPrototypeAt" | "no-arrow-functions" | "arrow-functions" | "arrowFunctions" | "no-async-functions" | "async-functions" | "asyncFunctions" | "no-async-iteration" | "async-iteration" | "asyncIteration" | "no-atomics-waitasync" | "atomics-waitasync" | "atomicsWaitasync" | "no-atomics" | "atomics" | "no-bigint" | "bigint" | "no-binary-numeric-literals" | "binary-numeric-literals" | "binaryNumericLiterals" | "no-block-scoped-functions" | "block-scoped-functions" | "blockScopedFunctions" | "no-block-scoped-variables" | "block-scoped-variables" | "blockScopedVariables" | "no-class-fields" | "class-fields" | "classFields" | "no-class-static-block" | "class-static-block" | "classStaticBlock" | "no-classes" | "classes" | "no-computed-properties" | "computed-properties" | "computedProperties" | "no-date-now" | "date-now" | "dateNow" | "no-date-prototype-getyear-setyear" | "date-prototype-getyear-setyear" | "datePrototypeGetyearSetyear" | "no-date-prototype-togmtstring" | "date-prototype-togmtstring" | "datePrototypeTogmtstring" | "no-default-parameters" | "default-parameters" | "defaultParameters" | "no-destructuring" | "destructuring" | "no-dynamic-import" | "dynamic-import" | "dynamicImport" | "no-error-cause" | "error-cause" | "errorCause" | "no-escape-unescape" | "escape-unescape" | "escapeUnescape" | "no-exponential-operators" | "exponential-operators" | "exponentialOperators" | "no-export-ns-from" | "export-ns-from" | "exportNsFrom" | "no-for-of-loops" | "for-of-loops" | "forOfLoops" | "no-function-declarations-in-if-statement-clauses-without-block" | "function-declarations-in-if-statement-clauses-without-block" | "functionDeclarationsInIfStatementClausesWithoutBlock" | "no-function-prototype-bind" | "function-prototype-bind" | "functionPrototypeBind" | "no-generators" | "generators" | "no-global-this" | "global-this" | "globalThis" | "no-hashbang" | "hashbang" | "no-import-meta" | "import-meta" | "importMeta" | "no-initializers-in-for-in" | "initializers-in-for-in" | "initializersInForIn" | "no-intl-datetimeformat-prototype-formatrange" | "intl-datetimeformat-prototype-formatrange" | "intlDatetimeformatPrototypeFormatrange" | "no-intl-datetimeformat-prototype-formattoparts" | "intl-datetimeformat-prototype-formattoparts" | "intlDatetimeformatPrototypeFormattoparts" | "no-intl-displaynames" | "intl-displaynames" | "intlDisplaynames" | "no-intl-getcanonicallocales" | "intl-getcanonicallocales" | "intlGetcanonicallocales" | "no-intl-listformat" | "intl-listformat" | "intlListformat" | "no-intl-locale" | "intl-locale" | "intlLocale" | "no-intl-numberformat-prototype-formatrange" | "intl-numberformat-prototype-formatrange" | "intlNumberformatPrototypeFormatrange" | "no-intl-numberformat-prototype-formatrangetoparts" | "intl-numberformat-prototype-formatrangetoparts" | "intlNumberformatPrototypeFormatrangetoparts" | "no-intl-numberformat-prototype-formattoparts" | "intl-numberformat-prototype-formattoparts" | "intlNumberformatPrototypeFormattoparts" | "no-intl-pluralrules-prototype-selectrange" | "intl-pluralrules-prototype-selectrange" | "intlPluralrulesPrototypeSelectrange" | "no-intl-pluralrules" | "intl-pluralrules" | "intlPluralrules" | "no-intl-relativetimeformat" | "intl-relativetimeformat" | "intlRelativetimeformat" | "no-intl-segmenter" | "intl-segmenter" | "intlSegmenter" | "no-intl-supportedvaluesof" | "intl-supportedvaluesof" | "intlSupportedvaluesof" | "no-json-superset" | "json-superset" | "jsonSuperset" | "no-json" | "json" | "no-keyword-properties" | "keyword-properties" | "keywordProperties" | "no-labelled-function-declarations" | "labelled-function-declarations" | "labelledFunctionDeclarations" | "no-legacy-object-prototype-accessor-methods" | "legacy-object-prototype-accessor-methods" | "legacyObjectPrototypeAccessorMethods" | "no-logical-assignment-operators" | "logical-assignment-operators" | "logicalAssignmentOperators" | "no-malformed-template-literals" | "malformed-template-literals" | "malformedTemplateLiterals" | "no-map" | "map" | "no-math-acosh" | "math-acosh" | "mathAcosh" | "no-math-asinh" | "math-asinh" | "mathAsinh" | "no-math-atanh" | "math-atanh" | "mathAtanh" | "no-math-cbrt" | "math-cbrt" | "mathCbrt" | "no-math-clz32" | "math-clz32" | "mathClz32" | "no-math-cosh" | "math-cosh" | "mathCosh" | "no-math-expm1" | "math-expm1" | "mathExpm1" | "no-math-fround" | "math-fround" | "mathFround" | "no-math-hypot" | "math-hypot" | "mathHypot" | "no-math-imul" | "math-imul" | "mathImul" | "no-math-log10" | "math-log10" | "mathLog10" | "no-math-log1p" | "math-log1p" | "mathLog1p" | "no-math-log2" | "math-log2" | "mathLog2" | "no-math-sign" | "math-sign" | "mathSign" | "no-math-sinh" | "math-sinh" | "mathSinh" | "no-math-tanh" | "math-tanh" | "mathTanh" | "no-math-trunc" | "math-trunc" | "mathTrunc" | "no-modules" | "modules" | "no-new-target" | "new-target" | "newTarget" | "new.target" | "no-nullish-coalescing-operators" | "nullish-coalescing-operators" | "nullishCoalescingOperators" | "no-number-epsilon" | "number-epsilon" | "numberEpsilon" | "no-number-isfinite" | "number-isfinite" | "numberIsfinite" | "no-number-isinteger" | "number-isinteger" | "numberIsinteger" | "no-number-isnan" | "number-isnan" | "numberIsnan" | "no-number-issafeinteger" | "number-issafeinteger" | "numberIssafeinteger" | "no-number-maxsafeinteger" | "number-maxsafeinteger" | "numberMaxsafeinteger" | "no-number-minsafeinteger" | "number-minsafeinteger" | "numberMinsafeinteger" | "no-number-parsefloat" | "number-parsefloat" | "numberParsefloat" | "no-number-parseint" | "number-parseint" | "numberParseint" | "no-numeric-separators" | "numeric-separators" | "numericSeparators" | "no-object-assign" | "object-assign" | "objectAssign" | "no-object-create" | "object-create" | "objectCreate" | "no-object-defineproperties" | "object-defineproperties" | "objectDefineproperties" | "no-object-defineproperty" | "object-defineproperty" | "objectDefineproperty" | "no-object-entries" | "object-entries" | "objectEntries" | "no-object-freeze" | "object-freeze" | "objectFreeze" | "no-object-fromentries" | "object-fromentries" | "objectFromentries" | "no-object-getownpropertydescriptor" | "object-getownpropertydescriptor" | "objectGetownpropertydescriptor" | "no-object-getownpropertydescriptors" | "object-getownpropertydescriptors" | "objectGetownpropertydescriptors" | "no-object-getownpropertynames" | "object-getownpropertynames" | "objectGetownpropertynames" | "no-object-getownpropertysymbols" | "object-getownpropertysymbols" | "objectGetownpropertysymbols" | "no-object-getprototypeof" | "object-getprototypeof" | "objectGetprototypeof" | "no-object-hasown" | "object-hasown" | "objectHasown" | "no-object-is" | "object-is" | "objectIs" | "no-object-isextensible" | "object-isextensible" | "objectIsextensible" | "no-object-isfrozen" | "object-isfrozen" | "objectIsfrozen" | "no-object-issealed" | "object-issealed" | "objectIssealed" | "no-object-keys" | "object-keys" | "objectKeys" | "no-object-map-groupby" | "object-map-groupby" | "objectMapGroupby" | "no-object-preventextensions" | "object-preventextensions" | "objectPreventextensions" | "no-object-seal" | "object-seal" | "objectSeal" | "no-object-setprototypeof" | "object-setprototypeof" | "objectSetprototypeof" | "no-object-super-properties" | "object-super-properties" | "objectSuperProperties" | "no-object-values" | "object-values" | "objectValues" | "no-octal-numeric-literals" | "octal-numeric-literals" | "octalNumericLiterals" | "no-optional-catch-binding" | "optional-catch-binding" | "optionalCatchBinding" | "no-optional-chaining" | "optional-chaining" | "optionalChaining" | "no-private-in" | "private-in" | "privateIn" | "no-promise-all-settled" | "promise-all-settled" | "promiseAllSettled" | "no-promise-any" | "promise-any" | "promiseAny" | "no-promise-prototype-finally" | "promise-prototype-finally" | "promisePrototypeFinally" | "no-promise-withresolvers" | "promise-withresolvers" | "promiseWithresolvers" | "no-promise" | "promise" | "no-property-shorthands" | "property-shorthands" | "propertyShorthands" | "no-proxy" | "proxy" | "no-reflect" | "reflect" | "no-regexp-d-flag" | "regexp-d-flag" | "regexpDFlag" | "no-regexp-lookbehind-assertions" | "regexp-lookbehind-assertions" | "regexpLookbehindAssertions" | "regexpLookbehind" | "no-regexp-named-capture-groups" | "regexp-named-capture-groups" | "regexpNamedCaptureGroups" | "no-regexp-prototype-compile" | "regexp-prototype-compile" | "regexpPrototypeCompile" | "no-regexp-prototype-flags" | "regexp-prototype-flags" | "regexpPrototypeFlags" | "no-regexp-s-flag" | "regexp-s-flag" | "regexpSFlag" | "regexpS" | "no-regexp-u-flag" | "regexp-u-flag" | "regexpUFlag" | "regexpU" | "no-regexp-unicode-property-escapes-2019" | "regexp-unicode-property-escapes-2019" | "regexpUnicodePropertyEscapes2019" | "no-regexp-unicode-property-escapes-2020" | "regexp-unicode-property-escapes-2020" | "regexpUnicodePropertyEscapes2020" | "no-regexp-unicode-property-escapes-2021" | "regexp-unicode-property-escapes-2021" | "regexpUnicodePropertyEscapes2021" | "no-regexp-unicode-property-escapes-2022" | "regexp-unicode-property-escapes-2022" | "regexpUnicodePropertyEscapes2022" | "no-regexp-unicode-property-escapes-2023" | "regexp-unicode-property-escapes-2023" | "regexpUnicodePropertyEscapes2023" | "no-regexp-unicode-property-escapes" | "regexp-unicode-property-escapes" | "regexpUnicodePropertyEscapes" | "regexpUnicodeProperties" | "no-regexp-v-flag" | "regexp-v-flag" | "regexpVFlag" | "no-regexp-y-flag" | "regexp-y-flag" | "regexpYFlag" | "regexpY" | "no-resizable-and-growable-arraybuffers" | "resizable-and-growable-arraybuffers" | "resizableAndGrowableArraybuffers" | "no-rest-parameters" | "rest-parameters" | "restParameters" | "no-rest-spread-properties" | "rest-spread-properties" | "restSpreadProperties" | "no-set" | "set" | "no-shadow-catch-param" | "shadow-catch-param" | "shadowCatchParam" | "no-shared-array-buffer" | "shared-array-buffer" | "sharedArrayBuffer" | "no-spread-elements" | "spread-elements" | "spreadElements" | "no-string-create-html-methods" | "string-create-html-methods" | "stringCreateHtmlMethods" | "no-string-fromcodepoint" | "string-fromcodepoint" | "stringFromcodepoint" | "no-string-prototype-codepointat" | "string-prototype-codepointat" | "stringPrototypeCodepointat" | "no-string-prototype-endswith" | "string-prototype-endswith" | "stringPrototypeEndswith" | "no-string-prototype-includes" | "string-prototype-includes" | "stringPrototypeIncludes" | "no-string-prototype-iswellformed-towellformed" | "string-prototype-iswellformed-towellformed" | "stringPrototypeIswellformedTowellformed" | "no-string-prototype-matchall" | "string-prototype-matchall" | "stringPrototypeMatchall" | "no-string-prototype-normalize" | "string-prototype-normalize" | "stringPrototypeNormalize" | "no-string-prototype-padstart-padend" | "string-prototype-padstart-padend" | "stringPrototypePadstartPadend" | "no-string-prototype-repeat" | "string-prototype-repeat" | "stringPrototypeRepeat" | "no-string-prototype-replaceall" | "string-prototype-replaceall" | "stringPrototypeReplaceall" | "no-string-prototype-startswith" | "string-prototype-startswith" | "stringPrototypeStartswith" | "no-string-prototype-substr" | "string-prototype-substr" | "stringPrototypeSubstr" | "no-string-prototype-trim" | "string-prototype-trim" | "stringPrototypeTrim" | "no-string-prototype-trimleft-trimright" | "string-prototype-trimleft-trimright" | "stringPrototypeTrimleftTrimright" | "no-string-prototype-trimstart-trimend" | "string-prototype-trimstart-trimend" | "stringPrototypeTrimstartTrimend" | "no-string-raw" | "string-raw" | "stringRaw" | "no-subclassing-builtins" | "subclassing-builtins" | "subclassingBuiltins" | "no-symbol-prototype-description" | "symbol-prototype-description" | "symbolPrototypeDescription" | "no-symbol" | "symbol" | "no-template-literals" | "template-literals" | "templateLiterals" | "no-top-level-await" | "top-level-await" | "topLevelAwait" | "no-trailing-commas" | "trailing-commas" | "trailingCommas" | "no-trailing-function-commas" | "trailing-function-commas" | "trailingFunctionCommas" | "trailingCommasInFunctions" | "no-typed-arrays" | "typed-arrays" | "typedArrays" | "no-unicode-codepoint-escapes" | "unicode-codepoint-escapes" | "unicodeCodepointEscapes" | "unicodeCodePointEscapes" | "no-weak-map" | "weak-map" | "weakMap" | "no-weak-set" | "weak-set" | "weakSet" | "no-weakrefs" | "weakrefs")[]
}]
// ----- n/no-unsupported-features/node-builtins -----
type NNoUnsupportedFeaturesNodeBuiltins = []|[{
  version?: string
  allowExperimental?: boolean
  ignores?: ("__filename" | "__dirname" | "require" | "require.cache" | "require.extensions" | "require.main" | "require.resolve" | "require.resolve.paths" | "module" | "module.children" | "module.exports" | "module.filename" | "module.id" | "module.isPreloading" | "module.loaded" | "module.parent" | "module.path" | "module.paths" | "module.require" | "exports" | "AbortController" | "AbortSignal" | "AbortSignal.abort" | "AbortSignal.timeout" | "AbortSignal.any" | "DOMException" | "FormData" | "Headers" | "MessageEvent" | "Navigator" | "Request" | "Response" | "WebAssembly" | "WebSocket" | "fetch" | "global" | "queueMicrotask" | "navigator" | "navigator.hardwareConcurrency" | "navigator.language" | "navigator.languages" | "navigator.platform" | "navigator.userAgent" | "structuredClone" | "localStorage" | "sessionStorage" | "Storage" | "Blob" | "new Buffer()" | "Buffer" | "Buffer.alloc" | "Buffer.allocUnsafe" | "Buffer.allocUnsafeSlow" | "Buffer.byteLength" | "Buffer.compare" | "Buffer.concat" | "Buffer.copyBytesFrom" | "Buffer.from" | "Buffer.isBuffer" | "Buffer.isEncoding" | "File" | "atob" | "btoa" | "console" | "console.profile" | "console.profileEnd" | "console.timeStamp" | "console.Console" | "console.assert" | "console.clear" | "console.count" | "console.countReset" | "console.debug" | "console.dir" | "console.dirxml" | "console.error" | "console.group" | "console.groupCollapsed" | "console.groupEnd" | "console.info" | "console.log" | "console.table" | "console.time" | "console.timeEnd" | "console.timeLog" | "console.trace" | "console.warn" | "crypto" | "crypto.subtle" | "crypto.subtle.decrypt" | "crypto.subtle.deriveBits" | "crypto.subtle.deriveKey" | "crypto.subtle.digest" | "crypto.subtle.encrypt" | "crypto.subtle.exportKey" | "crypto.subtle.generateKey" | "crypto.subtle.importKey" | "crypto.subtle.sign" | "crypto.subtle.unwrapKey" | "crypto.subtle.verify" | "crypto.subtle.wrapKey" | "crypto.getRandomValues" | "crypto.randomUUID" | "Crypto" | "CryptoKey" | "SubtleCrypto" | "CloseEvent" | "CustomEvent" | "Event" | "EventSource" | "EventTarget" | "PerformanceEntry" | "PerformanceMark" | "PerformanceMeasure" | "PerformanceObserver" | "PerformanceObserverEntryList" | "PerformanceResourceTiming" | "performance" | "performance.clearMarks" | "performance.clearMeasures" | "performance.clearResourceTimings" | "performance.eventLoopUtilization" | "performance.getEntries" | "performance.getEntriesByName" | "performance.getEntriesByType" | "performance.mark" | "performance.markResourceTiming" | "performance.measure" | "performance.nodeTiming" | "performance.nodeTiming.bootstrapComplete" | "performance.nodeTiming.environment" | "performance.nodeTiming.idleTime" | "performance.nodeTiming.loopExit" | "performance.nodeTiming.loopStart" | "performance.nodeTiming.nodeStart" | "performance.nodeTiming.uvMetricsInfo" | "performance.nodeTiming.v8Start" | "performance.now" | "performance.onresourcetimingbufferfull" | "performance.setResourceTimingBufferSize" | "performance.timeOrigin" | "performance.timerify" | "performance.toJSON" | "process" | "process.allowedNodeEnvironmentFlags" | "process.availableMemory" | "process.arch" | "process.argv" | "process.argv0" | "process.channel" | "process.config" | "process.connected" | "process.debugPort" | "process.env" | "process.execArgv" | "process.execPath" | "process.execve" | "process.exitCode" | "process.features.cached_builtins" | "process.features.debug" | "process.features.inspector" | "process.features.ipv6" | "process.features.require_module" | "process.features.tls" | "process.features.tls_alpn" | "process.features.tls_ocsp" | "process.features.tls_sni" | "process.features.typescript" | "process.features.uv" | "process.finalization.register" | "process.finalization.registerBeforeExit" | "process.finalization.unregister" | "process.getBuiltinModule" | "process.mainModule" | "process.noDeprecation" | "process.permission" | "process.pid" | "process.platform" | "process.ppid" | "process.ref" | "process.release" | "process.report" | "process.report.excludeEnv" | "process.sourceMapsEnabled" | "process.stdin" | "process.stdin.isRaw" | "process.stdin.isTTY" | "process.stdin.setRawMode" | "process.stdout" | "process.stdout.clearLine" | "process.stdout.clearScreenDown" | "process.stdout.columns" | "process.stdout.cursorTo" | "process.stdout.getColorDepth" | "process.stdout.getWindowSize" | "process.stdout.hasColors" | "process.stdout.isTTY" | "process.stdout.moveCursor" | "process.stdout.rows" | "process.stderr" | "process.stderr.clearLine" | "process.stderr.clearScreenDown" | "process.stderr.columns" | "process.stderr.cursorTo" | "process.stderr.getColorDepth" | "process.stderr.getWindowSize" | "process.stderr.hasColors" | "process.stderr.isTTY" | "process.stderr.moveCursor" | "process.stderr.rows" | "process.threadCpuUsage" | "process.throwDeprecation" | "process.title" | "process.traceDeprecation" | "process.version" | "process.versions" | "process.abort" | "process.chdir" | "process.constrainedMemory" | "process.cpuUsage" | "process.cwd" | "process.disconnect" | "process.dlopen" | "process.emitWarning" | "process.exit" | "process.getActiveResourcesInfo" | "process.getegid" | "process.geteuid" | "process.getgid" | "process.getgroups" | "process.getuid" | "process.hasUncaughtExceptionCaptureCallback" | "process.hrtime" | "process.hrtime.bigint" | "process.initgroups" | "process.kill" | "process.loadEnvFile" | "process.memoryUsage" | "process.rss" | "process.nextTick" | "process.resourceUsage" | "process.send" | "process.setegid" | "process.seteuid" | "process.setgid" | "process.setgroups" | "process.setuid" | "process.setSourceMapsEnabled" | "process.setUncaughtExceptionCaptureCallback" | "process.umask" | "process.unref" | "process.uptime" | "ReadableStream" | "ReadableStream.from" | "ReadableStreamDefaultReader" | "ReadableStreamBYOBReader" | "ReadableStreamDefaultController" | "ReadableByteStreamController" | "ReadableStreamBYOBRequest" | "WritableStream" | "WritableStreamDefaultWriter" | "WritableStreamDefaultController" | "TransformStream" | "TransformStreamDefaultController" | "ByteLengthQueuingStrategy" | "CountQueuingStrategy" | "TextEncoderStream" | "TextDecoderStream" | "CompressionStream" | "DecompressionStream" | "setInterval" | "clearInterval" | "setTimeout" | "clearTimeout" | "setImmediate" | "clearImmediate" | "URL" | "URL.canParse" | "URL.createObjectURL" | "URL.revokeObjectURL" | "URLSearchParams" | "TextDecoder" | "TextEncoder" | "BroadcastChannel" | "MessageChannel" | "MessagePort" | "assert" | "assert.Assert" | "assert.assert" | "assert.deepEqual" | "assert.deepStrictEqual" | "assert.doesNotMatch" | "assert.doesNotReject" | "assert.doesNotThrow" | "assert.equal" | "assert.fail" | "assert.ifError" | "assert.match" | "assert.notDeepEqual" | "assert.notDeepStrictEqual" | "assert.notEqual" | "assert.notStrictEqual" | "assert.ok" | "assert.partialDeepStrictEqual" | "assert.rejects" | "assert.strictEqual" | "assert.throws" | "assert.CallTracker" | "assert.strict" | "assert.strict.Assert" | "assert.strict.assert" | "assert.strict.deepEqual" | "assert.strict.deepStrictEqual" | "assert.strict.doesNotMatch" | "assert.strict.doesNotReject" | "assert.strict.doesNotThrow" | "assert.strict.equal" | "assert.strict.fail" | "assert.strict.ifError" | "assert.strict.match" | "assert.strict.notDeepEqual" | "assert.strict.notDeepStrictEqual" | "assert.strict.notEqual" | "assert.strict.notStrictEqual" | "assert.strict.ok" | "assert.strict.partialDeepStrictEqual" | "assert.strict.rejects" | "assert.strict.strictEqual" | "assert.strict.throws" | "assert.strict.CallTracker" | "assert/strict" | "assert/strict.Assert" | "assert/strict.assert" | "assert/strict.deepEqual" | "assert/strict.deepStrictEqual" | "assert/strict.doesNotMatch" | "assert/strict.doesNotReject" | "assert/strict.doesNotThrow" | "assert/strict.equal" | "assert/strict.fail" | "assert/strict.ifError" | "assert/strict.match" | "assert/strict.notDeepEqual" | "assert/strict.notDeepStrictEqual" | "assert/strict.notEqual" | "assert/strict.notStrictEqual" | "assert/strict.ok" | "assert/strict.partialDeepStrictEqual" | "assert/strict.rejects" | "assert/strict.strictEqual" | "assert/strict.throws" | "assert/strict.CallTracker" | "async_hooks" | "async_hooks.createHook" | "async_hooks.executionAsyncResource" | "async_hooks.executionAsyncId" | "async_hooks.triggerAsyncId" | "async_hooks.AsyncLocalStorage" | "async_hooks.AsyncLocalStorage.bind" | "async_hooks.AsyncLocalStorage.snapshot" | "async_hooks.AsyncResource" | "async_hooks.AsyncResource.bind" | "buffer" | "buffer.constants" | "buffer.INSPECT_MAX_BYTES" | "buffer.kMaxLength" | "buffer.kStringMaxLength" | "buffer.atob" | "buffer.btoa" | "buffer.isAscii" | "buffer.isUtf8" | "buffer.resolveObjectURL" | "buffer.transcode" | "buffer.SlowBuffer" | "buffer.Blob" | "new buffer.Buffer()" | "buffer.Buffer" | "buffer.Buffer.alloc" | "buffer.Buffer.allocUnsafe" | "buffer.Buffer.allocUnsafeSlow" | "buffer.Buffer.byteLength" | "buffer.Buffer.compare" | "buffer.Buffer.concat" | "buffer.Buffer.copyBytesFrom" | "buffer.Buffer.from" | "buffer.Buffer.isBuffer" | "buffer.Buffer.isEncoding" | "buffer.File" | "child_process" | "child_process.exec" | "child_process.execFile" | "child_process.fork" | "child_process.spawn" | "child_process.execFileSync" | "child_process.execSync" | "child_process.spawnSync" | "child_process.ChildProcess" | "cluster" | "cluster.isMaster" | "cluster.isPrimary" | "cluster.isWorker" | "cluster.schedulingPolicy" | "cluster.settings" | "cluster.worker" | "cluster.workers" | "cluster.disconnect" | "cluster.fork" | "cluster.setupMaster" | "cluster.setupPrimary" | "cluster.Worker" | "crypto.constants" | "crypto.fips" | "crypto.webcrypto" | "crypto.webcrypto.subtle" | "crypto.webcrypto.subtle.decrypt" | "crypto.webcrypto.subtle.deriveBits" | "crypto.webcrypto.subtle.deriveKey" | "crypto.webcrypto.subtle.digest" | "crypto.webcrypto.subtle.encrypt" | "crypto.webcrypto.subtle.exportKey" | "crypto.webcrypto.subtle.generateKey" | "crypto.webcrypto.subtle.importKey" | "crypto.webcrypto.subtle.sign" | "crypto.webcrypto.subtle.unwrapKey" | "crypto.webcrypto.subtle.verify" | "crypto.webcrypto.subtle.wrapKey" | "crypto.webcrypto.getRandomValues" | "crypto.webcrypto.randomUUID" | "crypto.checkPrime" | "crypto.checkPrimeSync" | "crypto.createCipher" | "crypto.createCipheriv" | "crypto.createDecipher" | "crypto.createDecipheriv" | "crypto.createDiffieHellman" | "crypto.createDiffieHellmanGroup" | "crypto.createECDH" | "crypto.createHash" | "crypto.createHmac" | "crypto.createPrivateKey" | "crypto.createPublicKey" | "crypto.createSecretKey" | "crypto.createSign" | "crypto.createVerify" | "crypto.diffieHellman" | "crypto.generateKey" | "crypto.generateKeyPair" | "crypto.generateKeyPairSync" | "crypto.generateKeySync" | "crypto.generatePrime" | "crypto.generatePrimeSync" | "crypto.getCipherInfo" | "crypto.getCiphers" | "crypto.getCurves" | "crypto.getDiffieHellman" | "crypto.getFips" | "crypto.getHashes" | "crypto.hash" | "crypto.hkdf" | "crypto.hkdfSync" | "crypto.pbkdf2" | "crypto.pbkdf2Sync" | "crypto.privateDecrypt" | "crypto.privateEncrypt" | "crypto.publicDecrypt" | "crypto.publicEncrypt" | "crypto.randomBytes" | "crypto.randomFillSync" | "crypto.randomFill" | "crypto.randomInt" | "crypto.scrypt" | "crypto.scryptSync" | "crypto.secureHeapUsed" | "crypto.setEngine" | "crypto.setFips" | "crypto.sign" | "crypto.timingSafeEqual" | "crypto.verify" | "crypto.Certificate" | "crypto.Certificate.exportChallenge" | "crypto.Certificate.exportPublicKey" | "crypto.Certificate.verifySpkac" | "crypto.Cipher" | "crypto.Decipher" | "crypto.DiffieHellman" | "crypto.DiffieHellmanGroup" | "crypto.ECDH" | "crypto.ECDH.convertKey" | "crypto.Hash()" | "new crypto.Hash()" | "crypto.Hash" | "crypto.Hmac()" | "new crypto.Hmac()" | "crypto.Hmac" | "crypto.KeyObject" | "crypto.KeyObject.from" | "crypto.Sign" | "crypto.Verify" | "crypto.X509Certificate" | "dgram" | "dgram.createSocket" | "dgram.Socket" | "diagnostics_channel" | "diagnostics_channel.hasSubscribers" | "diagnostics_channel.channel" | "diagnostics_channel.subscribe" | "diagnostics_channel.unsubscribe" | "diagnostics_channel.tracingChannel" | "diagnostics_channel.Channel" | "diagnostics_channel.TracingChannel" | "dns" | "dns.Resolver" | "dns.getServers" | "dns.lookup" | "dns.lookupService" | "dns.resolve" | "dns.resolve4" | "dns.resolve6" | "dns.resolveAny" | "dns.resolveCname" | "dns.resolveCaa" | "dns.resolveMx" | "dns.resolveNaptr" | "dns.resolveNs" | "dns.resolvePtr" | "dns.resolveSoa" | "dns.resolveSrv" | "dns.resolveTlsa" | "dns.resolveTxt" | "dns.reverse" | "dns.setDefaultResultOrder" | "dns.getDefaultResultOrder" | "dns.setServers" | "dns.promises" | "dns.promises.Resolver" | "dns.promises.cancel" | "dns.promises.getServers" | "dns.promises.lookup" | "dns.promises.lookupService" | "dns.promises.resolve" | "dns.promises.resolve4" | "dns.promises.resolve6" | "dns.promises.resolveAny" | "dns.promises.resolveCaa" | "dns.promises.resolveCname" | "dns.promises.resolveMx" | "dns.promises.resolveNaptr" | "dns.promises.resolveNs" | "dns.promises.resolvePtr" | "dns.promises.resolveSoa" | "dns.promises.resolveSrv" | "dns.promises.resolveTlsa" | "dns.promises.resolveTxt" | "dns.promises.reverse" | "dns.promises.setDefaultResultOrder" | "dns.promises.getDefaultResultOrder" | "dns.promises.setServers" | "dns/promises" | "dns/promises.Resolver" | "dns/promises.cancel" | "dns/promises.getServers" | "dns/promises.lookup" | "dns/promises.lookupService" | "dns/promises.resolve" | "dns/promises.resolve4" | "dns/promises.resolve6" | "dns/promises.resolveAny" | "dns/promises.resolveCaa" | "dns/promises.resolveCname" | "dns/promises.resolveMx" | "dns/promises.resolveNaptr" | "dns/promises.resolveNs" | "dns/promises.resolvePtr" | "dns/promises.resolveSoa" | "dns/promises.resolveSrv" | "dns/promises.resolveTlsa" | "dns/promises.resolveTxt" | "dns/promises.reverse" | "dns/promises.setDefaultResultOrder" | "dns/promises.getDefaultResultOrder" | "dns/promises.setServers" | "domain" | "domain.create" | "domain.Domain" | "events" | "events.Event" | "events.EventTarget" | "events.CustomEvent" | "events.NodeEventTarget" | "events.EventEmitter" | "events.EventEmitter.defaultMaxListeners" | "events.EventEmitter.errorMonitor" | "events.EventEmitter.captureRejections" | "events.EventEmitter.captureRejectionSymbol" | "events.EventEmitter.getEventListeners" | "events.EventEmitter.getMaxListeners" | "events.EventEmitter.once" | "events.EventEmitter.listenerCount" | "events.EventEmitter.on" | "events.EventEmitter.setMaxListeners" | "events.EventEmitter.addAbortListener" | "events.EventEmitterAsyncResource" | "events.EventEmitterAsyncResource.defaultMaxListeners" | "events.EventEmitterAsyncResource.errorMonitor" | "events.EventEmitterAsyncResource.captureRejections" | "events.EventEmitterAsyncResource.captureRejectionSymbol" | "events.EventEmitterAsyncResource.getEventListeners" | "events.EventEmitterAsyncResource.getMaxListeners" | "events.EventEmitterAsyncResource.once" | "events.EventEmitterAsyncResource.listenerCount" | "events.EventEmitterAsyncResource.on" | "events.EventEmitterAsyncResource.setMaxListeners" | "events.EventEmitterAsyncResource.addAbortListener" | "events.defaultMaxListeners" | "events.errorMonitor" | "events.captureRejections" | "events.captureRejectionSymbol" | "events.getEventListeners" | "events.getMaxListeners" | "events.once" | "events.listenerCount" | "events.on" | "events.setMaxListeners" | "events.addAbortListener" | "fs" | "fs.promises" | "fs.promises.FileHandle" | "fs.promises.access" | "fs.promises.appendFile" | "fs.promises.chmod" | "fs.promises.chown" | "fs.promises.constants" | "fs.promises.copyFile" | "fs.promises.cp" | "fs.promises.glob" | "fs.promises.lchmod" | "fs.promises.lchown" | "fs.promises.link" | "fs.promises.lstat" | "fs.promises.lutimes" | "fs.promises.mkdir" | "fs.promises.mkdtemp" | "fs.promises.open" | "fs.promises.opendir" | "fs.promises.readFile" | "fs.promises.readdir" | "fs.promises.readlink" | "fs.promises.realpath" | "fs.promises.rename" | "fs.promises.rm" | "fs.promises.rmdir" | "fs.promises.stat" | "fs.promises.statfs" | "fs.promises.symlink" | "fs.promises.truncate" | "fs.promises.unlink" | "fs.promises.utimes" | "fs.promises.watch" | "fs.promises.writeFile" | "fs.access" | "fs.appendFile" | "fs.chmod" | "fs.chown" | "fs.close" | "fs.copyFile" | "fs.cp" | "fs.createReadStream" | "fs.createWriteStream" | "fs.exists" | "fs.fchmod" | "fs.fchown" | "fs.fdatasync" | "fs.fstat" | "fs.fsync" | "fs.ftruncate" | "fs.futimes" | "fs.glob" | "fs.lchmod" | "fs.lchown" | "fs.link" | "fs.lstat" | "fs.lutimes" | "fs.mkdir" | "fs.mkdtemp" | "fs.native" | "fs.open" | "fs.openAsBlob" | "fs.opendir" | "fs.read" | "fs.readdir" | "fs.readFile" | "fs.readlink" | "fs.readv" | "fs.realpath" | "fs.realpath.native" | "fs.rename" | "fs.rm" | "fs.rmdir" | "fs.stat" | "fs.statfs" | "fs.symlink" | "fs.truncate" | "fs.unlink" | "fs.unwatchFile" | "fs.utimes" | "fs.watch" | "fs.watchFile" | "fs.write" | "fs.writeFile" | "fs.writev" | "fs.accessSync" | "fs.appendFileSync" | "fs.chmodSync" | "fs.chownSync" | "fs.closeSync" | "fs.copyFileSync" | "fs.cpSync" | "fs.existsSync" | "fs.fchmodSync" | "fs.fchownSync" | "fs.fdatasyncSync" | "fs.fstatSync" | "fs.fsyncSync" | "fs.ftruncateSync" | "fs.futimesSync" | "fs.globSync" | "fs.lchmodSync" | "fs.lchownSync" | "fs.linkSync" | "fs.lstatSync" | "fs.lutimesSync" | "fs.mkdirSync" | "fs.mkdtempSync" | "fs.opendirSync" | "fs.openSync" | "fs.readdirSync" | "fs.readFileSync" | "fs.readlinkSync" | "fs.readSync" | "fs.readvSync" | "fs.realpathSync" | "fs.realpathSync.native" | "fs.renameSync" | "fs.rmdirSync" | "fs.rmSync" | "fs.statfsSync" | "fs.statSync" | "fs.symlinkSync" | "fs.truncateSync" | "fs.unlinkSync" | "fs.utimesSync" | "fs.writeFileSync" | "fs.writeSync" | "fs.writevSync" | "fs.constants" | "fs.Dir" | "fs.Dirent" | "fs.FSWatcher" | "fs.StatWatcher" | "fs.ReadStream" | "fs.Stats()" | "new fs.Stats()" | "fs.Stats" | "fs.StatFs" | "fs.WriteStream" | "fs.common_objects" | "fs/promises" | "fs/promises.FileHandle" | "fs/promises.access" | "fs/promises.appendFile" | "fs/promises.chmod" | "fs/promises.chown" | "fs/promises.constants" | "fs/promises.copyFile" | "fs/promises.cp" | "fs/promises.glob" | "fs/promises.lchmod" | "fs/promises.lchown" | "fs/promises.link" | "fs/promises.lstat" | "fs/promises.lutimes" | "fs/promises.mkdir" | "fs/promises.mkdtemp" | "fs/promises.open" | "fs/promises.opendir" | "fs/promises.readFile" | "fs/promises.readdir" | "fs/promises.readlink" | "fs/promises.realpath" | "fs/promises.rename" | "fs/promises.rm" | "fs/promises.rmdir" | "fs/promises.stat" | "fs/promises.statfs" | "fs/promises.symlink" | "fs/promises.truncate" | "fs/promises.unlink" | "fs/promises.utimes" | "fs/promises.watch" | "fs/promises.writeFile" | "http2" | "http2.constants" | "http2.sensitiveHeaders" | "http2.createServer" | "http2.createSecureServer" | "http2.connect" | "http2.getDefaultSettings" | "http2.getPackedSettings" | "http2.getUnpackedSettings" | "http2.performServerHandshake" | "http2.Http2Session" | "http2.ServerHttp2Session" | "http2.ClientHttp2Session" | "http2.Http2Stream" | "http2.ClientHttp2Stream" | "http2.ServerHttp2Stream" | "http2.Http2Server" | "http2.Http2SecureServer" | "http2.Http2ServerRequest" | "http2.Http2ServerResponse" | "http" | "http.METHODS" | "http.STATUS_CODES" | "http.globalAgent" | "http.maxHeaderSize" | "http.createServer" | "http.get" | "http.request" | "http.validateHeaderName" | "http.validateHeaderValue" | "http.setMaxIdleHTTPParsers" | "http.Agent" | "http.ClientRequest" | "http.Server" | "http.ServerResponse" | "http.IncomingMessage" | "http.OutgoingMessage" | "http.WebSocket" | "_http_agent" | "_http_client" | "_http_common" | "_http_incoming" | "_http_outgoing" | "_http_server" | "https" | "https.globalAgent" | "https.createServer" | "https.get" | "https.request" | "https.Agent" | "https.Server" | "inspector" | "inspector.Session" | "inspector.Network.dataReceived" | "inspector.Network.dataSent" | "inspector.Network.loadingFailed" | "inspector.Network.loadingFinished" | "inspector.Network.requestWillBeSent" | "inspector.Network.responseReceived" | "inspector.NetworkResources.put" | "inspector.console" | "inspector.close" | "inspector.open" | "inspector.url" | "inspector.waitForDebugger" | "inspector/promises" | "inspector/promises.Session" | "inspector/promises.Network.dataReceived" | "inspector/promises.Network.dataSent" | "inspector/promises.Network.loadingFailed" | "inspector/promises.Network.loadingFinished" | "inspector/promises.Network.requestWillBeSent" | "inspector/promises.Network.responseReceived" | "inspector/promises.NetworkResources.put" | "inspector/promises.console" | "inspector/promises.close" | "inspector/promises.open" | "inspector/promises.url" | "inspector/promises.waitForDebugger" | "module.builtinModules" | "module.constants.compileCacheStatus" | "module.createRequire" | "module.createRequireFromPath" | "module.enableCompileCache" | "module.findPackageJSON" | "module.flushCompileCache" | "module.getCompileCacheDir" | "module.getSourceMapsSupport" | "module.isBuiltin" | "module.registerHooks" | "module.register" | "module.setSourceMapsSupport" | "module.stripTypeScriptTypes" | "module.syncBuiltinESMExports" | "module.findSourceMap" | "module.SourceMap" | "module.Module.builtinModules" | "module.Module.createRequire" | "module.Module.createRequireFromPath" | "module.Module.enableCompileCache" | "module.Module.findPackageJSON" | "module.Module.flushCompileCache" | "module.Module.getCompileCacheDir" | "module.Module.getSourceMapsSupport" | "module.Module.isBuiltin" | "module.Module.registerHooks" | "module.Module.register" | "module.Module.setSourceMapsSupport" | "module.Module.stripTypeScriptTypes" | "module.Module.syncBuiltinESMExports" | "module.Module.findSourceMap" | "module.Module.SourceMap" | "net" | "net.connect" | "net.createConnection" | "net.createServer" | "net.getDefaultAutoSelectFamily" | "net.setDefaultAutoSelectFamily" | "net.getDefaultAutoSelectFamilyAttemptTimeout" | "net.setDefaultAutoSelectFamilyAttemptTimeout" | "net.isIP" | "net.isIPv4" | "net.isIPv6" | "net.BlockList" | "net.BlockList.isBlockList" | "net.SocketAddress" | "net.SocketAddress.parse" | "net.Server" | "net.Socket" | "os" | "os.EOL" | "os.constants" | "os.constants.priority" | "os.devNull" | "os.availableParallelism" | "os.arch" | "os.cpus" | "os.endianness" | "os.freemem" | "os.getPriority" | "os.homedir" | "os.hostname" | "os.loadavg" | "os.machine" | "os.networkInterfaces" | "os.platform" | "os.release" | "os.setPriority" | "os.tmpdir" | "os.totalmem" | "os.type" | "os.uptime" | "os.userInfo" | "os.version" | "path" | "path.posix" | "path.posix.delimiter" | "path.posix.sep" | "path.posix.basename" | "path.posix.dirname" | "path.posix.extname" | "path.posix.format" | "path.posix.matchesGlob" | "path.posix.isAbsolute" | "path.posix.join" | "path.posix.normalize" | "path.posix.parse" | "path.posix.relative" | "path.posix.resolve" | "path.posix.toNamespacedPath" | "path.win32" | "path.win32.delimiter" | "path.win32.sep" | "path.win32.basename" | "path.win32.dirname" | "path.win32.extname" | "path.win32.format" | "path.win32.matchesGlob" | "path.win32.isAbsolute" | "path.win32.join" | "path.win32.normalize" | "path.win32.parse" | "path.win32.relative" | "path.win32.resolve" | "path.win32.toNamespacedPath" | "path.delimiter" | "path.sep" | "path.basename" | "path.dirname" | "path.extname" | "path.format" | "path.matchesGlob" | "path.isAbsolute" | "path.join" | "path.normalize" | "path.parse" | "path.relative" | "path.resolve" | "path.toNamespacedPath" | "path/posix" | "path/posix.delimiter" | "path/posix.sep" | "path/posix.basename" | "path/posix.dirname" | "path/posix.extname" | "path/posix.format" | "path/posix.matchesGlob" | "path/posix.isAbsolute" | "path/posix.join" | "path/posix.normalize" | "path/posix.parse" | "path/posix.relative" | "path/posix.resolve" | "path/posix.toNamespacedPath" | "path/win32" | "path/win32.delimiter" | "path/win32.sep" | "path/win32.basename" | "path/win32.dirname" | "path/win32.extname" | "path/win32.format" | "path/win32.matchesGlob" | "path/win32.isAbsolute" | "path/win32.join" | "path/win32.normalize" | "path/win32.parse" | "path/win32.relative" | "path/win32.resolve" | "path/win32.toNamespacedPath" | "perf_hooks" | "perf_hooks.performance" | "perf_hooks.performance.clearMarks" | "perf_hooks.performance.clearMeasures" | "perf_hooks.performance.clearResourceTimings" | "perf_hooks.performance.eventLoopUtilization" | "perf_hooks.performance.getEntries" | "perf_hooks.performance.getEntriesByName" | "perf_hooks.performance.getEntriesByType" | "perf_hooks.performance.mark" | "perf_hooks.performance.markResourceTiming" | "perf_hooks.performance.measure" | "perf_hooks.performance.nodeTiming" | "perf_hooks.performance.nodeTiming.bootstrapComplete" | "perf_hooks.performance.nodeTiming.environment" | "perf_hooks.performance.nodeTiming.idleTime" | "perf_hooks.performance.nodeTiming.loopExit" | "perf_hooks.performance.nodeTiming.loopStart" | "perf_hooks.performance.nodeTiming.nodeStart" | "perf_hooks.performance.nodeTiming.uvMetricsInfo" | "perf_hooks.performance.nodeTiming.v8Start" | "perf_hooks.performance.now" | "perf_hooks.performance.onresourcetimingbufferfull" | "perf_hooks.performance.setResourceTimingBufferSize" | "perf_hooks.performance.timeOrigin" | "perf_hooks.performance.timerify" | "perf_hooks.performance.toJSON" | "perf_hooks.createHistogram" | "perf_hooks.monitorEventLoopDelay" | "perf_hooks.PerformanceEntry" | "perf_hooks.PerformanceMark" | "perf_hooks.PerformanceMeasure" | "perf_hooks.PerformanceNodeEntry" | "perf_hooks.PerformanceNodeTiming" | "perf_hooks.PerformanceResourceTiming" | "perf_hooks.PerformanceObserver" | "perf_hooks.PerformanceObserverEntryList" | "perf_hooks.Histogram" | "perf_hooks.IntervalHistogram" | "perf_hooks.RecordableHistogram" | "punycode" | "punycode.ucs2" | "punycode.version" | "punycode.decode" | "punycode.encode" | "punycode.toASCII" | "punycode.toUnicode" | "querystring" | "querystring.decode" | "querystring.encode" | "querystring.escape" | "querystring.parse" | "querystring.stringify" | "querystring.unescape" | "readline" | "readline.promises" | "readline.promises.createInterface" | "readline.promises.Interface" | "readline.promises.Readline" | "readline.clearLine" | "readline.clearScreenDown" | "readline.createInterface" | "readline.cursorTo" | "readline.moveCursor" | "readline.Interface" | "readline.emitKeypressEvents" | "readline.InterfaceConstructor" | "readline/promises" | "readline/promises.createInterface" | "readline/promises.Interface" | "readline/promises.Readline" | "repl" | "repl.start" | "repl.writer" | "repl.REPLServer()" | "repl.REPLServer" | "repl.REPL_MODE_MAGIC" | "repl.REPL_MODE_SLOPPY" | "repl.REPL_MODE_STRICT" | "repl.Recoverable()" | "repl.Recoverable" | "repl.builtinModules" | "sea" | "sea.isSea" | "sea.getAsset" | "sea.getAssetAsBlob" | "sea.getRawAsset" | "sea.sea.isSea" | "sea.sea.getAsset" | "sea.sea.getAssetAsBlob" | "sea.sea.getRawAsset" | "stream" | "stream.promises" | "stream.promises.pipeline" | "stream.promises.finished" | "stream.finished" | "stream.pipeline" | "stream.compose" | "stream.duplexPair" | "stream.Readable" | "stream.Readable.from" | "stream.Readable.isDisturbed" | "stream.Readable.fromWeb" | "stream.Readable.toWeb" | "stream.Writable" | "stream.Writable.fromWeb" | "stream.Writable.toWeb" | "stream.Duplex" | "stream.Duplex.from" | "stream.Duplex.fromWeb" | "stream.Duplex.toWeb" | "stream.Transform" | "stream.isErrored" | "stream.isReadable" | "stream.addAbortSignal" | "stream.getDefaultHighWaterMark" | "stream.setDefaultHighWaterMark" | "stream/promises.pipeline" | "stream/promises.finished" | "stream/web" | "stream/web.ReadableStream" | "stream/web.ReadableStream.from" | "stream/web.ReadableStreamDefaultReader" | "stream/web.ReadableStreamBYOBReader" | "stream/web.ReadableStreamDefaultController" | "stream/web.ReadableByteStreamController" | "stream/web.ReadableStreamBYOBRequest" | "stream/web.WritableStream" | "stream/web.WritableStreamDefaultWriter" | "stream/web.WritableStreamDefaultController" | "stream/web.TransformStream" | "stream/web.TransformStreamDefaultController" | "stream/web.ByteLengthQueuingStrategy" | "stream/web.CountQueuingStrategy" | "stream/web.TextEncoderStream" | "stream/web.TextDecoderStream" | "stream/web.CompressionStream" | "stream/web.DecompressionStream" | "stream/consumers" | "stream/consumers.arrayBuffer" | "stream/consumers.blob" | "stream/consumers.buffer" | "stream/consumers.json" | "stream/consumers.text" | "string_decoder" | "string_decoder.StringDecoder" | "sqlite" | "sqlite.constants" | "sqlite.constants.SQLITE_CHANGESET_OMIT" | "sqlite.constants.SQLITE_CHANGESET_REPLACE" | "sqlite.constants.SQLITE_CHANGESET_ABORT" | "sqlite.backup" | "sqlite.DatabaseSync" | "sqlite.StatementSync" | "sqlite.SQLITE_CHANGESET_OMIT" | "sqlite.SQLITE_CHANGESET_REPLACE" | "sqlite.SQLITE_CHANGESET_ABORT" | "test" | "test.after" | "test.afterEach" | "test.assert" | "test.assert.register" | "test.before" | "test.beforeEach" | "test.describe" | "test.describe.only" | "test.describe.skip" | "test.describe.todo" | "test.it" | "test.it.only" | "test.it.skip" | "test.it.todo" | "test.mock" | "test.mock.fn" | "test.mock.getter" | "test.mock.method" | "test.mock.module" | "test.mock.reset" | "test.mock.restoreAll" | "test.mock.setter" | "test.mock.timers" | "test.mock.timers.enable" | "test.mock.timers.reset" | "test.mock.timers.tick" | "test.only" | "test.run" | "test.snapshot" | "test.snapshot.setDefaultSnapshotSerializers" | "test.snapshot.setResolveSnapshotPath" | "test.skip" | "test.suite" | "test.test" | "test.test.only" | "test.test.skip" | "test.test.todo" | "test.todo" | "timers" | "timers.Immediate" | "timers.Timeout" | "timers.setImmediate" | "timers.clearImmediate" | "timers.setInterval" | "timers.clearInterval" | "timers.setTimeout" | "timers.clearTimeout" | "timers.promises" | "timers.promises.setTimeout" | "timers.promises.setImmediate" | "timers.promises.setInterval" | "timers.promises.scheduler.wait" | "timers.promises.scheduler.yield" | "timers/promises" | "timers/promises.setTimeout" | "timers/promises.setImmediate" | "timers/promises.setInterval" | "timers/promises.scheduler.wait" | "timers/promises.scheduler.yield" | "tls" | "tls.checkServerIdentity" | "tls.connect" | "tls.createSecureContext" | "tls.createSecurePair" | "tls.createServer" | "tls.CryptoStream" | "tls.DEFAULT_CIPHERS" | "tls.DEFAULT_ECDH_CURVE" | "tls.DEFAULT_MAX_VERSION" | "tls.DEFAULT_MIN_VERSION" | "tls.getCACertificates" | "tls.getCiphers" | "tls.rootCertificates" | "tls.SecureContext" | "tls.SecurePair" | "tls.Server" | "tls.setDefaultCACertificates" | "tls.TLSSocket" | "trace_events" | "trace_events.createTracing" | "trace_events.getEnabledCategories" | "tty" | "tty.isatty" | "tty.ReadStream" | "tty.WriteStream" | "url" | "url.domainToASCII" | "url.domainToUnicode" | "url.fileURLToPath" | "url.format" | "url.pathToFileURL" | "url.urlToHttpOptions" | "url.URL" | "url.URL.canParse" | "url.URL.createObjectURL" | "url.URL.revokeObjectURL" | "url.URLPattern" | "url.URLSearchParams" | "url.Url" | "util.promisify" | "util.promisify.custom" | "util.callbackify" | "util.debuglog" | "util.debug" | "util.deprecate" | "util.diff" | "util.format" | "util.formatWithOptions" | "util.getCallSite" | "util.getCallSites" | "util.getSystemErrorName" | "util.getSystemErrorMap" | "util.getSystemErrorMessage" | "util.inherits" | "util.inspect" | "util.inspect.custom" | "util.inspect.defaultOptions" | "util.inspect.replDefaults" | "util.isDeepStrictEqual" | "util.parseArgs" | "util.parseEnv" | "util.setTraceSigInt" | "util.stripVTControlCharacters" | "util.styleText" | "util.toUSVString" | "util.transferableAbortController" | "util.transferableAbortSignal" | "util.aborted" | "util.MIMEType" | "util.MIMEParams" | "util.TextDecoder" | "util.TextEncoder" | "util.types" | "util.types.isExternal" | "util.types.isDate" | "util.types.isArgumentsObject" | "util.types.isBigIntObject" | "util.types.isBooleanObject" | "util.types.isNumberObject" | "util.types.isStringObject" | "util.types.isSymbolObject" | "util.types.isNativeError" | "util.types.isRegExp" | "util.types.isAsyncFunction" | "util.types.isGeneratorFunction" | "util.types.isGeneratorObject" | "util.types.isPromise" | "util.types.isMap" | "util.types.isSet" | "util.types.isMapIterator" | "util.types.isSetIterator" | "util.types.isWeakMap" | "util.types.isWeakSet" | "util.types.isArrayBuffer" | "util.types.isDataView" | "util.types.isSharedArrayBuffer" | "util.types.isProxy" | "util.types.isModuleNamespaceObject" | "util.types.isAnyArrayBuffer" | "util.types.isBoxedPrimitive" | "util.types.isArrayBufferView" | "util.types.isTypedArray" | "util.types.isUint8Array" | "util.types.isUint8ClampedArray" | "util.types.isUint16Array" | "util.types.isUint32Array" | "util.types.isInt8Array" | "util.types.isInt16Array" | "util.types.isInt32Array" | "util.types.isFloat16Array" | "util.types.isFloat32Array" | "util.types.isFloat64Array" | "util.types.isBigInt64Array" | "util.types.isBigUint64Array" | "util.types.isKeyObject" | "util.types.isCryptoKey" | "util.types.isWebAssemblyCompiledModule" | "util._extend" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util" | "util/types" | "util/types.isExternal" | "util/types.isDate" | "util/types.isArgumentsObject" | "util/types.isBigIntObject" | "util/types.isBooleanObject" | "util/types.isNumberObject" | "util/types.isStringObject" | "util/types.isSymbolObject" | "util/types.isNativeError" | "util/types.isRegExp" | "util/types.isAsyncFunction" | "util/types.isGeneratorFunction" | "util/types.isGeneratorObject" | "util/types.isPromise" | "util/types.isMap" | "util/types.isSet" | "util/types.isMapIterator" | "util/types.isSetIterator" | "util/types.isWeakMap" | "util/types.isWeakSet" | "util/types.isArrayBuffer" | "util/types.isDataView" | "util/types.isSharedArrayBuffer" | "util/types.isProxy" | "util/types.isModuleNamespaceObject" | "util/types.isAnyArrayBuffer" | "util/types.isBoxedPrimitive" | "util/types.isArrayBufferView" | "util/types.isTypedArray" | "util/types.isUint8Array" | "util/types.isUint8ClampedArray" | "util/types.isUint16Array" | "util/types.isUint32Array" | "util/types.isInt8Array" | "util/types.isInt16Array" | "util/types.isInt32Array" | "util/types.isFloat16Array" | "util/types.isFloat32Array" | "util/types.isFloat64Array" | "util/types.isBigInt64Array" | "util/types.isBigUint64Array" | "util/types.isKeyObject" | "util/types.isCryptoKey" | "util/types.isWebAssemblyCompiledModule" | "v8" | "v8.serialize" | "v8.deserialize" | "v8.Serializer" | "v8.Deserializer" | "v8.DefaultSerializer" | "v8.DefaultDeserializer" | "v8.promiseHooks" | "v8.promiseHooks.onInit" | "v8.promiseHooks.onSettled" | "v8.promiseHooks.onBefore" | "v8.promiseHooks.onAfter" | "v8.promiseHooks.createHook" | "v8.startupSnapshot" | "v8.startupSnapshot.addSerializeCallback" | "v8.startupSnapshot.addDeserializeCallback" | "v8.startupSnapshot.setDeserializeMainFunction" | "v8.startupSnapshot.isBuildingSnapshot" | "v8.cachedDataVersionTag" | "v8.getHeapCodeStatistics" | "v8.getHeapSnapshot" | "v8.getHeapSpaceStatistics" | "v8.getHeapStatistics" | "v8.isStringOneByteRepresentation" | "v8.queryObjects" | "v8.setFlagsFromString" | "v8.stopCoverage" | "v8.takeCoverage" | "v8.writeHeapSnapshot" | "v8.setHeapSnapshotNearHeapLimit" | "v8.GCProfiler" | "vm.constants" | "vm.compileFunction" | "vm.createContext" | "vm.isContext" | "vm.measureMemory" | "vm.runInContext" | "vm.runInNewContext" | "vm.runInThisContext" | "vm.Script" | "vm.Module" | "vm.SourceTextModule" | "vm.SyntheticModule" | "vm" | "wasi.WASI" | "wasi" | "worker_threads" | "worker_threads.parentPort" | "worker_threads.resourceLimits" | "worker_threads.SHARE_ENV" | "worker_threads.threadId" | "worker_threads.workerData" | "worker_threads.getEnvironmentData" | "worker_threads.getHeapStatistics" | "worker_threads.markAsUncloneable" | "worker_threads.markAsUntransferable" | "worker_threads.isInternalThread" | "worker_threads.isMainThread" | "worker_threads.isMarkedAsUntransferable" | "worker_threads.moveMessagePortToContext" | "worker_threads.postMessageToThread" | "worker_threads.receiveMessageOnPort" | "worker_threads.setEnvironmentData" | "worker_threads.BroadcastChannel" | "worker_threads.MessageChannel" | "worker_threads.MessagePort" | "worker_threads.Worker" | "zlib.brotliCompress" | "zlib.brotliCompressSync" | "zlib.brotliDecompress" | "zlib.brotliDecompressSync" | "zlib.constants" | "zlib.constants.ZSTD_e_continue" | "zlib.constants.ZSTD_e_flush" | "zlib.constants.ZSTD_e_end" | "zlib.constants.ZSTD_fast" | "zlib.constants.ZSTD_dfast" | "zlib.constants.ZSTD_greedy" | "zlib.constants.ZSTD_lazy" | "zlib.constants.ZSTD_lazy2" | "zlib.constants.ZSTD_btlazy2" | "zlib.constants.ZSTD_btopt" | "zlib.constants.ZSTD_btultra" | "zlib.constants.ZSTD_btultra2" | "zlib.constants.ZSTD_c_compressionLevel" | "zlib.constants.ZSTD_c_windowLog" | "zlib.constants.ZSTD_c_hashLog" | "zlib.constants.ZSTD_c_chainLog" | "zlib.constants.ZSTD_c_searchLog" | "zlib.constants.ZSTD_c_minMatch" | "zlib.constants.ZSTD_c_targetLength" | "zlib.constants.ZSTD_c_strategy" | "zlib.constants.ZSTD_c_enableLongDistanceMatching" | "zlib.constants.ZSTD_c_ldmHashLog" | "zlib.constants.ZSTD_c_ldmMinMatch" | "zlib.constants.ZSTD_c_ldmBucketSizeLog" | "zlib.constants.ZSTD_c_ldmHashRateLog" | "zlib.constants.ZSTD_c_contentSizeFlag" | "zlib.constants.ZSTD_c_checksumFlag" | "zlib.constants.ZSTD_c_dictIDFlag" | "zlib.constants.ZSTD_c_nbWorkers" | "zlib.constants.ZSTD_c_jobSize" | "zlib.constants.ZSTD_c_overlapLog" | "zlib.constants.ZSTD_d_windowLogMax" | "zlib.constants.ZSTD_CLEVEL_DEFAULT" | "zlib.constants.ZSTD_error_no_error" | "zlib.constants.ZSTD_error_GENERIC" | "zlib.constants.ZSTD_error_prefix_unknown" | "zlib.constants.ZSTD_error_version_unsupported" | "zlib.constants.ZSTD_error_frameParameter_unsupported" | "zlib.constants.ZSTD_error_frameParameter_windowTooLarge" | "zlib.constants.ZSTD_error_corruption_detected" | "zlib.constants.ZSTD_error_checksum_wrong" | "zlib.constants.ZSTD_error_literals_headerWrong" | "zlib.constants.ZSTD_error_dictionary_corrupted" | "zlib.constants.ZSTD_error_dictionary_wrong" | "zlib.constants.ZSTD_error_dictionaryCreation_failed" | "zlib.constants.ZSTD_error_parameter_unsupported" | "zlib.constants.ZSTD_error_parameter_combination_unsupported" | "zlib.constants.ZSTD_error_parameter_outOfBound" | "zlib.constants.ZSTD_error_tableLog_tooLarge" | "zlib.constants.ZSTD_error_maxSymbolValue_tooLarge" | "zlib.constants.ZSTD_error_maxSymbolValue_tooSmall" | "zlib.constants.ZSTD_error_stabilityCondition_notRespected" | "zlib.constants.ZSTD_error_stage_wrong" | "zlib.constants.ZSTD_error_init_missing" | "zlib.constants.ZSTD_error_memory_allocation" | "zlib.constants.ZSTD_error_workSpace_tooSmall" | "zlib.constants.ZSTD_error_dstSize_tooSmall" | "zlib.constants.ZSTD_error_srcSize_wrong" | "zlib.constants.ZSTD_error_dstBuffer_null" | "zlib.constants.ZSTD_error_noForwardProgress_destFull" | "zlib.constants.ZSTD_error_noForwardProgress_inputEmpty" | "zlib.crc32" | "zlib.createBrotliCompress" | "zlib.createBrotliDecompress" | "zlib.createDeflate" | "zlib.createDeflateRaw" | "zlib.createGunzip" | "zlib.createGzip" | "zlib.createInflate" | "zlib.createInflateRaw" | "zlib.createUnzip" | "zlib.createZstdCompress" | "zlib.createZstdDecompress" | "zlib.deflate" | "zlib.deflateRaw" | "zlib.deflateRawSync" | "zlib.deflateSync" | "zlib.gunzip" | "zlib.gunzipSync" | "zlib.gzip" | "zlib.gzipSync" | "zlib.inflate" | "zlib.inflateRaw" | "zlib.inflateRawSync" | "zlib.inflateSync" | "zlib.unzip" | "zlib.unzipSync" | "zlib.zstdCompress" | "zlib.zstdCompressSync" | "zlib.zstdDecompress" | "zlib.zstdDecompressSync" | "zlib.BrotliCompress()" | "zlib.BrotliCompress" | "zlib.BrotliDecompress()" | "zlib.BrotliDecompress" | "zlib.Deflate()" | "zlib.Deflate" | "zlib.DeflateRaw()" | "zlib.DeflateRaw" | "zlib.Gunzip()" | "zlib.Gunzip" | "zlib.Gzip()" | "zlib.Gzip" | "zlib.Inflate()" | "zlib.Inflate" | "zlib.InflateRaw()" | "zlib.InflateRaw" | "zlib.Unzip()" | "zlib.Unzip" | "zlib.ZstdCompress" | "zlib.ZstdDecompress" | "zlib.ZstdOptions" | "zlib" | "import.meta.resolve" | "import.meta.dirname" | "import.meta.filename" | "import.meta.main")[]
}]
// ----- n/prefer-global/buffer -----
type NPreferGlobalBuffer = []|[("always" | "never")]
// ----- n/prefer-global/console -----
type NPreferGlobalConsole = []|[("always" | "never")]
// ----- n/prefer-global/crypto -----
type NPreferGlobalCrypto = []|[("always" | "never")]
// ----- n/prefer-global/process -----
type NPreferGlobalProcess = []|[("always" | "never")]
// ----- n/prefer-global/text-decoder -----
type NPreferGlobalTextDecoder = []|[("always" | "never")]
// ----- n/prefer-global/text-encoder -----
type NPreferGlobalTextEncoder = []|[("always" | "never")]
// ----- n/prefer-global/timers -----
type NPreferGlobalTimers = []|[("always" | "never")]
// ----- n/prefer-global/url -----
type NPreferGlobalUrl = []|[("always" | "never")]
// ----- n/prefer-global/url-search-params -----
type NPreferGlobalUrlSearchParams = []|[("always" | "never")]
// ----- n/prefer-node-protocol -----
type NPreferNodeProtocol = []|[{
  version?: string
}]
// ----- n/shebang -----
type NShebang = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  ignoreUnpublished?: boolean
  additionalExecutables?: string[]
  executableMap?: {
    [k: string]: string
  }
}]
// ----- promise/always-return -----
type PromiseAlwaysReturn = []|[{
  ignoreLastCallback?: boolean
  ignoreAssignmentVariable?: string[]
}]
// ----- promise/catch-or-return -----
type PromiseCatchOrReturn = []|[{
  allowFinally?: boolean
  allowThen?: boolean
  allowThenStrict?: boolean
  terminationMethod?: (string | string[])
}]
// ----- promise/no-callback-in-promise -----
type PromiseNoCallbackInPromise = []|[{
  exceptions?: string[]
  timeoutsErr?: boolean
}]
// ----- promise/no-return-wrap -----
type PromiseNoReturnWrap = []|[{
  allowReject?: boolean
}]
// ----- promise/param-names -----
type PromiseParamNames = []|[{
  resolvePattern?: string
  rejectPattern?: string
}]
// ----- promise/prefer-await-to-then -----
type PromisePreferAwaitToThen = []|[{
  strict?: boolean
  [k: string]: unknown | undefined
}]
// ----- promise/spec-only -----
type PromiseSpecOnly = []|[{
  allowedMethods?: string[]
}]
// ----- promise/valid-params -----
type PromiseValidParams = []|[{
  exclude?: string[]
}]
// ----- react-dom/dom-no-unknown-property -----
type ReactDomDomNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react-dom/exhaustive-deps -----
type ReactDomExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react-dom/jsx-no-useless-fragment -----
type ReactDomJsxNoUselessFragment = []|[{
  
  allowEmptyFragment?: boolean
  
  allowExpressions?: boolean
}]
// ----- react-dom/no-unstable-default-props -----
type ReactDomNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react-dom/rules-of-hooks -----
type ReactDomRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react-dom/use-state -----
type ReactDomUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react-dom/x-exhaustive-deps -----
type ReactDomXExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react-dom/x-no-unstable-default-props -----
type ReactDomXNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react-dom/x-rules-of-hooks -----
type ReactDomXRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react-dom/x-use-state -----
type ReactDomXUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react-hooks-extra/dom-no-unknown-property -----
type ReactHooksExtraDomNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react-hooks-extra/exhaustive-deps -----
type ReactHooksExtraExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react-hooks-extra/jsx-no-useless-fragment -----
type ReactHooksExtraJsxNoUselessFragment = []|[{
  
  allowEmptyFragment?: boolean
  
  allowExpressions?: boolean
}]
// ----- react-hooks-extra/no-unstable-default-props -----
type ReactHooksExtraNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react-hooks-extra/rules-of-hooks -----
type ReactHooksExtraRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react-hooks-extra/use-state -----
type ReactHooksExtraUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react-hooks-extra/x-exhaustive-deps -----
type ReactHooksExtraXExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react-hooks-extra/x-no-unstable-default-props -----
type ReactHooksExtraXNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react-hooks-extra/x-rules-of-hooks -----
type ReactHooksExtraXRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react-hooks-extra/x-use-state -----
type ReactHooksExtraXUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react-hooks/capitalized-calls -----
type ReactHooksCapitalizedCalls = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/config -----
type ReactHooksConfig = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/error-boundaries -----
type ReactHooksErrorBoundaries = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/exhaustive-deps -----
type ReactHooksExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react-hooks/exhaustive-effect-dependencies -----
type ReactHooksExhaustiveEffectDependencies = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/fbt -----
type ReactHooksFbt = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/gating -----
type ReactHooksGating = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/globals -----
type ReactHooksGlobals = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/hooks -----
type ReactHooksHooks = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/immutability -----
type ReactHooksImmutability = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/incompatible-library -----
type ReactHooksIncompatibleLibrary = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/invariant -----
type ReactHooksInvariant = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/memo-dependencies -----
type ReactHooksMemoDependencies = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/memoized-effect-dependencies -----
type ReactHooksMemoizedEffectDependencies = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/no-deriving-state-in-effects -----
type ReactHooksNoDerivingStateInEffects = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/preserve-manual-memoization -----
type ReactHooksPreserveManualMemoization = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/purity -----
type ReactHooksPurity = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/refs -----
type ReactHooksRefs = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/rule-suppression -----
type ReactHooksRuleSuppression = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/rules-of-hooks -----
type ReactHooksRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react-hooks/set-state-in-effect -----
type ReactHooksSetStateInEffect = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/set-state-in-render -----
type ReactHooksSetStateInRender = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/static-components -----
type ReactHooksStaticComponents = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/syntax -----
type ReactHooksSyntax = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/todo -----
type ReactHooksTodo = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/unsupported-syntax -----
type ReactHooksUnsupportedSyntax = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/use-memo -----
type ReactHooksUseMemo = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-hooks/void-use-memo -----
type ReactHooksVoidUseMemo = []|[{
  [k: string]: unknown | undefined
}]
// ----- react-naming-convention/dom-no-unknown-property -----
type ReactNamingConventionDomNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react-naming-convention/exhaustive-deps -----
type ReactNamingConventionExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react-naming-convention/jsx-no-useless-fragment -----
type ReactNamingConventionJsxNoUselessFragment = []|[{
  
  allowEmptyFragment?: boolean
  
  allowExpressions?: boolean
}]
// ----- react-naming-convention/no-unstable-default-props -----
type ReactNamingConventionNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react-naming-convention/rules-of-hooks -----
type ReactNamingConventionRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react-naming-convention/use-state -----
type ReactNamingConventionUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react-naming-convention/x-exhaustive-deps -----
type ReactNamingConventionXExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react-naming-convention/x-no-unstable-default-props -----
type ReactNamingConventionXNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react-naming-convention/x-rules-of-hooks -----
type ReactNamingConventionXRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react-naming-convention/x-use-state -----
type ReactNamingConventionXUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react-refresh/only-export-components -----
type ReactRefreshOnlyExportComponents = []|[{
  extraHOCs?: string[]
  allowExportNames?: string[]
  allowConstantExport?: boolean
  checkJS?: boolean
}]
// ----- react-web-api/dom-no-unknown-property -----
type ReactWebApiDomNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react-web-api/exhaustive-deps -----
type ReactWebApiExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react-web-api/jsx-no-useless-fragment -----
type ReactWebApiJsxNoUselessFragment = []|[{
  
  allowEmptyFragment?: boolean
  
  allowExpressions?: boolean
}]
// ----- react-web-api/no-unstable-default-props -----
type ReactWebApiNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react-web-api/rules-of-hooks -----
type ReactWebApiRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react-web-api/use-state -----
type ReactWebApiUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react-web-api/x-exhaustive-deps -----
type ReactWebApiXExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react-web-api/x-no-unstable-default-props -----
type ReactWebApiXNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react-web-api/x-rules-of-hooks -----
type ReactWebApiXRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react-web-api/x-use-state -----
type ReactWebApiXUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react/dom-no-unknown-property -----
type ReactDomNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react/exhaustive-deps -----
type ReactExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react/jsx-no-useless-fragment -----
type ReactJsxNoUselessFragment = []|[{
  
  allowEmptyFragment?: boolean
  
  allowExpressions?: boolean
}]
// ----- react/no-unstable-default-props -----
type ReactNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react/rules-of-hooks -----
type ReactRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react/use-state -----
type ReactUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react/x-exhaustive-deps -----
type ReactXExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react/x-no-unstable-default-props -----
type ReactXNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react/x-rules-of-hooks -----
type ReactXRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react/x-use-state -----
type ReactXUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- regexp/hexadecimal-escape -----
type RegexpHexadecimalEscape = []|[("always" | "never")]
// ----- regexp/letter-case -----
type RegexpLetterCase = []|[{
  caseInsensitive?: ("lowercase" | "uppercase" | "ignore")
  unicodeEscape?: ("lowercase" | "uppercase" | "ignore")
  hexadecimalEscape?: ("lowercase" | "uppercase" | "ignore")
  controlEscape?: ("lowercase" | "uppercase" | "ignore")
}]
// ----- regexp/match-any -----
type RegexpMatchAny = []|[{
  
  allows?: [("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll"), ...(("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll"))[]]
}]
// ----- regexp/no-dupe-disjunctions -----
type RegexpNoDupeDisjunctions = []|[{
  report?: ("all" | "trivial" | "interesting")
  reportExponentialBacktracking?: ("none" | "certain" | "potential")
  reportUnreachable?: ("certain" | "potential")
}]
// ----- regexp/no-lazy-ends -----
type RegexpNoLazyEnds = []|[{
  ignorePartial?: boolean
}]
// ----- regexp/no-legacy-features -----
type RegexpNoLegacyFeatures = []|[{
  staticProperties?: ("input" | "$_" | "lastMatch" | "$&" | "lastParen" | "$+" | "leftContext" | "$`" | "rightContext" | "$'" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9")[]
  prototypeMethods?: ("compile")[]
}]
// ----- regexp/no-misleading-capturing-group -----
type RegexpNoMisleadingCapturingGroup = []|[{
  reportBacktrackingEnds?: boolean
}]
// ----- regexp/no-misleading-unicode-character -----
type RegexpNoMisleadingUnicodeCharacter = []|[{
  fixable?: boolean
}]
// ----- regexp/no-missing-g-flag -----
type RegexpNoMissingGFlag = []|[{
  strictTypes?: boolean
}]
// ----- regexp/no-obscure-range -----
type RegexpNoObscureRange = []|[{
  allowed?: (("all" | "alphanumeric") | [("all" | "alphanumeric")] | [("alphanumeric" | string), ...(("alphanumeric" | string))[]])
}]
// ----- regexp/no-super-linear-backtracking -----
type RegexpNoSuperLinearBacktracking = []|[{
  report?: ("certain" | "potential")
}]
// ----- regexp/no-super-linear-move -----
type RegexpNoSuperLinearMove = []|[{
  report?: ("certain" | "potential")
  ignoreSticky?: boolean
  ignorePartial?: boolean
}]
// ----- regexp/no-unused-capturing-group -----
type RegexpNoUnusedCapturingGroup = []|[{
  fixable?: boolean
  allowNamed?: boolean
}]
// ----- regexp/no-useless-character-class -----
type RegexpNoUselessCharacterClass = []|[{
  ignores?: string[]
}]
// ----- regexp/no-useless-flag -----
type RegexpNoUselessFlag = []|[{
  ignore?: ("i" | "m" | "s" | "g" | "y")[]
  strictTypes?: boolean
}]
// ----- regexp/no-useless-non-capturing-group -----
type RegexpNoUselessNonCapturingGroup = []|[{
  allowTop?: (boolean | ("always" | "never" | "partial"))
}]
// ----- regexp/optimal-quantifier-concatenation -----
type RegexpOptimalQuantifierConcatenation = []|[{
  capturingGroups?: ("ignore" | "report")
}]
// ----- regexp/prefer-character-class -----
type RegexpPreferCharacterClass = []|[{
  minAlternatives?: number
}]
// ----- regexp/prefer-d -----
type RegexpPreferD = []|[{
  insideCharacterClass?: ("ignore" | "range" | "d")
}]
// ----- regexp/prefer-lookaround -----
type RegexpPreferLookaround = []|[{
  lookbehind?: boolean
  strictTypes?: boolean
}]
// ----- regexp/prefer-named-replacement -----
type RegexpPreferNamedReplacement = []|[{
  strictTypes?: boolean
}]
// ----- regexp/prefer-quantifier -----
type RegexpPreferQuantifier = []|[{
  allows?: string[]
}]
// ----- regexp/prefer-range -----
type RegexpPreferRange = []|[{
  target?: (("all" | "alphanumeric") | [("all" | "alphanumeric")] | [("alphanumeric" | string), ...(("alphanumeric" | string))[]])
}]
// ----- regexp/prefer-result-array-groups -----
type RegexpPreferResultArrayGroups = []|[{
  strictTypes?: boolean
}]
// ----- regexp/sort-character-class-elements -----
type RegexpSortCharacterClassElements = []|[{
  order?: ("\\s" | "\\w" | "\\d" | "\\p" | "*" | "\\q" | "[]")[]
}]
// ----- regexp/unicode-escape -----
type RegexpUnicodeEscape = []|[("unicodeCodePointEscape" | "unicodeEscape")]
// ----- regexp/unicode-property -----
type RegexpUnicodeProperty = []|[{
  generalCategory?: ("always" | "never" | "ignore")
  key?: ("short" | "long" | "ignore")
  property?: (("short" | "long" | "ignore") | {
    binary?: ("short" | "long" | "ignore")
    generalCategory?: ("short" | "long" | "ignore")
    script?: ("short" | "long" | "ignore")
  })
}]
// ----- simple-import-sort/imports -----
type SimpleImportSortImports = []|[{
  groups?: string[][]
}]
// ----- tailwindcss/classnames-order -----
type TailwindcssClassnamesOrder = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  removeDuplicates?: boolean
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tailwindcss/enforces-negative-arbitrary-values -----
type TailwindcssEnforcesNegativeArbitraryValues = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tailwindcss/enforces-shorthand -----
type TailwindcssEnforcesShorthand = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tailwindcss/migration-from-tailwind-2 -----
type TailwindcssMigrationFromTailwind2 = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tailwindcss/no-arbitrary-value -----
type TailwindcssNoArbitraryValue = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tailwindcss/no-contradicting-classname -----
type TailwindcssNoContradictingClassname = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- tailwindcss/no-custom-classname -----
type TailwindcssNoCustomClassname = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  cssFiles?: string[]
  cssFilesRefreshRate?: number
  tags?: string[]
  whitelist?: string[]
  [k: string]: unknown | undefined
}]
// ----- tailwindcss/no-unnecessary-arbitrary-value -----
type TailwindcssNoUnnecessaryArbitraryValue = []|[{
  callees?: string[]
  ignoredKeys?: string[]
  config?: (string | {
    [k: string]: unknown | undefined
  })
  tags?: string[]
  [k: string]: unknown | undefined
}]
// ----- toml/array-bracket-newline -----
type TomlArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- toml/array-bracket-spacing -----
type TomlArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- toml/array-element-newline -----
type TomlArrayElementNewline = []|[(_TomlArrayElementNewlineBasicConfig | {
  ArrayExpression?: _TomlArrayElementNewlineBasicConfig
  ArrayPattern?: _TomlArrayElementNewlineBasicConfig
  TOMLArray?: _TomlArrayElementNewlineBasicConfig
})]
type _TomlArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})
// ----- toml/comma-style -----
type TomlCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- toml/indent -----
type TomlIndent = []|[("tab" | number)]|[("tab" | number), {
  subTables?: number
  keyValuePairs?: number
}]
// ----- toml/inline-table-curly-newline -----
type TomlInlineTableCurlyNewline = []|[(("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
})]
// ----- toml/inline-table-curly-spacing -----
type TomlInlineTableCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  emptyObjects?: ("ignore" | "always" | "never")
}]
// ----- toml/inline-table-key-value-newline -----
type TomlInlineTableKeyValueNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
}]
// ----- toml/key-spacing -----
type TomlKeySpacing = []|[({
  align?: (("equal" | "value") | {
    on?: ("equal" | "value")
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeEqual?: boolean
  afterEqual?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
  multiLine?: {
    align?: (("equal" | "value") | {
      on?: ("equal" | "value")
      mode?: ("strict" | "minimum")
      beforeEqual?: boolean
      afterEqual?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
  align?: {
    on?: ("equal" | "value")
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
})]
// ----- toml/no-mixed-type-in-array -----
type TomlNoMixedTypeInArray = []|[{
  typeMap?: {
    string?: string
    boolean?: string
    integer?: string
    float?: string
    offsetDateTime?: string
    localDateTime?: string
    localDate?: string
    localTime?: string
    array?: string
    inlineTable?: string
  }
}]
// ----- toml/no-non-decimal-integer -----
type TomlNoNonDecimalInteger = []|[{
  allowHexadecimal?: boolean
  allowOctal?: boolean
  allowBinary?: boolean
}]
// ----- toml/precision-of-fractional-seconds -----
type TomlPrecisionOfFractionalSeconds = []|[{
  max?: number
}]
// ----- toml/precision-of-integer -----
type TomlPrecisionOfInteger = []|[{
  maxBit?: number
}]
// ----- toml/quoted-keys -----
type TomlQuotedKeys = []|[{
  prefer?: ("as-needed" | "always")
  numbers?: boolean
}]
// ----- toml/spaced-comment -----
type TomlSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
}]
// ----- toml/table-bracket-spacing -----
type TomlTableBracketSpacing = []|[("always" | "never")]
// ----- unicorn/better-regex -----
type UnicornBetterRegex = []|[{
  
  sortCharacterClasses?: boolean
}]
// ----- unicorn/catch-error-name -----
type UnicornCatchErrorName = []|[{
  
  name?: string
  
  ignore?: unknown[]
}]
// ----- unicorn/consistent-function-scoping -----
type UnicornConsistentFunctionScoping = []|[{
  
  checkArrowFunctions?: boolean
}]
// ----- unicorn/escape-case -----
type UnicornEscapeCase = []|[("uppercase" | "lowercase")]
// ----- unicorn/expiring-todo-comments -----
type UnicornExpiringTodoComments = []|[{
  
  terms?: string[]
  
  ignore?: unknown[]
  
  ignoreDates?: boolean
  
  ignoreDatesOnPullRequests?: boolean
  
  allowWarningComments?: boolean
  
  date?: string
}]
// ----- unicorn/explicit-length-check -----
type UnicornExplicitLengthCheck = []|[{
  "non-zero"?: ("greater-than" | "not-equal")
}]
// ----- unicorn/filename-case -----
type UnicornFilenameCase = []|[({
  
  case?: ("camelCase" | "snakeCase" | "kebabCase" | "pascalCase")
  
  ignore?: unknown[]
  
  multipleFileExtensions?: boolean
} | {
  
  cases?: {
    
    camelCase?: boolean
    
    snakeCase?: boolean
    
    kebabCase?: boolean
    
    pascalCase?: boolean
  }
  
  ignore?: unknown[]
  
  multipleFileExtensions?: boolean
})]
// ----- unicorn/import-style -----
type UnicornImportStyle = []|[{
  
  checkImport?: boolean
  
  checkDynamicImport?: boolean
  
  checkExportFrom?: boolean
  
  checkRequire?: boolean
  
  extendDefaultStyles?: boolean
  styles?: _UnicornImportStyle_ModuleStyles
}]
type _UnicornImportStyleStyles = (false | _UnicornImportStyle_BooleanObject) | undefined
interface _UnicornImportStyle_ModuleStyles {
  [k: string]: _UnicornImportStyleStyles | undefined
}
interface _UnicornImportStyle_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/isolated-functions -----
type UnicornIsolatedFunctions = []|[{
  
  overrideGlobals?: {
    [k: string]: (boolean | ("readonly" | "writable" | "writeable" | "off")) | undefined
  }
  
  functions?: string[]
  
  selectors?: string[]
  
  comments?: string[]
}]
// ----- unicorn/no-array-reduce -----
type UnicornNoArrayReduce = []|[{
  
  allowSimpleOperations?: boolean
}]
// ----- unicorn/no-array-reverse -----
type UnicornNoArrayReverse = []|[{
  allowExpressionStatement?: boolean
}]
// ----- unicorn/no-array-sort -----
type UnicornNoArraySort = []|[{
  allowExpressionStatement?: boolean
}]
// ----- unicorn/no-instanceof-builtins -----
type UnicornNoInstanceofBuiltins = []|[{
  useErrorIsError?: boolean
  strategy?: ("loose" | "strict")
  include?: string[]
  exclude?: string[]
}]
// ----- unicorn/no-keyword-prefix -----
type UnicornNoKeywordPrefix = []|[{
  
  disallowedPrefixes?: []|[string]
  
  checkProperties?: boolean
  
  onlyCamelCase?: boolean
}]
// ----- unicorn/no-null -----
type UnicornNoNull = []|[{
  
  checkStrictEquality?: boolean
}]
// ----- unicorn/no-typeof-undefined -----
type UnicornNoTypeofUndefined = []|[{
  
  checkGlobalVariables?: boolean
}]
// ----- unicorn/no-unnecessary-polyfills -----
type UnicornNoUnnecessaryPolyfills = []|[{
  
  targets: (string | unknown[] | {
    [k: string]: unknown | undefined
  })
}]
// ----- unicorn/no-useless-undefined -----
type UnicornNoUselessUndefined = []|[{
  
  checkArguments?: boolean
  
  checkArrowFunctionBody?: boolean
}]
// ----- unicorn/number-literal-case -----
type UnicornNumberLiteralCase = []|[{
  hexadecimalValue?: ("uppercase" | "lowercase")
}]
// ----- unicorn/numeric-separators-style -----
type UnicornNumericSeparatorsStyle = []|[{
  binary?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
  }
  octal?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
  }
  hexadecimal?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
  }
  number?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
  }
  
  onlyIfContainsSeparator?: boolean
}]
// ----- unicorn/prefer-add-event-listener -----
type UnicornPreferAddEventListener = []|[{
  
  excludedPackages?: string[]
}]
// ----- unicorn/prefer-array-find -----
type UnicornPreferArrayFind = []|[{
  
  checkFromLast?: boolean
}]
// ----- unicorn/prefer-array-flat -----
type UnicornPreferArrayFlat = []|[{
  
  functions?: unknown[]
}]
// ----- unicorn/prefer-at -----
type UnicornPreferAt = []|[{
  
  getLastElementFunctions?: unknown[]
  
  checkAllIndexAccess?: boolean
}]
// ----- unicorn/prefer-export-from -----
type UnicornPreferExportFrom = []|[{
  
  ignoreUsedVariables?: boolean
}]
// ----- unicorn/prefer-number-properties -----
type UnicornPreferNumberProperties = []|[{
  
  checkInfinity?: boolean
  
  checkNaN?: boolean
}]
// ----- unicorn/prefer-object-from-entries -----
type UnicornPreferObjectFromEntries = []|[{
  
  functions?: unknown[]
}]
// ----- unicorn/prefer-single-call -----
type UnicornPreferSingleCall = []|[{
  
  ignore?: unknown[]
}]
// ----- unicorn/prefer-structured-clone -----
type UnicornPreferStructuredClone = []|[{
  
  functions?: unknown[]
}]
// ----- unicorn/prefer-switch -----
type UnicornPreferSwitch = []|[{
  
  minimumCases?: number
  
  emptyDefaultCase?: ("no-default-comment" | "do-nothing-comment" | "no-default-case")
}]
// ----- unicorn/prefer-ternary -----
type UnicornPreferTernary = []|[("always" | "only-single-line")]
// ----- unicorn/prevent-abbreviations -----
type UnicornPreventAbbreviations = []|[{
  
  checkProperties?: boolean
  
  checkVariables?: boolean
  
  checkDefaultAndNamespaceImports?: (boolean | string)
  
  checkShorthandImports?: (boolean | string)
  
  checkShorthandProperties?: boolean
  
  checkFilenames?: boolean
  
  extendDefaultReplacements?: boolean
  replacements?: _UnicornPreventAbbreviations_Abbreviations
  
  extendDefaultAllowList?: boolean
  allowList?: _UnicornPreventAbbreviations_BooleanObject
  
  ignore?: unknown[]
}]
type _UnicornPreventAbbreviationsReplacements = (false | _UnicornPreventAbbreviations_BooleanObject) | undefined
interface _UnicornPreventAbbreviations_Abbreviations {
  [k: string]: _UnicornPreventAbbreviationsReplacements | undefined
}
interface _UnicornPreventAbbreviations_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/relative-url-style -----
type UnicornRelativeUrlStyle = []|[("never" | "always")]
// ----- unicorn/string-content -----
type UnicornStringContent = []|[{
  
  patterns?: {
    [k: string]: (string | {
      suggest: string
      fix?: boolean
      message?: string
    }) | undefined
  }
}]
// ----- unicorn/switch-case-braces -----
type UnicornSwitchCaseBraces = []|[("always" | "avoid")]
// ----- unicorn/template-indent -----
type UnicornTemplateIndent = []|[{
  
  indent?: (string | number)
  
  tags?: string[]
  
  functions?: string[]
  
  selectors?: string[]
  
  comments?: string[]
}]
// ----- unicorn/text-encoding-identifier-case -----
type UnicornTextEncodingIdentifierCase = []|[{
  
  withDash?: boolean
}]
// ----- unused-imports/no-unused-imports -----
type UnusedImportsNoUnusedImports = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  enableAutofixRemoval?: {
    
    imports?: boolean
  }
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  ignoreUsingDeclarations?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- unused-imports/no-unused-vars -----
type UnusedImportsNoUnusedVars = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  enableAutofixRemoval?: {
    
    imports?: boolean
  }
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  ignoreUsingDeclarations?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- yml/block-mapping -----
type YmlBlockMapping = []|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
})]
// ----- yml/block-mapping-colon-indicator-newline -----
type YmlBlockMappingColonIndicatorNewline = []|[("always" | "never")]
// ----- yml/block-mapping-question-indicator-newline -----
type YmlBlockMappingQuestionIndicatorNewline = []|[("always" | "never")]
// ----- yml/block-sequence -----
type YmlBlockSequence = []|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
})]
// ----- yml/block-sequence-hyphen-indicator-newline -----
type YmlBlockSequenceHyphenIndicatorNewline = []|[("always" | "never")]|[("always" | "never"), {
  nestedHyphen?: ("always" | "never")
  blockMapping?: ("always" | "never")
}]
// ----- yml/file-extension -----
type YmlFileExtension = []|[{
  extension?: ("yaml" | "yml")
  caseSensitive?: boolean
}]
// ----- yml/flow-mapping-curly-newline -----
type YmlFlowMappingCurlyNewline = []|[(("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
})]
// ----- yml/flow-mapping-curly-spacing -----
type YmlFlowMappingCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  emptyObjects?: ("ignore" | "always" | "never")
}]
// ----- yml/flow-sequence-bracket-newline -----
type YmlFlowSequenceBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- yml/flow-sequence-bracket-spacing -----
type YmlFlowSequenceBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- yml/indent -----
type YmlIndent = []|[number]|[number, {
  indentBlockSequences?: boolean
  indicatorValueIndent?: number
  alignMultilineFlowScalars?: boolean
}]
// ----- yml/key-name-casing -----
type YmlKeyNameCasing = []|[{
  camelCase?: boolean
  PascalCase?: boolean
  SCREAMING_SNAKE_CASE?: boolean
  "kebab-case"?: boolean
  snake_case?: boolean
  ignores?: string[]
}]
// ----- yml/key-spacing -----
type YmlKeySpacing = []|[({
  align?: (("colon" | "value") | {
    on?: ("colon" | "value")
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      on?: ("colon" | "value")
      mode?: ("strict" | "minimum")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    on?: ("colon" | "value")
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- yml/no-irregular-whitespace -----
type YmlNoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipQuotedScalars?: boolean
}]
// ----- yml/no-multiple-empty-lines -----
type YmlNoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- yml/plain-scalar -----
type YmlPlainScalar = []|[("always" | "never")]|[("always" | "never"), {
  ignorePatterns?: string[]
  overrides?: {
    mappingKey?: ("always" | "never" | null)
  }
}]
// ----- yml/quotes -----
type YmlQuotes = []|[{
  prefer?: ("double" | "single")
  avoidEscape?: boolean
}]
// ----- yml/sort-keys -----
type YmlSortKeys = ([{
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}, ...({
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
})[]] | []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}])
// ----- yml/sort-sequence-values -----
type YmlSortSequenceValues = [{
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minValues?: number
}, ...({
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minValues?: number
})[]]
// ----- yml/spaced-comment -----
type YmlSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
}]
    // Names of all the configs
    export type ConfigNames = 'markdown/recommended/plugin' | 'markdown/recommended/processor' | 'markdown/recommended/code-blocks' | 'tailwindcss:base' | 'tailwindcss:rules'
    