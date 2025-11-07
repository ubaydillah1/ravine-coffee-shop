"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModalProps } from "@/features/cashier/types/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Eye, EyeOff, Upload, X as XIcon } from "lucide-react";
import Image from "next/image";
import { toastError, toastSuccess } from "../ui/sonner";
import { useCreateCashier } from "@/features/admin/cashier/hooks/useCreateCashier";

/* -------------------------
   Validation Schema
   ------------------------- */
const phoneRegex = /^(?:\+62|62|0)[2-9][0-9]{7,11}$/;

const formSchema = z
  .object({
    avatar: z.any().optional(),
    fullName: z.string().min(1, "Full name is required"),
    phoneNumber: z.string().regex(phoneRegex, "Invalid phone number"),
    city: z.string().min(1, "City is required"),
    dob: z.date().optional(),
    email: z.string().email(),
    password: z.string().min(8, "Min 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormValues = z.infer<typeof formSchema>;

const AddCashierOverlay = ({ closeModal, openModal }: ModalProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { mutate, isPending } = useCreateCashier({
    mutationConfig: {
      onSuccess: () => {
        toastSuccess("Cashier account has been created");
        closeModal();
      },
      onError: () => toastError("Failed to create cashier account"),
    },
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: undefined,
      fullName: "",
      phoneNumber: "",
      city: "",
      dob: undefined,
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleImage = (file: File | null) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    form.setValue("avatar", file);
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const clearImage = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    form.setValue("avatar", undefined);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (values: FormValues) => {
    mutate({
      avatar: values.avatar,
      fullName: values.fullName,
      phoneNumber: values.phoneNumber,
      city: values.city,
      dateOfBirth: values.dob,
      email: values.email,
      password: values.password,
    });

    form.reset();
    clearImage();
    closeModal();
  };

  const clearAll = () => {
    form.reset();
    clearImage();
  };

  return (
    <Dialog open={openModal} onOpenChange={closeModal}>
      <DialogContent className="bg-white p-0 w-[95%] sm:max-w-[600px] rounded-2xl border-0 shadow-lg overflow-hidden">
        <DialogHeader>
          <DialogTitle className="bg-neutral-100 text-center py-[12px] font-semibold text-lg">
            Create New Cashier
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-6 flex flex-col gap-6 -mt-8"
          >
            <div className="flex justify-center">
              <label
                htmlFor="avatar-upload"
                className="relative w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-50 transition"
              >
                {preview ? (
                  <Image
                    src={preview}
                    alt="Avatar preview"
                    width={96}
                    height={96}
                    className="rounded-full object-cover w-24 h-24"
                  />
                ) : (
                  <Upload className="text-gray-400 w-6 h-6" />
                )}

                <input
                  ref={fileInputRef}
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImage(e.target.files?.[0] || null)}
                />

                {preview && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      clearImage();
                    }}
                    className="absolute z-[99] -top-1.5 -right-1.5 bg-white border border-gray-300 rounded-full p-1 shadow-md hover:bg-neutral-100 transition"
                  >
                    <XIcon className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                )}
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter fullname"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="08xxxxxxxxx"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter city"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel>Date of Birth</FormLabel>
                      <span className="text-xs text-neutral-500">
                        (Optional)
                      </span>
                    </div>

                    <Popover>
                      <PopoverTrigger asChild>
                        <div className="relative w-full">
                          <Input
                            readOnly
                            value={
                              field.value
                                ? format(field.value, "dd MMM yyyy")
                                : ""
                            }
                            placeholder="Select your birth date"
                            className="cursor-pointer pr-10"
                            disabled={isPending}
                          />
                          <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                        </div>
                      </PopoverTrigger>

                      <PopoverContent
                        align="start"
                        side="bottom"
                        className="w-auto p-0 mt-1 shadow-md rounded-xl overflow-hidden"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          captionLayout="dropdown"
                          startMonth={new Date(1900, 0)}
                          endMonth={new Date()}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter password"
                          {...field}
                          disabled={isPending}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-0 inset-y-0 px-3"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Re-enter password"
                          {...field}
                          disabled={isPending}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-0 inset-y-0 px-3"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="flex justify-between pt-4 border-t border-neutral-200">
              <Button
                type="button"
                variant="outline"
                onClick={clearAll}
                disabled={isPending}
                className="flex-1 mr-3"
              >
                Clear All
              </Button>
              <Button
                type="submit"
                disabled={isPending}
                className="flex-1 bg-[#8B7150] hover:bg-[#7a6346] text-white"
              >
                {isPending ? "Creating..." : "Create Account"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCashierOverlay;
