'use strict';

// This is how we define node modules 
module.exports = function (grunt) {
    // Define the configuration for all the tasks

    require('time-grunt')(grunt); //load or import time-grunt node module. prints out time statistics
    require('jit-grunt')(grunt); //helps load all grunt plugins

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },

        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};