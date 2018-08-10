module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
     my_target: {
      files: {
        'public/javascripts/bootstrap.min.js': ['node_modules/bootstrap/dist/js/bootstrap.js']
      }
     }
    },
    cssmin: {
      target: {
        files: [{
          src: 'node_modules/bootstrap/dist/css/bootstrap.css',
          dest: 'public/stylesheets/bootstrap.min.css',
          }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};