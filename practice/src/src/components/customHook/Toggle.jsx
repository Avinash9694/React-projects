import useToggle from "./useToggle";

const Toggle = () => {
  const { show, toggle } = useToggle(true);

  return (
    <div>
      <h2>Toggle</h2>
      <button onClick={toggle}>Toggle</button>
      {show && <p>Some stuff</p>}
    </div>
  );
};

export default Toggle;
