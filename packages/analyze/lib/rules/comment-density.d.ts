/**
 * refs: https://github.com/TristanFAURE/tslint/blob/4126PR/src/rules/commentDensityRule.ts
 */
declare const rule: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"density", {
    min: number;
}[], {
    Program(): void;
}>;
export default rule;
