import useInput from '../hooks/useInput';

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return <div>hookexam</div>;
};

export default HookExam;
