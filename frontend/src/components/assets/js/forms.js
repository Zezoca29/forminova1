// forms.js
document.addEventListener("DOMContentLoaded", function () {
    const hasContractSelect = document.getElementById("hasContract");
    const elaborarContratoDiv = document.getElementById("elaborarContratoDiv");
  
    hasContractSelect.addEventListener("change", function () {
      const selectedValue = this.value;
      if (selectedValue === "NÃO") {
        elaborarContratoDiv.style.display = "block";
      } else {
        elaborarContratoDiv.style.display = "none";
      }
    });
  });
  