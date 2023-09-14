import { GlobalStyles } from './clobalStyles';
import { Playground } from './playground/playground';

export const App = () => {
  // const horScroll = e => {
  //   console.log(e.currentTarget);
  // }
  return (
      <div>
        <Playground />
        <GlobalStyles />
      </div>
  );
};
