const greeter = require("./type")
const newCar = require("./type")

describe("test typeScript", () => {
	it("should return 'Hello, World'", () => {
		expect(greeter("Hello, World")).toBe("Hello, World")
	})

	it("should return 'nunca temas ...", () => {
		expect(greeter("nunca temas ...")).toBe("nunca temas ...")
	})
})

describe("typeScript test with objects", () => {
	it("should return a NULL car", () => {
		expect(newCar(null)).toBeNull()
	})

	it("should return a not NULL object", () => {
		expect(
			newCar({
				color: "red",
				year: 2010,
			})
		).not.toBeNull()
	})

	it("should return a not NULL object", () => {
		expect(
			newCar({
				color: "red",
				year: 2010,
			})
		).toEqual({
			color: "red",
			year: 2010,
		})
	})
})
