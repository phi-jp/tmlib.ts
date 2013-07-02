module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');
  
  var files = [
    "src/geom/vector2.ts",
  ];

  grunt.initConfig({
    srcDir: "src",
    buildDir: "build",
    
    watch: {
      jsx: {
        files: ['**/*.ts'],
        typescript: ['typescript']
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