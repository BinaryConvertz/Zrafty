import { Equal } from "./Checking/CheckingCode";
import Commands from "./Commands/cmds";
import { question } from "readline-sync";
import User, { endline, Title, Upper } from "./Extras/ExtraUser";
import { Client } from "./DB/DB";
import { InstalledPackages } from "./Routes/Home";

const commandPicked: Commands = {
  Home: "/",
  Math: "/Math",
  Timer: "/Timer",
  FileRead: "/Read",
};

async function sleep(ms: number): Promise<void> {
  return new Promise((e) => setTimeout(e, ms));
}

async function main() {
  const title = new Title("[Zrafty] | CLI Tool");
  console.log(title.GetTitle());
  endline();
  const userInput = question("| Enter Temp Name: |" + endline());

  const user = new User(Upper(userInput));
  endline();
  console.log(user.logName());

  const newCommand = question("Enter Command: ");

  await Client.connect(newCommand);

  if (
    Equal.isEqual(newCommand, commandPicked.Home) &&
    Equal.notEqual(newCommand, commandPicked.Timer)
  ) {
    ListCommands();
  }

  if (
    Equal.notEqual(newCommand, commandPicked.Home) &&
    Equal.notEqual(newCommand, commandPicked.FileRead) &&
    Equal.isEqual(newCommand, commandPicked.Timer)
  ) {
    timerCode();
  }

  if (
    Equal.isEqual(newCommand, commandPicked.FileRead) &&
    Equal.notEqual(newCommand, commandPicked.Home) &&
    Equal.notEqual(newCommand, commandPicked.Timer)
  ) {
    InstalledPackages.readFiles("packages.pkgs");
  }
}

const ListCommands = (): void => {
  const commandPicked: Commands = {
    Home: "/",
    Math: "/Math",
    Timer: "/Timer",
    FileRead: "/Read",
  };

  console.log(commandPicked);
};

const timerCode = async () => {
  let i: number = 1;

  while (i > 0) {
    i += 1;
    await sleep(100 * 5);

    if (Equal.isEqual(i.toString(), Number(25).toString())) {
      console.log("Done");
      break;
    }
    console.log("Seconds: " + i);
  }
};

main();
