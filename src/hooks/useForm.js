import { useMemo } from "react"
import { useEffect, useState } from "react"

export const useForms = (initialState = {}, formValidations = {}) => {

    const [values, setValues] = useState(initialState)
    const [formValidation, setformValidation] = useState({})

    useEffect(() => {
        createValidators();
    }, [values])


    const reset = () => {
        setValues(initialState);
    }

    const isFormValid = useMemo(()=> {
 
        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue]!==null) return false
        }

        return true;

    }, [formValidation])

    const handleInputchange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const createValidators = () => {
        const formChekedValues = {};
        for (const formField of Object.keys(formValidations)) {
            const [ fn , errorMsg] =  formValidations[formField];
            formChekedValues[`${ formField }Valid`] = fn(values[formField]) ? null : errorMsg
        }

        setformValidation(formChekedValues);
    }

    return [values, handleInputchange, formValidation, isFormValid, reset];

}