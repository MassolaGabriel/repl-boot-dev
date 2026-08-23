import { createInterface } from "node:readline";
import { getCommands } from "./commands/command_registry.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});

export function cleanInput(input: string): string[] {
  return input.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
}

export function startREPL(): void {
  const commands = getCommands();

  rl.on("line", (input: string) => {
    const command = commands[input];

    if (!command) {
      console.log("Unknown command");
      rl.prompt();
      return;
    }

    command.callback(commands);
    rl.prompt();
  });

  rl.prompt();
}
