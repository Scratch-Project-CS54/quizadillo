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
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  //'@testing-library/jest-dom'
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@^../home$': '<rootDir>/src/components/home/home.tsx',
  },
};

export default config;
// // moduleNameMapper: {
//   '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//   '^@/(.*)$': '<rootDir>/src/$1',
//   //'^../home$': '<rootDir>/src/components/home/home.tsx',
// },
