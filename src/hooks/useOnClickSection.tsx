const handlerOnClickService = (
    title: string,
    active: string,
    setActive: React.Dispatch<React.SetStateAction<string>>) => {
    (active === title) ? setActive('') : setActive(title)
}

const annimateDescription = (title: string, active: string) => {
    if (active === title) {
        return {
            opacity: 1,
            height: "auto",
        }
    }
    return {
        opacity: 0,
        height: 0,
    }
}

export { handlerOnClickService, annimateDescription }