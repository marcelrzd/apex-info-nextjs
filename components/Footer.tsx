"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-4 flex text-center justify-center footer footer-center bg-base-200 text-base-content h-max">
      <div>
        <p>
          Copyright © {year} - All rights reserved by{" "}
          <Link
            href={"https://github.com/marcelrzd"}
            className="font-medium text-primary hover:underline"
          >
            Marcel
          </Link>
        </p>
      </div>
    </footer>
  );
}
