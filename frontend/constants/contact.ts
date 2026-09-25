export const CONTACT_APPLY = {
  title: "Write to Us",
  mobileTitle: "Write to Us",
  subtitle:
    "Questions about causes, championing, or partnering? Send a note and our team will get back to you.",
  steps: [
    {
      number: 1,
      title: "Your message",
      description: "Tell us how we can help",
    },
  ],
  form: {
    progressLabel: "Step 1 of 1",
    title: "How can we help?",
    nameLabel: "Your full name",
    namePlaceholder: "Your name",
    emailLabel: "Your personal email",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Your contact number",
    phonePlaceholder: "Phone number",
    messageLabel: "Message",
    messagePlaceholder: "How can we help?",
    agreeLabel: "I agree to be contacted about our circle",
    submitLabel: "Send message",
    submittingLabel: "Sending…",
  },
  thanks: {
    title: "Thank You!",
    eyebrow: "We’ve received your note.",
    body: "Our team will write back shortly. In the meantime, explore live causes or become a Cause Champion.",
    homeLabel: "Back to Homepage",
    homeHref: "/",
  },
} as const;
