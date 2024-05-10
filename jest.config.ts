import { getJestProjectsAsync } from '@nx/jest';

const esModules = ['@angular', 'nanoid'].join('|');

export default async () => ({
  projects: await getJestProjectsAsync(),
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  transformIgnorePatterns: [`node_modules/(?!${esModules})`],
});
