import Reveal from "reveal.js/dist/reveal.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";

import { regesterYamlPatch } from "./HighlightYaml";

Reveal.initialize({
	hash: true,
	controls: false,
	controlsBackArrows: "faded",

	plugins: [
		RevealHighlight,
		RevealNotes,
	],

	autoAnimateEasing: "ease-out",
	autoAnimateDuration: 0.25,
	autoAnimateUnmatched: false,
	highlight: {
		beforeHighlight: (hljs) => {
			regesterYamlPatch(hljs);
		}
	}
});