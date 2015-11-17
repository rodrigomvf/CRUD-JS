(function () {

    'use strict';

    var path = require('path'),
        loadConfig = require(path.join(__dirname, 'grunt/load')),
        config = {};

    module.exports = function (grunt) {

        config = {
            pkg: grunt.file.readJSON('package.json'),
            scaffold:  {
                dev: {
                    path: 'public',
                    assets: 'public/assets',
                    modules: 'public/modules',
                    server: 'private'
                },
                staging: {
                    path: 'staging',
                    assets: 'staging/assets',
                    modules: 'staging/modules',
                    server: 'private'
                },
                build: {
                    path: 'build',
                    assets: 'build/assets',
                    modules: 'build/modules',
                    server: 'private'
                },
                grunt: 'grunt',
                tmp: {
                    path: '.tmp',
                    assets: '.tmp/assets',
                    modules: '.tmp/modules',
                    server: 'private'
                }
            },
            timestamp: '<%= new Date().getTime() %>',
            banner: '/*! <%= pkg.projectName %> - v<%= pkg.version %> - by <%= pkg.developers %> - <%= grunt.template.today("dd/mm/yyyy") %> */\n',
        };

        grunt.util._.extend(config, loadConfig(path.join(__dirname, 'grunt/options/')));

        grunt.initConfig(config);

        require('load-grunt-tasks')(grunt);
        require('time-grunt')(grunt);

        grunt.loadTasks('grunt/tasks/');

    };

})();
