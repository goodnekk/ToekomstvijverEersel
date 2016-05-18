module.exports = {
    database: {
        url: __DATABASE_URI__,
        options: {
            user: __DATABASE_USER__,
            pass: __DATABASE_PASS__
        }
    },
    secret: __HASH_SECRET__
};
