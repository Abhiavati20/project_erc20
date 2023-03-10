import abi from "./abi.json";

// Getting ABI array from abi.json file
export const contractABI = abi.abi;

// deployed contract address
export const contractAddress = "0x896d79EC656d7E64184BBf4aEbf4bBc3394801f7";

export function formatAddress(address) {
    return address.slice(0, 6) + "...." + address.slice(-4);
  }
  
  export const eventColor = {
    Mint: "#07931D",
    Transfer: "#0980C2",
    Burn: "#C71111",
  };
  
  export const getEventMessage = (method, amount, to) => {
    const eventMsg = {
      Mint: `${amount} HKP Tokens from Smart Contract`,
      Transfer: `${amount} HKP Token to ${formatAddress(to)}`,
      Burn: "1 HKP Token from wallet",
    };
  
    return eventMsg[method];
  };
  
  export const getSecretMessage = () => {
    const secrets = [
      "Throw your cat in the garbage!",
      "I'm DESPERATELY looking for a job right now!!, First thing I'll do once I see 'Congratulation mail' is I'll delete this message from array.",
      "coding.harshp@gmail.com is my email address, hire me!",
      "The Message.",
      "I'm great at Front-end development, and I can't solve DSA problems",
      "If you are a Front-End developer, I'm better than you.",
    ];
  
    return secrets[Math.floor(Math.random() * secrets.length)];
  };