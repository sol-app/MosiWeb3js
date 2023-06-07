// mosi-sol [at] github, under gnu-gpl-3 | version 0.0.4 latest/stable
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
      this.accounts = await web3.eth.requestAccounts();
      this.defaultAccount = this.accounts[0];
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async getBalance(address) {
    try {
      const web3 = new Web3(this.provider);
      const balance = await web3.eth.getBalance(address);
      return balance;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async sendTransaction(to, value) {
    try {
      const web3 = new Web3(this.provider);
      const transaction = {
        from: this.defaultAccount,
        to: to,
        value: value
      };
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

  async getTransactionReceipt(transactionHash) {
    try {
      const web3 = new Web3(this.provider);
      const transactionReceipt = await web3.eth.getTransactionReceipt(transactionHash);
      return transactionReceipt;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}