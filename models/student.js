import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    //Valida se a nota inserida e' menor que zero
    validate(value) {
      if (value < 0) throw new Error('Valor negativo para nota');
    },
  },
});

const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
