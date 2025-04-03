import { LoginForm } from "@/components/login-form";
import Brand from "@/components/original_ui/brand";
import { ThreeDMarqueeDemo } from "@/components/original_ui/3DMarquee";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <Brand />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden overflow-hidden bg-black lg:flex items-center ">
        <ThreeDMarqueeDemo className="h-full" />
      </div>
    </div>
  );
}
