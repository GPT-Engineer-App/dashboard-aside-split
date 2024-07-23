import { useState } from "react";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const MainContent = () => {
  const [message, setMessage] = useState("");

  return (
    <main className="flex-grow p-4 flex flex-col">
      <div className="mb-4">
        <Select>
          <option value="gpt-4">gpt-4</option>
          <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
        </Select>
      </div>
      <div className="mb-4 flex-grow">
        <Textarea
          placeholder="Enter system instructions"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter user message..."
          className="flex-grow mr-2"
        />
        <Button className="mr-2">Add</Button>
        <Button>Run</Button>
      </div>
    </main>
  );
};

export default MainContent;