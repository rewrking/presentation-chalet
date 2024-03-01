import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

import { regesterYamlPatch } from "./HighlightYaml";

const options: Reveal.Options = {
	hash: true,
	controls: true,
	controlsBackArrows: "faded",
	autoAnimateEasing: "ease-out",
	autoAnimateDuration: 0.25,
	autoAnimateUnmatched: false,
	plugins: [RevealHighlight, RevealNotes],
	highlight: {
		beforeHighlight: (hljs) => {
			regesterYamlPatch(hljs);
		}
	},
	slideNumber: false
};

Reveal.initialize(options);
