module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended',
		'eslint:recommended'
	],
	plugins: ['@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'@typescript-eslint/no-use-before-define': ['error'],
		'@typescript-eslint/no-var-requires': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-case-declarations': 'off',
		'no-unused-vars': 'off',
		'no-undef': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	overrides: [
		{
			files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
			rules: {
				'storybook/hierarchy-separator': 'error',
				'storybook/default-exports': 'off'
			}
		}
	]
}
