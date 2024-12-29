# PC Online Discord Self-Bot

This project is a Discord self-bot that allows you to set your account status to online, do not disturb (DND), or idle, simulating the appearance of being active on desktop.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/xzyyysh/pc-online.git
   cd pc-online
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Discord token:
   ```
   TOKEN=your_discord_token_here
   ```

## Configuration

Edit the `src/config.json` file to set your desired status. The configuration should look like this:

```json
{
  "status": "online" // Options: online, dnd, idle
}
```

## Usage

To run the bot, use the following command:

```
node src/index.js
```

Make sure to keep the bot running to maintain your status.
