
const contractAddress = "0xd863ba508ce896960D2a885eAFD84Bb5179B1f5D";
const contractABI = /* ABI goes here */;

async function checkBalance() {
    // Function to check balance from contract
    const balance = await contract.methods.balanceOf(userAddress).call();
    document.getElementById("balance").textContent = balance;
}

document.getElementById("check-balance").addEventListener("click", checkBalance);
