// 'use client'

// import { createClient } from '@/utils/supabase/client'
// import { useRef, useState } from 'react'
// import Image from 'next/image'

// export default function Home() {
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [uploaded, setUploaded] = useState(null)
//   const inputRef = useRef(null)

//   const handleUpload = async () => {
//     if (selectedFile) {
//       const filename = 'asdasasdas1231412'
//       const supabase = createClient()

//       const { data, error } = await supabase.storage
//         .from('images')
//         .upload(
//           `${filename}.${selectedFile.name.split('.').pop()}`,
//           selectedFile,
//         )

//       if (error) {
//         console.error('Error uploading file:', error.message)
//       } else {
//         const { data: file } = await supabase.storage
//           .from('images')
//           .getPublicUrl(data?.path)
//         console.log('FILE: ', file)
//         setUploaded(file?.publicUrl)
//       }
//     }
//   }

//   return (
//     <>
//       <div className="container mx-auto mt-8 max-w-[560px]">
//         <div className="mb-4 flex items-center justify-between border-b border-dashed border-gray-900 pb-4">
//           <h1 className="text-3xl font-semibold">Upload File</h1>
//         </div>
//         <input
//           type="file"
//           ref={inputRef}
//           onChange={(e) => {
//             setSelectedFile(e?.target?.files?.[0])
//           }}
//         />
//         <button
//           className="mt-5 w-full rounded-lg bg-green-600 px-4 py-2 text-white duration-200 hover:bg-opacity-80"
//           type="button"
//           onClick={handleUpload}
//         >
//           Upload File
//         </button>
//         {uploaded && (
//           <Image
//             src={uploaded}
//             alt="asdas"
//             className="my-5 max-w-[400px]"
//             width={400}
//             height={400}
//           />
//         )}
//       </div>
//     </>
//   )
// }
