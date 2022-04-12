import { buildRawError, httpCodes } from './ErrorCode';

const crypto = require('crypto');

/**
 * This class can encrypt and decrypt implementing crypto
 */
export class CryptoService {

  protected algorithm: string = 'aes-256-cbc';
  // Header to added in begin string encrypt
  protected header = 'unphu';

  constructor(protected key: string) {}

  // Key Generation
  static generateKey() {
    return crypto.randomBytes(32).toString('hex') as string;
  }

  /**
   * @param data
   */
  encrypt(data: string | any) {
    try {
      const iv = crypto.randomBytes(16);
      const cipher = crypto.createCipheriv(
        this.algorithm,
        Buffer.from(this.key, 'hex'), iv);
      let encrypted = cipher.update(data);
      encrypted = Buffer.concat([encrypted, cipher.final()]);
      return `${this.header}${iv.toString('hex')}.${encrypted.toString('hex')}`.trim();
    }catch (e) {
      throw buildRawError({ message: 'Error encoding' ,
        code: httpCodes.UNAUTHORIZED });
    }
  }

  /**
   *
   * @param data
   */
  decrypt(data: string) {

    try {
      const header = data.split('.')[0].substr(0, 5);
      const ivcode = data.split('.')[0].substr(5);
      const dataEncrypted = data.split('.')[1];

      if (header === this.header) {

        const encryptedText = Buffer.from(dataEncrypted, 'hex');
        const iv = Buffer.from(ivcode, 'hex');

        const decipher = crypto.createDecipheriv(
          this.algorithm,
          Buffer.from(this.key, 'hex'),
          iv);

        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString().trim();
      }
      return data;

    } catch (e) {
      throw buildRawError({
        message: 'Error decoding'
        , code: httpCodes.UNAUTHORIZED,
      });
    }
  }

  /**
   * Decrypting object implement a function mapper to each
   * object and call decrypt function in all nodes
   * @param object

   */
  decryptObject(object: any | object) {

    // Helper to check object
    const checkObject = (object: any | object) => (typeof object === 'object');

    // function for each of the nodes in an object and
    // apply any action in its value to each of them
    const mapper = (objectNode: any, action: any) => {
      for (const x in objectNode) {

        const check = checkObject(objectNode[x]);

        if (`${objectNode[x]}`.split('.')[0].substr(0, 5) === this.header &&
          !check &&
          typeof objectNode[x] !== 'number' &&
          typeof objectNode[x] !== 'boolean') {
          objectNode[x] = action(objectNode[x]);
        }else if (check) {
          mapper(objectNode[x], action);
        }
      }
    };

    mapper(object, this.decrypt.bind(this));
    return object;
  }

  /**
   * encrypt object implement a function mapper to each
   * object and call encrypt function in all nodes
   * @param object

   */
  encryptObject(object: any | object) {
    // Helper to check object
    const checkObject = (object: any | object) => (typeof object === 'object');

    // function for each of the nodes in an object and
    // apply any action in its value to each of them
    const mapper = (objectNode: any, action: any) => {

      for (const x in objectNode) {
        const check = checkObject(objectNode[x]);
        if (!check && typeof objectNode[x] !== 'number' && typeof objectNode[x] !== 'boolean') {
          objectNode[x] = action(objectNode[x]);
        }else if (check) {
          mapper(objectNode[x], action);
        }
      }
    };

    mapper(object, this.encrypt.bind(this));
    return object;
  }
}
