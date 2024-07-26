import { Header } from "@/app/lib/components/Header";
import { Footer } from "@/app/lib/components/Footer";
import { getTokenTotalSupply } from "@/app/lib/api/getTokenTotalSupply";
import { formatUnits } from "ethers";
import { humanizeNumber } from "@/app/lib/utils/numberUtils";
import Link from "next/link";
import { TokenList } from "@/app/token/components/TokenList";
import { Approval } from "@/app/token/components/Approval";
import { getUserTokenBalance } from "@/app/lib/api/getUserTokenBalance";
import fire from "@/app/lib/icons/fire.svg";
import Image from "next/image";

export default async function Page() {
  const tokens = await getTokenTotalSupply();
  const burned = await getUserTokenBalance(
    "0x000000000000000000000000000000000000dEaD",
  );

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center items-center w-full bg-[#DDF5DD] px-10 lg:px-0 pb-8 sm:pb-0">
        <div className="container max-w-screen-lg">
          <Header />
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-row mb-2 items-center gap-2">
              <div className="text-4xl mr-6">
                {humanizeNumber(Number(formatUnits(tokens)))} BBITS Issued
              </div>
              <Image className="w-6" src={fire} alt="fire" />
              <div className="text-2xl">
                {humanizeNumber(Math.round(Number(formatUnits(burned))))} Burned
              </div>
            </div>
            <div className="text-4xl mb-2"></div>

            <div className="text-gray-600 items-center">
              Each Based Bit NFT can be exchanged for 1024 BBITS tokens, and
              vice versa. The maximum token supply is 8,192,000. The{" "}
              <Link
                href="https://basescan.org/address/0x553c1f87c2ef99cca23b8a7ffaa629c8c2d27666"
                className="underline"
                target="_blank"
              >
                token contract
              </Link>{" "}
              is immutable, and BBITS tokens are{" "}
              <Link
                href="https://app.uniswap.org/explore/tokens/base/0x553C1f87C2EF99CcA23b8A7fFaA629C8c2D27666?chain=base"
                className="underline"
                target="_blank"
              >
                traded on Uniswap.
              </Link>
            </div>
          </div>
          <Approval />
        </div>
      </div>

      <div className="flex flex-col items-center w-full bg-[#DDF5DD] px-10 lg:px-0 pt-8 pb-8">
        <TokenList />
      </div>

      <div className="flex justify-center items-center w-full px-10 lg:px-0 mt-16 mb-24">
        <Footer />
      </div>
    </div>
  );
}
