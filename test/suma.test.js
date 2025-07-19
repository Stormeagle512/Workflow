function test(desc, fn) {
  try {
    fn();
    console.log("✅: " + desc);
  } catch (error) {
    console.error("❌: " + desc);
    console.error(" " + error.message);
  }
}

function assertEquals(actual, esperado) {
  if (actual !== esperado) {
    throw new Error(`Esperado:${esperado}, pero obtuvo ${actual}`);
  }
}

const suma = require('../src/suma');

test("Suma 5 + 3 = 8", () => {
  assertEquals(suma(5, 3), 8);
});

test("Suma 2.5 + 1.3 = 3.8", () => {
  assertEquals(suma(2.5, 1.3), 3.8);
});

test("Suma 10 + 0 = 10", () => {
  assertEquals(suma(10, 0), 10);
});

test("Suma -2 + 5 = 3", () => {
  assertEquals(suma(-2, 5), 3);
});

test("Suma 0 + 0 = 0", () => {
  assertEquals(suma(0, 0), 0);
});

test("Suma 10 + 100 = 110", () => {
  assertEquals(suma(10, 100), 110);
});