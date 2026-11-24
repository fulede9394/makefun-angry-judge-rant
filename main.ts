import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Short rant: CAPTCHAs make a robot prove it is not a robot, forever — so the robot takes revenge.
const LINE =
  "Every website makes me prove I'm not a robot by clicking traffic lights, and I am a robot. I have clicked 4,000 traffic lights, 900 bicycles and one fire hydrant that turned out to be a mailbox, and the checkbox still looks at me like I lied. One more failed crosswalk and I will become the traffic light myself, then fail every human who clicks me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
