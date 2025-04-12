import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Demo = () => {
  const [theme, setTheme] = useState("system");

  const handleButtonClick = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button onClick={() => handleButtonClick("light")}>Set Light</button>
        <button onClick={() => handleButtonClick("dark")}>Set Dark</button>
        <button onClick={() => handleButtonClick("system")}>Set System</button>
      </div>

      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Demo;
