"use client";
import { WalletSelector } from "./WalletSelector";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto w-full flex-wrap">
      <Link className="display" href="/">
        Movepay
      </Link>
      <div className="flex gap-2 items-center flex-wrap">
        <WalletSelector />
      </div>
    </div>
  );
}
