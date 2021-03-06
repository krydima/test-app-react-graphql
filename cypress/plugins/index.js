const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  addMatchImageSnapshotPlugin(on, {
    ...config,
    customDiffDir: 'cypress/screenshots/__diffs__',
  });

  // require('@cypress/code-coverage/task')(on, config);

  return config;
};
