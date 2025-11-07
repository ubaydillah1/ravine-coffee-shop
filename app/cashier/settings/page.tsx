"use client";

import { useState, useRef, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";
import XIcon from "@/public/assets/icons/x.svg";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Input from "@/components/Input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useAuthStore } from "@/store/useAuthStore";
import { UseUpdateProfile } from "@/features/profile/hooks/useUpdateProfile";
import { toastError, toastSuccess } from "@/components/ui/sonner";
import { useDeleteAvatar } from "@/features/profile/hooks/useDeleteAvatar";

const SettingsSchema = z.object({
  name: z.string().min(3, "Name is required"),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone number must contain only digits")
    .min(8, "Phone number must be at least 8 digits"),
  city: z.string().min(2, "City is required"),
  dateOfBirth: z.date().optional(),
  image: z.any().optional(),
});

export type SettingsFormValues = z.infer<typeof SettingsSchema>;

const SettingsPage = () => {
  const { user, setUser } = useAuthStore();
  const imageRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(
    user?.avatar || "/assets/images/ba-image.png"
  );
  const [imageChanged, setImageChanged] = useState(false);

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.fullName || "",
      phone: user?.phoneNumber || "",
      city: user?.city || "",
      dateOfBirth: user?.dateOfBirth ? new Date(user.dateOfBirth) : undefined,
    },
  });

  const { mutate: updateProfile, isPending } = UseUpdateProfile({
    mutationConfig: {
      onSuccess: (data) => {
        toastSuccess("Profile updated");
        setUser(data);

        form.reset(
          {
            name: data.fullName!,
            phone: data.phoneNumber!,
            city: data.city!,
            dateOfBirth: data.dateOfBirth
              ? new Date(data.dateOfBirth)
              : undefined,
            image: undefined,
          },
          {
            keepDirty: false,
          }
        );

        setImageChanged(false);
      },
      onError: () => {
        toastError("Failed to update profile");
      },
    },
  });

  const { mutate: deleteAvatar, isPending: isDeleting } = useDeleteAvatar({
    mutationConfig: {
      onSuccess: (data) => {
        toastSuccess("Avatar deleted");
        setUser(data);

        form.reset(
          {
            name: data.fullName!,
            phone: data.phoneNumber!,
            city: data.city!,
            dateOfBirth: data.dateOfBirth
              ? new Date(data.dateOfBirth)
              : undefined,
            image: undefined,
          },
          {
            keepDirty: false,
          }
        );

        setImageChanged(false);
      },
      onError: () => {
        toastError("Failed to delete avatar");
      },
    },
  });

  const { isDirty } = form.formState;

  const dob = form.watch("dateOfBirth");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
        setImageChanged(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview("/assets/images/ba-image.png");

    deleteAvatar(undefined);
    form.setValue("image", null, { shouldDirty: true });
    setImageChanged(true);
    if (imageRef.current) imageRef.current.value = "";
  };

  const onSubmit = (values: SettingsFormValues) => {
    updateProfile(values, { onSuccess: () => form.reset() });
  };

  return (
    <div className="p-[24px] sm:p-[40px] space-y-[48px] flex-1">
      <div className="space-y-[24px]">
        <header className="sub-h1">My Profile</header>
        <div className="w-full h-[1px] bg-neutral-n300"></div>

        <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-[32px] items-center">
            <div
              className="size-[96px] rounded-full cursor-pointer mx-auto sm:mx-0 relative z-10"
              onClick={() => imageRef.current?.click()}
            >
              <Image
                src={preview}
                alt="profile-logo"
                fill
                sizes="100%"
                priority
                className="object-cover rounded-full"
              />

              <div
                className={`size-[28px] rounded-full bg-neutral-n100 flex-center absolute right-0 top-0 cursor-pointer sm:hidden z-90 ${
                  preview === "/assets/images/ba-image.png" ? "hidden" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();

                  handleRemoveImage();
                }}
              >
                <XIcon className="size-[16px] " />
              </div>
            </div>

            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              className="hidden"
              ref={imageRef}
              onChange={handleImageChange}
            />

            <div className="space-y-[12px] sm:block hidden">
              <div className="flex gap-4">
                <Button
                  className="px-[24px]!"
                  type="button"
                  onClick={() => imageRef.current?.click()}
                >
                  <Plus /> Change Image
                </Button>
                <Button
                  variant={"outlineGray"}
                  className="px-[24px]!"
                  type="button"
                  onClick={handleRemoveImage}
                  disabled={preview === "/assets/images/ba-image.png"}
                >
                  Remove Image
                </Button>
              </div>

              <div className="b3-r text-neutral-n700">
                We support PNGs, JPEGs, and JPGs under 2mb
              </div>
            </div>
          </div>

          <div className="flex gap-6 flex-col sm:flex-row">
            <div className="flex-1 flex flex-col gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="08xxxxxxxxxx"
                  {...form.register("phone")}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    form.setValue("phone", val);
                  }}
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="relative w-full">
                      <Input
                        readOnly
                        value={
                          dob
                            ? format(dob, "yyyy-MM-dd")
                            : "Select your birth date"
                        }
                        placeholder="Select your birth date"
                        className="cursor-pointer pr-10 placeholder:text-neutral-500"
                      />
                      <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </PopoverTrigger>

                  <PopoverContent
                    align="center"
                    side="bottom"
                    className="w-auto p-0 mt-1 shadow-md rounded-xl overflow-hidden text-neutral-n700 bg-blue-400!"
                  >
                    <Calendar
                      mode="single"
                      selected={dob}
                      onSelect={(date) => {
                        if (date) {
                          form.setValue("dateOfBirth", date, {
                            shouldValidate: true,
                            shouldDirty: true,
                          });
                        }
                      }}
                      captionLayout="dropdown"
                      startMonth={new Date(1900, 0)}
                      endMonth={new Date()}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </PopoverContent>
                </Popover>
                {form.formState.errors.dateOfBirth && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.dateOfBirth.message as string}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="Jakarta"
                  {...form.register("city")}
                />
                {form.formState.errors.city && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.city.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className=" flex justify-end w-full">
            <Button
              type="submit"
              className="px-8"
              disabled={(!isDirty && !imageChanged) || isPending || isDeleting}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
