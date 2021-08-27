import * as crypto from 'crypto';

interface Cipher {
    digest(key: string);
};


const cipher: Cipher = {
    digest(key: string) {
        return crypto.createHmac('sha256', key)
            .digest('hex');
    }
};
export default cipher;