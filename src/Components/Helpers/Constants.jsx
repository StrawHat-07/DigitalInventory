export const API_ROOT_URL = "http://10.5.247.168:8081/inventory/";

export const STATISTIC_DEFINITIONS = {
  ip: {
    displayName: "ip",
    color: "#ff073a",
    format: "int",
    options: { key: "ip" },
  },
  lob: {
    displayName: "lob",
    color: "#007bff",
    format: "int",
    options: { key: "lob" },
    hideDelta: true,
  },
  module: {
    displayName: "module",
    color: "#28a745",
    format: "int",
    options: { key: "module" },
  },
  server_status: {
    displayName: "server_status",
    color: "#6c757d",
    format: "int",
    options: { key: "server_status" },
  },
  server_type: {
    displayName: "server_type",
    format: "int",
    options: { key: "server_type" },
  },
  zone: {
    displayName: "zone",
    color: "#4b1eaa",
    format: "short",
    options: { key: "zone" },
  },
  hostname: {
    displayName: "hostname",
    format: "%",
    options: {
      key: "hostname",
    },
    hideDelta: true,
  },
  technology: {
    displayName: "technology",
    format: "%",
    options: {
      key: "technology",
    },
    hideDelta: true,
  },
  cfr: {
    displayName: "case fatality ratio",
    format: "%",
    options: {
      key: "deceased",
      normalizeByKey: "confirmed",
      multiplyFactor: 100,
    },
    hideDelta: true,
  },
  tpr: {
    displayName: "test positivity ratio",
    color: "#fd7e14",
    format: "%",
    options: {
      key: "confirmed",
      normalizeByKey: "tested",
      multiplyFactor: 100,
    },
    hideDelta: true,
  },
  population: {
    displayName: "population",
    format: "short",
    options: { key: "population" },
    hideDelta: true,
  },
};

export const PRIMARY_STATISTICS = [
  "ip",
  "lob",
  "module",
  "service_type",
  "server_status",
];

export const SECONDARY_STATISTICS = [
  "hostname",
  "zone",
  "env",
  "tier_level",
  "os_version",
  "dc",
  "server_type",
  "memory",
  "disk",
  "cpu",
  "port",
  "health_check_url",
  "lb_ip",
  "public_ip",
  "technology",
  "jmx_port",
  "jmx_status",
];

export const TABLE_STATISTICS = [...PRIMARY_STATISTICS];
export const FULL_STATISTICS = [...PRIMARY_STATISTICS, ...SECONDARY_STATISTICS];

const definitions = Object.keys(STATISTIC_DEFINITIONS).reduce(
  (acc, statistic) => {
    const { options, ...config } = STATISTIC_DEFINITIONS[statistic];
    acc.options[statistic] = options;
    acc.configs[statistic] = config;
    return acc;
  },
  { options: {}, configs: {} }
);

export const STATISTIC_CONFIGS = definitions.configs;
export const TABLE_STATISTICS_EXPANDED = Object.keys(STATISTIC_DEFINITIONS);
export const SPRING_CONFIG_NUMBERS = { clamp: true, precision: 1 };
