import AuthPageLayout from "@/components/auth/auth-page-layout";
import LoginForm from "@/components/auth/login-form";

export const metadata = {
  title: "Sign In - ByteSpace",
  description: "Sign in to access your ByteSpace account.",
};

export default function LoginPage() {
  return (
    <AuthPageLayout
      title="Sign in with ease"
      subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginForm />
    </AuthPageLayout>
  );
}
