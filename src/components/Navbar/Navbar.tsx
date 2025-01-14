"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node: HTMLElement | null = navRef.current;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        node &&
        event?.target instanceof HTMLElement &&
        !node.contains(event.target)
      ) {
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
        <div className="text-light mx-auto flex items-center justify-between px-5 py-5 md:px-10 xl:px-16 2xl:px-28">
          {/* Logo */}
          <Link href="/">
            <svg
              className="h-auto w-32 md:w-36 lg:w-40 xl:w-48"
              width="62"
              height="10"
              viewBox="0 0 62 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.852 9V0.744H6.396V2.352H2.94V4.308H5.952V5.916H2.94V9H0.852ZM8.94684 9.096C8.56284 9.096 8.23884 9.036 7.97484 8.916C7.71084 8.796 7.51084 8.6 7.37484 8.328C7.24684 8.056 7.18284 7.7 7.18284 7.26C7.18284 6.796 7.23484 6.428 7.33884 6.156C7.45084 5.876 7.64684 5.676 7.92684 5.556C8.20684 5.436 8.60284 5.376 9.11484 5.376C9.18684 5.376 9.28684 5.38 9.41484 5.388C9.55084 5.388 9.70284 5.392 9.87084 5.4C10.0388 5.4 10.2068 5.404 10.3748 5.412C10.5428 5.412 10.6948 5.416 10.8308 5.424V5.196C10.8308 4.964 10.8108 4.784 10.7708 4.656C10.7388 4.528 10.6708 4.436 10.5668 4.38C10.4708 4.316 10.3228 4.28 10.1228 4.272C9.92284 4.256 9.65884 4.248 9.33084 4.248C9.14684 4.248 8.94284 4.252 8.71884 4.26C8.50284 4.268 8.28684 4.28 8.07084 4.296C7.86284 4.304 7.68684 4.316 7.54284 4.332V2.976C7.87084 2.92 8.23884 2.876 8.64684 2.844C9.06284 2.804 9.49884 2.784 9.95484 2.784C10.4668 2.784 10.8908 2.816 11.2268 2.88C11.5708 2.944 11.8468 3.044 12.0548 3.18C12.2628 3.308 12.4148 3.472 12.5108 3.672C12.6148 3.872 12.6828 4.108 12.7148 4.38C12.7468 4.652 12.7628 4.96 12.7628 5.304V9H10.9148L10.8668 8.28H10.7708C10.6188 8.52 10.4428 8.7 10.2428 8.82C10.0428 8.94 9.83084 9.016 9.60684 9.048C9.38284 9.08 9.16284 9.096 8.94684 9.096ZM9.85884 7.728C10.0028 7.728 10.1268 7.72 10.2308 7.704C10.3428 7.68 10.4348 7.644 10.5068 7.596C10.5868 7.54 10.6508 7.472 10.6988 7.392C10.7388 7.304 10.7708 7.196 10.7948 7.068C10.8188 6.94 10.8308 6.788 10.8308 6.612V6.384H9.71484C9.51484 6.384 9.36284 6.4 9.25884 6.432C9.15484 6.456 9.08284 6.52 9.04284 6.624C9.01084 6.72 8.99484 6.872 8.99484 7.08C8.99484 7.256 9.01484 7.392 9.05484 7.488C9.09484 7.584 9.17484 7.648 9.29484 7.68C9.42284 7.712 9.61084 7.728 9.85884 7.728ZM14.8091 9V4.344H13.6931V2.88H14.8091V1.104H16.7531V2.88H18.0851V4.344H16.7531V9H14.8091ZM20.9438 9.096C20.5358 9.096 20.2078 9.044 19.9598 8.94C19.7118 8.836 19.5238 8.684 19.3958 8.484C19.2678 8.284 19.1838 8.036 19.1438 7.74C19.1038 7.444 19.0838 7.1 19.0838 6.708V2.88H21.0038V6.12C21.0038 6.448 21.0118 6.708 21.0278 6.9C21.0518 7.084 21.0918 7.22 21.1478 7.308C21.2038 7.396 21.2878 7.452 21.3998 7.476C21.5118 7.492 21.6638 7.5 21.8558 7.5C22.0638 7.5 22.2278 7.48 22.3478 7.44C22.4758 7.392 22.5678 7.316 22.6238 7.212C22.6798 7.108 22.7158 6.964 22.7318 6.78C22.7558 6.588 22.7678 6.352 22.7678 6.072V2.88H24.6998V9H22.8638L22.8158 8.256H22.7078C22.5958 8.464 22.4518 8.632 22.2758 8.76C22.0998 8.88 21.8998 8.964 21.6758 9.012C21.4518 9.068 21.2078 9.096 20.9438 9.096ZM26.1737 9V2.88H27.9977L28.0457 3.924H28.1537C28.2657 3.628 28.4057 3.396 28.5737 3.228C28.7497 3.06 28.9617 2.944 29.2097 2.88C29.4577 2.816 29.7457 2.784 30.0737 2.784V4.548C29.5697 4.548 29.1737 4.612 28.8857 4.74C28.5977 4.868 28.3937 5.088 28.2737 5.4C28.1537 5.704 28.0937 6.132 28.0937 6.684V9H26.1737ZM37.2627 9.096C36.9427 9.096 36.5947 9.088 36.2187 9.072C35.8507 9.056 35.4867 9.032 35.1267 9C34.7747 8.968 34.4587 8.936 34.1787 8.904V7.356C34.4747 7.38 34.7707 7.404 35.0667 7.428C35.3707 7.452 35.6587 7.468 35.9307 7.476C36.2027 7.484 36.4307 7.488 36.6147 7.488C36.9987 7.488 37.2907 7.476 37.4907 7.452C37.6907 7.42 37.8387 7.376 37.9347 7.32C37.9987 7.264 38.0427 7.204 38.0667 7.14C38.0987 7.076 38.1187 7 38.1267 6.912C38.1347 6.824 38.1387 6.724 38.1387 6.612C38.1387 6.444 38.1267 6.312 38.1027 6.216C38.0867 6.112 38.0467 6.032 37.9827 5.976C37.9267 5.92 37.8387 5.88 37.7187 5.856C37.5987 5.824 37.4427 5.796 37.2507 5.772L35.5587 5.556C35.2307 5.516 34.9627 5.436 34.7547 5.316C34.5467 5.188 34.3827 5.02 34.2627 4.812C34.1427 4.604 34.0587 4.36 34.0107 4.08C33.9627 3.792 33.9387 3.472 33.9387 3.12C33.9387 2.576 34.0187 2.144 34.1787 1.824C34.3387 1.496 34.5587 1.248 34.8387 1.08C35.1267 0.904 35.4587 0.788 35.8347 0.732C36.2187 0.676 36.6347 0.648 37.0827 0.648C37.4027 0.648 37.7347 0.66 38.0787 0.684C38.4227 0.7 38.7467 0.727999 39.0507 0.767999C39.3547 0.799999 39.6067 0.839999 39.8067 0.887999V2.4C39.6067 2.368 39.3707 2.344 39.0987 2.328C38.8347 2.304 38.5587 2.288 38.2707 2.28C37.9827 2.264 37.7107 2.256 37.4547 2.256C37.1427 2.256 36.8947 2.268 36.7107 2.292C36.5267 2.308 36.3827 2.344 36.2787 2.4C36.1667 2.464 36.0947 2.548 36.0627 2.652C36.0387 2.756 36.0267 2.888 36.0267 3.048C36.0267 3.248 36.0427 3.404 36.0747 3.516C36.1067 3.62 36.1787 3.692 36.2907 3.732C36.4027 3.772 36.5747 3.808 36.8067 3.84L38.4507 4.032C38.6747 4.056 38.8787 4.096 39.0627 4.152C39.2547 4.208 39.4267 4.296 39.5787 4.416C39.7387 4.536 39.8707 4.708 39.9747 4.932C40.0307 5.036 40.0747 5.164 40.1067 5.316C40.1387 5.46 40.1667 5.628 40.1907 5.82C40.2147 6.012 40.2267 6.228 40.2267 6.468C40.2267 6.94 40.1787 7.34 40.0827 7.668C39.9867 7.988 39.8507 8.244 39.6747 8.436C39.4987 8.62 39.2867 8.764 39.0387 8.868C38.7907 8.964 38.5147 9.024 38.2107 9.048C37.9147 9.08 37.5987 9.096 37.2627 9.096ZM41.5253 9V0.0839996H43.4453V3.588H43.5533C43.6733 3.388 43.8173 3.232 43.9853 3.12C44.1613 3 44.3573 2.916 44.5733 2.868C44.7893 2.82 45.0253 2.796 45.2813 2.796C45.6893 2.796 46.0133 2.848 46.2533 2.952C46.5013 3.048 46.6893 3.196 46.8173 3.396C46.9453 3.596 47.0293 3.844 47.0693 4.14C47.1173 4.436 47.1413 4.78 47.1413 5.172V9H45.2093V5.76C45.2093 5.432 45.2013 5.176 45.1853 4.992C45.1693 4.8 45.1333 4.66 45.0773 4.572C45.0213 4.484 44.9333 4.432 44.8133 4.416C44.7013 4.392 44.5493 4.38 44.3573 4.38C44.1573 4.38 43.9933 4.404 43.8652 4.452C43.7453 4.492 43.6533 4.564 43.5893 4.668C43.5333 4.772 43.4933 4.92 43.4693 5.112C43.4533 5.296 43.4453 5.528 43.4453 5.808V9H41.5253ZM50.1031 9.096C49.7191 9.096 49.3951 9.036 49.1311 8.916C48.8671 8.796 48.6671 8.6 48.5311 8.328C48.4031 8.056 48.3391 7.7 48.3391 7.26C48.3391 6.796 48.3911 6.428 48.4951 6.156C48.6071 5.876 48.8031 5.676 49.0831 5.556C49.3631 5.436 49.7591 5.376 50.2711 5.376C50.3431 5.376 50.4431 5.38 50.5711 5.388C50.7071 5.388 50.8591 5.392 51.0271 5.4C51.1951 5.4 51.3631 5.404 51.5311 5.412C51.6991 5.412 51.8511 5.416 51.9871 5.424V5.196C51.9871 4.964 51.9671 4.784 51.9271 4.656C51.8951 4.528 51.8271 4.436 51.7231 4.38C51.6271 4.316 51.4791 4.28 51.2791 4.272C51.0791 4.256 50.8151 4.248 50.4871 4.248C50.3031 4.248 50.0991 4.252 49.8751 4.26C49.6591 4.268 49.4431 4.28 49.2271 4.296C49.0191 4.304 48.8431 4.316 48.6991 4.332V2.976C49.0271 2.92 49.3951 2.876 49.8031 2.844C50.2191 2.804 50.6551 2.784 51.1111 2.784C51.6231 2.784 52.0471 2.816 52.3831 2.88C52.7271 2.944 53.0031 3.044 53.2111 3.18C53.4191 3.308 53.5711 3.472 53.6671 3.672C53.7711 3.872 53.8391 4.108 53.8711 4.38C53.9031 4.652 53.9191 4.96 53.9191 5.304V9H52.0711L52.0231 8.28H51.9271C51.7751 8.52 51.5991 8.7 51.3991 8.82C51.1991 8.94 50.9871 9.016 50.7631 9.048C50.5391 9.08 50.3191 9.096 50.1031 9.096ZM51.0151 7.728C51.1591 7.728 51.2831 7.72 51.3871 7.704C51.4991 7.68 51.5911 7.644 51.6631 7.596C51.7431 7.54 51.8071 7.472 51.8551 7.392C51.8951 7.304 51.9271 7.196 51.9511 7.068C51.9751 6.94 51.9871 6.788 51.9871 6.612V6.384H50.8711C50.6711 6.384 50.5191 6.4 50.4151 6.432C50.3111 6.456 50.2391 6.52 50.1991 6.624C50.1671 6.72 50.1511 6.872 50.1511 7.08C50.1511 7.256 50.1711 7.392 50.2111 7.488C50.2511 7.584 50.3311 7.648 50.4511 7.68C50.5791 7.712 50.7671 7.728 51.0151 7.728ZM57.272 9.096C56.864 9.096 56.536 9.044 56.288 8.94C56.04 8.836 55.852 8.684 55.724 8.484C55.596 8.284 55.512 8.036 55.472 7.74C55.432 7.444 55.412 7.1 55.412 6.708V2.88H57.332V6.12C57.332 6.448 57.34 6.708 57.356 6.9C57.38 7.084 57.42 7.22 57.476 7.308C57.532 7.396 57.616 7.452 57.728 7.476C57.84 7.492 57.992 7.5 58.184 7.5C58.392 7.5 58.556 7.48 58.676 7.44C58.804 7.392 58.896 7.316 58.952 7.212C59.008 7.108 59.044 6.964 59.06 6.78C59.084 6.588 59.096 6.352 59.096 6.072V2.88H61.028V9H59.192L59.144 8.256H59.036C58.924 8.464 58.78 8.632 58.604 8.76C58.428 8.88 58.228 8.964 58.004 9.012C57.78 9.068 57.536 9.096 57.272 9.096Z"
                fill="white"
              />
            </svg>
          </Link>

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
                  href="https://coppywriting.com/"
                  className="text-light hover:text-zinc-200"
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
            !isShown ? "-top-12 opacity-0" : "top-[60px] opacity-100"
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
              href="https://coppywriting.com/"
              className="text-dark inline-block w-full cursor-default px-5 py-2"
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
