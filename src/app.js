document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const token = "8194740353:AAH0OGY6nRa7CvP9F0Qnu1FqJLFmBHt2B3Y";
  const chat_id = "1671249046";

  const name = this.name.value;
  const phone_number = this.phone_number.value;
  const comment = this.comment.value;

  const message = `📩 New Form Submission:\n\n👤 Full name: ${name}\n\n📞 Phone number: ${phone_number}\n\n💬 Message: ${comment}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: message,
      parse_mode: "Markdown",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        alert("Sent successfully!");
        document.getElementById("myForm").reset();
      } else {
        alert("Failed to send: " + data.description);
      }
    });
});
