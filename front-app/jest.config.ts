/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json",
      },
    ],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
