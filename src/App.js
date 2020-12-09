import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Congrats from 'components/congrats/Congrats';
import GuessWords from 'components/guesswords/GuessWords';
import Input from 'components/input/Input';
import { getSecretWord } from 'actions/actions';
import './App.scss';

const App = () => {
	const success = useSelector(store => store.success);
	const guessedWords = useSelector(store => store.guessedWords);
	const secretWord = useSelector(store => store.secretWord);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSecretWord())
	},[]);

	return (
		<div data-testid='jotto-app' className='container'>
			<h1>Jotto</h1>
			<h3>{secretWord}</h3>
			<Congrats success={success} />
			<GuessWords guessedWords={guessedWords} />
			<Input />
		</div>
	);
};

export default App;
