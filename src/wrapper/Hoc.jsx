const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <div className=" ">
        <Component />
      </div>
    )
  }

export default SectionWrapper;
