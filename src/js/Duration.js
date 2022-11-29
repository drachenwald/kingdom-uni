const Duration = ( props ) => {

  const h = Math.floor(props.mins / 60);
  const m = props.mins % 60;
  const mm = m < 10 ? '0' + m : m;
  return `${h}h${mm}m`;

}

export default Duration;
