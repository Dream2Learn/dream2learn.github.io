const qs = selector => document.querySelector(selector);

const observer = new IntersectionObserver(([entry], observer) => {
	if (entry.intersectionRatio > 0.5) {
		// Header is shown!
	} else {
		// Header is hidden
	}
}, {
	threshold: 0.5,
});

observer.observe(qs("header"));