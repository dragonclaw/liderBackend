exports.isNumber = (n) => { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

/**
 * Creates a RegExp that matches the words in the search string.
 * Accent insensitive.
 */
exports.make_pattern = (search_string) => {
	const accented = {
		A: '[aá]',
		E: '[eé]',
		I: '[ií]',
		N: '[nñ]',
		O: '[oó]',
		U: '[uú]',
		Á: '[aá]',
		É: '[eé]',
		Í: '[ií]',
		Ñ: '[nñ]',
		Ó: '[oó]',
		Ú: '[uú]',
	};

	// split into words
	const words = search_string.split(/\s+/);

	// replace characters with its accents
	const accent_replacer = function replacer(chr) {
		return accented[chr.toUpperCase()] || chr;
	};
	for (let i = 0; i < words.length; i += 1) {
		words[i] = words[i].replace(/\S/g, accent_replacer);
	}

	// join as alternatives
	return words.join('.* ');
}

exports.checkIsPalindrome = (str) => {
	var len = Math.floor(str.length / 2);
	for (var i = 0; i < len; i++)
		if (str[i] !== str[str.length - i - 1])
			return false;
	return true;
}