// import { AlertCircle } from "lucide-react";

// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// // export function MyAlert() {
// //   return (

// // <Alert variant="destructive" >
// //   <AlertCircle className="h-4 w-4" />
// //   <AlertTitle>Error</AlertTitle>
// //   <AlertDescription>
// //     Your session has expired. Please log in again.
// //   </AlertDescription>
// // </Alert>
// //   );
// // }
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";

// interface IProps {
//   open: boolean;
// }
// export function MyAlert({ open }: IProps) {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     if (open) {
//       setShow(true);
//     }
//   }, [open]);

//   console.log(open);

//   return (
//     <AlertDialog open={show}>
//       <AlertDialogContent>
//         <Alert variant="destructive">
//           <AlertCircle className="h-4 w-4" />
//           <AlertTitle>Error</AlertTitle>
//           <AlertDescription>
//             Your session has expired. Please log in again.
//           </AlertDescription>
//         </Alert>
//         <AlertDialogFooter>
//           <AlertDialogCancel onClick={() => setShow(false)}>
//             닫기
//           </AlertDialogCancel>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }
