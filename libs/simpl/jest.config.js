module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/libs/simpl',

  displayName: 'simpl',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
