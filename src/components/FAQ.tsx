import { Accordion, AccordionDetails, AccordionSummary } from "./Accordion";
import Button from "./Button";

const FAQ = () => {
  return (
    <section className="py-16 pb-32 relative sm:text-[1rem] text-[.9rem]">
      <div className="px-2 lg:px-0 w-full sm:w-[80%] md:w-[60%] lg:w-[30%] mx-auto my-8 text-center">
        <h2>Frequently Asked Questions</h2>
        <p className="text-grayish-blue">
          Here are some of FAQs. If you have any other question you'd like answered please feel free to email us.
        </p>
      </div>
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto">
        <Accordion classes={{ root: '' }}>
          <AccordionSummary id="panel1-header" aria-controls="panel1-content">
            What is Bookmark?
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-grayish-blue">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam cumque in eveniet dignissimos saepe ullam vel aliquid sequi, voluptatum quam eius cupiditate, asperiores nemo, doloribus rem necessitatibus sed totam.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary id="panel2-header" aria-controls="panel2-content">
            How can I request a new browser?
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-grayish-blue">
              voluptatum quam eius cupiditate, asperiores nemo, doloribus rem necessitatibus sed totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dignissimos corporis magni accusantium nobis sunt? Deleniti sit corporis asperiores quisquam, quis ullam amet magnam sunt blanditiis vel, ab voluptatum fuga?
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary id="panel3-header" aria-controls="panel3-content">
            Is there a mobile app?
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-grayish-blue">
              voluptatum quam eius cupiditate, asperiores nemo, doloribus rem necessitatibus sed totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dignissimos corporis magni accusantium nobis sunt? Deleniti sit corporis asperiores quisquam, quis ullam amet magnam sunt blanditiis vel, ab voluptatum fuga?
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary id="panel4-header" aria-controls="panel4-content">
            What about other Chromium browsers?
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-grayish-blue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nobis libero eveniet recusandae molestias harum id ipsa sint modi error nulla, dicta consequatur laborum nesciunt ad neque, reiciendis sapiente! Vel? quis ullam amet magnam sunt blanditiis vel, ab voluptatum fuga?
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mt-4 text-center">
        <Button>More info</Button>
      </div>
    </section>
  )
}

export default FAQ;