import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Sort from "@/public/assets/icons/sort.svg";
import ArrowRight from "@/public/assets/icons/arrow-right.svg";
import React from "react";

const SortDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlineGray" className="flex b3-r gap-[10px]">
          <Sort className="size-[16px]" />
          Sort
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[350px] !bg-transparent !border-none !shadow-none !p-0 overflow-visible"
        side="bottom"
        align="end"
      >
        <div className="relative">
          <div className="absolute inset-0 translate-y-[6px] bg-white rounded-[8px] -z-10 blur-[24px]"></div>

          <div className="relative bg-white rounded-[8px] overflow-hidden shadow-lg">
            <DropdownMenuLabel className="text-center">Sort</DropdownMenuLabel>
            <div className="p-[24px] space-y-[32px]">
              <div className="space-y-[16px]">
                <p className="b2-b">Order Date</p>

                <div className="flex gap-[24px] px-[8px]">
                  <RadioGroup className="space-y-[12px]">
                    <div className="flex items-center space-x-[24px]">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label
                        htmlFor="option-one"
                        className="flex gap-[12px] b2-r"
                      >
                        Newest
                        <ArrowRight className="size-[16px]" />
                        Longest
                      </Label>
                    </div>
                    <div className="flex items-center space-x-[24px]">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label
                        htmlFor="option-two"
                        className="flex gap-[12px] b2-r"
                      >
                        Longest
                        <ArrowRight className="size-[16px]" />
                        Newest
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-[16px]">
                <p className="b2-b">Total</p>

                <div className="flex gap-[24px] px-[8px]">
                  <RadioGroup className="space-y-[12px]">
                    <div className="flex items-center space-x-[24px]">
                      <RadioGroupItem value="option-four" id="option-four" />
                      <Label
                        htmlFor="option-four"
                        className="flex gap-[12px] b2-r"
                      >
                        Highest
                        <ArrowRight className="size-[16px]" />
                        Lowest
                      </Label>
                    </div>
                    <div className="flex items-center space-x-[24px]">
                      <RadioGroupItem value="option-three" id="option-three" />
                      <Label
                        htmlFor="option-three"
                        className="flex gap-[12px] b2-r"
                      >
                        Lowest
                        <ArrowRight className="size-[16px]" />
                        Highest
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex gap-[24px]">
                <Button className="flex-1 h-[34px]" variant={"outline"}>
                  Reset All
                </Button>
                <Button className="flex-1 h-[34px]">Apply Now</Button>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortDropdown;
