import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model<IMessage>('Message', messageSchema);

export default Message;