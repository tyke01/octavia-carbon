import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NAVLINKS } from "@/constants/data";

const Footer = () => {
  return (
    <footer className="relative z-20 bg-gray-300 py-12 text-black md:py-16">
      <MaxWidthWrapper className="flex flex-col">
        <div className="my-6 h-[1px] w-full rounded-full bg-gray-500" />
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex flex-col space-y-6 lg:w-1/3">
            <Image
              src="/logo.svg"
              alt="logo"
              width={180}
              height={50}
              className="max-w-[180px]"
            />
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              The carbon narrative rewritten
            </h2>
          </div>

          <div className="flex flex-1 flex-col justify-between space-y-10">
            <div className="flex flex-col space-y-4 md:space-y-6">
              <p className="text-xl font-medium md:text-2xl">
                Sign up to our newsletter
              </p>
              <div className="flex max-w-lg flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <Input
                  placeholder="Your Email"
                  className="rounded-full border-none bg-white px-4 py-2 text-base outline-none"
                />
                <Button className="rounded-full bg-black px-6 py-2 text-base font-medium text-white transition-colors hover:bg-primary hover:text-black">
                  Subscribe
                </Button>
              </div>
            </div>

            <nav className="flex flex-wrap gap-6 md:gap-8">
              {NAVLINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-lg font-medium transition-colors hover:text-sky-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="h-px w-full bg-gray-400" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm">
                Copyright © Mission Zero Technologies{" "}
                {new Date().getFullYear()}
              </p>
              <Link
                href="/legal/privacy-policy"
                className="text-sm hover:underline"
              >
                Legal
              </Link>
              <div className="flex gap-4">
                <Link
                  href="https://twitter.com/MissionZeroTech"
                  className="text-xl transition-colors hover:text-sky-700"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/missionzerotech/"
                  className="text-xl transition-colors hover:text-sky-700"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
