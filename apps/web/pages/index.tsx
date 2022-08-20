import { Button } from "ui";
import { Input } from "twui";

export default function Web() {
  return (
    <div className="container mx-auto">
      <h1 className="text-sm text-green-600">Web</h1>
      <Button />
      <div className="w-72">
        <Input
          placeholder="Placeholder..."
          startAdornment="Date"
          classes={{
            root: "rounded-lg overflow-hidden",
            startAdornment: {
              root: "text-xs text-gray-900 flex items-center bg-gray-100 border-r h-10",
            },
          }}
        />
      </div>
    </div>
  );
}
