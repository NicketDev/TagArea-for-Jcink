import fs from "fs";
import esbuild from "esbuild";

if (!fs.existsSync("./dist/")) {
	fs.mkdirSync("./dist/");
}

Promise.all(
	[
		{
			minify: false,
			outfile: `./dist/index.js`
		},
		{
			minify: true,
			outfile: `./dist/index.min.js`
		}
	].map((props) =>
		esbuild.build({
			...props,
			format: "iife",
			bundle: true,
			entryPoints: ["./src/index.ts"]
		})
	)
);
