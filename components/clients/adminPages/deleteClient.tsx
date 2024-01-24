// import React from 'react'

// const DeleteClient = () => {
//   const handleDeleteClient = (id: string, name: string) => {
//     const removeClient = async (clientId: string) => {
//       const { error } = await supabase
//         .from('clients')
//         .delete()
//         .eq('id', clientId)

//       if (error) {
//         console.log({ error })
//         setErrorMessage(error)
//       } else {
//         setSuccessMessage('Cliente eliminado con éxito')
//         router.refresh()
//       }
//     }
//     // var shouldDelete = confirm(
//     //   `Estás seguro de quere eliminar el cliente ${name.toUpperCase()}? Esto es irreversible.`
//     // )
//     if (confirmOpen) {
//       removeClient(id)
//     } else {
//       return
//     }
//   }
//   return (
//     <Modal
//       onClose={handleModalView}
//       title={'Eliminar cliente'}
//       screenMessage={errorMessage || successMessage}
//     >
//       <div className=" flex flex-col p-4 text-gray-700">
//         <h4>Pulsa sobre un cliente para eliminarlo de la lista.</h4>
//         <div className="flex flex-col items-center gap-2 mt-16">
//           {clients.length > 0 &&
//             clients.map((item: any) => (
//               <div className="flex justify-center w-48 px-4 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500">
//                 <button
//                   onClick={() => handleDeleteClient(item.id, item.client_name)}
//                 >
//                   <h6 className="text-foreground" key={item.id}>
//                     {item.client_name}
//                   </h6>
//                   <div>
//                     <IconButton
//                       aria-label="delete"
//                       onClick={() => setConfirmOpen(true)}
//                     >
//                       {/* <FontAwesomeCustomIcon icon={faTrashCan} /> */}
//                       Eliminar
//                     </IconButton>
//                     <ConfirmDialog
//                       title="Eliminar cliente?"
//                       open={confirmOpen}
//                       onClose={() => setConfirmOpen(false)}
//                       onConfirm={handleDeleteClient}
//                     >
//                       Esto es irreversible.
//                     </ConfirmDialog>
//                   </div>
//                 </button>
//               </div>
//             ))}
//         </div>
//         {/* <button className="absolute bottom-8 right-8">
//         Eliminar cliente
//       </button> */}
//       </div>
//     </Modal>
//   )
// }

// export default DeleteClient
