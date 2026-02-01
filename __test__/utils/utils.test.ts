import { formatPrice, isValidEmail, truncate } from "@/utils/utils";

describe("formatPrice", () => {
  it("formats number as IDR currency", () => {
    expect(formatPrice(1000)).toContain("1.000");
    expect(formatPrice(1000)).toMatch(/Rp|IDR/i);
  });

  it("handles zero", () => {
    expect(formatPrice(0)).toContain("0");
  });

  it("handles large numbers with thousand separators", () => {
    const formatted = formatPrice(1000000);
    expect(formatted).toContain("1.000.000");
  });

  it("handles decimal numbers", () => {
    expect(formatPrice(1000.5)).toContain("1.000,5");
  });
});

describe("isValidEmail", () => {
  it("returns true for valid email formats", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name@mail.co.id")).toBe(true);
    expect(isValidEmail("user123@mail-domain.com")).toBe(true);
  });

  it("returns false for missing @ symbol", () => {
    expect(isValidEmail("testexample.com")).toBe(false);
  });

  it("returns false for missing domain", () => {
    expect(isValidEmail("test@")).toBe(false);
    expect(isValidEmail("test@mail")).toBe(false);
  });

  it("returns false for invalid characters or spaces", () => {
    expect(isValidEmail("test @example.com")).toBe(false);
    expect(isValidEmail("test@ example.com")).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(isValidEmail("")).toBe(false);
  });
});

describe("truncate", () => {
  it("returns original text if length is less than maxLength", () => {
    expect(truncate("Hello", 10)).toBe("Hello");
  });

  it("returns original text if length is equal to maxLength", () => {
    expect(truncate("Hello", 5)).toBe("Hello");
  });

  it("truncates text and adds ellipsis when exceeding maxLength", () => {
    expect(truncate("Hello World", 8)).toBe("Hello...");
  });

  it("ensures total length does not exceed maxLength", () => {
    const result = truncate("Hello World", 10);
    expect(result.length).toBe(10);
    expect(result).toBe("Hello W...");
  });

  it("handles very small maxLength", () => {
    expect(truncate("Hello", 3)).toBe("...");
  });
});
