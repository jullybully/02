import Button from "./Button"

interface BrowserCardProps {
  details?: {
    browser: "chrome" | "opera" | "firefox";
    minVersion: number
  }
}

const BrowserCard = ({ details = { browser: 'chrome', minVersion: 62 } }: BrowserCardProps) => {
  const logos = {
    "chrome": 'logo-chrome.svg',
    "firefox": 'logo-firefox.svg',
    "opera": 'logo-opera.svg',
  }
  return (
    <div className="shadow-lg shadow-gray-300 rounded-md w-[15rem] h-[20rem] text-[1em]  text-center relative">
      <div className="top p-8">
        <div className="w-[60%] mx-auto">
          <img src={`./images/${logos[details.browser]}`} alt="logo of google chrome" className="w-full object-center object-contain" />
        </div>
        <div className="pt-6">
          <h3>Add to Chrome</h3>
          <p className="text-grayish-blue text-sm">Minimum version {details.minVersion}</p>
        </div>
      </div>
      <div className="border-b-[4px] border-dotted border-gray-300"></div>
      <div className="bottom p-4">

        <Button className="text-[.8em]">Add &amp; install Extension</Button>
      </div>
    </div>
  )
}

export default BrowserCard;