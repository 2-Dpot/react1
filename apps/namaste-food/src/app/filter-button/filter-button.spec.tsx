import { render } from '@testing-library/react';

import FilterButton from './filter-button';

describe('FilterButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilterButton />);
    expect(baseElement).toBeTruthy();
  });
});
