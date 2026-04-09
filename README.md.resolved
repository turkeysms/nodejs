# TurkeySMS Node.js SDK (Official) 🟢

[![npm version](https://img.shields.io/npm/v/turkeysms-node.svg)](https://www.npmjs.com/package/turkeysms-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Official Node.js SDK for the **TurkeySMS API V4**. High-performance, Promise-based client for SMS and OTP services.

## 🛠 Installation

Install via npm:

```bash
npm install turkeysms-node
```

---

## 🚀 Quick Start

### Initialize Client

```javascript
const TurkeySmsClient = require('turkeysms-node');
const client = new TurkeySmsClient('your_api_key_here');
```

### Sending Standard SMS

```javascript
async function send() {
    try {
        const response = await client.sendSms('SENDER', '905xxxxxxxxx', 'Hello from Node.js!');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
send();
```

### Sending OTP SMS

```javascript
const response = await client.sendOtp('905xxxxxxxxx', 1, 4);
```

### Advanced OTP (Custom Text)

```javascript
const response = await client.sendDetailedOtp('SENDER', '905xxxxxxxxx', 'Code: TS-CODE', 1);
```

### Check Balance

```javascript
const balance = await client.getBalance();
console.log(`Balance: ${balance.balance}`);
```

---

## 🛡 Security

For security issues, please contact support@turkeysms.com.tr.

## 📄 License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

---
© 2026 **TurkeySMS Bilişim ve İletişim Hizmetleri Tic. Ltd. Şti.**
