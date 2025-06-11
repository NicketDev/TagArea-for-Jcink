import { TagArea } from "./TagArea/index.esm.min";

document.querySelectorAll('textarea[name="Post"]').forEach(
	(input) =>
		new TagArea({
			input,
			data: {
				fetch: async (search: string) => {
					const response = await fetch(
						`?act=Members&max_results=100&sort_order=desc&sort_key=posts&filter=ALL&name_box=begins&name=${encodeURIComponent(
							search
						)}`
					);
					const html = await response.text();
					const parser = new DOMParser();
					const doc = parser.parseFromString(html, "text/html");
					const anchors = doc.querySelectorAll("a");
					const names = new Set<string>();
					for (let i = 0, l = anchors.length; i < l; i++) {
						const anchor = anchors[i];
						if (
							!anchor ||
							!anchor.textContent ||
							anchor.href.startsWith("javascript:") ||
							!new URL(anchor.href).searchParams.has("showuser")
						)
							continue;
						names.add(anchor.textContent);
					}
					return Array.from(names).filter((name) =>
						name.toLowerCase().startsWith(search.toLowerCase())
					);
				},
				pageSize: 100
			},
			formatTag: (tag: string) => {
				return `<span style="color:blue;text-decoration:underline;">${tag}</span>`;
			}
		})
);
