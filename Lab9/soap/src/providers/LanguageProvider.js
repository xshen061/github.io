import React, {useState, createContext} from 'react';
import { IntlProvider } from "react-intl";
import English from "../languages/en-US.json";
import French from "../languages/fr-CA.json";

export const Context = createContext();

const browserLocale = navigator.language;

let lang;
if(browserLocale === "en-US"){
    lang = English;
}else{
    lang = French;
}

export default function LanguageProvider(props) {
    const [locale, setLocale] = useState(browserLocale);
    const [messages, setMessages] = useState(lang);

    function changeLang(e){
        const newLocale = e.target.value;
        setLocale(newLocale);
        if(newLocale === "en-US"){
            setMessages(English);
        }else{
            setMessages(French);
        }
    }
    
    return (
        <Context.Provider value={{locale, changeLang}}>
            <IntlProvider locale={locale} messages={messages}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    )
}
