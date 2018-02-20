import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundles/fpa.components.umd.js',
    format: 'umd',
    name: 'fpa.components',
    sourcemap: true,
    globals: {
      '@angular/common': 'vendor._angular_common',
      '@angular/common/http': 'vendor._angular_common_http',
      '@angular/core': 'vendor._angular_core',
      '@angular/router': 'vendor._angular_router',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/Subject': 'Rx.Subject',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable',
      'ngx-cookie': 'vendor._ngx_cookie',
      'ngx-toastr': 'vendor._ngx_toastr',
    },
  },
  plugins: [
    typescript(),
    commonjs({ include: 'node_modules/**' }),
    resolve({ jsnext: true, module: true })
  ],
  external: [
    '@angular/common',
    '@angular/common/http',
    '@angular/core',
    '@angular/router',
  ],
  moduleContext: {
    'node_modules/ngx-cookie/src/cookie-backend.service.js': 'window'
  }
};
