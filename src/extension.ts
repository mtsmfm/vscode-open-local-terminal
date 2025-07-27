import * as vscode from "vscode";
import { homedir, platform } from "node:os";

export function activate(context: vscode.ExtensionContext) {
  const openNewTerminal = vscode.commands.registerCommand(
    "openLocalTerminal.openNew",
    async () => {
      const command = await getLocalCommand();
      if (command) {
        const terminal = vscode.window.createTerminal({
          cwd: vscode.Uri.file(homedir()),
          ...command,
        });
        terminal.show();
      }
    }
  );

  context.subscriptions.push(openNewTerminal);
}

type Command = {
  name: string;
  shellPath: string;
  shellArgs?: string[];
};

async function getLocalCommand(): Promise<Command | undefined> {
  const config = vscode.workspace.getConfiguration("openLocalTerminal");
  const commands: Command[] = config.get("commands", []);

  if (commands.length === 0) {
    vscode.window.showWarningMessage(
      "No commands configured, using default config"
    );

    switch (platform()) {
      case "win32": {
        return {
          name: "powershel (local)",
          shellPath: "powershell.exe",
        };
      }
      case "darwin": {
        return {
          name: "bash (local)",
          shellPath: "bash",
        };
      }
      case "linux": {
        return {
          name: "bash (local)",
          shellPath: "bash",
        };
      }
    }
  }

  let selectedCommand: Command;
  if (commands.length === 1) {
    selectedCommand = commands[0];
  } else {
    const commandNames = commands.map((cmd) => cmd.name);
    const selected = await vscode.window.showQuickPick(commandNames, {
      placeHolder: "Select command to run",
    });
    if (!selected) {
      return undefined;
    }
    selectedCommand = commands.find((cmd) => cmd.name === selected)!;
  }

  return selectedCommand;
}
