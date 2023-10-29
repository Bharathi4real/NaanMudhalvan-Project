import { ethers } from "ethers";
import abi from "./voting.json";

export const contractAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();

export const votingContract = new ethers.Contract(contractAddress, abi, signer);
