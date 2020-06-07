const crypto = require('crypto');

module.exports = {
    generateUniqueId() {
        return crypto.randomBytes(4).toString('HEX');
    },

    createHash(password) {
        const SaltLength = 9;
        const salt = generateSalt(SaltLength);
        const hash = md5(password + salt);
        return salt + hash;
    },

    validateHash(hash, password) {
        const SaltLength = 9;
        const salt = hash.substr(0, SaltLength);
        const validHash = salt + md5(password + salt);
        return hash === validHash;
    },

    generateSalt(len) {
        const set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ',
            setLen = set.length,
            salt = '';
        for (let i = 0; i < len; i++) {
            const p = Math.floor(Math.random() * setLen);
            salt += set[p];
        }
        return salt;
    },

    md5(string) {
        return crypto.createHash('md5').update(string).digest('hex');
    },
};
