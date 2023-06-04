import './App.css';
import BrowserCard from './components/BrowserCard';
import Button from './components/Button';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';

const DownloadOptions = () => {
  return (
    <section className="py-8 relative text-[.9rem] sm:text-[1rem]">
      <div className="text-center w-full sm:w-3/4 lg:w-2/4 xl:1/4  mx-auto px-2 lg:px-0">
        <h2>
          Download the extension
        </h2>
        <p className="text-grayish-blue">
          We've got mroe browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="w-3/4 mx-auto py-[4rem] flex flex-wrap  justify-center gap-6">
        <div className="">
          <BrowserCard />
        </div>
        <div className="mt-6">
          <BrowserCard details={{ browser: 'firefox', minVersion: 55 }} />
        </div>
        <div className="mt-12">
          <BrowserCard details={{ browser: 'opera', minVersion: 42 }} />
        </div>
      </div>
    </section>
  )
}
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="relative flex flex-col lg:flex-row-reverse text-[.9rem] sm:text-[1rem]">
          <div className="relative pointer-events-none basis-[60%] select-none">
            <div className="relative lg:mr-20 mr-0 mt-10">
              <img src="./images/illustration-hero.svg" alt="hero" className="w-full h-full object-contain"></img>
            </div>
            <div className="bg__color-blob--right">

            </div>
          </div>
          <div className="2xl:px-20 2xl:py-14 2xl:pl-[12rem] md:px-10 md:py-6 px-2 py-6 text-center lg:text-left">
            <div className="w-full sm:mx-auto lg:w-[65%] relative lg:mx-0">
              <h1 className="">A simple Bookmark Manager</h1>
              <p className="text-grayish-blue my-8">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
              <div className="flex gap-[1em] lg:justify-start justify-center">
                <Button className="">Get it on Chrome</Button>
                <Button themeColor="gray">Get it on Firefox</Button>
              </div>
            </div>
          </div>
        </section>
        <Features />
        <DownloadOptions />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;