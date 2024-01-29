import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function FAQsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How can I pay?</AccordionTrigger>
            <AccordionContent>
              We accept various payment methods including credit cards (Visa,
              Mastercard, American Express), PayPal, and bank transfers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Can I return or exchange a product?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we have a return and exchange policy. If you are not
              satisfied with your purchase, you can return it within 2 weeks for
              a refund or exchange. However, please note that certain conditions
              and restrictions may apply.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I cancel my order?</AccordionTrigger>
            <AccordionContent>
              If your order has not been shipped yet, you may be able to cancel
              it. Please contact our customer support team as soon as possible
              to inquire about canceling your order.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
