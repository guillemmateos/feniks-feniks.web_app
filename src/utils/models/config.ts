export interface DeviceConfig {
  device_name: string;
  device_type: number;
}

export interface JetsonConfig {
  model_name: string;
}

export interface TorchConfig {
  model_name: string;
  model_name_specific: string;
}

export interface TensorflowConfig {
  model_name: string;
  cache_folder: string;
}

export interface SourceReaderConfig {
  resize_img: boolean;
  buffer_size: number;
  max_retry: number;
  max_retry_in: number;
}

export interface GeneralConfig {
  dir_paths: string[];
  heartbeat_interval: number;
}

export interface DbConfig {
  type: number;
  connection_string: string;
}

export interface FFmpegConfig {
  use_double_quotes_for_path: boolean;
  max_operation_retry_count: number;
  ms_init_interval: number;
  watch_dog_interval: number;
  watch_dog_failed_wait_interval: number;
  start_task_wait_for_interval: number;
  record_concat_limit: number;
  record_video_file_indexer_interval: number;
  ms_port_start: number;
  ms_port_end: number;
}

export interface AiConfig {
  video_clip_duration: number;
  face_recog_mtcnn_threshold: number;
  face_recog_prob_threshold: number;
  plate_recog_instance_count: number;
}

export interface UiConfig {
  gs_width: number;
  gs_height: number;
  booster_interval: number;
  seek_to_live_edge_internal: number;
}

export interface JobsConfig {
  mac_ip_matching_enabled: boolean;
  mac_ip_matching_interval: number;
  black_screen_monitor_enabled: boolean;
  black_screen_monitor_interval: number;
}

export interface DeepStackConfig {
  server_url: string;
  server_port: number;
  performance_mode: number;
  api_key: string;
  od_enabled: boolean;
  od_threshold: number;
  fr_enabled: boolean;
  fr_threshold: number;
  docker_type: number;
}

export interface ArchiveConfig {
  limit_percent: number;
  action_type: number;
  move_location: string;
}

export interface SnapshotConfig {
  process_count: number;
  overlay: boolean;
  meta_color_enabled: boolean;
  meta_color_count: number;
  meta_color_quality: number;
}

export interface HubConfig{
  enabled: boolean;
  address: string;
  token: string;
  web_app_address: string;
  max_retry: number;
}

export interface Config {
  device: DeviceConfig;
  jetson: JetsonConfig;
  torch: TorchConfig;
  tensorflow: TensorflowConfig;
  source_reader: SourceReaderConfig;
  general: GeneralConfig;
  db: DbConfig;
  ffmpeg: FFmpegConfig;
  ai: AiConfig;
  ui: UiConfig;
  jobs: JobsConfig;
  deep_stack: DeepStackConfig;
  archive: ArchiveConfig;
  snapshot: SnapshotConfig;
  hub: HubConfig;
}
