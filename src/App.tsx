import { useRoutes } from 'react-router-dom';
import './App.css';
import ReactMemoSample from './pages/reactMemo/ReactMemoSample';
import RootLayout from './layouts/RootLayout';
import UseMemoSample from './pages/useMemo/UseMemoSample';
import UseCallbackSample from './pages/useCallback/UseCallbackSample';
import UseRefSample from './pages/useRef/UseRefSample';

function App() {
	return useRoutes([
		{
			path: '',
			Component: RootLayout,
			children: [
				{
					path: 'react-Memo',
					Component: ReactMemoSample,
				},
				{
					path: 'use-Memo',
					Component: UseMemoSample,
				},
				{
					path: 'use-Callback',
					Component: UseCallbackSample,
				},
				{
					path: 'use-Ref',
					Component: UseRefSample,
				},
			],
		},
	]);
}

export default App;
