import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RightSidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">Functions</h2>
      <div className="mb-4">
        <Label htmlFor="temperature">Temperature</Label>
        <Slider id="temperature" min={0} max={2} step={0.1} defaultValue={[1]} />
      </div>
      <div className="mb-4">
        <Label htmlFor="max-tokens">Maximum Tokens</Label>
        <Input id="max-tokens" type="number" defaultValue={256} />
      </div>
      <div className="mb-4">
        <Label htmlFor="stop-sequences">Stop sequences</Label>
        <Input id="stop-sequences" placeholder="Enter sequence and press Tab" />
      </div>
      <div className="mb-4">
        <Label htmlFor="top-p">Top P</Label>
        <Slider id="top-p" min={0} max={1} step={0.01} defaultValue={[1]} />
      </div>
      <div className="mb-4">
        <Label htmlFor="frequency-penalty">Frequency penalty</Label>
        <Slider id="frequency-penalty" min={0} max={2} step={0.01} defaultValue={[0]} />
      </div>
      <div className="mb-4">
        <Label htmlFor="presence-penalty">Presence penalty</Label>
        <Slider id="presence-penalty" min={0} max={2} step={0.01} defaultValue={[0]} />
      </div>
      <p className="text-sm text-gray-600">
        API and Playground requests will not be used to train our models.{" "}
        <a href="#" className="text-blue-600">
          Learn more
        </a>
      </p>
    </aside>
  );
};

export default RightSidebar;