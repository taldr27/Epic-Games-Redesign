const SectionWrapper = (Component, idName) => 
  function HOC(props) {
    return (
      <div className="px-5">
        <Component {...props} />
      </div>
    )
  }

export default SectionWrapper;
