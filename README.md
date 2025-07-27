# vscode-open-local-terminal

Open local terminal with custom local commands.

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
