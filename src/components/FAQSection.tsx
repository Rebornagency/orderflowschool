import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need prior order flow knowledge?",
      answer: "Not at all. This system starts from the fundamentals and builds up. Whether you're completely new to order flow or have some experience, you'll find valuable insights at every level."
    },
    {
      question: "How do I get the system after purchase?",
      answer: "Immediately after payment, you'll receive an email with download links for the complete system and all bonuses. You'll have instant access to everything — no waiting, no shipping."
    },
    {
      question: "Is this suitable for futures/forex/stocks?",
      answer: "Yes! The principles of order flow apply across all markets. While examples may focus on specific instruments, the concepts work universally wherever there's a bid-ask spread and order flow data."
    },
    {
      question: "What if I don't like it?",
      answer: "Simple — just email me within 7 days and I'll refund your purchase, no questions asked. You have nothing to lose and everything to gain."
    },
    {
      question: "How long will it take to learn this?",
      answer: "Most traders report having 'aha moments' within the first few sections. You can go through the entire system in one sitting, but mastery comes with practice. The real-world examples and case studies help accelerate your learning significantly."
    },
    {
      question: "Do I need special software or indicators?",
      answer: "The system teaches you the concepts behind order flow. While having footprint charts is helpful, you'll learn to understand market structure in ways that will improve your trading regardless of your current tools."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-gold/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-gold transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              Still have questions?{" "}
              <a href="#offer" className="text-red-500 hover:text-red-400 font-semibold underline">
                Get the system risk-free
              </a>
              {" "}and see for yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
