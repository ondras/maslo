import includePaths from "rollup-plugin-includepaths";

let includePathsOptions = {
	paths: ["js"],
	external: []
};

export default {
	output: {
		format: "iife",
		name: "app"
	},
    plugins: [includePaths(includePathsOptions)]
};
