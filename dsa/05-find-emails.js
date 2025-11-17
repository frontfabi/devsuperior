function findEmails(text) {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return text.match(regex) || [];
}

console.log(findEmails("Please contact us at support@example.com, pix@frontfabi.dev or sales@example.org."));