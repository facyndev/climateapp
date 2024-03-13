import { useState } from "react"

export const useForm = (values) => {
    const [state, setState] = useState(values);

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return {
        ...state,
        state,
        onChange
    }
}
