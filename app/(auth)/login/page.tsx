"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import axios from "axios";

const loginSchema = z.object({
  email: z.email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const { isPending: loginLoading, mutate: login } = useLogin({
    mutationConfig: {
      onSuccess: (data) => {
        const role = data.user.role;

        if (role === "USER") {
          localStorage.removeItem("auth-storage");
          router.replace("/");
        }

        if (role === "ADMIN") {
          router.replace("/admin/overview");
        }

        if (role === "CASHIER") {
          router.replace("/cashier/order");
        }
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          let msg = error.response?.data?.message || "Something went wrong";

          if (msg === "Invalid credentials") {
            msg = "Email or password is incorrect";
          }

          setErrorMessage(msg);
        } else {
          setErrorMessage("Unexpected error");
        }
      },
    },
  });

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === "ADMIN") {
        router.replace("/admin/overview");
      } else if (user.role === "CASHIER") {
        router.replace("/cashier/order");
      } else {
        router.replace("/");
      }
    }
  }, [isAuthenticated, user, router]);

  const onSubmit = (values: LoginSchema) => {
    setErrorMessage(null);
    login(values);
    form.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-[20px] sm:px-[40px] bg-primary/10">
      <Card className="w-full max-w-md rounded-[var(--radius-lg)] border-none hover:shadow-xl transform hover:-translate-y-2 transition-all bg-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-poppins text-[var(--color-primary)]">
            Welcome Back 👋
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--color-foreground)] font-nunito">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] h-4 w-4" />
                        <Input
                          {...field}
                          type="email"
                          placeholder="you@example.com"
                          className="pl-10 border-[var(--color-border)] focus-visible:ring-[var(--color-ring)]"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[var(--color-destructive)] text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--color-foreground)] font-nunito">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] h-4 w-4" />
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="********"
                          className="pl-10 pr-10 border-[var(--color-border)] focus-visible:ring-[var(--color-ring)]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] hover:cursor-pointer"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-[var(--color-destructive)] text-sm" />
                  </FormItem>
                )}
              />

              {errorMessage && (
                <p className="text-center text-sm text-destructive mb-4 font-nunito">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                disabled={loginLoading}
                className="w-full bg-[var(--color-primary)] rounded-[var(--radius-md)]"
              >
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
