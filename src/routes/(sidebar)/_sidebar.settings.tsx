import { Button } from "@/components/atoms/button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/(sidebar)/_sidebar/settings")({
  component: About,
});

function About() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex gap-2 p-2">
      Hello from About!
      <Button loading={loading} onClick={() => setLoading(true)}>
        <p>Add To Cart</p>
      </Button>
    </div>
  );
}
