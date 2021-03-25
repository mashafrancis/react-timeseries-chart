// react libraries
import { render, screen } from '@testing-library/react';

// component
import ChartCard from './index';

describe('DashboardCard component', () => {
	const props = {
		heading: 'Heading',
		body: 'Body',
		redirect: () => jest.fn(),
		classes: '',
	};

	it('should render correctly', () => {
		const { asFragment } = render(<ChartCard {...props} />);
		expect(asFragment()).toMatchSnapshot();

		const elemHeader = screen.getByTestId('heading');
		expect(elemHeader.innerHTML).toBe('Heading');

		const elemDetails = screen.getByTestId('body');
		expect(elemDetails.innerHTML).toBe('Body');
	});
});
