function protect_email(email) {
  let [user, domain] = email.split("@");
  return user.slice(0, user.length/2) + "...@" + domain;
}
console.log(protect_email("robin_singh@example.com"));
