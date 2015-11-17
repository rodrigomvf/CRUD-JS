(function () {
    'use strict';

    module.exports = {
        options: {
            spawn: false
        },
        bower: {
            files: ['bower.json'],
            tasks: ['wiredep']
        },
        grunt: {
            files: ['<%= scaffold.grunt %>/**/*.js'],
            tasks: ['newer:jshint']
        },
        gruntfile: {
            files: ['Gruntfile.js'],
            tasks: ['newer:jshint']
        },
        //nodemon: {
        //    files: '<%= scaffold.dev.server %>/Server.js',
        //    tasks: ['nodemon:dev']
        //},
        js: {
            files: [
                '<%= scaffold.dev.assets %>/js/**/*.js',
                '<%= scaffold.dev.modules %>/js/**/*.js'
            ],
            tasks: ['newer:jshint']
        },
        json: {
            files: ['<%= scaffold.dev.assets %>/**/*.json'],
            tasks: ['newer:jsonlint']
        },
        //sass: {
        //    files: ['<%= scaffold.dev.assets %>/*.{scss,sass}'],
        //    tasks: ['sass']
        //},
        css: {
            files: ['<%= scaffold.dev.assets %>/css/**/*'],
            tasks: [
                'autoprefixer:staging',
                'recess'
            ]
        },
        html: {
            files: [
                '<%= scaffold.dev.path %>/**/*.{html,hbs}',
                '!<%= scaffold.dev.path %>/{templates,partials}/**/*.html'
            ],
            tasks: [
                'newer:copy:stagingHtml',
                'newer:htmlhint',
                'wiredep:staging',
                'newer:prettify'
            ]
        },
        htmlTemplate: {
            files: ['<%= scaffold.dev.path %>/{templates,partials}/**/*.html'],
            tasks: [
                'copy:stagingHtml',
                'wiredep:staging',
                'htmlhint',
                'prettify'
            ]
        },
        files: {
            files: [
                '<%= scaffold.dev.path %>/**/*',
                '!<%= scaffold.dev.assets %>/sass/**/*',
                '!<%= scaffold.dev.path %>/**/*.{html,hbs}'
            ],
            tasks: ['newer:copy:staging']
        }
    };
})();
