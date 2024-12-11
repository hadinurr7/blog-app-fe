"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { useFormik } from "formik";
import useResetPassword from "@/hooks/api/auth/useResetPassword";

interface RestPasswordPageProps {
  token: string;
}

const ResetPasswordPage: FC<RestPasswordPageProps> = ({ token }) => {
  const { mutateAsync: ResetPassword, isPending } = useResetPassword(token);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: ResetPassword,

    onSubmit: async (values) => {
      await ResetPassword(values);
    },
  });
  return (
    <main className="flex justify-center pt-20">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">New Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="example@mail.com"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {!!formik.touched.password && !!formik.errors.password ? (
                <p className="text-xs text-red-500">{formik.errors.password}</p>
              ) : null}
            </div>

            <div className="mt-4 flex flex-col space-y-1.5">
              <Label htmlFor="password">Confirm Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {!!formik.touched.confirmPassword &&
              !!formik.errors.confirmPassword ? (
                <p className="text-xs text-red-500">
                  {formik.errors.confirmPassword}
                </p>
              ) : null}
            </div>
            <Button type="submit" className="mt-4 w-full" disabled={isPending}>
              {isPending ? "Loading..." : "Log in"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default ResetPasswordPage;
