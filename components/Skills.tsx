import { skills } from "@/data/skills";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Tools & methods">
      <p className="text-sm leading-7 text-body">{skills.join(", ")}</p>
    </Section>
  );
}
