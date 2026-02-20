---
title: MCP
slug: /mcp
---

The [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server provides a standardized interface that allows any compatible AI model or agent to access your Raindrop.io data in a simple and secure way.

Connect to our MCP server natively in Claude, ChatGPT, Cursor, and other clients or use the `mcp-remote` module for backwards compatibility with clients that do not support remote MCP.

:::info
MCP is currently in **beta** for [Pro](https://raindrop.io/pro/buy) users.
:::

## General

Our MCP server uses Streamable HTTP transport with OAuth 2.1 authentication at the following address:

```
https://api.raindrop.io/rest/v2/ai/mcp
```

On first connection your browser will open to authorize access to your Raindrop.io account. For instructions for specific clients, read on.

## Claude
#### Pro, Max, Team, Enterprise (claude.ai)
1. Go to **Settings → Connectors**
2. Click **Add connector** and paste the MCP server URL
3. Click **Connect** and authorize Raindrop.io in the browser

:::note
Optionally click **Configure** next to Raindrop and set **Read-only tools** permission to **Always allow** so Claude doesn't ask for confirmation every time.
:::

#### Free, Pro (Claude Desktop)
Requires [Node.js](https://nodejs.org) installed. Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "raindrop": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://api.raindrop.io/rest/v2/ai/mcp"]
    }
  }
}
```

Restart Claude Desktop after saving the file.

#### Claude Code
Run in terminal:

```bash
claude mcp add --transport http raindrop https://api.raindrop.io/rest/v2/ai/mcp
```

## ChatGPT
We're working on adding Raindrop.io to the ChatGPT Apps catalog for one-click setup. In the meantime, you can connect manually using Developer mode.

Requires ChatGPT Plus, Pro, Business, Enterprise, Education plan

1. Go to [**Settings → Apps → Advanced**](https://chatgpt.com/#settings/Connectors)
2. Enable **Developer mode**
3. Click **Create App**
4. Set name to `Raindrop` and paste the MCP server URL
5. Check **I understand and want to continue**
6. Click **Create App**

## VS Code (GitHub Copilot)
Add to `.vscode/mcp.json` in your project:

```json
{
  "servers": {
    "raindrop": {
      "type": "http",
      "url": "https://api.raindrop.io/rest/v2/ai/mcp"
    }
  }
}
```

## Cursor
Go to **Settings → MCP → Add new MCP Server**, or add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "raindrop": {
      "url": "https://api.raindrop.io/rest/v2/ai/mcp"
    }
  }
}
```

## Windsurf
Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "raindrop": {
      "serverUrl": "https://api.raindrop.io/rest/v2/ai/mcp"
    }
  }
}
```

## Zed
Zed doesn't support HTTP MCP servers natively yet. Use [mcp-remote](https://www.npmjs.com/package/mcp-remote) as a bridge (requires [Node.js](https://nodejs.org)).

Add to your Zed settings JSON:

```json
{
  "context_servers": {
    "raindrop": {
      "command": {
        "path": "npx",
        "args": ["-y", "mcp-remote", "https://api.raindrop.io/rest/v2/ai/mcp"]
      }
    }
  }
}
```

## Others
Hundreds of other tools now support MCP servers. You can configure them to use Raindrop.io MCP server with the following settings:

- **Command:** `npx`
- **Arguments:** `-y mcp-remote https://api.raindrop.io/rest/v2/ai/mcp`
- **Environment:** None

For cloud-based or other hosted clients not listed on this page, please reach out to info@raindrop.io so we can enable support.

## FAQ

### Why am I seeing an error when trying to connect?
Run the following in Terminal to clear saved auth info, then try again:

```bash
rm -rf ~/.mcp-auth
```

If the issue persists, make sure you have the latest version of [Node.js](https://nodejs.org) installed.

### Does the MCP support Streamable HTTP?
Yes, at the `https://api.raindrop.io/rest/v2/ai/mcp` endpoint. This is the only supported transport.

### Can I authenticate with my own API keys or OAuth access tokens?
Yes. You can pass your [Raindrop.io API](https://developer.raindrop.io) token directly in the `Authorization: Bearer <your-token>` header instead of using the interactive OAuth flow.

### I'm using WSL on Windows, and seeing an error
Try this configuration instead:

```json
{
  "mcpServers": {
    "raindrop": {
      "command": "wsl",
      "args": ["npx", "-y", "mcp-remote", "https://api.raindrop.io/rest/v2/ai/mcp"]
    }
  }
}
```
