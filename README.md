# vscode-open-local-terminal

Open local terminal with custom local commands.

If you frequently use VSCode's Remote features and find yourself needing to open terminals on the local side, you're likely the target user for this extension.

## Motivation

VSCode has a `Create New Integrated Terminal (Local)` command, but it doesn't allow you to specify a profile.

https://github.com/microsoft/vscode/issues/242654

Additionally, even when the host is Windows, it uses `terminal.integrated.defaultProfile.linux`.

https://github.com/microsoft/vscode/issues/148572

VSCode doesn't seem to have plans to actively enhance local terminal functionality at this time.

https://github.com/microsoft/vscode/issues/242654#issuecomment-2703593116

## Commands

- `Open local terminal: Open New Terminal`

## Configuration

In VS Code settings:

```json
{
  "openLocalTerminal.commands": [
    {
      "name": "WSL Ubuntu",
      "shellPath": "wsl.exe",
      "shellArgs": ["-d", "Ubuntu"]
    }
  ]
}
```

## Open VSX

https://open-vsx.org/extension/mtsmfm/vscode-open-local-terminal

## VSCode Marketplace

https://marketplace.visualstudio.com/items?itemName=mtsmfm.vscode-open-local-terminal
