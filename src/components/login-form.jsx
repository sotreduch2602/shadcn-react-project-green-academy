import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserContext } from "@/contexts/user/UserContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axiosInstance from "@/api/axios";

export function LoginForm({ className, ...props }) {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const [userLists, setUserLists] = useState([]);
  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    axiosInstance.get("/users").then((res) => {
      setUserLists(res.data);
    });
  }, []);

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userFound = userLists.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (userFound) {
      setCurrentUser(userFound); // This will trigger the localStorage update
      navigate("/");
      toast.success("Login successful", {
        description: "Welcome back!",
        duration: 3000,
      });
    } else {
      toast.error("Invalid email or password", {
        description: "Please check your email and password and try again.",
        duration: 3000,
      });
    }
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-sky-700">
          Login to your account
        </h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label className={"text-sky-700"} htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Sign in your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label className={"text-sky-700"} htmlFor="password">
              Password
            </Label>
          </div>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={handleOnChange}
            required
          />
        </div>
        <Button
          onClick={handleLogin}
          className="w-full bg-sky-700 hover:bg-orange-500"
        >
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
      </div>
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <a
          onClick={()=>navigate('/register')}
          className="underline underline-offset-4 text-sky-700  font-medium cursor-pointer"
        >
          Sign up
        </a>
      </div>
    </form>
  );
}
