import { uiHelper } from '../js/formHandler.js';

describe("Form Submit Handler Helper function", () => {
    test("Should updates UI with given data", () => {
	let result = uiHelper('name', 'apiResponse');
	expect(result);
    })
})
