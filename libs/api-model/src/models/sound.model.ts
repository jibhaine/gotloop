export interface SoundModel {
  id: string;
  data: any[];
  source: 'local' | 'remote' | 'soundcloud' | 'youtube';
  splitStartTime: number;
  splitEndTime: number;
}
