import React from "react";

function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Image Recognition PoC. Powered by
        {" ImageRecognition "}
        <a
          href="https://www.neurolabs.ai/"
          className="text-blue-800 hover:underline"
        >
          Neurolabs
        </a>
      </p>
    </footer>
  );
}

export default Footer;
