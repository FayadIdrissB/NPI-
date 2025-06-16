import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resendKey = process.env.RESEND_API_KEY;
export const resend = resendKey ? new Resend(resendKey) : null;