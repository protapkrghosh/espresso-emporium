import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbScanEye } from "react-icons/tb";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const UsersV2 = () => {
   const {
      isPending,
      isError,
      error,
      data: users,
   } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users`);
         return res.json();
      },
   });

   const handleDelete = (_id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "Your user will not be able to bring it back!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#D2B48C",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`${import.meta.env.VITE_BASE_URL}/users/${_id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.deletedCount) {
                     // const remainingUsers = users.filter(
                     //    (user) => user?._id !== _id
                     // );
                     // setUsers(remainingUsers);
                     toast.success("User has been deleted successfully");

                     // Remove the user from the Firebase
                     // removeUser()
                     //    .then(() => {})
                     //    .catch((error) => {
                     //       console.log(error.code);
                     //    });
                  }
               });
         }
      });
   };

   if (isPending) {
      return (
         <>
            <div className="flex justify-center mt-28">
               <span className="loading loading-bars loading-xl"></span>
            </div>
         </>
      );
   }

   if (isError) {
      return <p>{error.message}</p>;
   }

   return (
      <div>
         <h2 className="text-3xl text-center rancho pt-12 pb-6">All Users</h2>
         <div className="overflow-x-auto px-14 lg:px-0lg:max-w-6xl 2xl:max-w-7xl mx-auto">
            <table className="table border border-base-200">
               {/* head */}
               <thead className="bg-base-200">
                  <tr>
                     <th>No</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  {users?.map((user, index) => (
                     <tr key={user?._id} className="hover:bg-[#37415107] group">
                        <th>{index + 1}</th>
                        <td>
                           <div className="flex items-center gap-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle h-14 w-14">
                                    <img
                                       src={user?.photoURL}
                                       alt="Avatar Tailwind CSS Component"
                                    />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold">{user?.name}</div>
                                 <div className="text-sm opacity-50">
                                    {user?.address}
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>{user?.email}</td>
                        <td>{user?.phone}</td>
                        <th className="">
                           <div className="flex items-center group-hover:bg-[#fff] border border-[#e9e7e470] group-hover:border-[#e9e7e4] duration-300 w-fit px-3 py-2 rounded-full space-x-4">
                              <TbScanEye
                                 size={23}
                                 className="text-[#3741517c] hover:text-[#a87b44] duration-300 hover:scale-110 cursor-pointer"
                              />

                              <BiEdit
                                 size={23}
                                 className="text-[#3741517c] hover:text-[#374151] duration-300 hover:scale-110 cursor-pointer"
                              />

                              <RiDeleteBinLine
                                 onClick={() => handleDelete(user?._id)}
                                 size={23}
                                 className="text-[#3741517c] hover:text-red-500 duration-300 hover:scale-110 cursor-pointer"
                              />
                           </div>
                        </th>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default UsersV2;
