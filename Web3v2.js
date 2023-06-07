// mosi-sol [at] github, under gnu-gpl-3 | version 0.0.2
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
}