import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import { Copy } from "lucide-react";

const App = () => {
  const [key, setKey] = useState("6LcQ9poqAAAAAEmU3sOsQmC0vdLUV-lqCC2TR0uN");
  const [value, setValue] = useState("");

  return (
    <div className="bg-black w-screen min-h-screen text-white flex items-center justify-center px-4 py-20">
      <div className="text-center bg-gray-800 fixed top-4 left-1/2 -translate-x-1/2 p-4 sm:p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <div className="text-2xl sm:text-4xl text-gray-200 font-semibold">
          weCaptcha
        </div>
        <div className="text-lg sm:text-xl mt-2 font-mono">
          for phis-phis backend developers
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6 w-full max-w-md mt-16">
        <form className="bg-gray-800 p-4 sm:p-8 rounded-lg shadow-xl w-full">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Site Key
            </label>
            <input
              type="text"
              onChange={(e) => setKey(e.target.value)}
              className="txt w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your site key"
            />
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={key}
              theme="dark"
              onChange={(e) => {
                setValue(e);
              }}
            />
          </div>

          <button
            onClick={() => {
              setKey("6Lcl0AcrAAAAABFUCNtfvuTZYq5z_rWYAWpvkkNV");
              setValue("");
            }}
            className="mt-4 w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            type="button"
          >
            Reset Fields
          </button>
        </form>

        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl w-full">
          <h3 className="text-gray-300 text-sm font-bold mb-2">
            Captcha Token
          </h3>
          <div className="bg-gray-700 p-3 rounded flex items-center justify-between">
            <p className="text-gray-300 font-mono text-sm max-h-14 overflow-clip break-all flex-1">
              {value ? value : "Token will appear here..."}
            </p>
            {value && (
              <button
                onClick={() => navigator.clipboard.writeText(value)}
                className="ml-2 p-2 hover:bg-gray-600 rounded transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4 text-gray-300" />
              </button>
            )}
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm px-4">
          Remember to add this domain to the reCAPTCHA console !!!
        </div>

        <div className="hidden fixed md:grid grid-cols-2 bottom-7 right-5">
          <a
            href="https://github.com/adityasriv2317/wecaptcha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white font-bold transition-colors mr-4"
          >
            {"</>"}
          </a>

          <a
            href="https://github.com/adityasriv2317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
