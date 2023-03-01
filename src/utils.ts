import { settings } from "replugged";

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
  },
  never
>;
