// app/faq/page.tsx
import { Metadata } from 'next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: 'FAQs | Wafid',
  description: 'Frequently Asked Questions about Wafid and GCC medical examinations',
}

const faqs = [
  {
    question: "What is Wafid?",
    answer: "Wafid is a program under the umbrella of the Gulf Health Council that enables individuals bound to work or reside in the GCC to book their medical check-up appointments."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by visiting our 'Book Appointment' page, filling out the required information, and selecting your preferred date and medical center."
  },
  {
    question: "What documents do I need for my medical examination?",
    answer: "You typically need your passport, visa (if applicable), and any previous medical records. Specific requirements may vary by country, so please check the detailed instructions provided during the booking process."
  },
  {
    question: "How long does it take to get the results?",
    answer: "Result times may vary depending on the type of examination and the medical center. Generally, results are available within 3-5 working days."
  },
  {
    question: "Can I choose any medical center for my examination?",
    answer: "You can choose from our network of accredited medical centers. The available options will be shown to you during the booking process based on your location and the type of examination required."
  }
]

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}