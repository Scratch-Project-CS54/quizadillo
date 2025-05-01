const config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: './tsconfig.json', // 👈 this tells Jest to use your actual tsconfig
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

export default config;
// moduleNameMapper: {
//   '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//   '^@/(.*)$': '<rootDir>/src/$1',
//   //'^../home$': '<rootDir>/src/components/home/home.tsx',
// },
