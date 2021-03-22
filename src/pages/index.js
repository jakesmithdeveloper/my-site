import React from "react";
import { Link } from "gatsby";

import Header from "../components/header";
import Image from "../components/image";
import Footer from "../components/footer";

import "../styles/global.css";

export default function Home() {
  document.title = "jakesmith.info";

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <div className="max-w-me mt-4 md:mt-24">
          <Image />
        </div>
        <div style={{ textAlign: "center" }}>
          <p className="mt-10 md:mt-24">
            This site will have to do for now ... I want to focus on building{" "}
            <Link className="bg-none" to="/projects/">
              <span className="text-purple-700">cool things</span>
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
