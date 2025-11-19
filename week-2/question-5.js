// 5. Compute Simple and Compound Interest
function simpleAndCompoundInterest(p, r, t) {
  const smpInt = (p * r * t) / 100;
  const comInt = p * ((1 + r / 100) ** t - 1);

  console.log(`Simple Interest: ${smpInt}\nCompound Interest: ${comInt}`);
}

simpleAndCompoundInterest(1000, 5, 2);
