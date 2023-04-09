const SectionWrapper = (Component, idName) => 
  function HOC(props) {
    return (
      <div className="p-5">
        <Component {...props} />
      </div>
    )
  }

export default SectionWrapper;
