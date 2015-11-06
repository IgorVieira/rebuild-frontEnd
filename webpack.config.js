module.exports = {
  entry: './public/js/app.js',
  output: {
    filename: './public/js/bundle.js'
  },
    module: {
        loaders: [
            { 
            	test: /\.js$/,
            	loaders: ['jsx', 'babel'],
            	exclude: /node_modules/ 
           	},            
        ]
    }
};
