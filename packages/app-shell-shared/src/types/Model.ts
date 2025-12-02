import type {
  ServiceId,
  ServiceProviderConfig,
} from "@hitachivantara/app-shell-services";

import {
  HvAppShellConditionConfig,
  HvAppShellConditionsProvidersConfig,
  HvAppShellConfig,
  HvAppShellHeader,
  HvAppShellHeaderAction,
  HvAppShellMainPanelConfig,
  HvAppShellMenuConfig,
  HvAppShellProvidersConfig,
  HvAppShellTopViewConfig,
  HvAppShellViewsConfig,
} from "./Config";

export type PreloadedBundles = Map<string, unknown>;

// Condition model with globalIndex being a unique number for each condition in the config and used in results lookup
export type HvAppShellConditionModel = HvAppShellConditionConfig & {
  globalIndex: number;
};

export type HvAppShellConditionalModel = {
  key: string;
  conditions?: HvAppShellConditionModel[];
};

export type HvAppShellMenuModel = Omit<
  HvAppShellMenuConfig,
  "conditions" | "submenus"
> & {
  submenus?: HvAppShellMenuModel[];
} & HvAppShellConditionalModel;

export type HvAppShellViewModel = Omit<
  HvAppShellViewsConfig,
  "conditions" | "views"
> & {
  views: HvAppShellViewModel[];
} & HvAppShellConditionalModel;

export type HvAppShellTopViewModel = HvAppShellViewModel &
  Omit<HvAppShellTopViewConfig, keyof HvAppShellViewsConfig>;

export type HvAppShellHeaderActionModel = Omit<
  HvAppShellHeaderAction,
  "conditions"
> &
  HvAppShellConditionalModel;

export type HvAppShellConditionsProvidersModel =
  HvAppShellConditionsProvidersConfig & {
    key: string;
  };

export type HvAppShellProvidersModel = Omit<
  HvAppShellProvidersConfig,
  "conditions"
> &
  HvAppShellConditionalModel;

export type HvAppShellServiceProviderModel = ServiceProviderConfig &
  HvAppShellConditionalModel;

export type HvAppShellServicesModel = Record<
  ServiceId,
  HvAppShellServiceProviderModel[]
>;

export type HvAppShellMainPanelModel = Omit<
  HvAppShellMainPanelConfig,
  "views"
> & {
  views?: HvAppShellTopViewModel[];
};

export type HvAppShellHeaderModel = Omit<HvAppShellHeader, "actions"> & {
  actions: HvAppShellHeaderActionModel[];
};

export type HvAppShellModel = Omit<
  HvAppShellConfig,
  | "menu"
  | "mainPanel"
  | "header"
  | "conditionsProviders"
  | "providers"
  | "services"
> & {
  menu?: HvAppShellMenuModel[];
  mainPanel?: HvAppShellMainPanelModel;
  header?: HvAppShellHeaderModel;
  conditionsProviders?: HvAppShellConditionsProvidersModel[];
  providers?: HvAppShellProvidersModel[];
  services?: HvAppShellServicesModel;
  /** All conditions present in the model, indexed by globalIndex */
  allConditions: HvAppShellConditionModel[];
  /** All preloaded bundles (conditions and providers) */
  preloadedBundles: PreloadedBundles;
};
