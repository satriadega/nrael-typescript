function getFavoriteNumber(): number {
  return 26;
}

async function getFavoriteNumberPromise(): Promise<number> {
  return 26;
}

console.log(typeof getFavoriteNumber());
console.log(typeof getFavoriteNumberPromise(), getFavoriteNumberPromise());
