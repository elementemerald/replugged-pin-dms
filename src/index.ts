import { Injector, Logger, common, webpack, types } from "replugged";
import { Channel } from "discord-types/general";
import { PinDMsSettings } from "./utils";

const inject = new Injector();
const logger = Logger.plugin("PinDMs");

export async function start(): Promise<void> {
  await injectCategoryChannel();
}

async function injectCategoryChannel(): Promise<void> {
  const PrivateChannel = await webpack.waitForModule<{
    $$typeof: symbol;
    render: types.AnyFunction;
  }>(webpack.filters.bySource(/.\..\.Messages.DIRECT_MESSAGES/));

  const channelStore = await webpack.waitForModule<{
    getChannel: (channelId: string) => Channel;
  }>(webpack.filters.byProps("getChannel"));

  const { lastMessageId } = await webpack.waitForModule<{
    lastMessageId: (channelId: string) => string;
  }>(webpack.filters.byProps("lastMessageId"));

  const { getDMFromUserId } = await webpack.waitForModule<{
    getDMFromUserId: (userId: string) => string;
  }>(webpack.filters.byProps("getDMFromUserId"));

  // eslint-disable-next-line @typescript-eslint/require-await
  inject.after(PrivateChannel, "render", (props, res) => {
    // WIP
    return res;
  });
}

export function stop(): void {
  inject.uninjectAll();
}
