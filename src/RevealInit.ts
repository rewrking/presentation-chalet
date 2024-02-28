import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

import { regesterYamlPatch } from "./HighlightYaml";

const options: Reveal.Options = {
	hash: true,
	controls: false,
	controlsBackArrows: "faded",
	plugins: [RevealHighlight, RevealNotes],
	autoAnimateEasing: "ease-out",
	autoAnimateDuration: 0.25,
	autoAnimateUnmatched: false,
	highlight: {
		beforeHighlight: (hljs) => {
			regesterYamlPatch(hljs);
		}
	}
};

Reveal.initialize(options);
