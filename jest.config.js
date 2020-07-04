// yarn add --dev babel-core@^7.0.0-bridge.0

module.exports = {
	rootDir: '.',
	collectCoverageFrom: ['src/**/*.{js,ts}', '!src/**/*.d.ts'],
	resolver: 'jest-pnp-resolver',
	// setupFiles: ['jsdom'],
	testMatch: ['**/__tests__/**/*.{js,ts}', '**/?(*.)(spec|test).{js,ts}'],
	testEnvironment: 'node',
	testURL: 'http://localhost',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^(?!.*\\.(js|ts|json)$)': '<rootDir>/config/jest/fileTransform.js'
	},
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'],
	moduleNameMapper: {},
	moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'json', 'node'],
	watchPlugins: [
		'<rootDir>/node_modules/jest-watch-typeahead/filename.js',
		'<rootDir>/node_modules/jest-watch-typeahead/testname.js'
	]
};
