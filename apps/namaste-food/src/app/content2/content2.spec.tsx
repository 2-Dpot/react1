import { render } from '@testing-library/react';

import Content2 from './content2';

describe('Content2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Content2 />);
    expect(baseElement).toBeTruthy();
  });
});
