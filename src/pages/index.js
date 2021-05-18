import React from "react";
import { Link } from "gatsby";

import Header from "../components/header";
import Image from "../components/image";

import "../styles/global.css";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center">
        <div className="max-w-me mt-4 md:mt-24">
          <Image />
        </div>
        <div style={{ textAlign: "center" }}>
          <p className="mt-10 md:mt-8">
            This is my personal site.
            <br />I want to{" "}
            <Link className="bg-none" to="/projects/">
              <span className="text-purple-700 font-bold">build</span>
            </Link>
            , and{" "}
            <Link className="bg-none" to="/blog/">
              <span className="text-green-500 font-bold">talk</span>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
