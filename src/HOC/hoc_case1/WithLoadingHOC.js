import React from 'react'

function WithLoadingHOC(Component) {
 return function WithLoadingComponent({isLoading, ...props}){
    
    if(!isLoading) return <Component {...props}/>;
  return <p>Hold On, Data is Fetching takes Time</p>
 }
}

export default WithLoadingHOC
