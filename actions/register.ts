"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values)
    
    if (!validateFields.success) {
        return {error: "invalid Fields"}
    }

    const { email, password, name } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10)

    const adaUser = await getUserByEmail(email)
    if (adaUser) {
        return { error: "Email already in use!" };
    }

    await db.user.create({
        data:{
            name,
            email,
            password: hashedPassword
        }
    })

    const verificationToken = await generateVerificationToken(email)
    
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
    )

    return{success:"Confirmation email sent!"}
}
