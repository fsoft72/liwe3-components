import type { Meta, StoryObj } from '@storybook/react';

import YourComponent from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof YourComponent> = {
	component: YourComponent,
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

const data = [
	{
		id: '1',
		name: 'John',
		age: 20
	},
	{
		id: '2',
		name: 'Jane',
		age: 21
	},
	{
		id: '3',
		name: 'Joe',
		age: 22
	},
	{
		id: '4',
		name: 'Jack',
		age: 23
	},
	{
		id: '5',
		name: 'Jill',
		age: 24
	},
	{
		id: '6',
		name: 'James',
		age: 25
	},
	{
		id: '7',
		name: 'Jessica',
		age: 26
	},
	{
		id: '8',
		name: 'Jason',
		age: 27
	},
	{
		id: '9',
		name: 'Julia',
		age: 28
	},
	{
		id: '10',
		name: 'Justin',
		age: 29
	},
	{
		id: '11',
		name: 'Jasmine',
		age: 30
	},
	{
		id: '12',
		name: 'Jacob',
		age: 31
	},
	{
		id: '13',
		name: 'Jenny',
		age: 32
	},
	{
		id: '14',
		name: 'Jared',
		age: 33
	},
	{
		id: '15',
		name: 'Jocelyn',
		age: 34
	},
	{
		id: '16',
		name: 'Javier',
		age: 35
	},
	{
		id: '17',
		name: 'Jade',
		age: 36
	},
	{
		id: '18',
		name: 'Joel',
		age: 37
	},
	{
		id: '19',
		name: 'Jordan',
		age: 38
	},
	{
		id: '20',
		name: 'Judy',
		age: 39
	},
	{
		id: '21',
		name: 'Jeff',
		age: 40
	},
	{
		id: '22',
		name: 'Janet',
		age: 41
	},
	{
		id: '23',
		name: 'Jesse',
		age: 42
	},
	{
		id: '24',
		name: 'Jasmine',
		age: 43
	},
	{
		id: '25',
		name: 'Jared',
		age: 44
	},
	{
		id: '26',
		name: 'Jocelyn',
		age: 45
	},
	{
		id: '27',
		name: 'Javier',
		age: 46
	},
	{
		id: '28',
		name: 'Jade',
		age: 47
	},
	{
		id: '29',
		name: 'Joel',
		age: 48
	},
	{
		id: '30',
		name: 'Jordan',
		age: 49
	},
	{
		id: '31',
		name: 'Judy',
		age: 50
	},
	{
		id: '32',
		name: 'Jeff',
		age: 51
	},
	{
		id: '33',
		name: 'Janet',
		age: 52
	},
	{
		id: '34',
		name: 'Jesse',
		age: 53
	},
	{
		id: '35',
		name: 'Jasmine',
		age: 54
	},
	{
		id: '36',
		name: 'Jared',
		age: 55
	},
	{
		id: '37',
		name: 'Jocelyn',
		age: 56
	},
	{
		id: '38',
		name: 'Javier',
		age: 57
	},
	{
		id: '39',
		name: 'Jade',
		age: 58
	},
	{
		id: '40',
		name: 'Joel',
		age: 59
	},
	{
		id: '41',
		name: 'Jordan',
		age: 60
	},
	{
		id: '42',
		name: 'Judy',
		age: 61
	},
	{
		id: '43',
		name: 'Jeff',
		age: 62
	},
	{
		id: '44',
		name: 'Janet',
		age: 63
	},
	{
		id: '45',
		name: 'Jesse',
		age: 64
	},
	{
		id: '46',
		name: 'Jasmine',
		age: 65
	},
	{
		id: '47',
		name: 'Jared',
		age: 66
	},
	{
		id: '48',
		name: 'Jocelyn',
		age: 67
	},
	{
		id: '49',
		name: 'Javier',
		age: 68
	},
	{
		id: '50',
		name: 'Jade',
		age: 69
	},
	{
		id: '51',
		name: 'Joel',
		age: 70
	},
	{
		id: '52',
		name: 'Jordan',
		age: 71
	},
	{
		id: '53',
		name: 'Judy',
		age: 72
	},
	{
		id: '54',
		name: 'Jeff',
		age: 73
	},
	{
		id: '55',
		name: 'Janet',
		age: 74
	},
	{
		id: '56',
		name: 'Jesse',
		age: 75
	},
	{
		id: '57',
		name: 'Jasmine',
		age: 76
	},
	{
		id: '58',
		name: 'Jared',
		age: 77
	},
	{
		id: '59',
		name: 'Jocelyn',
		age: 78
	},
	{
		id: '60',
		name: 'Javier',
		age: 79
	},
	{
		id: '61',
		name: 'Jade',
		age: 80
	},
	{
		id: '62',
		name: 'Joel',
		age: 81
	},
	{
		id: '63',
		name: 'Jordan',
		age: 82
	},
	{
		id: '64',
		name: 'Judy',
		age: 83
	},
	{
		id: '65',
		name: 'Jeff',
		age: 84
	},
	{
		id: '66',
		name: 'Janet',
		age: 85
	},
	{
		id: '67',
		name: 'Jesse',
		age: 86
	},
	{
		id: '68',
		name: 'Jasmine',
		age: 87
	},
	{
		id: '69',
		name: 'Jared',
		age: 88
	},
	{
		id: '70',
		name: 'Jocelyn',
		age: 89
	},
	{
		id: '71',
		name: 'Javier',
		age: 90
	},
	{
		id: '72',
		name: 'Jade',
		age: 91
	},
	{
		id: '73',
		name: 'Joel',
		age: 92
	},
	{
		id: '74',
		name: 'Jordan',
		age: 93
	},
	{
		id: '75',
		name: 'Judy',
		age: 94
	},
	{
		id: '76',
		name: 'Jeff',
		age: 95
	},
	{
		id: '77',
		name: 'Janet',
		age: 96
	},
	{
		id: '78',
		name: 'Jesse',
		age: 97
	},
	{
		id: '79',
		name: 'Jasmine',
		age: 98
	},
	{
		id: '80',
		name: 'Jared',
		age: 99
	}
];

export const FirstStory: Story = {
	args: {
		columns: [
			{
				name: 'id',
				title: 'ID',
				type: 'string'
			},
			{
				name: 'name',
				title: 'Name',
				type: 'string',
				searchable: true
			},
			{
				name: 'age',
				title: 'Age',
				type: 'number',
				align: 'right',
				searchable: true
			},
		],
		data,
		actions: [
			{
				label: 'edit',
				onClick: ( row ) => {
					console.log( 'edit', row );
				}
			}
		]
	},
};