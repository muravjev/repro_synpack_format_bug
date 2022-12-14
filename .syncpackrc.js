module.exports = {
  filter: ".",
  indent: "  ",
  dev: true,
  peer: true,
  prod: true,
  resolutions: true,
  overrides: true,
  pnpmOverrides: true,
  workspace: true,
  semverGroups: [],
  semverRange: "^",
  sortAz: ["dependencies", "devDependencies", "peerDependencies"],
  sortFirst: [
    "name",
    "version",
    "scripts",
    "repository",
    "bugs",
    "devDependencies",
  ],
  source: [],
  versionGroups: [],
};
