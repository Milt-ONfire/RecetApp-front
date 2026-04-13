import { envelope, house, phone } from '@/assets';
import { useState } from 'react';
import Button from '../Button.tsx';
import Input from '../Input.tsx';
import TextArea from '../TextArea.tsx';



interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contacto = () => {
    const [form, setForm] = useState<FormValues>({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const handleClick = () => {
        console.log('Mensaje enviado');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value } = e.target;
      setForm({
        ...form, 
        [name]: value,
      })
    }

    return (
        <div className="w-screen p-10 lg:p-24">
            <div className="flex flex-col items-center gap-10 mx-auto lg:flex-row lg:items-start lg:gap-20 max-w-[1240px]">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="">
                        <h1 className="text-4xl text-head_text font-extrabold mb-3 lg:text-5xl">
                            Ponte en contacto con nosotros
                        </h1>
                        <p className="text-sm text-subtitle_text lg:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam
                            quis nostrud exercitation ullamco
                        </p>
                    </div>
                    <div className="flex flex-col gap-9">
                        <Item title="Nuestra ubicacion" description="123, calle sin nombre, Buenos Aires, Argentina" image={house}/>
                        <Item title="Teléfono" description="(+54) 11 1231234" image={phone}/>
                        <Item title="Correo electrónico" description="info@recetas.com" image={envelope}/>
                    </div>
                </div>
                <div className="flex flex-col gap-6 p-6 sm:p-12 shadow-custom rounded-lg w-full max-w-[500px]">
                    <Input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
                    <Input type="email" name="email" placeholder="Correo electrónico" value={form.name} onChange={handleChange} />
                    <Input type="tel" name="phone" placeholder="Teléfono" value={form.name} onChange={handleChange} />
                    <TextArea name="message" placeholder="Escribe tu mensaje" rows={3} value={form.name} onChange={handleChange} />
                    <Button type="filled" className="bg-accent" onClick={handleClick}>
                        Enviar
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Contacto;




interface ItemProps {
  image: string;
  title: string;
  description: string;
}

function Item({ image, title, description }: ItemProps) {
  return (
    <div className="flex items-start gap-6">
      <div className="w-max bg-accent70 p-4 rounded-[5px] shrink-0">
        <img src={image} className="size-[20px]" />
      </div>
      <div className="">
        <p className="text-body_text lg:text-lg lg:mb-3">{title}</p>
        <p className="text-sm text-primary_text_color lg:text-[16px]">{description}</p>
      </div>
    </div>
  );
}
