import React from 'react';
import { useForm, Control } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input'; 
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { FieldPath } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>; // Ensure this aligns with your form schema
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const Custominput = ({ control, name, label, placeholder }: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input 
                placeholder={placeholder}
                type={name === 'password' ? 'password' : 'text'}
                className="input-class"
                {...field} 
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default Custominput;
