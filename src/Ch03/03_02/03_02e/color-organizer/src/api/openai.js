// 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

export async function getColorNameFromAPI(hex) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Color for ${hex}`);
    }, 500);
  });
}
