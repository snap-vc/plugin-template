const basicTs = {
	name: 'basic-ts',
	version: '1.0.0',
	description: 'A basic template for a Snap-CLI plugin written in TypeScript',

	commands: [
		{
			name: 'hello',
			description: 'Say hello from the basic-ts plugin',
			options: [
				{
					flags: '-n, --name <name>',
					description: 'Name to say hello to',
					defaultValue: 'World',
				},
			],
			action: async (options: any) => {
				console.log(`Hello, ${options.name}!`);
			},
		},
	],
	hooks: [],
};

module.exports = basicTs;
