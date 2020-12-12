module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/app/controllers',
        '@middlewares': './src/app/middlewares',
        '@models': './src/app/models',
        '@views': './src/app/views',

        '@libs': './src/libs',
        '@config': './src/config'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
