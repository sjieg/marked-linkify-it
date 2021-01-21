module.exports = {
	restoreMocks: true,
	clearMocks: true,
	// collectCoverage: true,
	collectCoverageFrom: [
		"src/index.js",
	],
	coverageDirectory: "coverage",
	coverageThreshold: {
		"global": {
			"branches": 100,
			"functions": 100,
			"lines": 100,
			"statements": 100
		}
	},
	testRegex: /\.test\.jsx?$/.source,
};
