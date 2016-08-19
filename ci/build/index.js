console.log("   ____                      _ _ _             ");
console.log("  / ___|___  _ __ ___  _ __ (_) (_)_ __   __ _ ");
console.log(" | |   / _ \\| '_ ` _ \\| '_ \\| | | | '_ \\ / _` |");
console.log(" | |__| (_) | | | | | | |_) | | | | | | | (_| |");
console.log("  \\____\\___/|_| |_| |_| .__/|_|_|_|_| |_|\\__, |");
console.log("                      |_|                |___/ ");

console.log("                       ");
console.log("Test with wercker CI ");


// ccjs = require('google-closure-compiler');


var closureCompiler = require('google-closure-compiler').gulp();
var gulp = require('gulp');

gulp.src('source/*.js')
.pipe(gulp.dest('dist/js'));


gulp.src('source/*.js')
.pipe(closureCompiler({
        js_output_file: 'test.js',
        externs: [
          // 'develop/ci/build/externs.js'
        ],
        extra_annotation_name: [
            'export',
            'todo',
            'note',
            'callback',
            'var',
            'section',
            'alias',
            'mixin',
            'mixer',
            'group',
            'groupInfo'
        ],
        // only_closure_dependencies: false,
        charset: 'utf8',
        jscomp_error: [
            'accessControls',
            'ambiguousFunctionDecl',
            'checkDebuggerStatement',
            'checkRegExp',
            'const',
            'constantProperty',
            'deprecated',
            'externsValidation',
            'fileoverviewTags',
            'globalThis',
            'nonStandardJsDocs',
            'uselessCode',
            'visibility'
        ],
        language_in: 'ECMASCRIPT3',
        jscomp_off: [
            'es5Strict',
            'misplacedTypeAnnotation',
            // 'checkVars',
            'nonStandardJsDocs'
        ],
        jscomp_warning: 'suspiciousCode'
}))
.pipe(gulp.dest('dist/js'));

