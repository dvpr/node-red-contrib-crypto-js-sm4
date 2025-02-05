module.exports = function (RED) {
	var CryptoJS = require("crypto-js");

	function EncryptNode(config) {
		RED.nodes.createNode(this, config);

		var node = this;
		node.algorithm = config.algorithm;
		node.key = config.key;

		node.on('input', function (msg) {
			// first check if secret key was sent via msg first. If true overwrite user entered secret key in configuration.
			if(msg.secrectkey) {
				node.key = msg.secrectkey;
			}
			// check configurations
			if(!node.algorithm || !node.key) {
				// rising misconfiguration error
				node.error("Missing configuration, please check your algorithm or secret key.", msg);
			} else {
				// check the payload
				if(msg.payload) {
					// debugging message
					node.debug('Encrypting payload using '+node.algorithm);
                                        if(node.algorithm == 'SM4'){
                                                // encrypt with SM4
                                                const JSSM4 = require("jssm4");
                                                var sm4 = new JSSM4('123456');
                                                msg.payload = sm4.encryptData_ECB(msg.payload);
                                        }else{
                                                // encrypt with CryptoJS                                                         
                                                msg.payload = CryptoJS[node.algorithm].encrypt(msg.payload, node.key).toString();
                                        }
				} else {
					// debugging message
					node.trace('Nothing to encrypt: empty payload');
				}

				node.send(msg);
			}
		});
	}

	RED.nodes.registerType("encrypt", EncryptNode);
};
