import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What type of security services do you offer?",
      answer:
        "We offer security guards, mobile patrols, event security, and loss prevention.",
    },
    {
      question: "How do I determine the security needs for my business?",
      answer:
        "Our experts conduct a free security assessment to evaluate risks and recommend the best solutions.",
    },
    {
      question: "Are your security personnel licensed and trained?",
      answer:
        "Yes, all our guards are fully licensed, trained, and experienced in handling various security situations.",
    },
    {
      question: "Do you provide security for small businesses?",
      answer:
        "We offer affordable and scalable security solutions for businesses of all sizes.",
    },
  ];

  return (
    <section className="max-w-7xl w-11/12 lg:w-10/12 mx-auto py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="lg:text-4xl text-left font-bold w-full lg:mb-12 md:mb-8 sm:mb-6">
            Your Security Questions Answered
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full  bg-gray-100 rounded-2xl px-4 cursor-pointer">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">
                  {faqs[0].question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faqs[0].answer}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full  bg-gray-100 rounded-2xl px-4 cursor-pointer">
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">
                  {faqs[1].question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faqs[1].answer}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full  bg-gray-100 rounded-2xl px-4 cursor-pointer">
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">
                  {faqs[2].question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faqs[2].answer}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full  bg-gray-100 rounded-2xl px-4 cursor-pointer">
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">
                  {faqs[3].question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faqs[3].answer}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
