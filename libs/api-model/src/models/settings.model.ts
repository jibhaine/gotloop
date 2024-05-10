export interface SettingsNode {
  inputs?: SettingsLink[];
  outputs?: SettingsLink[];
  params: [];
}

export interface SettingsLink {}

export interface SettingsParam {
  key: string;
  val: string;
}

export interface Settings {
  uuid: string;
  nodes: SettingsNode[];
  connections: SettingsLink[];
}
