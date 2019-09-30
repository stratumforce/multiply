module.exports = function multiply(first, second) {
  first = [...first].reverse();
  second = [...second].reverse();

  let product = [];

  // Column multiplication of reversed numbers
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      let prod = first[i] * second[j];
      product[i + j] = product[i + j] ? product[i + j] + prod : prod;
    }
  }

  // Calculate the ones and tens
  for (let i = 0; i < product.length; i++) {
    let ones = product[i] % 10;
    let tens = Math.floor(product[i] / 10);
    product[i] = ones;

    if (product[i + 1]) product[i + 1] += tens;
    else if (tens != 0) product[i + 1] = tens;
  }

  // Reverse product, remove extra zeroes from the beginning and return
  return product
    .reverse()
    .join("")
    .replace(/^(0(?!$))+/, "");
};
