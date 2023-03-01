import { Injector, Logger, common, webpack } from "replugged";
import { Channel } from "discord-types/general";
import { PinDMsSettings } from "./utils";

const inject = new Injector();
const logger = Logger.plugin("PinDMS");

export async function start(): Promise<void> {}

async function injectCategoryChannel(): Promise<void> {
  const channelStore = await webpack.waitForModule<{
    getChannel: (channelId: string) => Channel;
  }>(webpack.filters.byProps("getChannel"));

  const { lastMessageId } = await webpack.waitForModule<{
    lastMessageId: (channelId: string) => string;
  }>(webpack.filters.byProps("lastMessageId"));

  const { getDMFromUserId } = await webpack.waitForModule<{
    getDMFromUserId: (userId: string) => string;
  }>(webpack.filters.byProps("getDMFromUserId"));
}

export function stop(): void {
  inject.uninjectAll();
}
