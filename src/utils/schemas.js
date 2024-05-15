import z from "zod";
export const formSchema = z.object({
    name: z.string().min(3, { message: "se requieren almenos 3 caracteres" }),
    lastName: z.string().min(3, { message: "se requieren almenos 3 caractes" }),
    email: z.string().email({ message: "Asegurese de ingresar un email" }),
    password: z
      .string()
      .regex(
        new RegExp(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{8,}$/
        ),
        { message: "Contasena demasiado debil" }
      ),
  });

  export const newCategorySchema = z.object({
    name:z.string().min(3,{message:"se requieren almenos 3 caracteres"}),
    description:z.string(),
  })