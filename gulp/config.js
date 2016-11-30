var 
	dist = './build',
  app = './app',
	public = app + '/public';

module.exports = {

	public: public,

	stylus: {
		src: app + '/stylus/*.styl',
		dest: public + '/stylesheets'
	},

	coffeescripts: {
		src: app + '/coffeescripts/**/*.coffee',
		dest: public + '/javascripts'
	},

	jade: {
		src: app + '/jade/pages/*.jade',
		dest: public
	},

	clean: [
		public + '/**/*.html',
		public + '/javascripts',
		public + '/stylesheets',
		dist
	],

	usemin: {
    src: public + '/**/*.html',
    dest: dist
	},

	images: {
		src: public + '/images/**/*.{jpg,jpeg,png,gif,ico,tif,svg}',
		dest: dist + '/images'
	},

	fonts: {
		src: public + '/fonts/**/*.{otf,ttf,woff,woff2,eot,svg}',
		dest: dist + '/fonts'	
	},

	browserify: {
	  server: public,
	  directory: true,
	  port: 9000,
    open: false
	}

};