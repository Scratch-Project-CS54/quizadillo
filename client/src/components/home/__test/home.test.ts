/* @jsx jsx */
import type { ReactElement } from 'react';
//import jest from 'jest'  don't need to import Jest specifically, it's available globally
import { render, screen } from '@testing-library/react'; //install npm install --save-dev @testing-library/react
import '@testing-library/jest-dom'; //in order to use toBeInTheDocument to work
import Home from '../home';
import styles from './home.module.css';
console.log('Home', Home);

// const HomeElement = '..home'
const testHome = Home(); //need to invoke the function, store it in the variable and render the result
describe('Home component', () => {
  it('renders correctly', () => {
    const { container } = render(testHome);
    expect(container).toMatchSnapshot();
  });
  it('renders the title correctly', () => {
    const { getByText } = render(testHome);
    expect(getByText('Quizadillo')).toBeInTheDocument();
  });
  it('renders quizadillo logo', () => {
    const container = render(testHome);
    const imgAlt = screen.getByAltText('Quizadillo Logo');
    console.log('CONTAINER', container);
    console.log('hi');
    expect(imgAlt).toBeInTheDocument();
  });
});

// CONTAINER {
//   container: HTMLDivElement {
//     '__reactContainer$3uzb8uli9u8': FiberNode {
//       tag: 3,
//       key: null,
//       elementType: null,
//       type: null,
//       stateNode: [FiberRootNode],
//       return: null,
//       child: null,
//       sibling: null,
//       index: 0,
//       ref: null,
//       refCleanup: null,
//       pendingProps: null,
//       memoizedProps: null,
//       updateQueue: [Object],
//       memoizedState: [Object],
//       dependencies: null,
//       mode: 1,
//       flags: 0,
//       subtreeFlags: 0,
//       deletions: null,
//       lanes: 32,
//       childLanes: 0,
//       alternate: [FiberNode],
//       actualDuration: -0,
//       actualStartTime: -1.1,
//       selfBaseDuration: -0,
//       treeBaseDuration: -0,
//       _debugInfo: null,
//       _debugOwner: null,
//       _debugStack: null,
//       _debugTask: null,
//       _debugNeedsRemount: false,
//       _debugHookTypes: null
//     },
//     _reactListeningsfjozn0fol: true
//   },
//   baseElement: HTMLBodyElement {
//     [Symbol(SameObject caches)]: [Object: null prototype] { childNodes: NodeList {} }
//   },
//   debug: [Function: debug],
//   unmount: [Function: unmount],
//   rerender: [Function: rerender],
//   asFragment: [Function: asFragment],
//   findAllByLabelText: [Function: bound ],
//   findByLabelText: [Function: bound ],
//   getAllByLabelText: [Function: bound ],
//   getByLabelText: [Function: bound ],
//   queryAllByLabelText: [Function: bound ],
//   queryByLabelText: [Function: bound ],
//   findAllByPlaceholderText: [Function: bound ],
//   findByPlaceholderText: [Function: bound ],
//   getAllByPlaceholderText: [Function: bound ],
//   getByPlaceholderText: [Function: bound ],
//   queryAllByPlaceholderText: [Function: bound ],
//   queryByPlaceholderText: [Function: bound ],
//   findAllByText: [Function: bound ],
//   findByText: [Function: bound ],
//   getAllByText: [Function: bound ],
//   getByText: [Function: bound ],
//   queryAllByText: [Function: bound ],
//   queryByText: [Function: bound ],
//   findAllByDisplayValue: [Function: bound ],
//   findByDisplayValue: [Function: bound ],
//   getAllByDisplayValue: [Function: bound ],
//   getByDisplayValue: [Function: bound ],
//   queryAllByDisplayValue: [Function: bound ],
//   queryByDisplayValue: [Function: bound ],
//   findAllByAltText: [Function: bound ],
//   findByAltText: [Function: bound ],
//   getAllByAltText: [Function: bound ],
//   getByAltText: [Function: bound ],
//   queryAllByAltText: [Function: bound ],
//   queryByAltText: [Function: bound ],
//   findAllByTitle: [Function: bound ],
//   findByTitle: [Function: bound ],
//   getAllByTitle: [Function: bound ],
//   getByTitle: [Function: bound ],
//   queryAllByTitle: [Function: bound ],
//   queryByTitle: [Function: bound ],
//   findAllByRole: [Function: bound ],
//   findByRole: [Function: bound ],
//   getAllByRole: [Function: bound ],
//   getByRole: [Function: bound ],
//   queryAllByRole: [Function: bound ],
//   queryByRole: [Function: bound ],
//   findAllByTestId: [Function: bound ],
//   findByTestId: [Function: bound ],
//   getAllByTestId: [Function: bound ],
//   getByTestId: [Function: bound ],
//   queryAllByTestId: [Function: bound ],
//   queryByTestId: [Function: bound ]
// }
