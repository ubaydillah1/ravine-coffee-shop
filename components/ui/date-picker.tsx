"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(value);

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const handleToday = () => {
    const today = new Date();
    setDate(today);
    onChange?.(today);
    setOpen(false);
  };

  const handleClear = () => {
    setDate(undefined);
    onChange?.(undefined);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outlineGray"
          className="w-fit justify-start font-normal text-muted-foreground px-[16px] sm:px-[24px] b3-r flex gap-[8px] items-center py-[8px] sm:gap-[10px] sm:py-[10px]"
        >
          <CalendarIcon className="h-4 w-4" />
          {date
            ? format(date, "dd MMMM yyyy", { locale: id })
            : "Pilih tanggal"}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-auto p-2 bg-white rounded-md shadow-md"
        align="end"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selected) => {
            setDate(selected);
            onChange?.(selected);
            setOpen(false);
          }}
          disabled={{ after: new Date() }}
        />

        <div className="flex justify-between pt-1">
          {date && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="text-sm text-neutral-n600 hover:text-neutral-n800"
            >
              Clear
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={handleToday}
            className="text-sm text-primary hover:text-primary/80"
          >
            Today
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
