import { ReactElement, useContext } from 'react';
import { About } from '../ui/components/About';
import { Services } from '../ui/components/Services';
import { AppContext } from '../core/state/AppContext';

export const AboutContainer = (): ReactElement => {
  const { state } = useContext(AppContext);
  // const { loquesea } = useCustomHook();
  return (
    <>
      <About />
      <Services services={state.services} />
    </>
  );
};