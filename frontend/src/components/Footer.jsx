import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 rounded-lg grid grid-cols-2 gap-3 p-8">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Copyright© 2022. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://wendybaquedevweb.netlify.app/"
            target="_blank"
            rel="noreferrer"
            alt="portfolio de Wendy Baqué"
            className="mr-4 hover:underline md:mr-6 "
          >
            Made with ❤ by Wendy Baqué
          </a>
        </li>

        <li>
          <a
            href="/contact"
            alt="redirection vers la page contact"
            className="hover:underline"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
