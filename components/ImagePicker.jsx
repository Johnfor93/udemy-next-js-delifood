"use client"

import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name, required}) {
    const [imageUploaded, setImageUploaded] = useState();
    const imagePicker = useRef();

    function handleClick(){
        imagePicker.current.click();
    }

    function handleImageChange(event){
        const file = event.target.files[0];

        if(!file) {
            setImageUploaded(null);
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            setImageUploaded(reader.result);
        }
        reader.readAsDataURL(file);

    }
    return <div>
        <label htmlFor={name} className={"block text-base uppercase text-[#b3aea5] font-bold mb-2"}>{label}</label>
        <div className={"flex flex-col items-start gap-6 mb-4"}>
            <input type="file" id={name} name={name} accept={"image/png,image/jpg,image/jpeg"} className={"hidden"}
               ref={imagePicker} onChange={handleImageChange} required={required}/>
            <div className={"flex items-center flex-col justify-center w-full min-h-48 relative border-2 border-solid aspect-video group"} onClick={handleClick}>
                {!imageUploaded &&<button className={"cursor-pointer px-6 py-2 rounded-sm border-0 bg-[#a4abb9] hover:bg-[#b3b9c6]"}
                         type={"button"}>Upload Image
                </button>}
                {!imageUploaded && <p>No image uploaded</p>}
                {imageUploaded &&
                    <div
                        className="flex items-center justify-center bg-gray-500 bg-opacity-50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 w-full h-full">
                        <button
                            className={"cursor-pointer px-6 py-2 rounded-sm border-0 bg-[#a4abb9] hover:bg-[#b3b9c6] z-10 relative "}
                            type={"button"}>Change Image
                        </button>
                    </div>
                }
                {imageUploaded &&
                    <Image id={"image-uploaded"} src={imageUploaded} alt={"The image selected by user"} fill
                           className="object-cover"/>}
            </div>
        </div>
    </div>
}