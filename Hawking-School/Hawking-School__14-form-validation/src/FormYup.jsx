import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

const FormYup = () => {

  const schema = yup.object({
    example: yup.string().required('Поле обязательное'),
    firstName: yup.string().min(3, 'Минимум 3 символа'),
    age: yup.number().notRequired(),
    exampleRequired: yup.string().required('Введите фамилию'),
  })

  const {register, handleSubmit, watch, control, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);
  console.log(errors)


  return (
    <>
      <form className='form-yup' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder={errors.example?.message} defaultValue='test' {...register("example")} />

        <hr/>

        <input {...register("firstName")} />
        <p>{errors.firstName?.message}</p>

        <input {...register("age")} />

        <hr/>

        <MyInput label='Фамилия'
                 placeholder={errors.exampleRequired?.message}
                 {...register("exampleRequired", {required: true})}
                 style={{borderColor: errors.exampleRequired && 'red'}}/>
        <br/>

        <input type="submit"/>
      </form>
    </>
  );
};

export {FormYup};


const MyInput = React.forwardRef(({label, ...props}, ref) => {
  return (
    <>
      <label>{label}</label>
      <input ref={ref} {...props}/>
    </>
  )
})
