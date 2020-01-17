import { addFoul } from "./addFoul";

Text("addHit resets strike and ball score to 0", () => {
  expect(addFoul(1).toBe(1));
});
