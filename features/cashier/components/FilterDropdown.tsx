"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Filter from "@/public/assets/icons/filter.svg";
import React from "react";
import DatePicker from "../../../components/DatePicker";

const FilterDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlineGray" className="flex b3-r gap-[10px]">
          <Filter className="size-[16px]" />
          Filter
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[350px] !bg-transparent !border-none !shadow-none !p-0 overflow-visible"
        side="bottom"
        align="end"
      >
        <div className="relative">
          <div className="absolute inset-0 translate-y-[6px] bg-white rounded-[8px] -z-10 blur-[24px]"></div>

          <div className="relative bg-white rounded-[8px] overflow-hidden shadow-lg text-neutral-n900">
            <DropdownMenuLabel className="text-center">
              Filter
            </DropdownMenuLabel>
            <div className="p-[24px] space-y-[32px]">
              {/* Order Date */}
              <div className="space-y-[16px]">
                <div className="flex justify-between">
                  <p className="b2-b text-neutral-n900">Order Date</p>
                  <p className="b2-b text-primary-b300 cursor-pointer hover:underline">
                    Reset
                  </p>
                </div>
                <div className="gap-[16px] flex">
                  <div className="flex-1">
                    <DatePicker label="From" id="start-date" />
                  </div>
                  <div className="flex-1">
                    <DatePicker label="To" id="end-date" />
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="space-y-[16px]">
                <div className="flex justify-between">
                  <p className="b2-b text-neutral-n900">Status</p>
                  <p className="b2-b text-primary-b300 cursor-pointer hover:underline">
                    Reset
                  </p>
                </div>

                <div className="space-y-[12px] max-w-[148px] px-[8px]">
                  <div className="flex gap-[24px] items-center">
                    <Checkbox id="completed" />
                    <Label htmlFor="completed">
                      <Badge variant="success">Completed</Badge>
                    </Label>
                  </div>
                  <div className="flex gap-[24px] items-center">
                    <Checkbox id="in-progress" />
                    <Label htmlFor="in-progress">
                      <Badge variant="warning">In Progress</Badge>
                    </Label>
                  </div>
                  <div className="flex gap-[24px] items-center">
                    <Checkbox id="open-bill" />
                    <Label htmlFor="open-bill">
                      <Badge variant="info">Open Bill</Badge>
                    </Label>
                  </div>
                  <div className="flex gap-[24px] items-center">
                    <Checkbox id="canceled" />
                    <Label htmlFor="canceled">
                      <Badge variant="danger">Canceled</Badge>
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-[16px]">
                <div className="flex justify-between">
                  <p className="b2-b text-neutral-n900">Order Type</p>
                  <p className="b2-b text-primary-b300 cursor-pointer hover:underline">
                    Reset
                  </p>
                </div>

                <div className="flex gap-[24px]">
                  <RadioGroup className="space-y-[12px] px-[8px]">
                    <div className="flex items-center space-x-[24px]">
                      <RadioGroupItem value="dine-in" id="dine-in" />
                      <Label htmlFor="dine-in" className="flex gap-[12px] b2-r">
                        Dine In
                      </Label>
                    </div>
                    <div className="flex items-center space-x-[24px]">
                      <RadioGroupItem value="take-away" id="take-away" />
                      <Label
                        htmlFor="take-away"
                        className="flex gap-[12px] b2-r"
                      >
                        Take Away
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex gap-[24px]">
                <Button className="flex-1 h-[34px]" variant="outline">
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

export default FilterDropdown;
