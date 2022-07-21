import { createRouter } from "./context";


export const testRouter = createRouter().query('hello', {
    resolve: () => {
        return {
            data: 'Hell world!'
        }
    }
})