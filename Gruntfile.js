var karma = require('karma');


module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    datetime: Date.now(),
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          $: true,
          console: true
        }
      },
      'project': {
        src: [ 'src/**/*.js' ]
      }
    },
    karma: {
        unit: {
            configFile: 'config/karma.conf.js'
        },
        unitc9: {
            configFile: 'config/karma.conf.c9.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['jshint', 'karma:unit']);
  grunt.registerTask('syntax-check', ['jshint:myproject']);
  grunt.registerTask('test', ['karma:unit']);
};
