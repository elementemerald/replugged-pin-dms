import { settings } from "replugged";
import { Channel } from "discord-types/general";

interface PinDMsFLOptions {
  sortOptions: boolean;
  mutualGuilds: boolean;
  showTotal: boolean;
}

interface PinDMsGeneralOptions {
  pinIcon: boolean;
  unreadAmount: boolean;
  channelAmount: boolean;
}

interface PinDMsRecentOrderOptions {
  channelList: boolean;
  guildList: boolean;
}

interface PinDMsCurrent {
  dmCategories: PinDMsCurrentCategories;
}

interface PinDMsCurrentCategories {
  dms: number[];
}

export let PinDMsSettings: settings.SettingsManager<
  {
    friendList: PinDMsFLOptions;
    general: PinDMsGeneralOptions;
    recentOrder: PinDMsRecentOrderOptions;
    pinDms: PinDMsCurrent;
  },
  never
>;

export interface PrivateChannelRender {
  channel: Channel;
}

//export type PrivateChannelRenderFunc = (args: PrivateChannelRender) => unknown;
