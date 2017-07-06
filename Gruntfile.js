module.exports =function(grunt){
	grunt.initConfig({
	  concat: {
	  	thirdParty:
	  		{
		        src: ['bower_components/angular/angular.min.js','bower_components/angular-animate/angular-animate.min.js','bower_components/angular-touch/angular-touch.min.js', 'bower_components/angular-ui-router/release/angular-ui-router.min.js', 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'], 
		        dest: 'dist/vendor.js'
	    	},
	    controller: 
		    {
		        src: ['scripts/controllers/sliderCtrl.js','scripts/controllers/headerCtrl.js','scripts/controllers/homeCtrl.js','scripts/controllers/signUpCtrl.js','scripts/controllers/testimonialCtrl.js','scripts/services/TestiFactory.js'], 
		        dest: 'dist/controller.js'
	    	},
    	 app:
	   		{
		        src: ['scripts/index.js','dist/controller.js'], 
		        dest: 'dist/app.js'
	    	},
	    css:
	   		{
		        src: ['bower_components/bootstrap/dist/css/bootstrap.min.css','bower_components/components-font-awesome/css/font-awesome.min.css','bower_components/animate.css/animate.min.css'], 
		        dest: 'dist/vendor.css'
	    	},
	    },
	    watch: {
		  scripts: {
		    files: ['scripts/**/*.js'],
		    tasks: ['concat'],
		  },
		},
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat','watch']);
};


