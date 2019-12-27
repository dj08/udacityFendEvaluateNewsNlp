import { validateUrl } from '../js/validateUrl.js';

describe("URL Verification function", () => {
    test("successfully tests given URL", () => {
	let result = validateUrl('http://www.google.com');
	expect(result).toBe(true);
    });
});
