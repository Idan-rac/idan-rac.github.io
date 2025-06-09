function submitForm() {
  // אסיפת הנתונים מהטופס
  const value1 = document.getElementById("Full Name").value;
  const value2 = document.getElementById("Email Address").value;
  const value3 = document.getElementById("Mobile Number").value;
  const value4 = document.getElementById("Email Subject").value;
  const value5 = document.getElementById("Yore Message").value;

  // הכנת אובייקט הנתונים
  const data = {
    value1: value1,
    value2: value2,
    value3: value3,
    value4: value4,
    value5: value5,
  };

  // שליחת בקשת POST ל-API
  fetch("https://http://127.0.0.1:5500//API/Data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result); // התוצאה מהשרת
      alert("Data inserted successfully!"); // הודעה אם הנתונים הוכנסו בהצלחה
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error inserting data.");
    });
}
