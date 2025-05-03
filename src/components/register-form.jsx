import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserContext } from "@/contexts/user/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";

export function RegisterForm({ className, ...props }) {
  const navigate = useNavigate();
  const [userLists, setUserLists] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    date_of_birth: "",
  });

  useEffect(() => {
    axios.get("https://my-green-api-iugw.onrender.com/users").then((res) => {
      setUserLists(res.data);
    });
  }, []);

  const handleOnChange = (e, name = null, value = null) => {
    if (name && value !== null) {
      if (name === "date_of_birth") {
        const dateValue = value instanceof Date ? value : new Date(value);
        const formattedDate = format(dateValue, "dd/MM/yyyy");
        setUser((prev) => ({ ...prev, [name]: formattedDate }));
      } else {
        setUser((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    console.log(user);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUserData = {
      user_id: userLists.length + 1,
      username: user.username,
      password: user.password,
      fullname: "",
      email: user.email,
      date_of_birth: user.date_of_birth,
      phone: "",
      role: "registered",
      address: "",
      created_at: new Date().toISOString(),
    };

    try {
      await axios.post("https://my-green-api-iugw.onrender.com/users", newUserData);
      navigate("/login");
      toast.success("Register successful", {
        duration: 3000,
      });
    } catch (err) {
      console.error("Post Failed:", err);
      toast.error("Registration failed");
    }
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-sky-700">
          Register Your New Account
        </h1>
        <p className="text-muted-foreground text-sm text-balance">
          Sign up your information to create a new account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label className={"text-sky-700"} htmlFor="password">
              User Name
            </Label>
          </div>
          <Input
            id="username"
            type="username"
            name="username"
            placeholder="Sign in your username"
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="grid gap-3">
          Date Of Birth
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !user.date_of_birth && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {user.date_of_birth ? (
                  user.date_of_birth // Display the formatted string directly
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={
                  user.date_of_birth ? new Date(user.date_of_birth) : undefined
                }
                onSelect={(value) =>
                  handleOnChange(null, "date_of_birth", value)
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

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
            placeholder="Sign in your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <Button
          onClick={handleRegister}
          className="w-full bg-sky-700 hover:bg-orange-500"
        >
          Register
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
      </div>
      <div className="text-center text-sm">
        Already had an account?{" "}
        <a
          onClick={() => navigate("/login")}
          className="underline underline-offset-4 text-sky-700  font-medium cursor-pointer"
        >
          Log in
        </a>
      </div>
    </form>
  );
}
