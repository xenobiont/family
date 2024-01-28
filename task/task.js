const people = [
	{
		'first-name': 'Mike Smith',
		family: {
			mother: 'Jane Smith',
			father: 'Harry Smith',
			sister: 'Samantha Smith',
		},
		age: 35,
	},
	{
		'first-name': 'Tom Jones',
		family: {
			mother: 'Norah Jones',
			brother: 'Howard Jones',
		},
		age: 25,
	},
];
// Your code here

for (const {
	'first-name': name,
	family: {
		mother = 'unknown',
		father = 'unknown',
		sister = 'none',
		brother = 'none',
	},
} of people) {
	console.log(
		`Name: ${name}, Father: ${father}, Mother: ${mother}, Sister: ${sister}, Brother: ${brother}`,
	);
}
