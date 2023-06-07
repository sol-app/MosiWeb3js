// mosi-sol [at] github, under gnu-gpl-3 | version 0.0.3
class Web3 {
  constructor(providerUrl) {
    this.providerUrl = providerUrl;
    this.provider = null;
    this.accounts = null;
    this.defaultAccount = null;
  }

  async connect() {
    try {
      this.provider = new Web3.providers.HttpProvider(this.providerUrl);
      const web3 = new Web3(this.provider);
      const accounts = await web3.eth.requestAccounts();
      this.accounts = accounts;
      this.defaultAccount = accounts[0];
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async sendTransaction(transaction) {
    try {
      const web3 = new Web3(this.provider);
      const result = await web3.eth.sendTransaction(transaction);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async sign(message, address) {
    try {
      const web3 = new Web3(this.provider);
      const signature = await web3.eth.sign(message, address);
      return signature;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async signTypedData(typedData, address) {
    try {
      const web3 = new Web3(this.provider);
      const signature = await web3.eth.signTypedData(typedData, address);
      return signature;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async signTransaction(transaction) {
    try {
      const web3 = new Web3(this.provider);
      const signedTransaction = await web3.eth.signTransaction(transaction);
      return signedTransaction;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async signMessage(message, address) {
    try {
      const web3 = new Web3(this.provider);
      const signature = await web3.eth.personal.sign(message, address);
      return signature;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async signPersonalMessage(message, address) {
    try {
      const web3 = new Web3(this.provider);
      const signature = await web3.eth.personal.sign(message, address);
      return signature;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getChainId() {
    try {
      const web3 = new Web3(this.provider);
      const chainId = await web3.eth.getChainId();
      return chainId;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getTransactionReceipt(txHash) {
    try {
      const web3 = new Web3(this.provider);
      const receipt = await web3.eth.getTransactionReceipt(txHash);
      return receipt;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}