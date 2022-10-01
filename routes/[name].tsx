import { PageProps } from "$fresh/server.ts";
import Counter from "../islands/Counter.tsx";

export default function Greet(props: PageProps) {
  return (
    <div>
      Hello {props.params.name}{" "}
      <div>
        {" "}
        <Counter start={3} />
      </div>
    </div>
  );
}
