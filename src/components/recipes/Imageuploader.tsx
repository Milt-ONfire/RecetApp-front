import { RecipeImage } from "@/types";
import { useCallback, useRef } from "react";

 
interface ImageUploaderProps {
  images: RecipeImage | null;
  onChange: (images: RecipeImage | null) => void;
}
 
export function ImageUploader({ images, onChange }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
 
  const processFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      const file = files[0];
      if(!file || !file.type.startsWith("image/")) return;

      const newImage: RecipeImage = {
          id: `img-${Date.now()}-${Math.random()}`,
          url: URL.createObjectURL(file),
          file,
        };

      onChange(newImage);
    },
    [images, onChange]
  );
 
   const handleRemove = () => {     
     if (images) URL.revokeObjectURL(images.url);
     onChange(null);
   };
 
  const uploadBtnClass =
    "flex flex-col items-center justify-center gap-1 w-[90px] h-[90px] rounded-md border border-dashed border-[#9B1255]/40 bg-[#9B1255]/5 text-[#9B1255]/60 text-[10px] font-sans uppercase tracking-wide cursor-pointer hover:border-[#9B1255] hover:text-[#9B1255] hover:bg-[#9B1255]/10 transition-colors";
 
  return (
    <div className="flex flex-wrap gap-2.5 items-start mt-1">
       {images && (
        <div
          className="relative w-[90px] h-[90px] rounded-md overflow-hidden border border-[#9B1255]/30"
        >
          <img src={images.url} alt="preview" className="w-full h-full object-cover block" />
          <button
            type="button"
            className="absolute top-1 right-1 w-5 h-5 rounded-full bg-[#9B1255]/80 hover:bg-[#9B1255] text-white flex items-center justify-center text-sm leading-none p-0 border-0 cursor-pointer transition-colors"
            onClick={() => handleRemove()}
          >
            ×
          </button>
        </div>
      )} 
 
      <div className="flex gap-2">
        <button
          type="button"
          className={uploadBtnClass}
          onClick={() => fileInputRef.current?.click()}
          title="Subir desde dispositivo"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <span>Galería</span>
        </button>
 
        <button
          type="button"
          className={uploadBtnClass}
          onClick={() => cameraInputRef.current?.click()}
          title="Tomar foto"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <span>Cámara</span>
        </button>
      </div>
 
      <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => processFiles(e.target.files)} />
      <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={(e) => processFiles(e.target.files)} />
    </div>
  );
}