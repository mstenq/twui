import { componentGenerator } from "./component-generator/index.mjs";

export default function generate(plop) {
  plop.setGenerator("component", componentGenerator);
}
