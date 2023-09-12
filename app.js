document.addEventListener('DOMContentLoaded', () => {
  const rangeInput = document.querySelector('.rangeInput');
  const sampleText = document.querySelector('.sampleText');
  const fontSelector = document.querySelector('.fontSelector');

  rangeInput.addEventListener('input', () => {
    sampleText.style.fontSize = rangeInput.value + 'px';
  });
  fontSelector.addEventListener('change', () => {
    sampleText.style.fontFamily = fontSelector.value;
  });
});
