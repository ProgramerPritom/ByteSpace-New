import AuthPageLayout from "@/components/auth/auth-page-layout";
import RegisterForm from "@/components/auth/register-form";

export const metadata = {
  title: "Create an Account - ByteSpace",
  description: "Sign up and join ByteSpace today.",
};

export default function RegisterPage() {
  return (
    <AuthPageLayout
      title="Sign up and come in"
      subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <RegisterForm />
    </AuthPageLayout>
  );
}
