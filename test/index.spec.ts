import { env } from "../src/index";

describe("This is Env", () => {
  it("This is system", () => {
    expect(typeof env.getSystem()).toBe("string");
  });

  it("This is systemVersion", () => {
    expect(typeof env.getSystemVersion()).toBe("string");
  });

  it("This is engine", () => {
    expect(typeof env.getEngine()).toBe("string");
  });

  it("This is engineVersion", () => {
    expect(typeof env.getEngineVersion()).toBe("string");
  });

  it("This is supporter", () => {
    expect(typeof env.getSupporter()).toBe("string");
  });

  it("This is supporterVersion", () => {
    expect(typeof env.getSupporterVersion()).toBe("string");
  });

  it("This is shell", () => {
    expect(typeof env.getShell()).toBe("string");
  });

  it("This is shellVersion", () => {
    expect(typeof env.getShellVersion()).toBe("string");
  });

  it("This is platform", () => {
    expect(typeof env.getPlatform()).toBe("object");
  });
});
