document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const job = document.getElementById("job").value;
  const designation = document.getElementById("designation").value;
  const productType = document.getElementById("productType").value;
  const feedback = document.getElementById("feedbackText").value;
  const experience = document.getElementById("userExperince").value; // ✅ new line

  // Fill the display section
  document.getElementById("userName").innerText = name;
  document.getElementById("userAge").innerText = age;
  document.getElementById("userEmail").innerText = email;
  document.getElementById("userJob").innerText = job;
  document.getElementById("userDesignation").innerText = designation;
  document.getElementById("userProductChoice").innerText = productType;
  document.getElementById("userFeedback").innerText = feedback;
  document.getElementById("userExperienceDisplay").innerText = experience; // ✅ show experience

  // Show the output section
  document.getElementById("userInfo").style.display = "block";
});

document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });