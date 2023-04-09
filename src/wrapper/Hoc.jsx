const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <div className="p-5">
        <Component />
      </div>
    )
  }

export default SectionWrapper;
