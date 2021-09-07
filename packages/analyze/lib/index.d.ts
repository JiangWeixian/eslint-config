declare const _default: {
    parser: string;
    rules: {
        'comment-density': import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<"density", {
            min: number;
        }[], {
            Program(): void;
        }>;
    };
    configs: {
        all: {
            rules: {
                '@aiou/analyze/comment-density': string;
            };
        };
    };
};
export = _default;
