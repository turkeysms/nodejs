const axios = require('axios');

class TurkeySmsClient {
    /**
     * Official TurkeySMS API V4 Client for Node.js
     * @param {string} apiKey 
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.turkeysms.com.tr/';
        this.client = axios.create({
            baseURL: this.baseUrl,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }

    /**
     * Internal request handler
     */
    async _request(endpoint, data = {}) {
        try {
            data.api_key = this.apiKey;
            const response = await this.client.post(endpoint, data);
            return response.data;
        } catch (error) {
            return {
                status: 'error',
                result_code: 'LOCAL-ERR',
                result_message: error.message,
                result: false
            };
        }
    }

    /**
     * Send Standard SMS
     */
    async sendSms(title, mobile, text, lang = 0) {
        return this._request('sms/send', {
            title,
            mobile,
            text,
            sms_lang: lang
        });
    }

    /**
     * Send OTP SMS
     */
    async sendOtp(mobile, lang = 2, digits = 4) {
        return this._request('otp/send', {
            mobile,
            lang,
            digits
        });
    }

    /**
     * Send Detailed OTP
     */
    async sendDetailedOtp(title, mobile, text, lang = 2) {
        return this._request('otp/detailed', {
            title,
            mobile,
            text,
            lang
        });
    }

    /**
     * Check Balance
     */
    async getBalance() {
        return this._request('balance/');
    }

    /**
     * Add to Blacklist
     */
    async addToBlacklist(number) {
        return this._request('blacklist/add', { number });
    }

    /**
     * Get SMS Status
     */
    async getSmsStatus(sms_id) {
        return this._request('sms/status', { sms_id });
    }
}

module.exports = TurkeySmsClient;
