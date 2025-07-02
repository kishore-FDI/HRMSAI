import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link, Plus } from "lucide-react";
import { Button } from "../ui/button";
export default function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className=" m-5 w-full max-h-[12rem] max-w-[15rem]">
      <AccordionItem
        value="item-1"
        className="p-5  rounded-2xl bg-black text-white">
        <AccordionTrigger>Actions</AccordionTrigger>
        <AccordionContent className="flex gap-4 text-balance">
          <Button accessKey="C" className="w-full">
            <Plus className="" />
            Create Company
          </Button>
        </AccordionContent>
        <AccordionContent className="flex gap-4 text-balance">
          <Button className="w-full">
            <Link className="" />
            Join Company
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
