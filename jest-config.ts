import type {Config} from 'jest';

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: 'node',
  moduleFileExtensions: ['json', 'js', 'jsx', 'ts', 'tsx', 'vue', "cjs"],
  moduleDirectories: ["node_modules", "assets"],
};

export default config;