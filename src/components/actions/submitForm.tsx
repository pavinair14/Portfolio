"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "./helpers";

const resend = new Resend(process.env.RESEND_EMAIL_KEY!);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "pavinair14@gmail.com",
            subject: "Message from contact form",
            replyTo: senderEmail,
            text: message,
            // react: React.createElement(ContactFormEmail, {
            //     message: message,
            //     senderEmail: senderEmail,
            // }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};