describe('rgb game testing methods', () => {
  test('getRandomInt method should number max to 255', () => {
    function getRandomInt (int, max) {
      int = Math.floor(Math.random() * (max - 0 + 1) + 0)
      return int
    }

    for (let index = 0; index < 255; index++) {
      const res = getRandomInt('hola', 255)
      expect(res).toBeLessThanOrEqual(255)
      expect(res).toBeGreaterThanOrEqual(0)
    }
  })
})
