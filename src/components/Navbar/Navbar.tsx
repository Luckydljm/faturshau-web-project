"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const node: any = navRef.current;

    const handleClickOutside = (event: MouseEvent) => {
      if (node && !node.contains(event.target)) {
        if (isShown) {
          setIsShown(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [navRef, isShown]);

  const handleClickToggle = () => {
    if (isShown) {
      setIsShown(false);
      return;
    }

    setIsShown(true);
  };
  return (
    <div className="fixed left-0 top-0 z-50 w-full">
      <nav ref={navRef} className="relative bg-zinc-950 shadow-lg">
        <div className="text-light mx-auto flex items-center justify-between px-5 py-2 md:px-10 xl:px-16 2xl:px-28">
          {/* Logo */}
          <Link href="/" as={"image"}>
            <svg
              className="h-auto w-32 md:w-36 xl:w-40"
              width="32"
              height="10"
              viewBox="0 0 32 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0568182 9V0.272727H1.11364V8.0625H5.17045V9H0.0568182ZM13.8306 4.63636C13.8306 5.55682 13.6644 6.35227 13.332 7.02273C12.9996 7.69318 12.5437 8.21023 11.9641 8.57386C11.3846 8.9375 10.7227 9.11932 9.97834 9.11932C9.23402 9.11932 8.57209 8.9375 7.99254 8.57386C7.413 8.21023 6.95703 7.69318 6.62464 7.02273C6.29226 6.35227 6.12607 5.55682 6.12607 4.63636C6.12607 3.71591 6.29226 2.92045 6.62464 2.25C6.95703 1.57955 7.413 1.0625 7.99254 0.698864C8.57209 0.335227 9.23402 0.153409 9.97834 0.153409C10.7227 0.153409 11.3846 0.335227 11.9641 0.698864C12.5437 1.0625 12.9996 1.57955 13.332 2.25C13.6644 2.92045 13.8306 3.71591 13.8306 4.63636ZM12.8079 4.63636C12.8079 3.88068 12.6815 3.2429 12.4286 2.72301C12.1786 2.20312 11.8391 1.80966 11.4102 1.54261C10.984 1.27557 10.5067 1.14205 9.97834 1.14205C9.44993 1.14205 8.97124 1.27557 8.54226 1.54261C8.11612 1.80966 7.77663 2.20312 7.52379 2.72301C7.27379 3.2429 7.14879 3.88068 7.14879 4.63636C7.14879 5.39205 7.27379 6.02983 7.52379 6.54972C7.77663 7.0696 8.11612 7.46307 8.54226 7.73011C8.97124 7.99716 9.44993 8.13068 9.97834 8.13068C10.5067 8.13068 10.984 7.99716 11.4102 7.73011C11.8391 7.46307 12.1786 7.0696 12.4286 6.54972C12.6815 6.02983 12.8079 5.39205 12.8079 4.63636ZM21.5735 3C21.4798 2.71307 21.3562 2.45597 21.2028 2.22869C21.0522 1.99858 20.8718 1.80256 20.6616 1.64062C20.4542 1.47869 20.2184 1.35511 19.9542 1.26989C19.69 1.18466 19.4002 1.14205 19.0849 1.14205C18.5678 1.14205 18.0977 1.27557 17.6744 1.54261C17.2511 1.80966 16.9144 2.20312 16.6644 2.72301C16.4144 3.2429 16.2894 3.88068 16.2894 4.63636C16.2894 5.39205 16.4158 6.02983 16.6687 6.54972C16.9215 7.0696 17.2638 7.46307 17.6957 7.73011C18.1275 7.99716 18.6133 8.13068 19.1531 8.13068C19.6531 8.13068 20.0934 8.02415 20.4741 7.81108C20.8576 7.59517 21.1559 7.29119 21.369 6.89915C21.5849 6.50426 21.6928 6.03977 21.6928 5.50568L22.0167 5.57386H19.3917V4.63636H22.7156V5.57386C22.7156 6.29261 22.5621 6.91761 22.2553 7.44886C21.9513 7.98011 21.5309 8.39205 20.994 8.68466C20.4599 8.97443 19.8462 9.11932 19.1531 9.11932C18.3803 9.11932 17.7013 8.9375 17.1161 8.57386C16.5337 8.21023 16.0792 7.69318 15.7525 7.02273C15.4286 6.35227 15.2667 5.55682 15.2667 4.63636C15.2667 3.94602 15.359 3.32528 15.5437 2.77415C15.7312 2.22017 15.9954 1.74858 16.3363 1.35938C16.6772 0.97017 17.0806 0.671875 17.5465 0.464489C18.0124 0.257102 18.5252 0.153409 19.0849 0.153409C19.5451 0.153409 19.9741 0.223011 20.3718 0.362216C20.7724 0.498579 21.1289 0.693181 21.4414 0.946022C21.7567 1.19602 22.0195 1.49574 22.2298 1.84517C22.44 2.19176 22.5849 2.5767 22.6644 3H21.5735ZM31.8892 4.63636C31.8892 5.55682 31.723 6.35227 31.3906 7.02273C31.0582 7.69318 30.6023 8.21023 30.0227 8.57386C29.4432 8.9375 28.7813 9.11932 28.0369 9.11932C27.2926 9.11932 26.6307 8.9375 26.0511 8.57386C25.4716 8.21023 25.0156 7.69318 24.6832 7.02273C24.3509 6.35227 24.1847 5.55682 24.1847 4.63636C24.1847 3.71591 24.3509 2.92045 24.6832 2.25C25.0156 1.57955 25.4716 1.0625 26.0511 0.698864C26.6307 0.335227 27.2926 0.153409 28.0369 0.153409C28.7813 0.153409 29.4432 0.335227 30.0227 0.698864C30.6023 1.0625 31.0582 1.57955 31.3906 2.25C31.723 2.92045 31.8892 3.71591 31.8892 4.63636ZM30.8665 4.63636C30.8665 3.88068 30.7401 3.2429 30.4872 2.72301C30.2372 2.20312 29.8977 1.80966 29.4688 1.54261C29.0426 1.27557 28.5653 1.14205 28.0369 1.14205C27.5085 1.14205 27.0298 1.27557 26.6009 1.54261C26.1747 1.80966 25.8352 2.20312 25.5824 2.72301C25.3324 3.2429 25.2074 3.88068 25.2074 4.63636C25.2074 5.39205 25.3324 6.02983 25.5824 6.54972C25.8352 7.0696 26.1747 7.46307 26.6009 7.73011C27.0298 7.99716 27.5085 8.13068 28.0369 8.13068C28.5653 8.13068 29.0426 7.99716 29.4688 7.73011C29.8977 7.46307 30.2372 7.0696 30.4872 6.54972C30.7401 6.02983 30.8665 5.39205 30.8665 4.63636Z"
                fill="white"
              />
            </svg>
          </Link>
          {/* <Image
            className="w-32 md:w-36 xl:w-40"
            src="/images/logo.png"
            width={500}
            height={500}
            alt="logo"
          /> */}

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <button
              className="hover:cursor-pointer"
              onClick={handleClickToggle}
            >
              {isShown ? (
                <svg
                  className=" w-5 fill-white"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
                </svg>
              ) : (
                <svg
                  className=" w-5 fill-white"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
                </svg>
              )}
            </button>
          </div>
          {/* Desktop Nav Items */}
          <div className="hidden md:block">
            <ul className="flex gap-4 text-zinc-400">
              <li>
                <Link
                  href="/blog"
                  className="cursor-default"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="cursor-default"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Coppywriting
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="cursor-default"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="cursor-default"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Nav Items */}
        <ul
          className={`bg-light absolute z-[-1] w-full shadow-lg md:hidden ${
            !isShown ? "-top-10 opacity-0" : "top-[52.5px] opacity-100"
          } text-zinc-400 transition-all duration-300 ease-in`}
        >
          <li>
            <Link
              href="/blog"
              className="inline-block w-full cursor-default px-5 py-2"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Blog
            </Link>
            <hr className="mx-3" />
          </li>
          <li>
            <Link
              href="#"
              className="inline-block w-full cursor-default px-5 py-2"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Coppywriting
            </Link>
            <hr className="mx-3" />
          </li>
          <li>
            <Link
              href="#"
              className="inline-block w-full cursor-default px-5 py-2"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Portfolio
            </Link>
            <hr className="mx-3" />
          </li>
          <li>
            <Link
              href="#"
              className="inline-block w-full cursor-default px-5 py-2"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
