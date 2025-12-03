async function processUsers(users) {
    for (const user of users) {
        await sendEmail(user);
    }
}
