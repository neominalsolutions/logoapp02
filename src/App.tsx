import { useRoutes } from 'react-router-dom';
import './App.css';
// import ReactMemoSample from './pages/reactMemo/ReactMemoSample';
// import RootLayout from './layouts/RootLayout';
// import UseMemoSample from './pages/useMemo/UseMemoSample';
// import UseCallbackSample from './pages/useCallback/UseCallbackSample';
// import UseRefSample from './pages/useRef/UseRefSample';
import { lazy } from 'react';
import ReactContextApiDispatcher from './pages/reactContextApi/ReactContextApiDispatcher';
import ReactContextApiSelector from './pages/reactContextApi/ReactContextApiSelector';
//import EnvSample from './pages/envDemo/EnvSample';
// import UseRefHtmlSample from './pages/useRef/UseRefHtmlSample';

const UseRefHtmlSample = lazy(() => import('./pages/useRef/UseRefHtmlSample'));
const UseRefSample = lazy(() => import('./pages/useRef/UseRefSample'));

const RootLayout = lazy(() => import('./layouts/RootLayout'));
const UseMemoSample = lazy(() => import('./pages/useMemo/UseMemoSample'));

const UseCallbackSample = lazy(
	() => import('./pages/useCallback/UseCallbackSample')
);

const ReactMemoSample = lazy(() => import('./pages/reactMemo/ReactMemoSample'));

const EnvSample = lazy(() => import('./pages/envDemo/EnvSample'));

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
				{
					path: 'use-Ref-Html',
					Component: UseRefHtmlSample,
				},
				{
					path: 'env-Sample',
					Component: EnvSample,
				},
				{
					path: 'context-dispatcher',
					Component: ReactContextApiDispatcher,
				},
				{
					path: 'context-selector',
					Component: ReactContextApiSelector,
				},
			],
		},
	]);
}

export default App;
