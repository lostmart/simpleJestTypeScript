const sum = require("./sum")

describe("test to test the tests", () => {
	it("adds 1 + 2 to equal 3", () => {
		expect(sum(1, 2)).toBe(3)
	})
})
