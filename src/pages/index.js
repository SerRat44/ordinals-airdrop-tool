// index.js

import { WalletProvider } from '../context/WalletProvider';
import WalletConnect from '../components/WalletConnect';
import Airdrop from '../components/Airdrop';

export default function Home() {
  return (
    <WalletProvider>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <WalletConnect />
        <Airdrop />
      </div>
    </WalletProvider>
  );
}