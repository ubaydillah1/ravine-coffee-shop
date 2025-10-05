"use client";

import * as React from "react";
import CalendarIcon from "@/public/assets/icons/calendar.svg";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const DatePicker = ({
  id,
  label,
  onChange,
}: {
  id?: string;
  label?: string;
  onChange?: (date: Date | undefined) => void;
}) => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const uniqueId = React.useId();
  const inputId = id || `datepicker-${uniqueId}`;

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
    if (onChange) onChange(selectedDate);
  };

  return (
    <div className="flex flex-col gap-[8px]">
      {label && (
        <Label htmlFor={inputId} className="b3-r text-neutral-n500">
          {label}
        </Label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outlineGray"
            id={inputId}
            className="w-full justify-between! b3-r text-left p-[11px]! text-neutral-n700"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <CalendarIcon className="size-[20px]" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="end">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={handleSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
