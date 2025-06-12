import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error('❌🖕🏽 MONGO_URI non définie dans le fichier .env');
  }

  await mongoose.connect(mongoUri);
  console.log('✅👊🏽 MongoDB connecté');
};