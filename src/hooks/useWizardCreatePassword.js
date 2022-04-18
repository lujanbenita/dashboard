import { useState, useEffect } from "react"
import * as yup from "yup"
import { submitForm } from "../services/apiWizard"
// import { submitForm } from "../services/api";

// form validation rules
const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password must be at Max 24 characters")
    .matches("^(?=.*[A-Z])(?=.*[0-9])", "Must Contain 8 Characters, One Uppercase"),
  optionalClue: yup.string().max(255, "Optional clue must be at Max 255 characters"),
})

const infoPassword = (password) => {
  let infoPass = {
    body: "La contraseña debe contener ",
    minLength: "8 carácteres mínimo ",
    uppercase: "1 mayúscula ",
    number: '1 número'
  }

  if (password.length > 7) {
    infoPass.minLength = ''
  } else {
    infoPass.minLength = '8 carácteres mínimo '
  }

  if (/[A-Z]/.test(password)) {
    infoPass.uppercase = ''
  } else {
    infoPass.uppercase = '1 mayúscula '
  }

  if (/\d/.test(password)) {
    infoPass.number = ''
  } else {
    infoPass.number = '1 número '
  }

  if (password.length > 7 && /[A-Z]/.test(password) && /\d/.test(password)) {
    infoPass.body = ''
  } else {
    infoPass.body = 'La contraseña debe contener mínimo '
  }

  return `${infoPass.body}${infoPass.minLength}${infoPass.uppercase}${infoPass.number}`
}

const UseWizardCreatePassword = () => {
  const [checked, setChecked] = useState(false)
  const [password, setPassword] = useState({
    password: "",
    repeatPassword: "",
    optionalClue: "",
  })
  const [isValidPassword, setIsValidPassword] = useState(false)
  const [isPasswordOk, setIsPasswordOk] = useState()
  const [infoTextPassword, setInfoTestPassword] = useState('La contraseña debe contener mínimo 8 carácteres mínimo 1 mayúscula 1 número ')

  useEffect(() => {
    if (password.password === password.repeatPassword && password.optionalClue.length <= 255) {
      const validationPassword = async () => {
        const res = await validationSchema.isValid(password, {
          abortEarly: false,
        })
        localStorage.setItem("passwordOpenBank", password.password)
        if (res) setIsValidPassword(true)
      }
      validationPassword()
    }
    setIsValidPassword(false)
  }, [password])

  useEffect(() => {
    ;(async () => {
      try {
        const password = localStorage.getItem("passwordOpenBank")
        const res = await submitForm(password)
        if (res.status === 200) {
          setIsPasswordOk(true)
        }
      } catch (error) {
        setIsPasswordOk(false)
      }
    })()
  }, [])

  const handleInputChange = async event => {

    if(event.target.name !== 'optionalClue') {
      setInfoTestPassword(infoPassword(event.target.value))
    }

    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    })
  }

  const handleChange = () => {
    setChecked(!checked)
  }

  return {
    checked,
    isValidPassword,
    password,
    isPasswordOk,
    infoTextPassword,
    handleChange,
    handleInputChange,
  }
}

export default UseWizardCreatePassword
