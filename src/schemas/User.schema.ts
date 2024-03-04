import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';

export class Parent {
  @Prop()
  name: string;

  @Prop()
  phone: number;

  @Prop()
  occupation: string;
}

class Reference {
  @Prop()
  _id: number;

  @Prop()
  name: string;
}

@Schema()
export class User {
  firstName: string;
  lastName: string;

  @Prop({ type: String, unique: true, sparse: true, default: undefined })
  email: string;

  @Prop()
  password: string;

  @Prop({ type: Number, unique: true, default: undefined, sparse: true })
  phone: number;

  @Prop({ required: true, unique: true, type: String, trim: true })
  code: string;

  @Prop()
  photo: string;

  @Prop()
  fullName: string;

  @Prop({ type: Number, min: 1, max: 2, default: 1 })
  gender: number;

  @Prop()
  dateOfBirth: Date;

  @Prop({ type: Parent })
  father: Parent;

  @Prop({ type: Parent })
  mother: Parent;

  @Prop(
    raw({
      _id: { type: Number },
      name: { type: String },
    }),
  )
  nationality: Record<string, any>;

  @Prop(
    raw({
      _id: { type: Number },
      name: { type: String },
    }),
  )
  disability: Record<string, any>;

  @Prop({ type: String, enum: ['en', 'kh'], default: 'kh' })
  lang: string;

  @Prop({ type: Number, default: 90 })
  groupType: number;

  @Prop({ type: Number, default: 0 })
  isLogin: number;

  @Prop()
  lastActivity: Date;

  @Prop({ type: Reference })
  teacherGroup: Reference;

  @Prop({ type: Reference })
  teacherDegree: Reference;

  @Prop({ type: Reference })
  teacherDegreeGroup: Reference;

  @Prop({
    unique: true,
    type: String,
    trim: true,
    default: undefined,
    sparse: true,
  })
  teacherIdentityNumber: string;

  @Prop({
    unique: true,
    type: String,
    trim: true,
    sparse: true,
    default: undefined,
  })
  teacherOfficialNumber: string;

  @Prop({ type: Date, default: Date.now })
  teachingStarted: Date;

  @Prop({ type: Boolean, default: true })
  teachingActive: boolean;

  @Prop({ type: Boolean, default: false })
  teachingStatus: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  relative: Types.ObjectId[];

  @Prop(
    raw({
      date: { type: Date, default: Date.now },
      by: { type: Types.ObjectId }, // Adjust 'User' as necessary to match the reference
    }),
  )
  created: {
    date: Date;
    by: Types.ObjectId;
  };

  @Prop(
    raw({
      date: { type: Date, default: Date.now },
      by: { type: Types.ObjectId }, // Adjust 'User' as necessary to match the reference
    }),
  )
  updated: {
    date: Date;
    by: Types.ObjectId;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ lastName: 'text', firstName: 'text' });
