/**
  @fileoverview main Grunt task file
**/
'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //less task
    less: {
      development: {
        files: {
          "asq-highlight-q-editor-styles.html": "asq-highlight-q-editor.less"
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "asq-highlight-q-editor-styles.html": "asq-highlight-q-editor.less"
        }
      }
    },

    //concat
    concat: {
      options: {
        footer: '\n    </style>\n' +
                '  </template>\n' +
                '</dom-module'
      },
      css_editor: {
        options:{
          banner: '<dom-module id="asq-highlight-q-editor-styles">\n' +
                  '  <template>\n' +
                  '    <style>\n\n'
        },
        src: ['asq-highlight-q-editor-styles.html'],
        dest: 'asq-highlight-q-editor-styles.html',
      },
    },

    //watch
    watch: {
      options:{
        livereload: true
      },
      less: {
        files: ['./**/*.less'],
        tasks: ['less:development', 'concat'],
        options: {
          livereload: true,
          interrupt: true
        },
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['less', 'watch']);

  //npm tasks
  require('load-grunt-tasks')(grunt);

};
