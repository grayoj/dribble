import React, { useState, useEffect } from "react";
import logo from "./logo.png";
const ethers = require("ethers");

function Body() {
    const [greet, setGreet] = useState('');
    const [balance, setBalance] = useState('');
    const [depositValue, setDepositValue] = useState('');
    const [greetingValue, setGreetingValue] = useState('');

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    
    useEffect(() => {

        const connectWallet = async () => {
            await provider.send("eth_requestAccounts", []);
        }
            const getBalance = async () => {
              const balance = await provider.getBalance("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266")
              const balanceFormatted = ethers.utils.formatEther(balance)
              setBalance(balanceFormatted)
            }
        
        connectWallet()
        .catch(console.error);

        getBalance()
        .catch(console.error);
    })

    const handleDepositChange = (e) => {
        setDepositValue(e.target.value);
    }

    const handleGreetingChange = (e) => {
        setGreetingValue(e.target.value);
    }

    const handleDepositSubmit = (e) => {
        e.preventDefault();
        console.log(depositValue)
    }

    const handleGreetingSubmit = (e) => {
        e.preventDefault();
        console.log(greetingValue)
    }

  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-center">Hello There</h2>
        <p className="text-center">Your Contract-Balance: {balance}</p>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src={logo} />
            </div>
            <form className="mt-8 space-y-6" 
            action="#" 
            method="POST"
            onSubmit={handleGreetingSubmit}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div></div>
                <div>
                  <label htmlFor="Change" className="sr-only">
                    Change
                  </label>
                  <input
                    id="Change"
                    name="Change"
                    type="Change"
                    onChange={handleDepositChange} value={depositValue}
                    required
                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-gray-900
                  focus:border-gray-900 focus:z-10 sm:text-sm"
                    placeholder="Change"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-gray-900 hover:bg-gray-900
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-gray-900"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Change
                </button>
              </div>
            </form>
            <form className="mt-8 space-y-6" 
            action="#" 
            onSubmit={handleDepositSubmit}
            method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div></div>
                <div>
                  <label htmlFor="Deposit" className="sr-only">
                    Deposit
                  </label>
                  <input
                    id="number"
                    name="number"
                    type="number"
                    onChange={handleGreetingChange}
                    value={greetingValue}
                    required
                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-gray-900
                  focus:border-gray-900 focus:z-10 sm:text-sm"
                    placeholder="Deposit"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-gray-900 hover:bg-gray-900
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-gray-900"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Deposit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body;
