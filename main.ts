import { isEqual, notEqual } from "./Checking/CheckingCode";
import Commands from "./Commands/cmds";
import { question } from "readline-sync";

const commandPicked: Commands = {
  Home: "/",
  Math: "/Math",
  Timer: "/Timer",
};

async function sleep(ms: number): Promise<void> {
  return new Promise((e) => setTimeout(e, ms));
}

async function main() {
  const newCommand = question("Enter Command: ");

  if (newCommand === commandPicked.Home && newCommand !== commandPicked.Timer) {
    ListCommands();
  }

  if (
    notEqual(newCommand, commandPicked.Home) &&
    isEqual(newCommand, commandPicked.Timer)
  ) {
    timerCode();
  }
}

const ListCommands = (): void => {
  const commandPicked: Commands = {
    Home: "/",
    Math: "/Math",
    Timer: "/Timer",
  };

  console.log(commandPicked);
};

const timerCode = async () => {
  let i: number = 1;

  while (i > 0) {
    i += 1;
    await sleep(100 * 5);
    console.log("Seconds: " + i);
  }
};

main();
