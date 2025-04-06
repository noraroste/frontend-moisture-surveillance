import { headerText } from '../utils/texts';
import { Heading1 } from '@sb1/ffe-core-react';

export function Header() {
  return <header className="App-header ffe-accent-mode">
    <Heading1 lookLike={2} textCenter={true}>
      {headerText}
    </Heading1>
  </header>;
}
