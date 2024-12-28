// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {

  const resistanceForm = document.getElementById('resistance-form');
  const resistanceOutput = document.getElementById('resistance-output');
  const resultContainer = document.getElementById('calculator-result');
  
  // Event listener for form submission
  resistanceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the values from the form
    const age = parseInt(document.getElementById('age').value);
    const previousTreatment = document.getElementById('previous-treatment').value;

    let resistanceLikelihood = '';

    // Simple logic for resistance calculation based on age and treatment history
    if (previousTreatment === 'clarithromycin' && age > 50) {
      resistanceLikelihood = 'High likelihood of resistance.';
    } else if (previousTreatment === 'metronidazole' && age > 60) {
      resistanceLikelihood = 'Moderate likelihood of resistance.';
    } else if (previousTreatment === 'amoxicillin') {
      resistanceLikelihood = 'Low likelihood of resistance.';
    } else {
      resistanceLikelihood = 'Low to moderate likelihood of resistance.';
    }

    // Display the result
    resistanceOutput.textContent = resistanceLikelihood;
    resultContainer.style.display = 'block';
  });
});
