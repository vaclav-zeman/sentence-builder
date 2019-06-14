enum Steps { 
    WHO,
    WHAT,
    WHEN,
    WHERE
}

interface IFormState {
    activeStep: Steps
}

const initialState: IFormState = {
    activeStep: Steps.WHO
}

export default (state = initialState) => state
