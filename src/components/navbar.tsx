"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu } from "lucide-react";
import { NAVLINKS } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linkContainerRef = useRef<HTMLDivElement>(null);
  const contactBtnRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const setupAnimations = () => {
      const navbar = navbarRef.current;
      const linkContainer = linkContainerRef.current;
      const contactBtn = contactBtnRef.current;
      const menuBtn = menuBtnRef.current;

      if (navbar && linkContainer && contactBtn && menuBtn) {
        if (isScrolled) {
          // Hide link container and contact button
          gsap.to([linkContainer, contactBtn], {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              linkContainer.style.display = "none";
              contactBtn.style.display = "none";
            },
          });

          // Show menu button
          gsap.to(menuBtn, {
            display: "block",
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          // Show link container and contact button
          gsap.set([linkContainer, contactBtn], { display: "block" });
          gsap.to([linkContainer, contactBtn], {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          // Hide menu button
          gsap.to(menuBtn, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              menuBtn.style.display = "none";
            },
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  // Add this separate effect to run setupAnimations when isScrolled changes
  useEffect(() => {
    const setupAnimations = () => {
      const navbar = navbarRef.current;
      const linkContainer = linkContainerRef.current;
      const contactBtn = contactBtnRef.current;
      const menuBtn = menuBtnRef.current;

      if (navbar && linkContainer && contactBtn && menuBtn) {
        if (isScrolled) {
          // Hide link container and contact button
          gsap.to([linkContainer, contactBtn], {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              linkContainer.style.display = "none";
              contactBtn.style.display = "none";
            },
          });

          // Show menu button
          gsap.set(menuBtn, { display: "block" });
          gsap.to(menuBtn, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          // Show link container and contact button
          gsap.set([linkContainer, contactBtn], { display: "block" });
          gsap.to([linkContainer, contactBtn], {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          // Hide menu button
          gsap.to(menuBtn, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              menuBtn.style.display = "none";
            },
          });
        }
      }
    };

    setupAnimations();
  }, [isScrolled]);

  const toggleDesktopMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const linkContainer = linkContainerRef.current;

    if (linkContainer) {
      if (!isMenuOpen) {
        gsap.to(linkContainer, {
          opacity: 1,
          y: 0,
          display: "block",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(linkContainer, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            linkContainer.style.display = "none";
          },
        });
      }
    }
  };

  return (
    <header
      ref={navbarRef}
      className="fixed left-0 top-0 z-50 w-full transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div ref={logoRef} className="relative z-20">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Company Logo"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* Menu Button (appears when scrolled) */}
          <div
            ref={menuBtnRef}
            className="absolute right-4 top-4 hidden md:hidden"
            style={{ opacity: 0 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDesktopMenu}
              className="relative z-20 rounded-full bg-gray-200"
            >
              <Menu className="h-6 w-6 text-black" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div ref={linkContainerRef} className="hidden md:block">
            <div className="rounded-full bg-gray-300 px-8 py-2">
              <ul className="flex items-center space-x-8">
                {NAVLINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-base font-medium text-black transition-colors hover:text-gray-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Button - Desktop */}
          <div ref={contactBtnRef} className="hidden md:block">
            <Button asChild className="rounded-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative z-20">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] max-w-sm">
                <div className="mt-12 flex flex-col space-y-6">
                  <ul className="flex flex-col space-y-4">
                    {NAVLINKS.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-lg font-medium transition-colors hover:text-gray-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full rounded-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
