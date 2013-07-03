module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');
  
  var files = [
    "src/geom/vector2.ts",
  ];

  grunt.initConfig({
    srcDir: "src",
    buildDir: "build",
    
    watch: {
      ts: {
        files: ['**/*.ts'],
        tasks: ['typescript:build']
      },
    },
    typescript: {
      build: {
        src: files,
        dest: 'build/tmlib.ts.js',
      },
    },
  });
  
  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }
  
  grunt.registerTask('default', ['typescript']);
}