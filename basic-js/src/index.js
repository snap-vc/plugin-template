const basicJs = {
	name: 'basic-js',
	version: '1.0.0',
	description: 'A basic template for a Snap-CLI plugin written in JavaScript',

	commands: [
		{
			name: 'hello',
			description: 'Say hello from the basic-js plugin',
			options: [
				{
					flags: '-n, --name <name>',
					description: 'Name to say hello to',
					defaultValue: 'World',
				},
			],
			action: async (options) => {
				console.log(`Hello, ${options.name}!`);
			},
		},
	],
	hooks: [],
};

module.exports = basicJs;
