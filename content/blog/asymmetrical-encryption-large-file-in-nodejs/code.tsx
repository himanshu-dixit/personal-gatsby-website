import { useEffect } from "react"
const addScript = (url,id) => {
  const script = document.createElement("script")
  script.src = url
  script.async = true


  script.setAttribute("data-element-id", `my-element-${id}`)
  script.setAttribute("data-node-version", "14")
  document.body.appendChild(script)
}

export const Code = ({code,id}) => {
  useEffect(() => {
    addScript("https://embed.runkit.com", id)
  }, [])

  return (<div id={`my-element-${id}`}>{code}</div>)
}

export const Code1 = () => <Code id="1" code={`
const crypto = require("crypto")

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
	modulusLength: 4096,
})

var encryptStringWithRsaPublicKey = function(toEncrypt, relativeOrAbsolutePathToPublicKey) {
    var buffer = Buffer.from(toEncrypt);
    var encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString("base64");
};

var decryptStringWithRsaPrivateKey = function(toDecrypt, relativeOrAbsolutePathtoPrivateKey) {
    var buffer = Buffer.from(toDecrypt, "base64");
    var decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString("utf8");
};

let encryptedText = encryptStringWithRsaPublicKey("small_string")
console.log(encryptedText)

let decryptedText = decryptStringWithRsaPrivateKey(encryptedText)
console.log(decryptedText)
`} />


export const Code2 = () => <Code id="2" code={`
const crypto = require("crypto")

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
	modulusLength: 4096,
})

var encryptStringWithRsaPublicKey = function(toEncrypt, relativeOrAbsolutePathToPublicKey) {
    var buffer = Buffer.from(toEncrypt);
    var encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString("base64");
};

var decryptStringWithRsaPrivateKey = function(toDecrypt, relativeOrAbsolutePathtoPrivateKey) {
    var buffer = Buffer.from(toDecrypt, "base64");
    var decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString("utf8");
};

let encryptedText = encryptStringWithRsaPublicKey("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
console.log("Encrypted ",encryptedText)

let decryptedText = decryptStringWithRsaPrivateKey(encryptedText)
console.log("Decrypted ",decryptedText)
`} />

export const Code3 = () => <Code id="3" code={`
const crypto = require("crypto")
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
	modulusLength: 4096,
})

/* Constants to be used by both encrypt and decrypt*/
var algorithm = 'aes256';
var inputEncoding = 'utf8';
var outputEncoding = 'hex';
var ivlength = 16  // AES blocksize
var key = Buffer.from('ciw7p02f70000ysjon7gztjn7c2x7GfJ', 'latin1'); // key must be 32 bytes for aes256
var iv = crypto.randomBytes(ivlength);


const generateKey = () => {
  const symmetricKey = Buffer.from('ciw7p02f70000ysjon7gztjn7c2x7GfJ', 'latin1').toString();
  return symmetricKey;
}

function encrypt() {
  const symmetricKey = generateKey();
  var data = 'So, for a time this number fluctuated above and below the 1 billion mark. For example, in August 2012 a full 40 million hostnames were removed from 242 IP addresses. This considerably reduced the number of existing websites for a period of time. By March 2016, the web no longer went below a billion websites. It is amazing to consider the sheer growth of the Internet which started with 1 website in 1991 to over a billion today.So, for a time this number fluctuated above and below the 1 billion mark. For example, in August 2012 a full 40 million hostnames were removed from 242 IP addresses. This considerably reduced the number of existing websites for a period of time. By March 2016, the web no longer went below a billion websites. It is amazing to consider the sheer growth of the Internet which started with 1 website in 1991 to over a billion today.So, for a time this number fluctuated above and below the 1 billion mark. For example, in August 2012 a full 40 million hostnames were removed from 242 IP addresses. This considerably reduced the number of existing websites for a period of time. By March 2016, the web no longer went below a billion websites. It is amazing to consider the sheer growth of the Internet which started with 1 website in 1991 to over a billion today.';

  var iv = crypto.randomBytes(ivlength);
  var cipher = crypto.createCipheriv(algorithm, key, iv);
  var ciphered = cipher.update(data, inputEncoding, outputEncoding);
  ciphered += cipher.final(outputEncoding);
  var ciphertext = iv.toString(outputEncoding) + ':' + ciphered;

  const symmetricEncryptedKey = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha1",
    },
    // We convert the data string to a buffer using Buffer.from
    Buffer.from(symmetricKey)
  )

  return symmetricEncryptedKey.toString("base64") + "::::" + ciphertext.toString();
}

function decrypt(data) {
  const key =data.split("::::")[0];
  const cipheredText = data.split("::::")[1]

  const decryptedPrivateKey = crypto.privateDecrypt(
	{
		key: privateKey,
		padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha1",
	},
  Buffer.from(key, "base64")
  )

  var components = cipheredText.split(':');
  var iv_from_ciphertext = Buffer.from(components.shift(), outputEncoding);
  var decipher = crypto.createDecipheriv(algorithm,  Buffer.from(decryptedPrivateKey), iv_from_ciphertext);


  var deciphered = decipher.update(components.join(':'), outputEncoding, inputEncoding);
  deciphered += decipher.final(inputEncoding);

  return deciphered;
}

const encrypted = encrypt();
const decryptData = decrypt(encrypted)

console.log(encrypted)
console.log("Decrypt", decryptData)
`} />

export default Code

