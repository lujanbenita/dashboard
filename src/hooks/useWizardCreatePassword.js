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

const UseWizardCreatePassword = () => {
  const [checked, setChecked] = useState(false)
  const [password, setPassword] = useState({
    password: "",
    repeatPassword: "",
    optionalClue: "",
  })
  const [isValidPassword, setIsValidPassword] = useState(false)
  const [isPasswordOk, setIsPasswordOk] = useState()

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
    handleChange,
    handleInputChange,
  }
}

export default UseWizardCreatePassword
