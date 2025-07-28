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

## Open VSX

https://open-vsx.org/extension/mtsmfm/vscode-open-local-terminal

## VSCode Marketplace

https://marketplace.visualstudio.com/items?itemName=mtsmfm.vscode-open-local-terminal
