// import React, { useEffect, useState } from "react"

// const UsingFetch = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://localhost:44351/api/Values/5")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
          
//           {users.map(user  => (
          
          
//             <li id="li1" >{user.componentName==="Kontaktor1"?user.counterInfo:null}</li>
            
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default UsingFetch