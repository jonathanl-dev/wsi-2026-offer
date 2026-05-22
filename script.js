const BOOKING_URL = "";
const CONTACT_EMAIL = "hello@storytellit.com";

const bookingLinks = document.querySelectorAll(".js-book-call");
const contactSection = document.querySelector("#contact");
const form = document.querySelector("#strategyForm");
const statusEl = document.querySelector(".form-status");

bookingLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!BOOKING_URL) {
      return;
    }

    event.preventDefault();
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const interests = formData.getAll("interest");
  const name = formData.get("name");
  const email = formData.get("email");
  const company = formData.get("company");
  const interestText = interests.length ? interests.join(", ") : "Not specified";

  const subject = encodeURIComponent("Book a call with Jonathan - WSI Global Convention");
  const body = encodeURIComponent(
    [
      "Hi Storytellit team,",
      "",
      "I would like to book a call with Jonathan.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Agency / Company: ${company}`,
      `Interested in: ${interestText}`,
      "",
      "Thanks."
    ].join("\n")
  );

  statusEl.textContent = "Opening an email to request your call with Jonathan.";
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

if (contactSection) {
  contactSection.setAttribute("tabindex", "-1");
}
