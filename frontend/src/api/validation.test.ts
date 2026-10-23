import { describe, it, expect } from "vitest";
import { validateRoom } from "./validation";

describe("validateRoom", () => {
    it("accepts a valid rectangle", () => {
        expect(validateRoom([["@", "_"], ["(", "|"]])).toBe(true);
    });
    it("accepts a valid rectangle with differing x and y length", () => {
        expect(validateRoom([["@", "_"], ["(", "|"], ["(", "|"]])).toBe(true);
    });
    it("rejects an empty room", () => {
        expect(validateRoom([])).toBe(false);
    });
    it("rejects a room with wrong characters", () => {
        expect(validateRoom([["@", "_"], ["(", "1"]])).toBe(false);
    });
    it("rejects rows of different length", () => {
        expect(validateRoom([["@", "_"], ["(", "_"], ["(", "(", "("]])).toBe(false);
    });
});