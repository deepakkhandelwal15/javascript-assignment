// 3. Email pattern check
const emailPattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(emailPattern.test("example.email+filter@domain.co.uk"));