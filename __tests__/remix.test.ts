import { redirect } from "@remix-run/node";

// to put of the line numbers as this get removed
interface JustSomeTs {
    ding: string;
    dong: string;
}

test("test", () => {
    expect(typeof redirect).toBe("bad");
});
