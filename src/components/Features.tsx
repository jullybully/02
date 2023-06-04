import { useEffect, useState } from "react";
import Button from "./Button";
import { Tab, TabContext, TabList, TabPanel } from "./Tabs";

interface FeatureDetailProps {
  title: string
  description: string
  imagePath: string
}
const FeatureDetail = ({ title, description, imagePath }: FeatureDetailProps) => {
  const [showFigure, setShowFigure] = useState(false);
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowFigure(true);
    }, 200)
    setTimeout(() => {
      setShowText(true);
    }, 300)
  }, [])
  return (
    <article className="relative flex  gap-8 flex-col xl:flex-row py-[4rem] min-h-[70vh]">
      <div className={`relative pointer-events-none text-[1rem] basis-[50%] select-none opacity-0 transition-opacity ${showFigure ? "opacity-100" : ""}`}>
        <div className="relative ml-10 sm:ml-20 md:w-[20rem] lg:w-[34rem] mb-[4rem] ">
          <img src={imagePath} alt="illustration of bookmarking" className="w-full h-full object-contain"></img>
        </div>
        <div className="bg__color-blob--left ">
        </div>
      </div>
      <div className={`w-full sm:w-3/4 lg:w-1/4 self-center text-center xl:text-left px-2 lg:px-0 opacity-0 transition-opacity ${showText ? "opacity-100" : ""}`}>
        <h2>{title}</h2>
        <p className="text-grayish-blue my-4">
          {description}
        </p>
        <Button themeColor="soft-blue">More Info</Button>
      </div>
    </article>
  )
}
const Tabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (e: React.FormEvent<HTMLDivElement>, newValue: string) => {
    setValue(newValue)
  }
  return (
    <TabContext value={value}>
      <TabList aria-label="Product Features" onChange={handleChange}>
        <Tab value="1" label="Simple Bookmarking"></Tab>
        <Tab value="2" label="Speedy Searching"></Tab>
        <Tab value="3" label="Easy Sharing"></Tab>
      </TabList>
      <TabPanel value="1">
        <FeatureDetail title="Bookmark in one click" description="              Organize your bookmarks however you like. Our simple drag-and drop interface gives you complete control over how you manage your favourite sites." imagePath="./images/illustration-features-tab-1.svg"></FeatureDetail>
      </TabPanel>
      <TabPanel value="2">
        <FeatureDetail title="Intelligent Search" imagePath="./images/illustration-features-tab-2.svg" description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks." />
      </TabPanel>
      <TabPanel value="3">
        <FeatureDetail title="Share your bookmarks" imagePath="./images/illustration-features-tab-3.svg" description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks." />
      </TabPanel>
    </TabContext>
  )
}
const Features = () => {
  return (
    <section className="py-4 relative mt-10 text-[.9rem] sm:text-[1rem]">
      <div className="px-2 lg:px-0 w-full sm:w-[80%] md:w-[60%] lg:w-[30%] mx-auto my-8 text-center">
        <h2 className="">
          Features
        </h2>
        <p className="text-grayish-blue">
          Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>
      <Tabs />
    </section>
  )
}

export default Features;