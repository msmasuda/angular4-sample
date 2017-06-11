// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC9-osNSUOydTM917VKatnFwXgbAiML9no',
    authDomain: 'fir-sample-fbcfb.firebaseapp.com',
    databaseURL: 'https://fir-sample-fbcfb.firebaseio.com',
    projectId: 'fir-sample-fbcfb',
    storageBucket: 'fir-sample-fbcfb.appspot.com',
    messagingSenderId: '144083485805'
  }
};
