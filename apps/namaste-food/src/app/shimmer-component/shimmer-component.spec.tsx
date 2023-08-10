import { render } from '@testing-library/react';

import ShimmerComponent from './shimmer-component';

describe('ShimmerComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShimmerComponent />);
    expect(baseElement).toBeTruthy();
  });
});
