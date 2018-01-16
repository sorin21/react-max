import React, { Component } from 'react';

// export default withClass2(App, classes.App)
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       {/* pass the props when you get them */}
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

// stateful component
const withClass = (WrappedComponent, className) => {
  // diff then stateful component
  // after the class name there is no name
  // because is an anonymous class
  return class extends Component  {
    render() {
      return (
        <div className={className}>
          {/* pass the props when you get them */}
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withClass;