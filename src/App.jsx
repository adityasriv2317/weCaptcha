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
        <div className="text-lg sm:text-xl mt-2 font-mono">for phis-phis backend developers</div>
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
              setKey("6LcQ9poqAAAAAEmU3sOsQmC0vdLUV-lqCC2TR0uN");
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
      </div>
    </div>
  );
};

export default App;
