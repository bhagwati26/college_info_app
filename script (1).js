const colleges = {
  "SGGS Nanded": {
    description: "SGGSIE&T is a government engineering college in Nanded, Maharashtra.",
    website: "https://www.sggs.ac.in"
  },
  "IIT Bombay": {
    description: "Top-tier engineering institute in India located in Mumbai.",
    website: "https://www.iitb.ac.in"
  },
  "NIELIT Aurangabad": {
    description: "Known for CSE, ECE and national certifications.",
    website: "https://www.nielit.gov.in/aurangabad"
  }
};
function searchCollege() {
  const input = document.getElementById("collegeInput").value.trim();
  const resultDiv = document.getElementById("result");
  if (colleges[input]) {
    const info = colleges[input];
    resultDiv.innerHTML = `
      ✅ <b>${input}</b><br>
      ${info.description}<br>
      🔗 <a href="${info.website}" target="_blank">Visit Website</a>
    `;
  } else {
    resultDiv.innerHTML = "❌ College not found. Please try again.";
  }
}