import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

module.exports = {
	input: 'index.js',
	output: {
		dir: 'dist',
		fileName: 'worker.js',
		format: 'iife'
	},
	minify: false,
	plugins: {
		'node-globals': globals(),
		'node-builtins': builtins()
	},
	target: 'browser',
	banner: `
		self.props = {
			title: 'GDIndex',
			default_root_id: 'root',
			default_root_id2: 'root',
			client_id: '202264815644.apps.googleusercontent.com',
			client_secret: 'X4Z3ca8xfWDb1Voo-F9a7ZxJ',
			refresh_token: '',
			service_account: false,
			service_account_json: {},
			auth: false,
			user: '',
			pass: '',
			upload: false,
			lite: false,
			url: 'xyz.com',
			client_ids: ['202264815644.apps.googleusercontent.com'],
			client_secrets: ['X4Z3ca8xfWDb1Voo-F9a7ZxJ'],
			refresh_tokens: []
		};`.slice(1)
}
