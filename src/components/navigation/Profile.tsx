import { useEffect, useState } from "react";
import { ResponseErrorMessage, User } from "@/models";
import { defaultUserImage, ERROR_RESPONSE } from "@/constants";
import useAuthStore from "@/store/authStore";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import axios from "axios";
import { getCurrentUser } from "@/services/auth";
import api from "@/services/axios";

const defaultValues: User = {
  description: null,
  img: "",
  user: {
    email: "",
    username: ""
  }
}

interface DataToSend {
  description: string | null;
  image: File | null;
}


export default function Profile() {
    const [form, setForm] = useState<User>(defaultValues);
    const [dataToSend, setDataToSend] = useState<DataToSend>({
      description: form.description,
      image: null,
    });
    const areChanges = (dataToSend.description !== form.description || dataToSend.image !== null)

    const [isLoading, setIsLoading] = useState(false);
    const {logout } = useAuthStore.getState();

  const getUserData = async (): Promise<User> => {
    const response = await getCurrentUser()
    const data = response.data
    return {
      description: null,
      img: data.imagen ?? "",
      user: {
        username: data.nombreUsuario ?? "",
        email: data.email ?? ""
      }
    }
  }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
       const { name, value } = e.target;

       setDataToSend({
         ...dataToSend,
         [name]: value !== "" ? value : null,
       })
    }
    const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setDataToSend({
          ...dataToSend,
          image: e.target.files[0],
        })
      }
    }

    const sendNewData = async () => {
      // const api = api();
      const headers = { 'Content-Type': 'multipart/form-data' }

      try {
        const res = await api.put('/Usuarios/actualizar', dataToSend, { headers })
        console.log(res);
        alert('Cambios guardados correctamente');
        getUserData();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // eslint-disable-next-line no-unsafe-optional-chaining
          const { message, name } = error.response?.data;

          if (error.status === 415 && message === "Unsupported type media") {
            alert('El archivo debe ser una imagen jpeg, png o gif');
          }
          else if (name === "MulterError") {
            alert(ERROR_RESPONSE[message as ResponseErrorMessage] || message);
          }
          else {
            console.log(error.response);
            alert('Error al subit la image');
          }
        }
      }
    }

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true)
        const userCurr = await getUserData();
        setForm({
          description: null, // o lo que necesites
          img: userCurr.img ?? "",
          user: {
            username: userCurr.user.username ?? "",
            email: userCurr.user.email ?? ""
          }});
          return userCurr;
      } catch (error) {
        logout()
      } finally {
        setIsLoading(false)
      }
    }
    load()
  }, [])

  useEffect(() => {
    console.log("FORM ACTUAL:", form);
  }, [form]);

    useEffect(() => {
      setDataToSend((prev) => ({
        ...prev,
        description: form.description
      }))
    }, [form])

    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    console.log("SERVER_URL:", import.meta.env.VITE_SERVER_URL);

    return (
        <div className="w-auto grow py-2 px-8 bg-[#FFFCF9]">
            <div className="w-full max-h-48a flex flex-col items-center align-middle gap-5 py-4">
                <img src={form.img? `${SERVER_URL}${form.img}`: defaultUserImage} alt={`${SERVER_URL}${form.img}`} className="size-44 rounded-full object-cover border-[1px] border-primary"/>
                <form action="" onSubmit={(e) => e.preventDefault()} method="" encType="multipart/form-data" className="flex gap-4">
                    <input type="file" id="image" className="hidden" onChange={fileChange}/>
                    <label htmlFor="image" className="bg-primary text-white px-8 py-2 rounded-md hover:cursor-pointer hover:bg-primary70">
                        Subir imagen
                    </label>
                </form>
            </div>
            
            <div className="w-full grid grid-cols-1 lg:grid-cols-7 gap-8 lg:justify-between pb-8">
                <article className="bg-white rounded-3xl h-max lg:col-span-4 mt-3 p-8 shadow-custom flex flex-col gap-6">
                    <Input
                        name="username"
                        value={form.user.username}
                        label="nombre de usuario"
                        onChange={() => {}}
                        disabled={true}
                    />
                    <Input
                        type="email"
                        name="email"
                        value={form.user.email}
                        label="Email"
                        onChange={() => {}}
                        disabled={true}
                    />
                    <TextArea
                        name="description"
                        placeholder="Descripción"
                        label="Descripción"
                        value={dataToSend.description || ""}
                        onChange={handleChange}
                        rows={5}
                    />
                    <div className="px-10 flex flex-col gap-4">
                        {areChanges && (
                            <p className="text-primary70 text-center">Tienes cambios sin guardar</p>
                        )}
                        <Button type="filled" className="bg-primary" onClick={() => sendNewData()} disabled={!areChanges}>Editar</Button>
                    </div>
                </article>
                <article className="bg-white rounded-3xl flex-grow text-center lg:col-span-3 mt-3 p-8 h-max min-h-[445px] shadow-custom">
                    <div
                        className=" block content-center h-1/6 font-semibold text-2xl text-"
                    >
                        Subí de plan
                    </div>

                    <div
                        className=" block text-base h-3/4 content-start font-normal text-colortextosubtitulos"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis venenatis dui. In eu pellentesque felis, 
                        non consectetur turpis. Vestibulum at consectetur nibh. Quisque risus turpis, facilisis eget nunc sed, luctus 
                        feugiat nulla. Vivamus elementum viverra sapien et hendrerit. Nunc vitae vulputate ante. Donec a interdum justo. 
                        Nam sed lectus posuere, egestas mi sed, luctus sapien.
                    </div>

                    <div className="w-full text-center content-end h-20 flex flex-col pt-5 px-6">
                        <Button type="bordered" className="!border-primary70 !text-primary" onClick={() => {}}>
                          Ver planes
                        </Button>
                    </div>
                </article>
            </div>
        </div>
    )
}
