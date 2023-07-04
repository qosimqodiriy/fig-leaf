module.exports = {
    apps: [
      {
        name: "Fig-Leaf",
        exec_mode: 'cluster',
        instances: '4', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
      },
    ],
  }
  
  