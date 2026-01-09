import { genkit } from "genkit";
import { enableFirebaseTelemetry } from "@genkit-ai/firebase";

genkit({
  plugins: [enableFirebaseTelemetry()],
});
