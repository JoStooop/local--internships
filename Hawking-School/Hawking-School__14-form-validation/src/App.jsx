import React from "react";
import './App.css';
import {useForm, Controller} from "react-hook-form";
import {FormYup} from "./FormYup";
import {FormFormik} from "./FormFormik";


function App() {
  const {register, handleSubmit, watch, control, formState: {errors}} = useForm();

  const onSubmit = data => console.log(data);

  console.log(watch("exampleRequired"));

  return (
    <div className="App">
      <div className="card">
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />
          <MyInput label='Фамилия' {...register("exampleRequired", {required: true})}
                   style={{borderColor: errors.exampleRequired && 'red'}}/>
          {/*<Controller*/}
          {/*  name="firstName"*/}
          {/*  control={control}*/}
          {/*  rules={{ required: true }}*/}
          {/*  render={({field}) => (*/}
          {/*    <InputTwo label='Controller' {...field} style={{borderColor: errors.firstName && 'blue'}}/>*/}
          {/*  )}*/}
          {/*/>*/}
          <input style={{borderColor: errors.name && 'green'}}
                 {...register("name", {
                   required: true,
                   validate: (value) => value === 'jon'
                 })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit"/>
        </form>
      </div>
      <div className="card">
        {/*<FormYup />*/}
      </div>
      <div className="card">
        <FormFormik />
      </div>
    </div>
  )
}

export default App


const InputTwo = ({label, ...props}) => {
  return(
    <>
      <label>{label}</label>
      <input {...props}/>
    </>
  )
}


const MyInput = React.forwardRef(({label, ...props}, ref) => {
  return (
    <>
      <label>{label}</label>
      <input ref={ref} {...props}/>
    </>
  )
})
