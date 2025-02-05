<!--
 * @Author: vivekrp
 * @Date: 2021-04-04 03:20:00
 * @LastEditTime: 2021-04-04 03:20:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-red-contrib-crypto-js-dynamic\README.md
-->
# NOTICE
This repo is forked from https://github.com/Drswith/node-red-contrib-crypto-js-plus and https://github.com/baumblatt/node-red-contrib-crypto-js and https://github.com/vivekrp/node-red-contrib-crypto-js-dynamic

And added SM4 feature.

# node-red-contrib-crypto-js-sm4
Node-RED nodes using CryptoJS to encrypt and decrypt messages

# Install
`npm install https://github.com/dvpr/node-red-contrib-crypto-js-sm4.git`


# Sample Flows
![SampleFlows](samples/flows.jpg)

You can have access to this samples flows on `samples/flows.json` file.

**Note: User defined Secret Key can be overridden by sending a msg.secrectkey containing the key value you wish.**

# CryptoJS 
> JavaScript library of crypto standards.

Supported algorithms:   

Encrypt and Decrypt Nodes:
* crypto-js/aes
* crypto-js/des
* crypto-js/RC4
* crypto-js/Rabbit
* crypto-js/TripleDES
* node-red-contrib-crypto-js-sm4

Digest Node
* crypto-js/md5
* crypto-js/sha1
* crypto-js/sha3
* crypto-js/sha224
* crypto-js/sha256
* crypto-js/sha384
* crypto-js/sha512
  
HMAC (Hash-based Message Authentication Code) Node
* crypto-js/hmac-md5
* crypto-js/hmac-sha1
* crypto-js/hmac-sha3
* crypto-js/hmac-sha224
* crypto-js/hmac-sha256
* crypto-js/hmac-sha384
* crypto-js/hmac-sha512

Encode and Decode
* crypto-js/enc-base64
* crypto-js/enc-Hex
* crypto-js/enc-Latin1
* crypto-js/enc-utf8
* crypto-js/enc-Utf16
* crypto-js/enc-Utf16BE
* crypto-js/enc-Utf16LE


# Request for new algorithms
Feel free to open an Issue for new algorithms, but please, keep in mind that this is a 
`crypto-js` Node-RED bridge, so only algorithms supported by underline framework will be implemented.
