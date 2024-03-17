import React, { createContext, useState } from 'react'

export const LoginPageContext = createContext();

const LoginPageContextProvider = ({ children }) => {
    const [isLoginPageVisibaleVisible, setIsLoginPageVisible] = useState(false);
    const [isRegisterPageVisibaleVisible, setIsRegisterPageVisible] = useState(false);

    const handleToggleLoginPage = () => {
        setIsRegisterPageVisible(false);
        setIsLoginPageVisible(!isLoginPageVisibaleVisible);
    }

    const handleToggleRegisterPage = () => {
        setIsLoginPageVisible(false);
        setIsRegisterPageVisible(!isRegisterPageVisibaleVisible);
    }

    return (
        <LoginPageContext.Provider value={{ isLoginPageVisibaleVisible, isRegisterPageVisibaleVisible, handleToggleLoginPage, handleToggleRegisterPage }}>
            <div>
                {children}
            </div>
        </LoginPageContext.Provider>
    )
}
export default LoginPageContextProvider;